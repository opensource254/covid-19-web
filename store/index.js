export const state = () => ({
  stats: {},
  darktheme: false
})

export const mutations = {
  updatetStats(state, dt) {
    state.stats = dt
  },
  updateTheme(state, dt) {
    localStorage.darktheme = this.theme
    state.darktheme = dt
  }
}
