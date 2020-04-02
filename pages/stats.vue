<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Cases
            <p>{{ stats.cases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Recovered
            <p>{{ stats.recovered }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Deaths
            <p>{{ stats.deaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Today's Deaths
            <p>{{ stats.todayDeaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Today's Cases
            <p>{{ stats.todayCases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Critical Cases
            <p>{{ stats.critical }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card>
          <v-card-text class="title">
            Active Cases
            <p>{{ stats.active }}</p>
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
  }
}
</script>

<style></style>
