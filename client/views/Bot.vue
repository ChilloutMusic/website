<template>
  <div>
    <section class="hero page-bot">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-cogs"></i></span>&nbsp;Bot</h1>
              <h2 class="subtitle">
                ChilloutRoomba - the artificial intelligence serving cat pictures and banhammers.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="tabs is-boxed">
            <ul>
              <li @click="toggle('user')" v-bind:class="{ 'is-active': tabUserActive }">
                <a>
                  <span>User Commands</span>
                </a>
              </li>
              <li @click="toggle('mod')" v-bind:class="{ 'is-active': tabModActive }">
                <a>
                  <span>Mod Commands</span>
                </a>
              </li>
              <li @click="toggle('games')" v-bind:class="{ 'is-active': tabGamesActive }">
                <a>
                  <span>Games</span>
                </a>
              </li>
            </ul>
          </div>
          <div v-if="tabUserActive">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th class="column-keyword">Command</th>
                  <th class="column-content">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="command in userCommands">
                  <td v-html="command.c"></td>
                  <td v-html="command.d"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="tabModActive">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th class="column-keyword">Command</th>
                  <th class="column-content">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="command in modCommands">
                  <td v-html="command.c"></td>
                  <td v-html="command.d"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="tabGamesActive">
            <!-- Games content -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bot',

  data () {
    return {
      tabUserActive: true,
      tabModActive: false,
      tabGamesActive: false,
      userCommands: [],
      modCommands: [],
      errors: []
    }
  },

  methods: {
    toggle(tab) {
      if (tab === 'user') {
        this.tabUserActive = true
        this.tabModActive = false
        this.tabGamesActive = false
        this.$router.replace({name:'bot', params:{type:'user'}});
      }
      if (tab === 'mod') {
        this.tabUserActive = false
        this.tabModActive = true
        this.tabGamesActive = false
        this.$router.replace({name:'bot', params:{type:'mod'}});
      }
      if (tab === 'games') {
        this.tabUserActive = false
        this.tabModActive = false
        this.tabGamesActive = true
        this.$router.replace({name:'bot', params:{type:'games'}});
      }
    }
  },

  created() {
    if (this.$route.params.type == 'games') {
      this.toggle('games');
    } else if (this.$route.params.type == 'mod') {
      this.toggle('mod');
    } else if (this.$route.params.type == 'user') {
      this.toggle('user');
    } else {
      this.$router.replace({name:'bot', params:{type:'user'}});
    }
    axios.get(`/userCommands.json`)
    .then(response => {
      this.userCommands = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    axios.get(`/modCommands.json`)
    .then(response => {
      this.modCommands = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
.page-bot {
  background-color: #bed9ff;
}

.hero .tabs ul {
  border-bottom: 1px solid #CCC;
}

.tabs ul {
  font-family: 'Armata';
}
</style>
