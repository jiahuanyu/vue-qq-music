<template>
  <div class="rank">
    <ul class="rank-list">
      <li class="rank-list-item" v-for="item in rankList" :key="item.id" @click="_jumpToDetail(item)">
        <div class="rank-list-item-l">
          <img class="rank-list-item-img" v-lazy="item.picUrl" />
          <span class="rank-list-item-count">{{(item.listenCount / 10000).toFixed(1)}}万</span>
        </div>
        <div class="rank-list-item-r">
          <span class="rank-list-item-title">{{item.topTitle}}</span>
          <p class="rank-list-item-song" v-for="(song, index) in item.songList" :key="song.songname">
            {{index + 1}} <span class="rank-list-item-song-name">{{song.songname}}</span> - {{song.singername}}
          </p>
        </div>
      </li>
    </ul>
    <loading v-show="!rankList.length"></loading>
  </div>
</template>

<script>
import { getData } from 'api/rank'
import { mapMutations } from 'vuex'
import Loading from 'base/loading/loading'
export default {
  data () {
    return {
      rankList: []
    }
  },
  created () {
    this._getData()
  },
  methods: {
    _getData () {
      getData()
        .then(res => {
          console.log('排行数据', res)
          if (res.code === 0) {
            this.rankList = res.data.topList
          }
        })
    },
    _jumpToDetail (rank) {
      this.setTopId(rank.id)
      this.$router.push({
        path: `/rankdetail`
      })
    },
    ...mapMutations({
      setTopId: 'SET_TOP_ID'
    })
  },
  components: {
    Loading
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~assets/stylus/variable'

.rank
  flex 1
  overflow scroll

.rank-list
  .rank-list-item
    background-color #fff
    display flex
    align-items center
    margin-bottom 0.10rem

    .rank-list-item-l
      position relative

      .rank-list-item-img
        width 1rem
        height auto
        display block

      .rank-list-item-count
        position absolute
        left: 50%;
        transform translateX(-50%)
        bottom: .04rem;
        color: #fff;
        opacity: .6;
        font-size: $font-size-small-s;
        width 100%
        text-align center

    .rank-list-item-r
      margin-left 0.12rem
      display flex
      flex-direction column
      justify-content center

      .rank-list-item-title
        font-size: $font-size-medium-x;
        line-height  0.32rem
        color: #000
        font-weight: normal

      .rank-list-item-song
        font-size $font-size-small
        line-height 0.22rem
        overflow: hidden;
        width 1.5rem
        text-overflow: ellipsis
        white-space: nowrap

        .rank-list-item-song-name
          font-size $font-size-medium
</style>
