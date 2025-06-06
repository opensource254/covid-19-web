<template>
  <v-app class="raleway">
    <v-main> <!-- Replaced v-content with v-main -->
      <v-container>
        <slot /> <!-- Replaced nuxt with slot -->
      </v-container>
    </v-main>

    <v-bottom-navigation shift grow color="primary" app> <!-- app prop might be default or handled differently in V3 -->
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="/stats">
        <span>Stats</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>

      <v-btn to="/news">
        <span>News</span>
        <v-icon>mdi-newspaper</v-icon>
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

<script setup lang="ts">
// No script needed after removing Firebase messaging
// Vuetify components like v-app, v-main, v-container, v-bottom-navigation, v-btn, v-icon are auto-imported by Nuxt Vuetify module.
// Raleway class is assumed to be handled by global CSS in assets/css/app.css
</script>
