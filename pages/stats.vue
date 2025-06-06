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
    <v-alert v-if="hasError" type="error"
      >Oops! something went wrong 😢</v-alert
    >
    <v-container>
      <v-row v-if="!loading && stats" align="center" justify="center">
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Total Cases
            <h3 class="raleway primary--text">
              {{ formatNumber(stats.cases) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Cases Today
            <h3 class="raleway yellow--text">
              {{ formatNumber(stats.todayCases) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Critical Cases
            <h3 class="raleway red--text">
              {{ formatNumber(stats.critical) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Cases Per Million
            <h3 class="raleway indigo--text">
              {{ formatNumber(stats.casesPerOneMillion) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Recovered
            <h3 class="raleway success--text">
              {{ formatNumber(stats.recovered) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Active Cases
            <h3 class="raleway info--text">{{ formatNumber(stats.active) }}</h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Total Deaths
            <h3 class="raleway error--text">
              {{ formatNumber(stats.deaths) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Deaths per Million
            <h3 class="raleway error--text">
              {{ formatNumber(stats.deathsPerOneMillion) }}
            </h3>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Today Deaths
            <h3 class="raleway warning--text">
              {{ formatNumber(stats.todayDeaths) }}
            </h3>
          </v-card>
        </v-col>

        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined></v-card> <!-- Empty card, kept from original -->
        </v-col>

        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Tests
            <h3 class="raleway teal--text">{{ formatNumber(stats.tests) }}</h3>
          </v-card>
        </v-col>

        <v-col cols="6" md="6" class="text-center">
          <v-card flat outlined>
            Tests Per Million
            <h3 class="raleway teal--text">
              {{ formatNumber(stats.testsPerOneMillion) }}
            </h3>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-row v-if="loading" justify="center">
       <v-col cols="6" md="6" class="text-center" v-for="i in 7" :key="`skeleton-${i}`">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row v-if="loading">
      <v-col cols="12" md="6">
        <v-skeleton-loader class="mx-auto" type="list-item"></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row v-if="!loading && stats">
      <v-col>
        <h3 class="raleway font-weight-medium body-1">
          Last Update: {{ moment(stats.updated).fromNow() }}
        </h3>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useHead, useNuxtApp } from '#app'

dayjs.extend(relativeTime)

interface StatsData {
  cases: number;
  todayCases: number;
  critical: number;
  casesPerOneMillion: number;
  recovered: number;
  active: number;
  deaths: number;
  deathsPerOneMillion: number;
  todayDeaths: number;
  tests: number;
  testsPerOneMillion: number;
  updated: number; // timestamp
  // Add any other fields that might be present
}

const stats = ref<StatsData | null>(null)
const loading = ref(true)
const hasError = ref(false)

// const { $store } = useNuxtApp(); // For Vuex store if needed later with Pinia/Vuex setup

const formatNumber = (number: number | undefined): string => {
  if (number === undefined) return '0';
  return Intl.NumberFormat('en-us').format(number)
}

const shareStats = () => {
  if (navigator.share && stats.value) {
    navigator
      .share({
        title: 'Latest Covid_19 Stats in Kenya',
        text: `Checkout the latest covid_19 stats in kenya. Total cases ${stats.value.cases}...`,
        url: 'https://covid19kenya.site/stats',
      })
      .then(() => true)
      .catch(() => {
        hasError.value = true; // Simplified error handling for now
      })
  }
}

const retryConnection = () => {
  if (typeof window !== 'undefined') {
    window.ononline = () => {
      setTimeout(() => {
        fetchData()
      }, 3000)
    }
  }
}

const fetchData = async () => {
  loading.value = true
  hasError.value = false
  try {
    const data = await $fetch<StatsData>(
      `https://corona.lmao.ninja/v2/countries/kenya`
    )
    stats.value = data
    // If using store: $store.commit('updatetStats', data)
    // If using store: $store.commit('hideError')
  } catch (error) {
    console.error('Failed to fetch stats:', error)
    hasError.value = true
    // If using store: $store.commit('showError')
    retryConnection()
  } finally {
    loading.value = false
    // If using store: $store.commit('stopLoading')
  }
}

onMounted(() => {
  fetchData()
})

useHead({
  title: 'Statistics',
  // titleTemplate: null, // Handled globally or per layout
  meta: [
    {
      hid: 'description', // hid is not standard
      name: 'description',
      content:
        'A breakdown of the latest COVID_19 cases in kenya. The updates are in realtime',
    },
  ],
})
</script>

<style lang="scss"></style>
