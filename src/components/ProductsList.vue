<template>
  <div>
    <v-row>
      <h1>List of products!</h1>
    </v-row>
    <v-row>
      <h1>{{ teste }}</h1>
    </v-row>
    <v-row>
      <h1>{{ msg }}</h1>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  components: {},
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