<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2 class="text--secondary">
          FEVER . HEADACHE . DRY COUGH. FATIGUE . DIFFICULTY IN BREATHING
        </h2>
    </v-col>
    <v-col cols="12" md="6">
      <v-img contain height="325" src="/images/infected.png"></v-img>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-btn depressed color="primary" block large to="/helpline"
        >Get Help <v-icon>mdi-help </v-icon>
      </v-btn>
      <v-btn depressed color="primary" class="mt-1" block large to="/settings"
        >Settings
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn depressed color="primary" class="mt-1" block large to="/news"
        >News
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Covid_19 Kenya',
  // titleTemplate: null, // Handled by global config or layout
  meta: [
    {
      // hid: 'description', // hid is not standard, use name
      name: 'description',
      content:
        'Corona virus. Covid_19 Kenya. Information and help about covid 19 kenya. This app will give all that to you',
    },
  ],
})
</script>

<style></style>
