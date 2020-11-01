<template>
  <v-container>
    <Cart :products="this.products" />
    <ProductsList :products="this.products" />
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