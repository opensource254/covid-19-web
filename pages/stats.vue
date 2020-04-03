<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-card color="primary">
          <v-card-text class="title">
            Total Cases
            <p>{{ stats.cases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card color="secondary">
          <v-card-text class="title">
            Today Cases
            <p>{{ stats.todayCases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card color="success">
          <v-card-text class="title">
            Recovered
            <p>{{ stats.recovered }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card color="info">
          <v-card-text class="title">
            Active Cases
            <p>{{ stats.active }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card color="error">
          <v-card-text class="title">
            Total Deaths
            <p>{{ stats.deaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card color="warning">
          <v-card-text class="title">
            Today Deaths
            <p>{{ stats.todayDeaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="text-center">
        <v-card color="teal">
          <v-card-text class="title">
            Critical Cases
            <p>{{ stats.critical }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p>{{ new Date(stats.updated) }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    stats() {
      return this.$store.state.stats
    }
  },
  async mounted() {
    const stats = await this.$axios.get(
      `https://corona.lmao.ninja/countries/kenya`
    )
    this.$store.commit('updatetStats', stats.data)
  },
  head() {
    return {
      title: 'Statistics',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A breakdown of the latest COVID_19 cases in kenya. The updates are in realtime'
        },
        { property: 'og:title', content: 'Covid_19 Kenya' },
        { property: 'og:site_name', content: 'Covid 19 Kenya' },
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        { property: 'og:url', content: 'https://covid19kenya.ml' },
        {
          property: 'og:image',
          content: 'https://covid19kenya.ml/images/infected.png'
        },
        {
          property: 'og:description',
          content:
            'A breakdown of the latest COVID_19 cases in kenya. The updates are in realtime'
        }
      ]
    }
  }
}
</script>

<style></style>
