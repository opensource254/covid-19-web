<template>
  <v-row justify="center">
    <v-col cols="12" md="6" class="body-1">
      <v-list three-line dense shaped flat expand>
        <v-subheader>General Information</v-subheader>
        <v-list-item>
          Corona Virus Disease 2019 (COVID19) is a new respiratory illness that
          can easily be spread from person to person.
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          COVID-19 is spread through contact with droplets produced by a person
          who is sneezing or coughing or contaminated surfaces or objects.
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          COVID-19 can cause severe symptoms like fever, cough, headache, body
          aches and difficulty in breathing.</v-list-item
        >
        <v-divider></v-divider>
        <v-list-item>
          COVID-19 is preventable through; –Washing your hands with soap and
          running water or using an alcohol based hand sanitizer, – Keeping a
          social distance of at least 2 metres or 2-3 steps from people with
          flu-like symptoms. – Avoiding shaking hands, hugging or kissing with
          people with flu-like symptoms. – Staying at home and avoiding travel
          when you have flu-like symptoms.</v-list-item
        >
        <v-divider></v-divider>
        <v-list-item
          >Early detection and treatment can contribute greatly to survival of
          the patient.</v-list-item
        >
        <v-divider></v-divider>
        <v-list-item>COVID 2019 cannot be transmitted through air.</v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Information',
  // titleTemplate: null, // Handled by global config or layout
  meta: [
    {
      name: 'description',
      content:
        'Information about Corona Virus in Kenya. All you need to know about Covid_19(Corona Virus 2019)',
    },
  ],
})
</script>

<style></style>
