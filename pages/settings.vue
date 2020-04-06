<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-list two-line>
        <v-list-item>
          <div>
            <h1 class="display-1">Covid_19 Kenya</h1>
            Version: 1.1.0
          </div>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list dense shaped>
        <v-list-item href="mailto:stanleyloren@gmail.com" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
            <v-list-item-content> Send Feedback</v-list-item-content>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item href="https://opensource254.co.ke" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
            <v-list-item-content>About Opensource254</v-list-item-content>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item
          href="https://drive.google.com/open?id=1Gea61QgE-Ks_eOJdc92czImXloztN-Oc"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-android</v-icon>
            <v-list-item-content>Android App</v-list-item-content>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            Dark Mode
          </v-list-item-content>
          <v-list-item-action>
            <v-switch v-model="theme" @change="updateTheme"></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      theme: false
    }
  },
  methods: {
    updateTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  head() {
    return {
      title: 'Settings',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'App Settings'
        }
      ]
    }
  }
}
</script>

<style></style>
