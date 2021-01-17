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

    <Skill />

    <Project />

    <Contact />

    <Footer />
  </div>
</template>

<script>
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    Skill,
    Project,
    Contact,
    Footer,
  },
}
</script>

<style>
.pic-background {
  background-image: url('https://cdn.lynda.com/course/706928/706928-637460596025466652-16x9.jpg');
}
</style>
