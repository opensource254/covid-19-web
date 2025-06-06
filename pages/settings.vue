<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-list> <!-- Removed two-line -->
        <v-list-item>
          <div>
            <h1 class="text-h4">Covid_19 Kenya</h1> <!-- Replaced display-1 -->
            Version: v2.1
          </div>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" shaped> <!-- Replaced dense -->
        <v-list-item href="mailto:stanleyloren@gmail.com" target="_blank" prepend-icon="mdi-email"> <!-- Added prepend-icon -->
          Send Feedback
        </v-list-item>

        <v-list-item href="https://opensource254.co.ke" target="_blank" prepend-icon="mdi-information"> <!-- Added prepend-icon -->
          About Opensource254
        </v-list-item>

        <v-list-item
          href="https://drive.google.com/open?id=1Gea61QgE-Ks_eOJdc92czImXloztN-Oc"
          target="_blank"
          prepend-icon="mdi-android"
        >
          Android App
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          Dark Mode
          <template #append> <!-- Added template #append for switch -->
            <v-switch v-model="internalSwitchState"></v-switch>
          </template>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'
import { useHead } from '#imports'

const themeManager = useTheme()

// Initialize switch state based on current Vuetify theme name
const internalSwitchState = ref(themeManager.global.name.value === 'dark')

// Watch for changes in the switch state and update Vuetify theme
watch(internalSwitchState, (isDark) => {
  themeManager.global.name.value = isDark ? 'dark' : 'light'
})

// Watch for external changes to Vuetify's theme name and update switch
watch(() => themeManager.global.name.value, (newThemeName) => {
  internalSwitchState.value = newThemeName === 'dark'
})

useHead({
  title: 'Settings',
  // titleTemplate: null, // Handled by global config or layout
  meta: [
    {
      // hid: 'description', // hid is not standard
      name: 'description',
      content: 'App Settings',
    },
  ],
})
</script>

<style></style>
