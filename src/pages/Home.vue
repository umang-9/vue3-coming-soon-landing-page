<template>
  <!-- Header start -->
  <Header />
  <!-- Header end -->

  <main>
    <Home />
  </main>

</template>

<script>
import Header from '../components/Header.vue'
import Home from '../components/HomeContainer.vue'

export default {
  components: {
    Header,
    Home
  }
}
</script>