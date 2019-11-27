import * as types from './mutation-types'

const mutations = {
  [types.SET_LS_LOGIN_STATE](state, data) {
    state.isLoginState = data
  }
}

export default mutations
