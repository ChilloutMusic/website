<template>
  <div class="app">
    <div class="nav-with-shadow">
      <div class="container">
        <nav class="nav">
          <div class="nav-left">
            <a class="nav-item is-brand">
              <img src="/img/cm-logo.svg" alt="Chillout Music" />&nbsp;&nbsp;Chillout Music
            </a>
          </div>

          <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <!-- This "nav-menu" is hidden on mobile -->
          <!-- Add the modifier "is-active" to display it on mobile -->
          <div class="nav-right nav-menu">
            <router-link to="/" exact class="nav-item is-tab">Home</router-link>
            <router-link to="/about" exact class="nav-item is-tab">About</router-link>
            <router-link to="/rdj" exact class="nav-item is-tab">Residents DJs</router-link>
            <router-link to="/rules" exact class="nav-item is-tab">Rules</router-link>
            <router-link to="/bot" exact class="nav-item is-tab">Bot</router-link>

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
          <p>Chillout Music &copy; 2014-2017</p>
          <p style="position: relative; left: -13px;">
            <a class="facebook" href="https://www.facebook.com/chilloutmusic.fm" target="_blank"><span class="icon is-large"><i class="fa fa-facebook"></i></span></a>
            <a class="twitter" href="https://www.twitter.com/chilloutmusica" target="_blank"><span class="icon is-large"><i class="fa fa-twitter"></i></span></a>
            <a class="reddit" href="https://www.reddit.com/r/ChilloutMusic" target="_blank"><span class="icon is-large"><i class="fa fa-reddit"></i></span></a>
            <a class="youtube" href="https://www.youtube.com/channel/UCfXtga41r3-IiV7Nlm_VvKw?sub_confirmation=1" target="_blank"><span class="icon is-large"><i class="fa fa-youtube"></i></span></a>
            &nbsp;<a class="soundcloud" href="https://soundcloud.com/chilloutmusica" target="_blank"><span class="icon is-large"><i class="fa fa-soundcloud"></i></span></a>
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
footer {
  font-family: 'Armata';
  box-shadow: inset 0px 7px 3px -8px rgba(50, 50, 50, 0.75);
}

footer a {
  color: #CCC;
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
