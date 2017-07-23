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
              <li @click="toggle('leaderboard')" v-bind:class="{ 'is-active': tabLeaderboardActive }">
                <a>
                  <span>Leaderboard</span>
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
            <div class="box">
              <p class="title is-3" style="color: #000"><span class="icon is-large" style="color: green"><i class="fa fa-usd"></i></span>ChillCoin&trade;</p>
              <p>ChillCoins&trade; is a unique way to reward our users and provides them with a way of showing their appreciation for spinning super dope tracks. The hope is that this feature will elevate room morale and provide users with incentive to help make the community vibe even more chill than it already is (sub-zero?). Some basic rules are as follows: </p>
              <div class="content">
                <blockquote>
                  <ul>
                    <li>Everyone can earn ChillCoins&trade;</li>
                    <li>Anyone can give ChillCoins&trade;</li>
                    <li>Anyone can buy perks with ChillCoins&trade;</li>
                  </ul>
                </blockquote>
                <blockquote>
                  <ul>
                    <li><strong>Staff</strong> may award ChillCoins&trade; to anyone:</li>
                    <li>When awarding non-staff: ChillCoins&trade; come from the bottomless coffers of the Chillout Music Bank.</li>
                    <li>When awarding other staff members: ChillCoins&trade; come from the tipper's own wallet.</li>
                  </ul>
                </blockquote>
                <blockquote>
                  <ul>
                    <li><strong>Non-Staff Users</strong> may use ChillCoins&trade; from their wallet to:</li>
                    <li>Exchange coins for perks while on the Wait List to move up a space or even all the way to the front.</li>
                    <li>Tip their homies.</li>
                    <li>Trade Wait List spot with their homies.</li>
                  </ul>
                </blockquote>
                <table class="table is-striped">
                  <thead>
                    <tr>
                      <th class="column-keyword">Command</th>
                      <th class="column-content">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="command in chillcoinCommands">
                      <td v-html="command.c"></td>
                      <td v-html="command.d"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="box">
              <p class="title is-3" style="color: #000"><span class="icon is-large" style="color: red"><i class="fa fa-heart"></i></span>&nbsp;Love</p>
              <p>Love is a feature where our users can show appreciation to others in the room. Users can send "Points" to other users for any reason they want! After 3 days, a winner is declared and will benefit from a Wait List Boost. We hope that this brings the community closer in a interactive and fun way. Check the <a @click="toggle('leaderboard')">leaderboard here!</a></p>
              <table class="table is-striped">
                <thead>
                  <tr>
                    <th class="column-keyword">Command</th>
                    <th class="column-content">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="command in loveCommands">
                    <td v-html="command.c"></td>
                    <td v-html="command.d"></td>
                  </tr>
                </tbody>
              </table>
              <div class="content">
                <blockquote>
                  <ul>
                    <li><strong>Rewards:</strong></li>
                    <li>!love = 0.15 point for source user, 1 for target user</li>
                    <li>!tip = 0.50 for source non-staff user, 1 point for non-staff target user</li>
                    <li>grabs = 0.25 points for each grab, minimum 3 grabs</li>
                    <li>raffle = 1 point for winner</li>
                    <li>trivia = 1 point for winner</li>
                    <li>One prize (every 3 days): Wait List Boost, which pushes the user 2 thirds of the way up the waitlist.</li>
                    <li>* Users can accumulate boost and use it at their time of choosing.</li>
                  </ul>
                </blockquote>
              </div>
            </div>

            <div class="box">
              <p class="title is-3" style="color: #000"><span class="icon is-large" style="color: #BBB"><i class="fa fa-sort-numeric-desc"></i></span>Raffle</p>
              <p>Raffle, which occurs every 30 minutes, provides a significant Wait List Boost to the winners. If you are already in position #1, you will need to lock your spot by typing <strong>!join</strong>.</p>
              <p><img src="/img/raffle_01.png" /></p>
            </div>

            <div class="box">
              <p class="title is-3" style="color: #000"><span class="icon is-large" style="color: orange"><i class="fa fa-question"></i></span>Trivia</p>
              <p>Trivia is a fun game to test your knowledge on various topics, provides a small Wait List Boost. Held every 3 hours. Each correct response will need to be preceded by <strong>!a</strong>.</p>
              <p><img src="/img/trivia_01.png" /></p>
            </div>
          </div>
          <div v-if="tabLeaderboardActive">
            <div class="box">
              <p class="title is-3" style="color: #000"><span class="icon is-large" style="color: red"><i class="fa fa-heart"></i></span>&nbsp;Leaderboard</p>
              <p>Leaderboard has been reset <strong>{{ leaderboard.started }}</strong> and will end <strong>{{ leaderboard.ends }}</strong>. Watch this space if you win and collect your free boost!</p>
              <br/>
              <table class="table is-striped">
                <thead>
                  <tr>
                    <th class="column-keyword">Username</th>
                    <th class="column-content">Points</th>
                    <th class="column-content">Lovers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="participant in leaderboard.participants">
                    <td v-html="participant.username"></td>
                    <td v-html="participant.points_received"></td>
                    <td><span v-for="award in participant.awards_received">{{ award.username }} ({{award.points_sent}}) </span></td>
                  </tr>
                </tbody>
              </table>
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
  name: 'Bot',

  data () {
    return {
      tabUserActive: true,
      tabModActive: false,
      tabGamesActive: false,
      tabLeaderboardActive: false,
      userCommands: [],
      modCommands: [],
      chillcoinCommands: [],
      loveCommands: [],
      leaderboard: [],
      errors: []
    }
  },

  methods: {
    toggle(tab) {
      if (tab === 'user') {
        this.tabUserActive = true
        this.tabModActive = false
        this.tabGamesActive = false
        this.tabLeaderboardActive = false
        this.$router.replace({name:'bot', params:{type:'user'}});
      }
      if (tab === 'mod') {
        this.tabUserActive = false
        this.tabModActive = true
        this.tabGamesActive = false
        this.tabLeaderboardActive = false
        this.$router.replace({name:'bot', params:{type:'mod'}});
      }
      if (tab === 'games') {
        this.tabUserActive = false
        this.tabModActive = false
        this.tabGamesActive = true
        this.tabLeaderboardActive = false
        this.$router.replace({name:'bot', params:{type:'games'}});
      }
      if (tab === 'leaderboard') {
        this.tabUserActive = false
        this.tabModActive = false
        this.tabGamesActive = false
        this.tabLeaderboardActive = true
        this.$router.replace({name:'bot', params:{type:'leaderboard'}});
      }
    }
  },

  created() {
    if (this.$route.params.type == 'leaderboard') {
      this.toggle('leaderboard');
    } else if (this.$route.params.type == 'games') {
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
    axios.get(`/chillcoinCommands.json`)
    .then(response => {
      this.chillcoinCommands = response.data
    })
    axios.get(`https://api.woots.io/the-chillout-room/leaderboard`)
    .then(response => {
      this.leaderboard = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    axios.get(`/loveCommands.json`)
    .then(response => {
      this.loveCommands = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
.page-bot {
  background-image: linear-gradient( 135deg, #ABDCFF 0%, #0396FF 100%);
}

.hero .tabs ul {
  border-bottom: 1px solid #CCC;
}

.tabs ul {
  font-family: 'Armata';
}

.content {
  margin-top: 10px;
}

.content ul {
  margin-top: 0;
}

img {
  padding: 5px;
  box-shadow: 5px 5px 5px #CCC;
  margin-top: 10px;
}
</style>
