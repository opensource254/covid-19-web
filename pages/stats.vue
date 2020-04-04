<template>
  <div>
    <v-alert v-if="$store.state.hasError" type="error">
      We are having trouble connecting to the internet</v-alert
    >
    <v-row v-if="!$store.state.loading" align="center" justify="center">
      <v-col cols="6" md="4" class="text-center">
        <v-card outlined hover shaped color="primary">
          <v-card-text class="title">
            Total Cases
            <p>{{ stats.cases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card outlined hover shaped color="secondary">
          <v-card-text class="title">
            Today Cases
            <p>{{ stats.todayCases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card outlined hover shaped color="success">
          <v-card-text class="title">
            Recovered
            <p>{{ stats.recovered }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card outlined hover shaped color="info">
          <v-card-text class="title">
            Active Cases
            <p>{{ stats.active }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card outlined hover shaped color="error">
          <v-card-text class="title">
            Total Deaths
            <p>{{ stats.deaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card outlined hover shaped color="warning">
          <v-card-text class="title">
            Today Deaths
            <p>{{ stats.todayDeaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-card outlined hover shaped color="teal">
          <v-card-text class="title">
            Critical Cases
            <p>{{ stats.critical }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="!$store.state.loading">
      <v-col>
        <p>Last Update: {{ new Date(stats.updated) }}</p>
      </v-col>
    </v-row>

    <v-row v-if="$store.state.loading" justify="center">
      <v-col cols="6" md="4" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>

      <v-col cols="12" md="6" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row v-if="$store.state.loading">
      <v-col cols="12" md="6">
        <v-skeleton-loader class="mx-auto" type="list-item"></v-skeleton-loader>
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
  mounted() {
    this.getData()
  },
  methods: {
    retryConnection() {
      window.ononline = () => {
        setTimeout(() => {
          this.getData()
        }, 3000)
      }
    },
    async getData() {
      try {
        const stats = await this.$axios.get(
          `https://corona.lmao.ninja/countries/kenya`
        )
        this.$store.commit('updatetStats', stats.data)
        this.$store.commit('hideError')
        this.$store.commit('stopLoading')
      } catch (error) {
        this.$store.commit('showError')
        this.retryConnection()
      }
    }
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
