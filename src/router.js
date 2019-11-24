import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import NewsAnnouncement from '@/views/newsAnnouncement'
import NewsDetails from '@/views/newsAnnouncement/newsDetails'
import RelatedCases from '@/views/relatedCases'
import OnlineMediation from '@/views/onlineMediation'
import Login from '@/views/login'
import Registered from '@/views/registered'

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
      path: '/news_details',
      name: 'newsDetails',
      component: NewsDetails
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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    }
  ]
})