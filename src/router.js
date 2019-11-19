import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import NewsAnnouncement from '@/views/newsAnnouncement'
import RelatedCases from '@/views/relatedCases'
import OnlineMediation from '@/views/onlineMediation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/news_announcement',
      name: 'newsAnnouncement',
      component: NewsAnnouncement
    },
    {
      path: '/related_cases',
      name: 'RelatedCases',
      component: RelatedCases
    },
    {
      path: '/online_mediation',
      name: 'onlineMediation',
      component: OnlineMediation
    }
  ]
})