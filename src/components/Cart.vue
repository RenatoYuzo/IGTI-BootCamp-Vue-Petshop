<template>
  <v-badge class="float-right" overlap color="primary" :content="items.length">
    <v-menu
      offset-y
      transition="scale-transition"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          outlined
          fab
          dark
          x-large
          color="deep-purple"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon> mdi-cart-variant </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group>
          <template v-for="(item, i) in items">
            <v-list-item
              :key="`item-${i}`"
              :value="item"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item-content>
                <v-list-item-title
                  >{{ item.nome }} (R${{
                    convertCoinPtBr(item.preco)
                  }})</v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon color="deep-purple accent-4">
                  <v-icon @click="removeItemCart(item)">fa-times</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list-item-group>
        <v-list-item-group>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Total: R${{ calcTotal() }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-badge>
</template>

<script>
export default {
  name: "Cart",
  props: {
    items: Array,
  },
  methods: {
    removeItemCart(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    },
    convertCoinPtBr(value) {
      return new Intl.NumberFormat("pt-BR").format(value);
    },
    calcTotal() {
      if (this.items.length === 0) return 0;

      const total = this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.preco;
      }, 0);

      return this.convertCoinPtBr(total);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>