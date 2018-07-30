import * as types from './mutation-types'

const mutations = {
  [types.SET_TOP_ID] (state, topId) {
    state.topId = topId
  },
  [types.SET_PLAYER_SHOW] (state, show) {
    state.playerShow = show
  },
  [types.SET_PLATER_SONG_NAME] (state, name) {
    state.playerSongName = name
  },
  [types.SET_PLAYER_SONG_SRC] (state, src) {
    state.playerSongSrc = src
  },
  [types.SET_PLAYER_SONG_ID] (state, id) {
    state.playerSongId = id
  },
  [types.SET_PLAYER_SONG_IMG] (state, img) {
    state.playerSongImg = img
  },
  [types.SET_PLAYER_SINGER_NAME] (state, name) {
    state.playerSingerName = name
  }
}

export default mutations
