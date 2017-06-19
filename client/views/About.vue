<template>
  <div>
    <section class="hero page-about">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-id-card-o"></i></span>&nbsp;About</h1>
              <h2 class="subtitle" style="color: #000">
                Meet the people behind Chillout Music.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <blockquote>
              <p>We are a small group of chillers from around the world. We manage a Plug.dj virtual DJ community on volunteer basis; we love chill music and want more people to learn about it. We would be delighted to invite you to our social music room on <a href="http://plug.dj/the-chillout-room">Plug.dj</a>.</p>
              <p>If you wish to reach us, feel free to message us via any social medium, stop by on Discord, or drop us a line at <a href="mailto:contact@chilloutmusic.fm">contact@chilloutmusic.fm</a>.</p>
            </blockquote>
          </div>
          <div class="columns is-multiline">
            <div v-for="user in staff" :class="user.cardSize">
              <div class="card">
                <div class="card-image">
                  <figure :class="user.imageSize">
                    <img :src="user.image" alt="Image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{{user.username}}</p>
                      <p class="subtitle is-6">{{user.role}}</p>
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
import axios from 'axios'
export default {
  name: 'About',
  data() {
    return {
      staff: [],
      errors: []
    }
  },
  created() {
    axios.get(`/staff.json`)
    .then(response => {
      this.staff = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
.page-about {
  background-image: linear-gradient( 135deg, #43CBFF 0%, #9708CC 100%);
}

.image.is-4by3 img {
  height: auto;
  width: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.subtitle:not(:last-child), .title:not(:last-child) {
  margin-bottom: 1.0rem;
}
</style>
