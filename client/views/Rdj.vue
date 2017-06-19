<template>
  <div>
    <section class="hero page-rdj">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-dot-circle-o"></i></span>Resident DJs</h1>
              <h2 class="subtitle">
                Meet the artists.
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
            <div class="column is-12">
              <div class="content">
                <blockquote>
                  <p class="title is-4">How to become a Resident DJ?</p>
                  <ul>
                    <li>For music producers and YouTube promoters only.</li>
                    <li>You must have music samples on SoundCloud, YouTube, BandCamp, or a personal website.</li>
                    <li>You must be able to demonstrate you play more than just your own music.</li>
                    <li>DJs and Producers: a minimum of 5 tracks/mixes of reasonable quality written within our room's genre requirements.</li>
                    <li>Promoters: 1,000+ followers/subscribers via any medium OR a promising channel with professional graphics, good artist outreach, etc.</li>
                  </ul>
                </blockquote>
              </div>
            </div>
          </div>

          <p class="control">
            <span class="select">
              <select v-model="showType">
                <option value="all">Show All</option>
                <option value="producer">Show Producers</option>
                <option value="promoter">Show Promoters</option>
              </select>
            </span>
          </p>
          <br />

          <div class="columns is-multiline">
            <div class="column is-2" v-for="rdj in rdjs" v-if="showType === 'all' ? rdj.type === 'promoter' || rdj.type === 'producer' : rdj.type === showType">
              <a :href="rdj.youtube || rdj.soundcloud" target="_blank">
                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <img :src="rdj.imageUrl" alt="Image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title name">{{ rdj.name }}</p>
                        <p class="subtitle location">{{ rdj.location }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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

  data () {
    return {
      showType: 'all'
    }
  },

  firebase: {
    rdjs: db.ref('rdjs')
  },

  beforeCreate () {
  }
}
</script>

<style scoped>
.page-rdj {
  background-image: linear-gradient( 135deg, #CE9FFC 0%, #7367F0 100%);
}

.card-content {
  padding: 0.5rem;
}

.title {
  padding-bottom: 0;
}

.title.name {
  font-size: 1.1rem;
}

.subtitle.location {
  font-size: 0.85rem;
}

.card {
  -webkit-animation: fadeoutShadow 0.25s linear forwards;
  animation: fadeoutShadow 0.25s linear forwards;
}

.card:hover {
  -webkit-animation: fadeinShadow 0.25s linear forwards;
  animation: fadeinShadow 0.25s linear forwards;
}

@keyframes fadeoutShadow {
  0% {box-shadow: 3px 10px 5px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);}
  100% {box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);}
}

@keyframes fadeinShadow {
  0% {box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);}
  100% {box-shadow: 3px 10px 5px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);}
}
</style>
