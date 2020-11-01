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

        <v-card-subtitle>
          {{ p.nome }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn @click="show = !show" color="orange lighten-2" text>
            Descrição
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ p.descricao }}
            </v-card-text>
          </div>
        </v-expand-transition>
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
  },
  data: () => ({
    show: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>