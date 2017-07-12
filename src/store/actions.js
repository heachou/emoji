import * as types from './types'
const actions = {
  showBigImg: ({commit, state}, index) => {
    commit(types.SHOWBIGIMG, index)
  },
  closeBigImg: ({commit, state}) => {
    commit(types.CLOSEBIGIMG)
  },
  concatImgArr: ({commit, state}, arr) => {
    commit(types.CONCATIMGARR, arr)
  },
  showPrev: ({commit, state}) => {
    commit(types.SHOWPREV)
  },
  showNext: ({commit, state}) => {
    commit(types.SHOWNEXT)
  }
}
export default actions
