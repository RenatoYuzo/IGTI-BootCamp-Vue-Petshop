<template>
  <v-container>
    <Cart :items="this.items" />
    <ProductsList :products="this.products" :items="this.items" />
  </v-container>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import Cart from "../components/Cart.vue";
import { ApiService } from "../services/ApiService";

import axios from "axios";

export default {
  name: "Petshop",
  components: {
    ProductsList,
    Cart,
  },
  props: {},
  data: () => ({
    service: new ApiService(),
    products: [],
    items: [
      {
        preco: 50.2,
        nome: "Produto 1",
      },
      {
        preco: 50.3,
        nome: "Produto 2",
      },
      {
        preco: 50.4,
        nome: "Produto 3",
      },
      {
        preco: 50,
        nome: "Produto 4",
      },
    ],
  }),
  created() {
    this.service.getAllProducts().then((res) => {
      this.products = res.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>