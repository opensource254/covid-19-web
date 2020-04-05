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
    <v-col cols="12" md="7">
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
  head() {
    return {
      title: 'Covid_19 Kenya',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get All COVID_19 contact information in Kenya'
        }
      ]
    }
  }
}
</script>

<style></style>
