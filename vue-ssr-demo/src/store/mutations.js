import Vue from 'vue'

export default {
  SET_ITEMS: (state, { id, item }) => {
    Vue.set(state.items, id, item)
  }
}
