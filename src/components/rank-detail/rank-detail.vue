<template>
  <!-- <transition name="slide" mode="in-out"> -->
  <div class="rank-detail">
    <div class="top-info">
      <div class="top-bar">
        <img class="top-bar-back" src="../../assets/image/icon-back.png" @click="back"/>
        <img class="top-bar-img" src="../../assets/image/logo.svg" />
        <div class="top-bar-desc">
          <span class="top-bar-desc-title">QQ音乐</span>
          <span class="top-bar-desc-tip">打开APP收藏、下载</span>
        </div>
        <a class="top-bar-link" href="javascript:">打开</a>
      </div>
      <div class="top-info-detail" v-show="showSongList">
        <img class="top-info-detail-img" :src="topBackgourndImageSrc" />
        <div class="top-info-detail-desc">
          <div class="top-info-detail-desc-title">{{title}}</div>
          <div>第{{dayOfYear}}天</div>
          <div>{{updateTime}}更新</div>
        </div>
      </div>
      <img class="top-info-bg" :src="topBackgourndImageSrc" @load="topBackgoundImageLoaded"/>
    </div>

    <div class="song-list" v-show="showSongList">
      <div class="song-list-count">排行榜 共{{songList.length}}首</div>
      <ul class="song-list-wrapper">
        <li class="song-list-item" v-for="(item, index) in songList" :key="item.data.songid" @click="_play(item)">
          <div :class="['song-list-item-l', index<=2?'song-list-item-top3':'']">
            {{index + 1}}
          </div>
          <div class="song-list-item-r">
            <span class="song-list-item-name">{{item.data.songname}}</span>
            <span class="song-list-item-singer">{{item.data.singer[0].name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <loading v-show="!showSongList"></loading>
  </div>
  <!-- </transition> -->
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Loading from 'base/loading/loading'
import { getData } from 'api/rank-detail'

export default {
  components: {
    Loading
  },
  activated () {
    if (this.topId === -1) {
      this.$router.push({
        path: '/main/rank'
      })
      return
    }
    this._getData()
  },
  deactivated () {
    this.$destroy(true)
  },
  data () {
    return {
      songList: [],
      title: '',
      dayOfYear: 0,
      updateTime: '',
      showSongList: false
    }
  },
  methods: {
    _getData () {
      getData(this.topId)
        .then(res => {
          console.log('排行详情', res)
          if (res.code === 0) {
            this.songList = res.songlist
            this.updateTime = res.update_time
            this.dayOfYear = res.day_of_year
            this.title = res.topinfo.ListName
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    back () {
      this.$router.go(-1)
    },
    topBackgoundImageLoaded () {
      this.showSongList = true
    },
    _play (song) {
      this.setPlayer({
        songName: song.data.songname,
        songSrc: `http://dl.stream.qqmusic.qq.com/C400${song.data.songmid}.m4a?guid=1849010381&vkey=0FA412E9C79195C46BD789B55A386CE1841B26F62DA3DDCA15773FD35188848655E1EFF8FA27C3D36F94447339A8A033B6E5BB55EA6AD4F2&uin=0&fromtag=38`,
        songImg: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${song.data.albummid}.jpg`,
        singerName: song.data.singer[0].name
      })
    },
    ...mapActions([
      'setPlayer'
    ])
  },
  computed: {
    topBackgourndImageSrc () {
      if (this.songList.length === 0) {
        return ''
      }
      return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${this.songList[0].data.albummid}.jpg`
    },
    ...mapGetters([
      'topId'
    ])
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~assets/stylus/variable'

.rank-detail
  height 100%
  display flex
  flex-direction column
  background-color #fff

  .top-info
    position relative
    background: rgba(0,0,0,.5);
    height 3rem
    .top-info-bg
      width 100%
      height 100%
      -webkit-filter: blur(0.20rem);
  .top-bar
    position absolute
    z-index 2
    top 0
    left 0
    right 0
    display: flex
    align-items center
    height 0.48rem
    padding 0 .16rem 0 .08rem
    color #fff
    background rgba(0,0,0,.2)

    .top-bar-back
      display block
      width 0.30rem
      height auto

    .top-bar-img
      display block
      width 0.36rem
      margin-right 0.03rem

    .top-bar-desc
      display flex
      flex-direction column
      color #fff

      .top-bar-desc-title
        font-size $font-size-medium

      .top-bar-desc-tip
        margin-top 0.07rem
        font-size $font-size-small-s

    .top-bar-link
      position absolute
      right 0.10rem
      border 0.01rem solid #fff
      border-radius: 0.12rem
      display: block;
      height: .24rem;
      padding: 0 .12rem;
      line-height: .24rem;
      font-size: $font-size-medium-x;
      color: #fff;

  .top-info-play
    position absolute
    left 50%
    transform translateX(-50%)
    top 2.5rem
    z-index 3
    text-align center
    width 1.7rem
    height 0.4rem
    line-height 0.4rem
    font-size $font-size-medium-x
    background-color $color-theme
    border-radius 0.2rem
    color #fff

  .top-info-detail
    position absolute
    top 1rem
    left 50%
    transform translateX(-50%)
    z-index 3
    display flex
    align-items center
    .top-info-detail-img
      width 1.25rem
      heigh auto

    .top-info-detail-desc
      width 1.5rem
      color #fff
      margin-left 0.20rem
      display flex
      flex-direction column
      div
        line-height 0.24rem
      .top-info-detail-desc-title
        font-size $font-size-large
        margin-bottom 0.15rem
  .song-list
    flex 1
    padding 0.2rem
    background-color #fff
    z-index 3
    overflow scroll
    .song-list-count
      font-size $font-size-medium
    .song-list-wrapper
      margin-top 0.2rem
      .song-list-item
        display flex
        margin-bottom 0.18rem
        align-items center
        .song-list-item-l
          width 0.2rem
          text-align center
          font-size $font-size-large
          &.song-list-item-top3
            color #FF400B

        .song-list-item-r
          margin-left 0.24rem
          display flex
          flex-direction column
          .song-list-item-name
            font-size $font-size-medium-x
            color: #000;
          .song-list-item-singer
            $font-size-small
            margin-top 0.08rem

.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
