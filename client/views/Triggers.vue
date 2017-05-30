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
                <th class="column-keyword">Trigger</th>
                <th class="column-content">Content</th>
                <th class="column-username">Created By</th>
                <th class="column-usecount">Times Used</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trigger in limitBy(filterBy(triggers, searchString))">
                <td>{{ trigger.keyword }}</td>
                <td>{{ trigger.content }}</td>
                <td>{{ trigger.creator.username }}</td>
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
    filterBy(list, value) {
      return list.filter(function(item) {
        const combined = [item.keyword.toLowerCase(), item.creator.username.toLowerCase()].join(' ')
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
    }
  },

  created() {
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
  width: 15%;
}

.column-usecount {
  width: 10%;
}
</style>
