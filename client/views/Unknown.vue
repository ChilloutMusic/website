<template>
  <div>
    <section class="hero page-unknown">
      <div class="hero-body">
        <div class="container page-header">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-exclamation-triangle"></i></span>&nbsp;Page not found</h1>
              <h2 class="subtitle">
                Sorry but the page you requested doesn't exist.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <video autoplay loop>
            <source src="https://i.imgur.com/a0voxPE.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Unknown'
}
</script>

<style scoped>
.page-unknown {
  background-color: #f9afaf;
}
.container video {
  box-shadow: 10px 15px 15px #CCC;
}
</style>
