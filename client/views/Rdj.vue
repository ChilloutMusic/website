<template>
  <div>
    <section class="hero page-rdj">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-dot-circle-o"></i></span>Resident DJs</h1>
              <h2 class="subtitle">
                Meet the artists
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-2" v-for="rdj in rdjs">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-200x200">
                    <img :src="rdj.imageUrl" alt="Image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title name">{{ rdj.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {db} from '../service/firebase'

export default {
  name: 'Rdj',
  firebase: {
    rdjs: db.ref('rdjs')
  },
  beforeCreate () {
  }
}
</script>

<style scoped>
.page-rdj {
  background-color: #bec1ff;
}

.is-200x200 {
  width: 100%;
  height: 200px;
}

.card-content {
  padding: 0.5rem;
}

.title.name {
  font-size: 1.1rem;
}
</style>
