export const state = () => ({
  stats: {},
  darkTheme: true
})

export const mutations = {
  updatetStats(state, dt) {
    state.stats = dt
  }
}
