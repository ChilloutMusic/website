<template>
  <div>
    <section class="motion-background">
      <div class="bg-video">
        <video autoplay loop muted>
          <source src="/video/bg-particles-blue.webm" type="video/webm" />
        </video>
      </div>
      <div class="container">
        <h1 class="title text-on-motion"><span style="color: #FFF;">Chillout Music</span> is a Plug.dj community &mdash; a place to play music and videos with friends and others from around the world in a fun, real-time, community-driven environment.</h1>
      </div>
    </section>

    <section class="hero landing-youtube">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column" style="padding-right:50px;" v-if="playing">
              <div class="currentSong">
                <h1 class="title" style="color: orange;">
                  <div class="equaliser-container">
                    <ol class="equaliser-column"><li class="colour-bar"></li></ol>
                     <ol class="equaliser-column"><li class="colour-bar"></li></ol>
                     <ol class="equaliser-column"><li class="colour-bar"></li></ol>
                     <ol class="equaliser-column"><li class="colour-bar"></li></ol>
                     <ol class="equaliser-column"><li class="colour-bar"></li></ol>
                   </div>
                  &nbsp;Currently playing on <a target="blank" href="https://plug.dj/electronic-chillout-music">Plug.dj</a></h1>
                <h1 class="title" style="color:orange;font-size: 1.75rem;"><strong style="color:orange;">{{playing.dj}}</strong> is playing</h1>
                <h2 class="subtitle" style="padding-bottom: 2rem;font-size:1.5rem">{{playing.author}} - {{playing.title}}&nbsp;
                  <a target="blank" :href="playing.link">
                    <div class="tooltip"><img :src="playing.image" /></div>
                    <span class="icon is-small"><i class="fa fa-external-link"></i></span>
                  </a>
                </h2>
                <div class="wasPlaying" v-for="play in played" v-if="!isMobile" style="padding-bottom: 0.85rem;">
                  <h1 style="color:orange;font-size: 1rem;"><strong style="color:orange;">{{play.dj}}</strong> played
                    <div class="score" style="float:right;">
                      <span style="color: #90ad2f;"><span class="icon is-small"><i class="fa fa-arrow-up"></i></span>{{play.score.woots}}</span>
                      <span style="color: #aa74ff;"><span class="icon is-small"><i class="fa fa-star"></i></span>{{play.score.grabs}}</span>
                      <span style="color: #c42e3b;"><span class="icon is-small"><i class="fa fa-arrow-down"></i></span>{{play.score.mehs}}</span>
                      <span style="color: #bbb;"><span class="icon is-small"><i class="fa fa-user"></i></span>{{play.score.listeners}}</span>
                    </div>
                  </h1>
                  <h2 class="subtitle" style="font-size: 1rem;border-bottom:1px solid #bbb;padding-bottom: 5px;">{{play.author}} - {{play.title}}&nbsp;<a target="blank" :href="play.link"><div class="tooltip"><img :src="play.image"></img></div><span class="icon is-small"><i class="fa fa-external-link"></i></span></a></h2>
                </div>
              </div>
            </div>
            <div class="column is-half" style="padding-bottom: 5rem;">
              <div class="yt">
                <h1 class="title" style="color: orange;"><span class="icon is-large"><i class="fa fa-youtube"></i></span>&nbsp;Our YouTube Channel</h1>
                <h2 class="subtitle">The best of chillout music curated and featured by our very own <strong>Molly</strong>.<br/></h2>
              </div>
              <div class="embed-container"><iframe src="https://www.youtube.com/embed/SQKG9mqsWgs" frameborder="0" allowfullscreen></iframe></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero landing-weekly-events" style="display: none">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-calendar"></i></span>Weekly Events</h1>
              <h2 class="subtitle">
                We host a themed party on every Sunday! We pick one or two specific types of music to play. Queue up your favorite tunes and earn <router-link to="/bot/games">ChillCoins&trade;</router-link> when your plays are on theme.<br/><br/><br/>
              </h2>
            </div>
            <div class="column">
              <img src="../img/plug-avatars.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero landing-rdj-events">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"><span class="icon is-large"><i class="fa fa-calendar-check-o"></i></span>Upcoming and past events</h1>
          <h2 class="subtitle">
            Occasionally we host big events where your favorite big name artists bring you the newest tunes. Don't miss out on hearing the best of music and the opportunity to mingle with producers and DJs.
          </h2>
          <div class="columns">
            <div class="column">
              <img src="/img/events/ComingSoon.jpg" />
            </div>
            <div class="column">
              <img src="/img/events/episode19.jpg" />
            </div>
            <div class="column">
              <img src="/img/events/episode18.jpg" />
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      isMobile: false,
      //playing: [],
      //played: [],
      //errors: []
    }
  },
  created() {
    if (document.body.clientWidth <= 768) {
      this.isMobile = true;
    }

    // axios.get(`https://braincomb.com/cm/playing.json`)
    // .then(response => {
    //   this.playing = response.data.current
    //   this.played = response.data.played
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })
  }
}
</script>

