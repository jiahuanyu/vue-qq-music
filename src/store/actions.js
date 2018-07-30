// 异步操作或者对mutations的封装
import * as types from './mutation-types'
export const setPlayer = function ({commit, state}, {songName, songSrc, songImg, songId, singerName}) {
  commit(types.SET_PLAYER_SHOW, true)
  commit(types.SET_PLATER_SONG_NAME, songName)
  commit(types.SET_PLAYER_SONG_SRC, songSrc)
}
