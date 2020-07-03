export default {
  namespaced: true,
  state: {
    breadData: "",
  },
  mutations: {
    SET_BREAD_DATA (state, info) {
      state.breadData = info;
    }
  }
}
