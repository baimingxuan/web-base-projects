import {
  fetchItem
} from '../api'

export default {
  FETCH_ITEMS: ({ commit, state }, { id }) => {
    // `store.dispatch()` 会返回 Promise，
    // 以便我们能够知道数据在何时更新
    return fetchItem(id).then(item => {
      commit('SET_ITEMS', { id, item })
    })
  }
}
