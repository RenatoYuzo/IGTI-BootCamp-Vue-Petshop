<template>
  <v-container>
    <v-card class="mx-auto" max-width="1000px">
      <v-img
        class="white--text align-end"
        max-height="500px"
        :src="product.foto"
      >
        <v-card-title class="fontSize2em">{{ product.nome }}</v-card-title>
      </v-img>

      <v-card-subtitle class="fontSize2em">
        <span :class="product.desconto ? 'discount' : ''"
          >R${{ convertCoinPtBr(product.preco) }}</span
        >
        <span v-if="product.desconto">
          R${{ convertCoinPtBr(product.desconto) }}</span
        >
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{ product.descricao }}
      </v-card-text>
    </v-card>
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
    convertCoinPtBr(value) {
      return new Intl.NumberFormat("pt-BR").format(value);
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fontSize2em {
  font-size: 2em;
}
.discount {
  text-decoration: line-through;
  color: gray;
}
</style>