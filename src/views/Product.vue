<template>
  <v-container>
    <h1>{{ product.nome }}</h1>
  </v-container>
</template>

<script>
import { ApiService } from "../services/ApiService";

export default {
  name: "Product",
  components: {},
  props: {},
  data: () => ({
    service: new ApiService(),
    id: String,
    product: {},
  }),
  async mounted() {
    this.id = this.$route.params.id;
    await this.getProduct();
  },
  methods: {
    async getProduct() {
      this.service.getProductById(this.id).then((res) => {
        this.product = res.data;
      });
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>