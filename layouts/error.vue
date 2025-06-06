<template>
  <v-app> <!-- Removed dark prop to use global theme -->
    <v-container class="fill-height d-flex flex-column justify-center align-center">
      <h1 v-if="error && error.statusCode === 404">
        {{ pageNotFoundMessage }}
      </h1>
      <h1 v-else-if="error">
        {{ otherErrorMessage }} ({{ error.statusCode }})
      </h1>
      <h1 v-else>
        An unexpected error occurred
      </h1>
      <NuxtLink to="/" class="mt-4">
        Go to Home page
      </NuxtLink>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue' // Added import
import { useError, useHead, NuxtLink } from '#imports' // Or from 'nuxt/app'

const error = useError()

const pageNotFoundMessage = '404 Not Found'
const otherErrorMessage = 'An error occurred'

const title = computed(() =>
  error.value && error.value.statusCode === 404
    ? pageNotFoundMessage
    : error.value?.message || otherErrorMessage
)

useHead({
  title: title,
})
</script>

<style scoped>
h1 {
  font-size: 20px; /* Consider using Vuetify typography classes e.g. text-h4 */
  margin-bottom: 16px;
}
.fill-height {
  min-height: 100vh;
}
</style>
