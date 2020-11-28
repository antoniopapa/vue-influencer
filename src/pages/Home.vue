<template>
  <Header/>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">

        <div class="col-md-12 mb-4" v-if="link">
          <div class="alert alert-info" role="alert">
            Link generated: {{ link }}
          </div>
        </div>

        <div class="col-md-12 mb-4" v-if="error">
          <div class="alert alert-danger" role="alert">
            You should be logged in to generate a link
          </div>
        </div>

        <div class="col-md-12 mb-4 input-group">
          <input class="form-control" placeholder="Search" @keyup="search($event.target.value)"/>
          <div class="input-group-append" v-if="selected.length > 0">
            <button class="btn btn-info" @click="generate()">Generate Link</button>
          </div>
        </div>

        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm" @click="select(product.id)" :class="{selected: isSelected(product.id)}">
            <img :src="product.image" height="200"/>
            <div class="card-body">
              <p class="card-text">{{ product.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">${{ product.price }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from 'axios';

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      products: [],
      selected: [],
      link: '',
      error: false
    }
  },
  async mounted() {
    await this.load();
  },
  methods: {
    async load(text = '') {
      const {data} = await axios.get(`products?s=${text}`);

      this.products = data.data;
    },
    async search(text) {
      await this.load(text);
    },
    isSelected(id) {
      return this.selected.some(s => s === id);
    },
    select(id) {
      if (!this.isSelected(id)) {
        this.selected.push(id);
        return;
      }

      this.selected = this.selected.filter(s => s !== id);
    },
    async generate() {
      try {
        const {data} = await axios.post('links', {
          products: this.selected
        });

        this.link = `${process.env.VUE_APP_CHECKOUT}/${data.data.code}`;
      } catch (e) {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}

.card.selected {
  border: 4px solid darkcyan;
}

</style>
