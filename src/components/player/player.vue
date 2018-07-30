<template>
  <div class="player">
    <img class="song-img" />
    <div class="song-desc">
      <div class="song-name"></div>
      <div class="singer-name"></div>
    </div>
    <audio ref="player"></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'playerShow',
      'playerSongName',
      'playerSongSrc'
    ])
  },
  watch: {
    playerSongSrc () {
      this.$refs.player.src = this.playerSongSrc
      this.$refs.player.play()
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.player
  height 0.50rem
  background-color #fff
  box-shadow 0 -0.01rem 0.01rem rgba(0, 0, 0, 0.3);
  z-index 999999
  display flex
  align-items center
</style>
