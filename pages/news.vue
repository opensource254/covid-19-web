<template>
  <div>
    <v-row justify="center">
      <v-col
        v-for="(item, index) in $store.getters.getNews"
        :key="index"
        cols="10"
        md="6"
      >
        <v-card>
          <v-card-title>
            Ministry Of Health
          </v-card-title>
          <v-card-subtitle>
            {{ item.created_at }}
          </v-card-subtitle>
          <v-card-text>
            <h3 v-html="item.tweet"></h3>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" target="_blank" :href="item.tweetLink">
              View More
            </v-btn>
            <v-btn
              text
              color="primary"
              @click.prevent="sharelink(item.tweetLink)"
            >
              Share
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="$fetchState.pending" justify="center">
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
    </v-row>
  </div>
</template>

<script>
export default {
  async fetch() {
    const news = await this.$axios.get(
      'https://twitter.covid19kenya.site/twitter/MOH_kenya/recent'
    )

    this.$store.commit('addNews', news.data)
  },
  fetchOnServer: false,
  methods: {
    sharelink(link) {
      if (navigator.share) {
        navigator
          .share({
            title: 'Check out this update from MOH',
            text: `Checkout this update by the ministry of health Kenya on COVID 19`,
            url: link
          })
          .then(() => true)
          .catch(() => {})
      }
    }
  }
}
</script>

<style></style>
