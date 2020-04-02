export const state = () => ({
  stats: {}
})

export const mutations = {
  updatetStats(state, dt) {
    state.stats = dt
  }
}
