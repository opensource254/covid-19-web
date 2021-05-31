<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-row justify="center">
          <v-col
            v-for="(item, index) in $store.getters.getNews"
            :key="index"
            cols="12"
            md="6"
          >
            <v-card outlined flat>
              <v-list-item>
                <v-list-item-avatar color="grey">
                  <v-avatar>
                    <v-img
                      src="https://pbs.twimg.com/profile_images/721965025859121152/342LCLJq_400x400.jpg"
                    ></v-img>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{
                    item.user
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    $moment(new Date(item.created_at)).fromNow()
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-img max-height="500" :src="item.media_url"></v-img>
              <v-card-text>
                <h3 v-html="item.tweet"></h3>
              </v-card-text>
              <v-card-actions>
                <v-row justify="center">
                  <v-col cols="12">
                    <v-btn
                      x-large
                      text
                      color="primary"
                      icon
                      @click.prevent="sharelink(item.tweetLink)"
                    >
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
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
      'https://twitter.opensource254.co.ke/api/v2/moh_kenya?count=50'
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
  },
  head() {
    return {
      title: 'Latest Updates From MOH',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get the latest updates from MOH Kenya'
        }
      ]
    }
  }
}
</script>

<style></style>
