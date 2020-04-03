<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-expansion-panels popout inset>
        <v-expansion-panel>
          <v-expansion-panel-header
            >Signs and symptoms</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-list dense rounded shaped>
              <v-list-item>
                <v-list-item-title>High Body Temperature</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Coughing and Sneezing</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Sore Throat</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Head Ache</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Difficulty In Breathing</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="body-2">
          <v-expansion-panel-header>How it is spread</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list dense>
              <v-list-item>
                Through respiratory droplets from an infected person land on
                one's eyes, nose or mouth
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                Through close contact with a COVID-19 infected person withing
                two metres, 0.6 ft or 2-3 step
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                Touching surfaces or objects contaminated with the virus and
                then touching the mouth nose or eyes
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="body-2">
          <v-expansion-panel-header
            >How to stop the spread</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-list dense>
              <v-list-item>
                Wash Your hands regularly with soap and running water or boiled
                cooled water
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                Using an alcohol based sanitizer
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                Cough or sneeze into a disposable tissue or bent elbow, and wash
                hands immediately. Dispose the tissue and a trash or burn it.
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                Avoid shaking hands, hugging or kissing with people that have
                flu like symptoms
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                If you are coughing or sneezing, you should stay home or keep a
                social distance and avoid mixing with people
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                Maintain good respiratory hygiene by covering your mouth and
                nose while coughing while sneezing with a handkerchief, tissue
                or into a flexed elbow
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col cols="12" md="6" class="body-2">
      <h3>What is self quarantine?</h3>
      Self qaurantine is an act of individuals who may have been exposed to
      COVID-19 separating themselves for for 14 days in order to monitor if they
      develop symptoms

      <h3>Who should self quarantine?</h3>
      Anyone who has travelled within the past 14 days to a country with
      sustained reported COVID-19 cases or has had close contact with a person
      showing covid-19 symptoms.

      <h3>What does self quarantine entail?</h3>
      <ol>
        <li>
          Stay in a separate room and use a separate bathroom if available.
          Disinfect surfaces and clothing.
        </li>
        <li>
          Ensure surfaces in the household are cleaned and disinfected
        </li>
        <li>
          Avoid sharing household items. Wash these items thoroghly after use.
        </li>
        <li>
          Clean your hands with soap and running water for atleast 20 seconds.
          If <b>NOT</b> available, you can use an <i>alcohol</i> based hand
          sanitizer
        </li>
        <li>
          <b>No visitors</b> unless the visitor is really needed in your home
        </li>
        <li>Put on a <b>Surgical mask</b> when around people</li>
      </ol>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Precations',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know in order to be safe from COVID_19'
        },
        { property: 'og:title', content: 'Covid_19 Kenya' },
        { property: 'og:site_name', content: 'Precautions' },
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        { property: 'og:url', content: 'https://covid19kenya.ml' },
        {
          property: 'og:image',
          content: 'https://covid19kenya.ml/images/infected.png'
        },
        {
          property: 'og:description',
          content: 'What you need to know in order to be safe from COVID_19'
        }
      ]
    }
  }
}
</script>

<style></style>
