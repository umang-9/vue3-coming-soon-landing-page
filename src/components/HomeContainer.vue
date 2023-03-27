<script>
import SignUpForm from '../components/SignUpForm.vue'
import Carousel from '../components/Carousel.vue'

export default {
  components: {
    SignUpForm,
    Carousel
  }
}
</script>

<template>
    <div class="wrapper">
      <div class="container d-flex align-items-center">
        <SignUpForm />
        <Carousel />
      </div>
    </div>
</template>