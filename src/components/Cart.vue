<template>
  <v-badge
    class="float-right"
    overlap
    color="primary"
    :content="products.length"
  >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          outlined
          fab
          dark
          x-large
          color="purple"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon> mdi-cart-variant </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in products" :key="index">
          <v-list-item-title
            >R${{ item.preco }},00 {{ item.nome }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-badge>
</template>

<script>
export default {
  name: "Cart",
  props: {
    products: Array,
  },
};
</script>
