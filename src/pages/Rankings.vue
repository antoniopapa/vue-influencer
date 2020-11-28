<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Revenue</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(ranking, i) in rankings" :key="ranking.id">
            <td>{{ i + 1 }}</td>
            <td>{{ ranking.name }}</td>
            <td>{{ ranking.revenue }}</td>
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
  name: "Rankings",
  data() {
    return {
      rankings: []
    }
  },
  async mounted() {
    const {data} = await axios.get('rankings');

    this.rankings = data;
  }
}
</script>

<style scoped>

</style>
