<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="col-md-8">
    <div class="sign-up-form">
      <h6 class="sub-title">New course</h6>
      <h2 class="title">iPhone Photo <br/>Academy</h2>
      <p>Sign up now to get notified <br/>when this course is available!</p>
      <form class="">
        <div class="form-control-wrap">
          <input class="form-control" type="email" placeholder="Enter your Email Address" aria-label="default">
          <!-- <label>Enter your Email Address</label> -->
        </div>
        <div class="form-button">
          <button type="submit" class="btn btn-primary">Please Notify Me</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
