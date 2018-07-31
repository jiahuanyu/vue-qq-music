<template>
  <div class="player">
    <div class="song-action">
      <img class="song-img" :src="playerSongImg" />
      <img v-show="isPlaying" class="song-action-button" src="./icon_pause.png" @click="_action" />
      <img v-show="!isPlaying" class="song-action-button" src="./icon_play.png" @click="_action"/>
    </div>
    <div class="song-desc">
      <div class="song-name">{{playerSongName}}</div>
      <div class="singer-name">{{playerSingerName}}</div>
    </div>
    <audio ref="player" loop @timeupdate="_timeupdate" @play="_play" @pause="_pause" @ended="_ended"></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isPlaying: true
    }
  },
  computed: {
    ...mapGetters([
      'playerSongName',
      'playerSongSrc',
      'playerSongImg',
      'playerSingerName'
    ])
  },
  watch: {
    playerSongSrc () {
      this.$refs.player.src = this.playerSongSrc
      this.$refs.player.play()
    }
  },
  methods: {
    _action (ele) {
      if (this.$refs.player.paused) {
        this.$refs.player.play()
      } else {
        this.$refs.player.pause()
      }
    },
    _timeupdate (t) {
      console.log(t)
    },
    _play () {
      console.log('play')
      this.isPlaying = true
    },
    _pause () {
      console.log('pause')
      this.isPlaying = false
    },
    _ended () {
      console.log('ended')
      this.isPlaying = false
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~assets/stylus/variable.styl'
.player
  height 0.50rem
  background-color #fff
  box-shadow 0 -0.01rem 0.01rem rgba(0, 0, 0, 0.3);
  z-index 999999
  display flex
  align-items center

  .song-action
    height 100%
    display flex
    align-items center
    margin-left 0.1rem
    position relative
    .song-img
      height 65%
      width auto
      border-radius 50%
      display block
    .song-action-button
      position absolute
      height 0.15rem
      width auto
      opacity 0.8
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 10

  .song-desc
    margin-left 0.1rem
    .song-name
      font-size $font-size-medium
    .singer-name
      font-size $font-size-small
      margin-top 0.05rem
</style>
