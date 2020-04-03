<template>
  <v-row>
    <v-col>
      <v-list three-line dense>
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

<script>
export default {
  head() {
    return {
      title: 'Information',
      titleTemplate: null,
      meta: [
        {
          name: 'description',
          content: 'General information about COVID_19'
        },
        { name: 'theme-color', content: '#04c0ff' },
        { property: 'og:title', content: 'Covid_19 Kenya' },
        { property: 'og:site_name', content: 'Information' },
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        { property: 'og:url', content: 'https://covid19kenya.ml' },
        {
          property: 'og:image',
          content: 'https://covid19kenya.ml/images/infected.png'
        },
        {
          property: 'og:description',
          content: 'General information about COVID_19'
        }
      ]
    }
  }
}
</script>

<style></style>