<style scoped>
.wasPlaying .subtitle a:focus .tooltip,
.wasPlaying .subtitle a:hover .tooltip,
.currentSong .subtitle a:focus .tooltip,
.currentSong .subtitle a:hover .tooltip {
  display: block;
}

.wasPlaying a .tooltip,
.currentSong a .tooltip {
  display: none;
  max-width: 250px;
  max-height: 200px;
  border-radius: 15px;
  position: absolute;
  bottom: 30px;
  left: -70px;
}

.currentSong a .tooltip::before,
.wasPlaying a .tooltip::before {
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;
  bottom: -7.5px;
  left: 65px;
  border-left: 8px solid transparent;
  border-right: 5px solid transparent;
  border-top: 16px solid #fff;
}

.wasPlaying a .tooltip img,
.currentSong a .tooltip img {
  width: auto;
  height: auto;
  border-radius: 15px;
  border: 5px solid #fff;
}

.wasPlaying a,
.currentSong a {
  color: #ffca00;
  position: relative;
}

.wasPlaying .subtitle a:focus,
.wasPlaying .subtitle a:hover,
.currentSong .subtitle a:focus,
.currentSong .subtitle a:hover {
  text-decoration: none;
  color: #ffca00;
}

.currentSong .title a:focus,
.currentSong .title a:hover {
  text-decoration: none;
  color: #ffca00;
  border-bottom: 2.5px solid #ffca00;
}

section.landing-youtube .yt {
  padding-bottom: 2rem;
}

/* Equalizer */
.equaliser-container {
  height: 25px;
  width: 30px;
  display: inline-block;
}

.colour-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: orange;
}

.equaliser-column {
  width: 5px;
  float: left;
  margin: 0 1px 0 0;
  padding: 0;
  height: 22.5px;
  position: relative;
  list-style-type: none;
}

.equaliser-column:nth-child(1) .colour-bar {animation: barHeight 2s 1s ease-out alternate infinite;}
.equaliser-column:nth-child(2) .colour-bar {animation: barHeight 2s 0.5s ease-out alternate infinite;}
.equaliser-column:nth-child(3) .colour-bar {animation: barHeight 2s 1.5s ease-out alternate infinite;}
.equaliser-column:nth-child(4) .colour-bar {animation: barHeight 2s 0.25s ease-out alternate infinite;}
.equaliser-column:nth-child(5) .colour-bar {animation: barHeight 2s 2s ease-out alternate infinite;}
@keyframes barHeight {
  0% {height: 2px;}
  10% {height: 6px;}
  20% {height: 10px;}
  30% {height: 4px;}
  40% {height: 14px;}
  50% {height: 18px;}
  60% {height: 6px;}
  70% {height: 16px;}
  80% {height: 10px;}
  90% {height: 6px;}
  100% {height: 2px;}
}

@media screen and (max-width: 768px) {
  .bg-video video {
    display: none;
  }

  section.motion-background .bg-video {
    background-image: url('/img/bg-party.jpg');
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  section.motion-background .container {
    padding: 0 1.5rem;
  }
}

@media screen and (min-width: 769px) {
  .title.text-on-motion {
    width: 75%;
  }
}
</style>
