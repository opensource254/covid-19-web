<template>
  <v-app class="raleway">
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-bottom-navigation shift grow color="primary" app>
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="/stats">
        <span>Stats</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>

      <v-btn to="/precautions">
        <span>Precautions</span>
        <v-icon>mdi-alert-outline</v-icon>
      </v-btn>

      <v-btn to="/information">
        <span>Information</span>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  mounted() {}
}
</script>
