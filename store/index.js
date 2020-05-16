export const state = () => ({
  stats: {},
  darktheme: false,
  loading: true,
  hasError: false,
  news: []
})

export const mutations = {
  updatetStats(state, dt) {
    state.stats = dt
  },
  updateTheme(state, dt) {
    localStorage.darktheme = this.theme
    state.darktheme = dt
  },
  stopLoading(state) {
    state.loading = false
  },
  showLoading(state) {
    state.loading = true
  },
  showError(state) {
    state.hasError = true
  },
  hideError(state) {
    state.hasError = false
  },
  addNews(state, news) {
    localStorage.news = JSON.stringify(news.tweets)
    state.news = news.tweets
  }
}

export const getters = {
  getNews(state) {
    // Try getting the news from state
    if (state.news.length > 0) {
      const news = state.news.map((item) => {
        let tweetLink
        const textAsArray = item.tweet.split(' ')
        textAsArray.forEach((tweet) => {
          if (tweet.includes('https://t.co/')) {
            // add this to the tweet link section
            tweetLink = tweet
            // remove it from the main body
            const indexOfLink = textAsArray.indexOf(tweetLink)
            textAsArray.splice(indexOfLink, 1)
          }
        })

        return {
          created_at: item.created_at,
          tweetLink,
          tweet: textAsArray.join(' ')
        }
      })
      return news
    }
    return []
  }
}
