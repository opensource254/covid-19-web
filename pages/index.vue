<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <Marquee
        ><h2 class="text--secondary">
          FEVER . HEADACHE . DRY COUGH. FATIGUE . DIFFICULTY IN BREATHING
        </h2></Marquee
      >
    </v-col>
    <v-col cols="12" md="6">
      <v-img contain height="325" src="/images/infected.png"></v-img>
    </v-col>
    <v-col cols="12" md="4">
      <v-btn depressed color="primary" block large to="/helpline"
        >Get Help <v-icon>mdi-help </v-icon>
      </v-btn>
      <v-btn depressed color="primary" class="mt-1" block large to="/settings"
        >Settings
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  transition: 'slide-y-transition',
  head() {
    return {
      title: 'Covid_19 Kenya',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Corona virus. Covid_19 Kenya. Information and help about covid 19 kenya. This app will give all that to you'
        },
        { property: 'og:title', content: 'Welcome' },
        { property: 'og:site_name', content: 'Covid 19 kenya' },
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        { property: 'og:url', content: 'https://covid19kenya.site' },
        {
          property: 'og:image',
          content: 'https://covid19kenya.site/images/infected.png'
        },
        {
          property: 'og:description',
          content:
            'Corona virus. Covid_19 Kenya. Information and help about covid 19 kenya. This app will give all that to you'
        }
      ]
    }
  }
}
</script>

<style></style>
