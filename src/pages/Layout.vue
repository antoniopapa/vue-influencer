<template>
  <Nav/>

  <main role="main">

    <router-view/>

  </main>
</template>

<script>
import Nav from "@/components/Nav";
import axios from 'axios';
import {User} from "@/classes/user";

export default {
  name: "Layout",
  components: {
    Nav
  },
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    const {data} = await axios.get('user');

    this.user = new User(data.data);

    this.$store.dispatch('setUser', this.user);
  }
}
</script>
