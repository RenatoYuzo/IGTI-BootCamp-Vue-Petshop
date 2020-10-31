<template>
  <v-container>
    <v-row>
      <h1>Wellcome to petshop!</h1>
    </v-row>
    <v-row>
      <ProductsList msg="TEST PROPS" />
    </v-row>
  </v-container>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";

export default {
  name: "Petshop",
  components: {
    ProductsList,
  },
  props: {
    msg: String,
  },
  data: () => ({
    teste: "TESTANDO",
  }),
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>