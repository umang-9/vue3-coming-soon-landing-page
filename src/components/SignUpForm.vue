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
      const result = this.v$.$validate();
      var error = document.getElementById("error-msg");
      var placeholder = document.getElementById("placeholder");
      var formInput = document.getElementById("formInput");
      result.then(rs => {
        if (rs) {
          console.log("true");
          error.style.display = "none";
          placeholder.style.display = "block";
          // formInput.classList.remove("error");
          this.$router.push('/thank-you')

        } else {
          error.style.display = "block";
          placeholder.style.display = "none";
          // formInput.classList.add("error");
          console.log("Errors");
        }
      });
      
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

          <div class="form-control-wrap">
            <input id="formInput" class="form-control" :class="{ error: v$.form.email.$errors.length }" placeholder="" type="email" v-model="v$.form.email.$model">
            <label id="placeholder">Enter your Email Address</label>
            <label id="error-msg">Please enter a valid email</label>
          </div>

          <div class="form-button">
            <input type="submit" class="btn btn-primary" value="Please Notify Me">
          </div>

        </form>


    </div>
  </div>
</template>
