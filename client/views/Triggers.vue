<template>
  <div>
    <section class="hero page-triggers">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-search"></i></span>Triggers</h1>
              <h2 class="subtitle">
                Instantly search from {{ triggersTotal }} triggers!
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
                <input class="input" id="searchTriggers" type="text" placeholder="Start typing to search a trigger..." value="" v-model="searchString" v-on:keyup="keyMonitor">
                <span class="icon is-medium is-left">
                  <i class="fa fa-search"></i>
                </span>
              </p>
              <p v-if="itemsFound != triggersTotal" class="control">Found {{ itemsFound }} triggers.</p>
            </div>
          </div>

          <table class="table is-striped">
            <thead>
              <tr>
                <th class="pointer column-keyword" @click="toggleSort('keyword')">Trigger<span class="icon is-small" v-if="filterType == 'alp'"><i class="fa fa-level-down"></i></span><span class="icon is-small" v-if="filterType == 'anti-alp'"><i class="	fa fa-level-up"></i></span></th>
                <th class="column-content">Content</th>
                <th class="column-username">Created By</th>
                <th class="pointer column-usecount" @click="toggleSort('usecount')">Times Used<span class="icon is-small" v-if="filterType == 'des'"><i class="fa fa-level-down"></i></span><span class="icon is-small" v-if="filterType == 'asc'"><i class="	fa fa-level-up"></i></span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trigger in limitBy(filterBy(triggers, searchString))">
                <td v-html="highlight(trigger.keyword)"></td>
                <td v-html="emojify(highlight(http(trigger.content)))"></td>
                <td v-html="highlight(trigger.creator.username)"></td>
                <td>{{ trigger.useCount }}</td>
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

export default {
  name: 'Triggers',

  data () {
    return {
      filterType: 'alp',
      searchString: '',
      triggers: [],
      errors: [],
      isLoading: true,
      itemsToShow: 200,
      itemsFound: 0
    }
  },

  computed: {
    triggersTotal: function() {
      return this.triggers.length
    }
  },

  methods: {
    toggleSort(type) {
      if (type == 'keyword') {
        if (this.filterType == 'alp') {
          this.filterType = 'anti-alp';
        } else {
          this.filterType = 'alp';
        }
        this.sortTriggers();
      } else if (type == 'usecount') {
        if (this.filterType == 'asc') {
          this.filterType = 'des';
        } else {
          this.filterType = 'asc';
        }
        this.sortTriggers();
      }
    },
    sortTriggers() {
      if (this.filterType == 'alp') {
        this.triggers.sort(function(a,b) {if(a.keyword < b.keyword){return -1;}else if(a.keyword > b.keyword){return 1;}return 0;});
      } else if (this.filterType == 'anti-alp') {
        this.triggers.sort(function(a,b) {if(a.keyword < b.keyword){return -1;}else if(a.keyword > b.keyword){return 1;}return 0;});
        this.triggers.reverse();
      } else if (this.filterType == 'asc') {
        this.triggers.sort(function(a,b) {return a.useCount-b.useCount});
      } else if (this.filterType == 'des') {
        this.triggers.sort(function(a,b) {return b.useCount-a.useCount});
      }
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
        var query = new RegExp(this.searchString+'+(?=([^"]*"[^"]*")*[^"]*$)', "ig");
        return value.toString().replace(query, function(matchedText, a, b) {
          return ('<span class=\'search-highlight\'>' + matchedText + '</span>')
        })
      } else {
        return value
      }
    },
    http(value) {
      var query = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gi;
      return value.toString().replace(query, function(matchedText, a, b) {
        return ('<a target="blank" href="' + matchedText + '">' + matchedText + '</a>')
      })
    },
    emojify(value) {
      return emojify.replace(value);
    }
  },

  created() {
    emojify.run();
    emojify.setConfig({img_dir: 'https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic'})
    axios.get(`/triggers.json`)
    .then(response => {
      this.triggers = response.data
    })
    .then(() => {
      this.isLoading = false
    })
    .catch(e => {
      this.errors.push(e)
    })
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
  background-color: #d3beff;
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

.table th.pointer {
  cursor: pointer;
}

.table td, .table th {
  vertical-align: middle;
  word-wrap: break-word;
}

.table thead td, .table thead th {
  font-family: 'Armata';
}

.column-trigger {
  width: 20%;
}

.column-content {
  width: 55%;
}

.column-username {
  width: 14.5%;
}

.column-usecount {
  width: 10.5%;
}
</style>
