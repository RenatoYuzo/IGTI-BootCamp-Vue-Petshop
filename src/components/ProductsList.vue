<template>
  <v-row>
    <v-col
      v-for="p in products"
      :key="p.id"
      cols="12"
      xs="12"
      sm="12"
      md="6"
      lg="4"
      xl="3"
    >
      <v-card>
        <v-img :src="p.foto" height="200px" />

        <v-card-title>
          {{ p.nome }}
        </v-card-title>

        <v-card-subtitle class="float-right">
          <span :class="p.desconto ? 'discount' : ''"
            >R${{ convertCoinPtBr(p.preco) }}</span
          >
          <span v-if="p.desconto"> R${{ convertCoinPtBr(p.desconto) }}</span>
        </v-card-subtitle>
        <v-card-subtitle class="text-continuous">
          {{ p.descricao }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn @click="addCart(p)" color="primary lighten-2" text>
            Comprar
            <v-icon right dark> mdi-cart-variant </v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn @click="seeProduct(p)" color="primary lighten-2" text>
            Ver
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProductsList",
  components: {},
  props: {
    products: Array,
    items: Array,
  },
  data: () => ({}),
  methods: {
    addCart(item) {
      this.items.push(item);
    },
    seeProduct(item) {
      this.$router.push(`/product/` + item.id);
    },
    convertCoinPtBr(value) {
      return new Intl.NumberFormat("pt-BR").format(value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-continuous {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.discount {
  text-decoration: line-through;
  color: gray;
}
</style>