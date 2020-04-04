export const state = () => ({
  stats: {},
  darktheme: false,
  loading: true,
  hasError: false
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
  }
}
