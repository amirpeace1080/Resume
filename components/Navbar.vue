<template>
  <!-- <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">خانه</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">درباره من</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">پروژه ها</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">ارتباط</a>
              </li>
            </ul>
          </div>
        </nav>
      </header> -->


  <div>
    <b-navbar toggleable="lg" variant="light">
      <!-- <b-navbar-brand href="#"></b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="text-right">
        <b-navbar-nav>
          <b-nav-item href="#">خانه</b-nav-item>
          <b-nav-item href="#about">درباره من</b-nav-item>
          <b-nav-item href="#skill">مهارت ها</b-nav-item>
          <b-nav-item href="#projects">پروژه ها</b-nav-item>
          <b-nav-item href="#contact">ارتباط</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
