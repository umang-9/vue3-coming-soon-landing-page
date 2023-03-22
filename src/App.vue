<script setup>
import SignUpForm from './components/SignUpForm.vue'
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
</script>

<template>
  <!-- Header start -->
  <Header />
  <!-- Header end -->

  <main>

    <div class="wrapper">
      <div class="container d-flex align-items-center">
        <SignUpForm msg="You did it!" />
        <Carousel />
      </div>
    </div>
    
      
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
