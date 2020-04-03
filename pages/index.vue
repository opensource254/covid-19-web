<template>
  <v-row justify="center" align="center">
    <v-col>
      <Marquee
        ><h2>
          FEVER . HEADACHE . DRY COUGH. FATIGUE . DIFFICULTY IN BREATHING
        </h2></Marquee
      >
    </v-col>
    <v-col md="6">
      <v-img src="/images/infected.png"></v-img>
    </v-col>
    <v-col>
      <v-btn block large to="/helpline">Get Help</v-btn>
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
