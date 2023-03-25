<script setup>
const emit = defineEmits({
  // No validation
  click: null,

  // Validate submit event
  submit: ({ email }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('submit', { email, password })
}
</script>

export default {
  emits: {
    // No validation
    click: null,

    // Validate submit event
    submit: ({ email }) => {
      if (email) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email) {
      this.$emit('submit', { email })
    }
  }
}


<template>
  <div class="col-md-8">
    <div class="sign-up-form">
      <h6 class="sub-title">New course</h6>
      <h2 class="title">iPhone Photo <br/>Academy</h2>
      <p>Sign up now to get notified <br/>when this course is available!</p>
      <!-- <form class="" id="app" @submit.prevent="onSubmit">
        <div class="form-control-wrap">
          <input class="form-control" id="email" v-model="email"  name="email" type="email" placeholder="Enter your Email Address" aria-label="default" >
          <div id="errors">{{ error }}</div>
        </div>
        <div class="form-button">
          <button type="submit" class="btn btn-primary">Please Notify Me</button>
        </div>
      </form> -->

      <form id="app" @submit="$emit('submitForm')" novalidate="true">
          <div class="form-control-wrap">
            <input type="email" name="email" id="email" v-model="email">
          </div>
          <div id="errors">{{ error }}</div>
          <div class="form-button">
            <input type="submit" class="btn btn-primary" value="Please Notify Me">
          </div>
        </form>

    </div>
  </div>
</template>

<style scoped>
</style>
