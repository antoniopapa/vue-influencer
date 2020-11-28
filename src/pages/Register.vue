<template>
  <form class="form-signin" @submit.prevent="submit">
    <h1 class="h3 mb-3 font-weight-normal">Please register</h1>

    <input v-model="first_name" class="form-control" placeholder="First Name" required/>

    <input v-model="last_name" class="form-control" placeholder="Last Name" required/>

    <input v-model="email" type="email" class="form-control" placeholder="Email" required/>

    <input v-model="password" type="password" class="form-control" placeholder="Password" required/>

    <input v-model="password_confirm" type="password" class="form-control" placeholder="Password Confirm" required/>

    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "Register",
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async submit() {
      await axios.post('register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      });

      await this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
