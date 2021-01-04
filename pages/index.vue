<template>
  <div>
    <div class="pic-background" dir="ltr">
      <h1 id="name">Mohammad Sharifi</h1>
      <h2 class="line-1 anim-typewriter">Front-End Developer...</h2>
      <div id="about">
        <div class="container">
          <h1 class="text-center aboutHeading">درباره من</h1>
          <p class="aboutPG text-center">
            سلام، من محمد شریفی هستم برنامه نویس فرانت اند حدودا یک سال ونیم هست
            که برنامه نویسی فرانت اند رو شروع کردم و توی این مدت با فریمورک های زیر کار کردم‌
            <br>
            <a href="https://vuejs.org/">vue.js</a>،
            <a href="https://nuxtjs.org/">nuxt.js</a>،
            <a href="https://getbootstrap.com/">bootstrap</a>،
            <a href="https://bootstrap-vue.org/">bootstrap-vue</a>،
            <a href="https://vuetifyjs.com/">vuetify</a>،
            <a href="https://bulma.io/">bulma</a>،
            <a href="https://sass-lang.com/">sass</a>،
          </p>
        </div>
      </div>
    </div>

    <Project />

    <Footer />
  </div>
</template>

<script>
import Project from '@/components/Project'
import Footer from '@/components/Footer'

export default {
  components: {
    Project,
    Footer,
  },
}
</script>

<style>
.pic-background {
  background-image: url('data:image/jpeg;base64,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');
}
</style>
