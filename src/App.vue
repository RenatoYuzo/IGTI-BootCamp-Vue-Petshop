<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/petshop" text>Petshop</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <!-- <fade-transition origin="center" mode="out-in" :duration="250"> -->
      <router-view />
      <!-- </fade-transition> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
