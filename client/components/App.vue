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
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
