<template>
  <div dir="rtl">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components:{
    Navbar
  }
}
</script>

<style>
html,
body{
  font-family: 'Vazir', sans-serif;

}
</style>