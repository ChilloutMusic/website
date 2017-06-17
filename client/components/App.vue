<template>
  <div class="app">
    <div class="nav-with-shadow">
      <div class="container">
        <nav class="nav">
          <div class="nav-left">
            <router-link to="/" exact class="nav-item is-brand">
              <img src="/img/cm-logo.svg" alt="Chillout Music" />&nbsp;&nbsp;Chillout Music
            </router-link>
          </div>

          <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
          <span class="nav-toggle" @click="toggleHamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <!-- This "nav-menu" is hidden on mobile -->
          <!-- Add the modifier "is-active" to display it on mobile -->
          <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isHamburgerActive }" @click="toggleHamburger">
            <router-link to="/" exact class="nav-item is-tab">Home</router-link>
            <router-link to="/about" exact class="nav-item is-tab">About</router-link>
            <router-link to="/rdj" exact class="nav-item is-tab">Residents DJs</router-link>
            <router-link to="/rules" exact class="nav-item is-tab">Rules</router-link>
            <router-link to="/bot" class="nav-item is-tab">Bot</router-link>
            <router-link to="/triggers" exact class="nav-item is-tab">Triggers</router-link>

            <div class="nav-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-primary" href="https://plug.dj/the-chillout-room" target="_blank">
                    <span>Join us on Plug.dj</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view></router-view>

    <footer class="footer">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column is-3">
              <p>Chillout Music &copy; 2014-2017</p>
              <p style="position: relative; left: -13px;">
                <a class="facebook" href="https://www.facebook.com/chilloutmusic.fm" target="_blank"><span class="icon is-large"><i class="fa fa-facebook"></i></span></a>
                <a class="twitter" href="https://www.twitter.com/chilloutmusica" target="_blank"><span class="icon is-large"><i class="fa fa-twitter"></i></span></a>
                <a class="reddit" href="https://www.reddit.com/r/ChilloutMusic" target="_blank"><span class="icon is-large"><i class="fa fa-reddit"></i></span></a>
                <a class="youtube" href="https://www.youtube.com/channel/UCfXtga41r3-IiV7Nlm_VvKw?sub_confirmation=1" target="_blank"><span class="icon is-large"><i class="fa fa-youtube"></i></span></a>
                &nbsp;<a class="soundcloud" href="https://soundcloud.com/chilloutmusica" target="_blank"><span class="icon is-large"><i class="fa fa-soundcloud"></i></span></a>
              </p>
            </div>
            <div class="column is-2">
              <p>Join us on Discord:</p>
              <a href="https://discord.gg/aXjAgeH" target="_blank">
                <img src="/img/social-join-discord-2.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      isHamburgerActive: false
    }
  },

  methods: {
    toggleHamburger() {
      this.isHamburgerActive = !this.isHamburgerActive
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1192px) {
  .nav-left, .nav-right {
    flex-basis: auto;
  }
}

@media screen and (max-width: 768px) {
  footer img {
    max-width: 50%;
  }
}

footer {
  background-color: #e8e8e8;
  font-family: 'Armata';
  box-shadow: inset 0px 7px 3px -8px rgba(50, 50, 50, 0.75);
}

footer a {
  color: #a9a8a8;
}

footer a.facebook:hover {
  color: #3b5998;
}

footer a.twitter:hover {
  color: #55acee;
}

footer a.reddit:hover {
  color: #ff4500;
}

footer a.youtube:hover {
  color: #bb0000;
}

footer a.soundcloud:hover {
  color: #ff7700;
}


</style>
