<template>
  <div class="recommend">
    <div v-if="slider.length" class="slider-wrapper">
      <slider>
        <div v-for="item in slider" :key="item.id">
          <a :href="item.linkUrl">
            <img class="needsclick" :src="item.picUrl" />
          </a>
        </div>
      </slider>
    </div>
    <div class="radio-list" v-if="radioList.length">
      <h1 class="list-title">电台</h1>
      <div class="list-content">
        <a v-for="item in radioList" :key="item.radioid" class="list-item">
          <div class="list-item-main">
            <img class="list-item-pic" :src="item.picUrl" />
            <div class="list-item-play-icon"></div>
          </div>
          <div class="list-item-title">{{item.Ftitle}}</div>
        </a>
      </div>
    </div>
    <loading v-show="!radioList.length"></loading>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Loading from 'base/loading/loading'
import { getData } from 'api/recommend'

export default {
  data () {
    return {
      radioList: [],
      slider: []
    }
  },
  created () {
    this._getData()
  },
  methods: {
    _getData () {
      getData()
        .then(res => {
          console.log('推荐数据返回', res)
          if (res.code === 0) {
            this.slider = res.data.slider
            this.radioList = res.data.radioList
          }
        })
    }
  },
  components: {
    Slider,
    Loading
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
 @import "~assets/stylus/variable"
  .recommend
    flex 1
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden

    .radio-list
      padding .10rem
      .list-title
        font-size: $font-size-medium-x
        color: #000
        margin-bottom: .11rem;
      .list-content
        width 100%
        display flex
        justify-content space-between
      .list-item
        flex 0.48
        .list-item-main
          position relative
          width 100%
          .list-item-pic
            display block
            width 100%
            height auto
          .list-item-play-icon
            position absolute
            height: .24rem;
            width: .24rem;
            right 0.05rem
            bottom 0.05rem
            background-image: url(../../assets/image/list-sprite.png);
            background-repeat: no-repeat;
            background-size: 0.24rem 0.60rem;
        .list-item-title
          margin-top 0.06rem
          font-size: $font-size-medium;
</style>
