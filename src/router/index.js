import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/main/main'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import RankDetail from 'components/rank-detail/rank-detail'
// import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/recommend'
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/main/recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/main/rank',
          name: 'rank',
          component: Rank
        }
      ]
    },
    {
      path: '/rankdetail',
      component: RankDetail
    }
  ]
})
