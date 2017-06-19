<template>
  <div>
    <section class="hero page-admin">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title"><span class="icon is-large"><i class="fa fa-wrench"></i></span>Administration Panel</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="!authenticated" class="hero">
      <div class="hero-body">
        <div class="container" id="loginForm">
          <div class="columns">
            <div class="column is-one-third">
              <form id="form" v-on:submit.prevent="signIn">
                <div class="field">
                  <label class="label">Email</label>
                  <p class="control has-icons-left">
                    <input class="input" type="email" placeholder="" value="" v-model="email">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="" value="" v-model="password">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                  <p class="help is-danger">{{ error }}</p>
                </div>
                <div class="field is-grouped">
                  <p class="control">
                    <button class="button is-primary">Sign In</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="authenticated" class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">
              <nav class="panel">
                <p class="panel-heading">
                  Add Resident DJ
                </p>
                <div class="panel-block">
                  <p class="control has-icons-left">
                    <input class="button" accept="image/*" type="file" value="upload" @change="fileBtn(file, $event)">
                    <span class="icon is-small is-medium">
                      <i class="fa fa-file-image-o"></i>
                    </span>
                  </p>
                </div>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.name">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-user-o"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.youtube">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-youtube"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.soundcloud">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-soundcloud"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.bandcamp">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-bandcamp"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.facebook">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-facebook"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.twitter">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-twitter"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="" value="" v-model="rdj.location">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-globe"></i>
                    </span>
                  </p>
                </a>
                <a class="panel-block is-active">
                  <p class="control">
                    <span class="select">
                      <select v-model="rdj.type">
                        <option value="producer">Producer</option>
                        <option value="promoter">Promoter</option>
                      </select>
                    </span>
                  </p>
                </a>
                <div class="panel-block">
                  <button class="button is-primary is-outlined is-fullwidth" @click="addRdj" :disabled="disabled">
                    Upload
                  </button>
                </div>
                <p class="help is-danger">{{ error }}</p>
                <p class="help is-success">{{ message }}</p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {db} from '../service/firebase'
import {storage} from '../service/firebase'
import {auth} from '../service/firebase'

export default {
  name: 'Admin',
  data () {
    return {
      file: {},
      email: '',
      password: '',
      authenticated: false,
      disabled: true,
      error: '',
      message: '',
      rdj: {
        name: '',
        type: 'producer',
        youtube: '',
        soundcloud: '',
        bandcamp: '',
        twitter: '',
        facebook: '',
        location: '',
        imageUrl: ''
      }
    }
  },
  computed: {
    user: {
      cache: false,
      get: function () {
        return auth.currentUser
      }
    }
  },
  methods: {
    fileBtn: function(file, e) {
      e.preventDefault()
      const uploader = document.getElementById('uploader')
      this.file = e.target.files[0]
      this.disabled = false
    },
    addRdj: function() {
      var vm = this
      let rdjRef = db.ref('rdjs')

      rdjRef.orderByChild("name").equalTo(vm.rdj.name).once("value", function(snapshot) {
        var data = snapshot.val()
        if (data) {
          // TODO: exists, update data
          vm.error = vm.rdj.name + " already exists."
        } else {
          // does not exist, add data
          vm.error = ''
          let storageRef = storage.ref('rdjs/' + vm.file.name)

          let task = storageRef.put(vm.file);
          task.on('state_changed', function(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break;
              case 'running':
                console.log('Upload is running')
                break;
            }
          }, function(error) {
            console.log(error)
          }, function() {
            vm.rdj.imageUrl = task.snapshot.downloadURL
            rdjRef.push(vm.rdj)
            vm.message = vm.rdj.name + " added successfully."

            // Update metadata properties
            let newMetadata = {
              cacheControl: 'public,max-age=15768000',
              contentType: 'image/jpeg'
            }
            storageRef.updateMetadata(newMetadata).then(function(metadata) {
              console.log("Metadata added successfully.")
            }).catch(function(error) {
              vm.error = 'Metadata update failed!'
            });
          });
        }
      });
    },
    signIn: function() {
      var vm = this
      auth.signInWithEmailAndPassword(this.email, this.password).then(function(user) {
        vm.$forceUpdate()
      }).catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
          vm.error = 'Invalid credentials.'
        } else {
          vm.error = errorMessage
        }
        console.log(error)
      });
    },
    signOut: function() {
      auth.signOut()
      this.$forceUpdate()
    }
  },
  beforeCreate () {
    var vm = this
    auth.onAuthStateChanged(function(user) {
      if (user) {
        vm.authenticated = true
      } else {
        vm.authenticated = false
      }
    })
  }
}
</script>

<style scoped>
.page-admin {
  background-color: #332433;
}
</style>
