<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player v-show="playerShow"></player>
  </div>
</template>

<script>
import Player from 'components/player/player'
import {mapGetters} from 'vuex'
export default {
  components: {
    Player
  },
  computed: {
    ...mapGetters([
      'playerShow'
    ])
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~assets/stylus/variable'
#app
  height 100%
  color $color-text
  font-size $font-size-medium
  display flex
  flex-direction column
</style>
