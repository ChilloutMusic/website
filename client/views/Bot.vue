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
                <tr>
                  <td>!plays author - title</td>
                  <td>Check when the last time a specific song was played, number of times, by whom, and woot/grab/meh count</td>
                </tr>
                <tr>
                  <td>!who @username</td>
                  <td>Display user DJ history in Chillout Music community</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="tabModActive">mod content</div>
          <div v-if="tabGamesActive">games content</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Bot',

  data () {
    return {
      tabUserActive: true,
      tabModActive: false,
      tabGamesActive: false
    }
  },

  methods: {
    toggle(tab) {
      if (tab === 'user') {
        this.tabUserActive = true
        this.tabModActive = false
        this.tabGamesActive = false
      }
      if (tab === 'mod') {
        this.tabUserActive = false
        this.tabModActive = true
        this.tabGamesActive = false
      }
      if (tab === 'games') {
        this.tabUserActive = false
        this.tabModActive = false
        this.tabGamesActive = true
      }
    }
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
