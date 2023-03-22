<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="iPhone Photography School" class="logo" src="./assets/images/ips-logo.svg" />

    
  </header>

  <main>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <TheWelcome />
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
