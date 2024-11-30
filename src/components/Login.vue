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
.error-message {
  color: red;
  margin-top: 10px;
}
</style>