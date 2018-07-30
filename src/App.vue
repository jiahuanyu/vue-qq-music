<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <player></player> -->
  </div>
</template>

<script>
import Player from 'components/player/player'
export default {
  components: {
    Player
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
