<template>
  <div>
    <section class="hero page-triggers">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-search"></i></span>Triggers</h1>
              <h2 class="subtitle">
                Instantly search our bot triggers.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <table class="table is-striped">
            <thead>
              <tr>
                <th class="column-keyword">Trigger</th>
                <th class="column-content">Content</th>
                <th class="column-username">Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trigger in triggers">
                <td>{{ trigger.keyword }}</td>
                <td>{{ trigger.content }}</td>
                <td>{{ trigger.creator.username }}</td>
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

export default {
  name: 'Triggers',

  data () {
    return {
      triggers: [],
      errors: []
    }
  },

  created() {
    axios.get(`http://chilloutmusic.fm/triggers.json`)
    .then(response => {
      this.triggers = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
.page-triggers {
  background-color: #d3beff;
}

.table {
  table-layout: fixed;
}

.table td, .table th {
  vertical-align: middle;
}

.column-trigger {
  width: 20%;
}

.column-content {
  width: 60%;
}

.column-username {
  width: 20%;
}
</style>
