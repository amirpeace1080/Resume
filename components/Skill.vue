<template>
  <!-- <div id="skill"> -->
  <div class="container" id="skill" dir="rtl">
      <h1 class="mt-3 mb-5">مهارت ها</h1>

    <div class="bar__container">
      <div class="bar__item skill-1">
        <span class="bar__name">html</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-2">
        <span class="bar__name">css</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-3">
        <span class="bar__name">sass</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-4">
        <span class="bar__name">bootstrap</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-5">
        <span class="bar__name">bootstrap-vue</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-6">
        <span class="bar__name">bulma</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-7">
        <span class="bar__name">vuejs</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-8">
        <span class="bar__name">nuxtjs</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-9">
        <span class="bar__name">vuetifyjs</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-10">
        <span class="bar__name">git</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-11">
        <span class="bar__name">java script</span>
      </div>
    </div>

    <div class="bar__container">
      <div class="bar__item skill-12">
        <span class="bar__name">jquery</span>
      </div>
    </div>

  </div>
  <!-- </div> -->
</template>

<script>
export default {}
</script>

<style lang="scss">
// Colour variables
// =====================
$primary-color: #63cdda;

// Basic setup
// =====================
h1 {
  text-align: center;
}

.container {
  width: 100%;
  //   max-width: 700px;
  margin: auto;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

// Basic container setup
// =====================
.bar__container {
  background-color: lighten($primary-color, 25%);
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.bar__item {
  background-color: darken($primary-color, 5%);
  padding: 15px 15px 15px 0;
}

.bar__name {
  background-color: darken($primary-color, 30%);
  color: white;
  padding: 15px 25px;
}

// Skills setup
// =====================
.skill-1 {
  width: 90%;
  position: relative;

  &::after {
    // content: '90%';
    position: absolute;
    right: -50px;
  }
}

.skill-2 {
  width: 90%;
  position: relative;

  &::after {
    // content: '90%';
    position: absolute;
    right: -50px;
  }
}

.skill-3 {
  width: 85%;
  position: relative;

  &::after {
  //   content: '85%';
    position: absolute;
    right: -50px;
  }
}


.skill-4 {
  width: 85%;
  position: relative;

  &::after {
    // content: '85%';
    position: absolute;
    right: -50px;
  }
}


.skill-5 {
  width: 85%;
  position: relative;

  &::after {
    // content: '85%';
    position: absolute;
    right: -50px;
  }
}


.skill-6 {
  width: 80%;
  position: relative;

  &::after {
    // content: '80%';
    position: absolute;
    right: -50px;
  }
}


.skill-7 {
  width: 80%;
  position: relative;

  &::after {
    // content: '80%';
    position: absolute;
    right: -50px;
  }
}

.skill-8 {
  width: 80%;
  position: relative;

  &::after {
    // content: '80%';
    position: absolute;
    right: -50px;
  }
}


.skill-9 {
  width: 80%;
  position: relative;

  &::after {
    // content: '80%';
    position: absolute;
    right: -50px;
  }
}


.skill-10 {
  width: 70%;
  position: relative;

  &::after {
    // content: '70%';
    position: absolute;
    right: -50px;
  }
}


.skill-11 {
  width: 65%;
  position: relative;

  &::after {
    // content: '65%';
    position: absolute;
    right: -50px;
  }
}


.skill-12 {
  width: 65%;
  position: relative;

  &::after {
    // content: '65%';
    position: absolute;
    right: -50px;
  }
}
</style>
