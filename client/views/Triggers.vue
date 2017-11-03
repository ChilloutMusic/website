<template>
  <div>
    <section class="hero page-triggers">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-search"></i></span>Triggers</h1>
              <h2 class="subtitle" v-if="triggersTotal != 0">
                Instantly search from <strong>{{ triggersTotal }}</strong> triggers!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">

          <div class="box">
            <div class="field is-grouped">
              <p class="control has-icons-left has-icons-right" v-bind:class="{ 'is-loading': isLoading }">
                <input class="input" id="searchTriggers" type="text" placeholder="Start typing to search a trigger..." value="" @input="debounceSearch" v-on:keyup="keyMonitor">
                <span class="icon is-medium is-left">
                  <i class="fa fa-search"></i>
                </span>
              </p>
              <p v-if="itemsFound != triggersTotal" class="control found">Found {{ itemsFound }} triggers.</p>
            </div>
          </div>

          <table class="table is-striped">
            <thead>
              <tr>
                <th class="clickable column-keyword" @click="sortBy('keyword')">Trigger<span class="icon is-small" v-if="sortKey =='keyword'"><i class="fa" v-bind:class="reverse ? 'fa-level-down' : 'fa-level-up'"></i></span></th>
                <th class="column-content">Content</th>
                <th v-if="!isMobile" class="clickable column-username" @click="sortBy('creator.username')">Created By<span class="icon is-small" v-if="sortKey =='creator.username'"><i class="fa" v-bind:class="reverse ? 'fa-level-down' : 'fa-level-up'"></i></span></th>
                <th v-if="!isMobile" class="clickable column-usecount" @click="sortBy('useCount')">Times Used<span class="icon is-small" v-if="sortKey =='useCount'"><i class="fa" v-bind:class="reverse ? 'fa-level-down' : 'fa-level-up'"></i></span></th>
                <th v-if="!isMobile" class="clickable column-created" @click="sortBy('dateAdded')">Created<span class="icon is-small" v-if="sortKey =='dateAdded'"><i class="fa" v-bind:class="reverse ? 'fa-level-down' : 'fa-level-up'"></i></span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trigger in limitBy(filterBy(triggers, searchString))">
                <td v-html="highlight(trigger.keyword)"></td>
                <td v-html="emojify(highlight(linkify(trigger.content)))"></td>
                <td v-if="!isMobile" v-html="highlight(trigger.creator.username)"></td>
                <td v-if="!isMobile">{{ trigger.useCount }}</td>
                <td v-if="!isMobile">{{ relativeDate(trigger.dateAdded) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="itemsFound > itemsToShow">
            <button class="button is-primary is-large" @click="showMore">Show More</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import {relativeDate} from '../filters/relativeDate'

export default {
  name: 'Triggers',

  data () {
    return {
      sortKey: 'dateAdded',
      reverse: true,
      searchString: '',
      errors: [],
      isLoading: true,
      isMobile: false,
      itemsToShow: 200,
      itemsFound: 0
    }
  },

  computed: {
    triggers() {
      return this.$store.state.triggers
    },
    triggersTotal: function() {
      return this.triggers.length
    }
  },

  methods: {
    debounceSearch: _.debounce(function(e) {
      this.searchString = e.target.value
    }, 250),
    sortBy(sortKey) {
      this.reverse = !this.reverse
      this.sortKey = sortKey
      this.$store.commit('saveTriggers', _.orderBy(this.triggers, sortKey, this.reverse ? 'desc' : 'asc'))
    },
    filterBy(list, value) {
      return list.filter(function(item) {
        const combined = [item.keyword.toLowerCase(), item.content.toLowerCase(), item.creator.username.toLowerCase()].join(' ')
        return combined.indexOf(value.toLowerCase()) > -1
      })
    },
    limitBy(list) {
      this.itemsFound = list.length
      return list.slice(0, this.itemsToShow)
    },
    showMore() {
      this.itemsToShow += 200
    },
    keyMonitor() {
      this.isLoading = true
      setTimeout(() => this.isLoading = false, 500);
    },
    highlight(value) {
      if (this.searchString) {
        var query = new RegExp(this.searchString+'(?![^<]*>|[^<>]*<\/)', "ig");
        return value.toString().replace(query, function(matchedText, a, b) {
          return ('<span class=\'search-highlight\'>' + matchedText + '</span>')
        })
      } else {
        return value
      }
    },
    linkify(value) {
      var query = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gi;
      return value.toString().replace(query, function(matchedText, a, b) {
        return ('<a target="blank" href="' + matchedText + '">' + matchedText + '</a>')
      })
    },
    emojify(value) {
      return emojify.replace(value);
    },
    relativeDate(value) {
      return relativeDate(new Date(value));
    }
  },

  created() {
    if (document.body.clientWidth <= 920) {
      this.isMobile = true;
    }

    emojify.run();
    emojify.setConfig({img_dir: 'https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic'})
    if (this.triggersTotal == 0) {
      axios.get(`https://api.woots.io/the-chillout-room/triggers`)
      .then(response => {
        if (this.isMobile) {
          this.sortKey = 'keyword';
          this.reverse = false;
          this.$store.commit('saveTriggers', _.orderBy(response.data.triggers, 'dateAdded', 'desc'))
        } else {
          this.$store.commit('saveTriggers', _.orderBy(response.data.triggers, 'dateAdded', 'desc'))
        }
      })
      .then(() => {
        this.isLoading = false
      })
      .catch(e => {
        this.errors.push(e)
      })
    } else {
      this.isLoading = false
    }
  },

  mounted() {
    document.getElementById("searchTriggers").focus()
  },

  updated() {
  }
}
</script>

<style scoped>
.page-triggers {
  background-image: linear-gradient( 135deg, #90F7EC 0%, #32CCBC 100%);
}

.box {
  box-shadow: 1px 1px 15px #CCC;
}

.field.is-grouped {
  align-items: center;
}

p.control {
  width: 25%;
}

p.control img {
  vertical-align: middle;
}

.table {
  table-layout: fixed;
}

.table th.clickable {
  cursor: pointer;
  font-weight: bolder;
  color: #00d1b2;
}

.table td, .table th {
  vertical-align: middle;
  word-wrap: break-word;
}

.table thead td, .table thead th {
  font-family: 'Armata';
}

.column-created
.column-usecount
.column-username
.column-keyword {
  width: 12.5%;
}

.column-content {
  width: 50%;
  font-weight: 500;
}

.column-username {
  font-weight: 500;
}

@media screen and (max-width: 920px) {
  p.control {
    width: 100%;
  }
  .field.is-grouped {
    display: block;
  }
  .found {
    margin-top: 1rem;
  }
}
</style>
