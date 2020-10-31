<template>
  <v-container>
    <v-row>
      <h1>Wellcome to petshop!</h1>
    </v-row>
    <v-row>
      <ProductsList msg="TEST PROPS" />
    </v-row>
    <v-card v-for="p in products" :key="p.id">
      {{ p.nome }}
    </v-card>
  </v-container>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import axios from "axios";

export default {
  name: "Petshop",
  components: {
    ProductsList,
  },
  props: {
    msg: String,
    products: [],
  },
  data: () => ({
    teste: "TESTANDO",
  }),
  created() {
    axios.get("http://localhost:3000/produtos").then((res) => {
      this.products = res.data;
    });
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>