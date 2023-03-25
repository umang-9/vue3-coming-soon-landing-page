

export default {
  data () {
    return {
      errors: [],
      email: null,
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefualt();
      this.errors = [];
      if(!this.email){
        this.errors.push("Email required.");
      } else 
      if(!this.validEmail(this.email)){
        this.errors.push("Valid email required.")
      } else {
        this.$router.push('/thank-you');
      }
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

      <form id="app" @submit="checkForm" novalidate="true">
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
