<script>

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useRouter } from "vue-router";
 const router = useRouter();

export default {
  
  setup () {
    
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        email: ''
      },
    }
  },
    
  validations() {
    return {
      form: {
        email: {
           required, email 
        }
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // const router = useRouter();
      const result = this.v$.$validate()
      var error = document.getElementById("error-msg");
      var placeholder = document.getElementById("placeholder");
      if (result) {
        error.style.display = "none";
        placeholder.style.display = "block";
        router.push({name: 'ThankYou'});
      }
      else {
        error.style.display = "block";
        placeholder.style.display = "none";
        console.log("Errors");
      }
    }
  },
  
}
</script>

<template>
  <div class="col">
    <div class="sign-up-form">
      <h6 class="sub-title">New course</h6>
      <h2 class="title">iPhone Photo <br/>Academy</h2>
      <p>Sign up now to get notified <br/>when this course is available!</p>

      <form id="app" @submit="onSubmit">
          <div class="form-control-wrap" :class="{ error: v$.form.email.$errors.length }">
            <!-- <input type="email" name="email" id="email" v-model="state.email"> -->
            <input class="form-control" placeholder="" type="email" v-model="v$.form.email.$model">
            <label id="placeholder">Enter your Email Address</label>
            <label id="error-msg">Please enter a valid email</label>
          </div>
          <!-- error message -->
        <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
          <div class="form-button">
            <input type="submit" class="btn btn-primary" value="Please Notify Me">
             <!-- <button class="btn btn-primary">Please Notify Me</button> -->
          </div>
        </form>


    </div>
  </div>
</template>

<style scoped>
</style>
