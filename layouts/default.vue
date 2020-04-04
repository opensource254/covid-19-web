<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Covid_19 Kenya</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>
    <v-bottom-navigation grow color="primary" app>
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/stats">
        <span>Stats</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>

      <v-btn to="/precautions">
        <span>Precautions</span>
        <v-icon>mdi-alert</v-icon>
      </v-btn>

      <v-btn to="/information">
        <span>Information</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  mounted() {}
}
</script>

<style></style>
