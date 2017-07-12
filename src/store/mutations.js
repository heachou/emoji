import * as types from './types'
const mutations = {
  [types.SHOWBIGIMG] (state, index) {
    state.picInfo.index = index
    state.picInfo.isShowBigImg = true
  },
  [types.CLOSEBIGIMG] (state) {
    state.picInfo.isShowBigImg = false
  },
  [types.CONCATIMGARR] (state, arr) {
    state.emojiDataArr = state.emojiDataArr.concat(arr)
  },
  [types.SHOWPREV] (state) {
    if (state.picInfo.index === 0) { // 说明当前是第一张
      return
    }
    state.picInfo.index -= 1
  },
  [types.SHOWNEXT] (state, arr) {
    if (state.picInfo.index === state.emojiDataArr.length - 1) { // 说明当前是第一张
      return
    }
    state.picInfo.index += 1
  }
}
export default mutations
