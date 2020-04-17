<template>
  <div>
    <v-app-bar flat color="transparent">
      <v-toolbar-title>Stats</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon color="primary" @click="shareStats">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-alert v-if="$store.state.hasError" type="error"
      >Oops! something went wrong 😢</v-alert
    >

    <v-row v-if="!$store.state.loading" align="center" justify="center">
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Total Cases
          <h3 class="raleway primary--text">{{ formatNumber(stats.cases) }}</h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Cases Today
          <h3 class="raleway yellow--text">
            {{ formatNumber(stats.todayCases) }}
          </h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card flat outlined>
          Critical Cases
          <h3 class="raleway red--text">{{ formatNumber(stats.critical) }}</h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <v-card flat outlined>
          Cases Per Million
          <h3 class="raleway indigo--text">
            {{ formatNumber(stats.casesPerOneMillion) }}
          </h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Recovered
          <h3 class="raleway success--text">
            {{ formatNumber(stats.recovered) }}
          </h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Active Cases
          <h3 class="raleway info--text">{{ formatNumber(stats.active) }}</h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Total Deaths
          <h3 class="raleway error--text">{{ formatNumber(stats.deaths) }}</h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Deaths per Million
          <h3 class="raleway error--text">
            {{ formatNumber(stats.deathsPerOneMillion) }}
          </h3>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined>
          Today Deaths
          <h3 class="raleway warning--text">
            {{ formatNumber(stats.todayDeaths) }}
          </h3>
        </v-card>
      </v-col>

      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-card flat outlined></v-card>
      </v-col>

      <v-col cols="6" md="4" class="text-center">
        <v-card flat outlined>
          Tests
          <h3 class="raleway teal--text">{{ formatNumber(stats.tests) }}</h3>
        </v-card>
      </v-col>

      <v-col cols="6" md="4" class="text-center">
        <v-card flat outlined>
          Tests Per Million
          <h3 class="raleway teal--text">
            {{ formatNumber(stats.testsPerOneMillion) }}
          </h3>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="$store.state.loading" justify="center">
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center">
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

    <v-row v-if="!$store.state.loading">
      <v-col>
        <h3 class="raleway font-weight-medium body-1">
          Last Update:
          {{
            `${new Date(stats.updated).getHours()}:${new Date(
              stats.updated
            ).getMinutes()} hrs`
          }}
        </h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  transition: 'scroll-y-reverse-transition',
  computed: {
    stats() {
      return this.$store.state.stats
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    formatNumber(number) {
      return Intl.NumberFormat('en-us').format(number)
    },
    shareStats() {
      if (navigator.share) {
        navigator
          .share({
            title: 'Latest Covid_19 Stats in Kenya',
            text: `Checkout the latest covid_19 stats in kenya. Total cases ${this.$store.state.stats.cases}...`,
            url: 'https://covid19kenya.site/stats'
          })
          .then(() => true)
          .catch(() => this.$store.commit('showError'))
      }
    },
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
          `https://corona.lmao.ninja/v2/countries/kenya`
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
        { property: 'og:url', content: 'https://covid19kenya.site' },
        {
          property: 'og:image',
          content: 'https://covid19kenya.site/images/infected.png'
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

<style lang="scss"></style>
