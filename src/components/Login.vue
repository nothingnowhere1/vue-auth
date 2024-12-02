<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="onLogin">
      <label for="username">Username:</label>
      <input id="username" v-model="username" type="text" required />

      <label for="password">Password:</label>
      <input id="password" v-model="password" type="password" required />

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    onLogin() {
      if (this.username !== '' && this.password === '111') {
        this.errorMessage = '';
        this.$router.push('/main');
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.error-message {
  color: red;
  margin-top: 10px;
}
input {
  width:200px;
  border-radius:30px;
  padding:10px 20px 10px 20px;
  border:none;
  box-shadow: 0 5px 7px 2px black;
}
button {
  color:white;
  background-color:blue;
  padding: 10px 20px 10px 20px;
  border-radius:20px;
}
</style>