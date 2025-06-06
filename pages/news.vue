<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-row justify="center">
          <v-col
            v-for="(item, index) in processedNews"
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
                  <v-list-item-title class="text-h6">{{ <!-- Vuetify 3 uses text-h6 for headline -->
                    item.user
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    moment(new Date(item.created_at)).fromNow()
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

    <v-row v-if="pending" justify="center">
      <v-col cols="6" md="4" lg="3" xl="2" class="text-center" v-for="i in 6" :key="i">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-if="error" justify="center">
      <v-col cols="12" class="text-center">
        <v-alert type="error">Failed to load news. Please try again later.</v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useHead } from '#app' // Or from 'nuxt/app' in Nuxt 3

dayjs.extend(relativeTime)

const newsUrl = 'https://twitter.opensource254.co.ke/api/v2/moh_kenya?count=50'

// Define types for the raw and processed news items
interface RawNewsItem {
  created_at: string;
  tweet: string;
  media?: { media_url_https: string }[];
  user: string;
  // Add other properties that might exist on the raw item
}

interface ProcessedNewsItem {
  created_at: string;
  tweetLink?: string;
  tweet: string;
  media_url?: string;
  user: string;
}

const { data: rawNewsData, pending, error } = await useFetch<RawNewsItem[]>(newsUrl, {
  // Nuxt 2's fetchOnServer: false equivalent is to ensure useFetch runs on client if needed,
  // but by default useFetch (and useAsyncData) runs on server first.
  // If client-side only is strictly needed, consider { server: false }
  // For this case, server-side fetching is fine.
});

const processedNews = computed((): ProcessedNewsItem[] => {
  if (!rawNewsData.value) {
    return []
  }
  return rawNewsData.value.map((item: RawNewsItem) => {
    let media_url: string | undefined
    let tweetLink: string | undefined
    const textAsArray = item.tweet.split(' ')
    textAsArray.forEach((tweetPart) => {
      if (tweetPart.includes('https://t.co/')) {
        tweetLink = tweetPart
        const indexOfLink = textAsArray.indexOf(tweetLink)
        textAsArray.splice(indexOfLink, 1)
      }
    })

    if (item.media && item.media.length > 0) {
      media_url = item.media[0].media_url_https
    }

    return {
      created_at: item.created_at,
      tweetLink,
      tweet: textAsArray.join(' '),
      media_url,
      user: item.user,
    }
  })
})

const sharelink = (link?: string) => {
  if (link && navigator.share) {
    navigator
      .share({
        title: 'Check out this update from MOH',
        text: `Checkout this update by the ministry of health Kenya on COVID 19`,
        url: link,
      })
      .then(() => true)
      .catch(() => {}) // Consider logging error or user feedback
  }
}

useHead({
  title: 'Latest Updates From MOH',
  // titleTemplate: null, // In Nuxt 3, titleTemplate is often global or per-layout
  meta: [
    {
      hid: 'description', // hid is not standard, use name
      name: 'description',
      content: 'Get the latest updates from MOH Kenya',
    },
  ],
})
</script>

<style></style>
