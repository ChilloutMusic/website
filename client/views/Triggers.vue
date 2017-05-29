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
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Start typing to search a trigger..." value="" v-model="searchString">
              <span class="icon is-medium is-left">
                <i class="fa fa-search"></i>
              </span>
            </p>
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
              <tr v-for="trigger in filterBy(triggers, searchString)">
                <td>{{ trigger.keyword }}</td>
                <td>{{ trigger.content }}</td>
                <td>{{ trigger.creator.username }}</td>
                <td>{{ trigger.useCount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import {filterBy} from '../filters/filters.js'

export default {
  name: 'Triggers',

  data () {
    return {
      searchString: '',
      triggers: [],
      errors: []
    }
  },

  computed: {
    triggersTotal: function() {
      return this.triggers.length
    }
  },

  methods: {
    filterBy
  },

  created() {
    axios.get(`/triggers.json`)
    .then(response => {
      this.triggers = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
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

p.control {
  width: 25%;
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
