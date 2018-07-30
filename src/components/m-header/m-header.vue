<template>
  <div class="m-header">
    <i class="music-logo"></i>
    <span class="btn-download">下载APP</span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/variable"
@import "~assets/stylus/mixin"

.m-header
  position: relative;
  height: 0.44rem;
  background: $color-theme;
  .music-logo
    float: left;
    display: block;
    width: 0.9rem;
    height: 0.25rem;
    margin: 0.09rem 0 0 0.10rem;
    background-image: url(logo.png);
    background-size: cover;
    background-repeat: no-repeat;

  .btn-download
    position: absolute;
    display: inline-block;
    right: 0.10rem;
    top: 0.08rem;
    height: 0.28rem;
    padding: 0 0.12rem;
    line-height: 0.28rem;
    border-radius: 0.99rem;
    font-size: 0.14rem;
    background: $color-theme-d;
    color: #fff;
</style>
