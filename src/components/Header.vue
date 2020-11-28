<template>
  <section class="jumbotron text-center">
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="lead text-muted">{{ description }}</p>
      <p v-if="!this.isAuthenticated()">
        <router-link to="/login" class="btn btn-primary my-2">Login</router-link>
        <router-link to="/register" class="btn btn-secondary my-2">Register</router-link>
      </p>
      <p v-if="this.isAuthenticated()">
        <router-link to="/stats" class="btn btn-primary my-2">Stats</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  methods: {
    isAuthenticated() {
      return this.user?.id;
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    title() {
      if (this.isAuthenticated()) {
        return `$${this.user.revenue}`;
      }

      return 'Welcome';
    },
    description() {
      if (this.isAuthenticated()) {
        return 'You have earned in total!';
      }

      return 'Share links and earn 10% of the product price!';
    }
  }
}
</script>
