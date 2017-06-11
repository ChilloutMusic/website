<template>
  <div>
    <section class="motion-background">
      <div class="bg-video">
        <video autoplay loop>
          <source src="/video/motion-bg-party.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="container">
        <h1 class="title text-on-motion"><span style="color: #FFF;">Plug.dj</span> is a place to play music and videos with friends and others from around the world in a fun, real-time, community-driven environment.</h1>
        <h2 class="subtitle subtitle-motion text-on-motion">
          Join our community - <span style="border-bottom: 2px solid #FFF;">Chillout Music</span> - put together the perfect chill playlist, make new friends, and then take turns playing chill music and videos. Whoever DJs before you might inspire your next song, and you can discuss musical influences in our live chat. If you discover a new track that you like, you can Woot to show your appreciation or Grab it to add to your playlists. Pick an avatar that fits your personality, and you're ready to make new friends and listen to music! Chillout Music promotes & hosts events for chill music producers on plug.dj.
        </h2>
      </div>
    </section>

    <section class="hero landing-weekly-events">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">

              <h1 class="title" style="color: #000"><span class="icon is-large"><i class="fa fa-calendar"></i></span>Weekly Events</h1>
              <h2 class="subtitle">
                We host a themed party on every Sunday! We pick one or two specific types of music to play. Queue up your favorite tunes and earn <router-link to="/bot/games">ChillCoins&trade;</router-link> when your plays are on theme.<br/><br/><br/>
              </h2>
            </div>
            <div class="column">
              <img src="../img/plug-avatars.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero landing-rdj-events">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"><span class="icon is-large"><i class="fa fa-calendar-check-o"></i></span>Upcoming and past events</h1>
          <h2 class="subtitle">
            Occasionally we host big events where your favorite big name artists bring you the newest tunes. Don't miss out on hearing the best of music and the opportunity to mingle with producers and DJs.
          </h2>
          <div class="columns">
            <div class="column">
              <img src="/img/events/ComingSoon.jpg" />
            </div>
            <div class="column">
              <img src="/img/events/episode19.png" />
            </div>
            <div class="column">
              <img src="/img/events/episode18.jpg" />
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    </section>

    <section class="hero landing-youtube">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <h1 class="title" style="color: orange;"><span class="icon is-large"><i class="fa fa-youtube"></i></span>Our YouTube Channel</h1>
              <h2 class="subtitle">
                The best of chillout music curated and featured by our very own <strong>Molly</strong>.<br/>
              </h2>
            </div>
            <div class="column">
              <div class="embed-container"><iframe src="https://www.youtube.com/embed/SkuPaZQXt7g" frameborder="0" allowfullscreen></iframe></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@media screen and (max-width: 830px) {
  .bg-video video {
    display: none;
  }

  section.motion-background .bg-video {
    background-image: url('/img/bg-party.jpg');
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  section.motion-background .container {
    padding: 0 1.5rem;
  }
}
</style>
