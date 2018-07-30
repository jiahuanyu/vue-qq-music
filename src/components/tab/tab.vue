<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/main/recommend">
      <span class="tab-link">推荐</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/main/rank">
      <span class="tab-link">排行榜</span>
    </router-link>

    <!-- <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable"

  .tab
    display: flex
    height: 0.44rem
    line-height: 0.44rem
    font-size: $font-size-medium-x
    background-color: #fff
    box-shadow 0 0.01rem 0.01rem rgba(0, 0, 0, 0.3);
    z-index 99999
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 0.05rem
        color: $color-text
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 0.02rem solid $color-theme
</style>
