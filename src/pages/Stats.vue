<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
          <tr>
            <th>Link</th>
            <th>Users</th>
            <th>Revenue</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="order in orders" :key="order">
            <td>{{ link(order.code) }}</td>
            <td>{{ order.count }}</td>
            <td>{{ order.revenue }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Stats",
  data() {
    return {
      orders: []
    }
  },
  async mounted() {
    const {data} = await axios.get('stats');

    this.orders = data;
  },
  methods: {
    link(code) {
      return `${process.env.VUE_APP_CHECKOUT}/${code}`;
    }
  }
}
</script>

<style scoped>

</style>
