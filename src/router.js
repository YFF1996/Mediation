import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import NewsAnnouncement from '@/views/newsAnnouncement'
import NewsDetails from '@/views/newsAnnouncement/newsDetails'
import RelatedCases from '@/views/relatedCases'
import RelatedCasesDetails from '@/views/relatedCases/relatedCasesDetails'
import OnlineMediation from '@/views/onlineMediation'
import Login from '@/views/login'
import Registered from '@/views/registered'
import RetrievePassword from '@/views/retrievePassword'
import MyDispute from '@/views/myDispute'
import MyDisputeDetails from '@/views/myDispute/myDisputeDetails'
import SecuritySettings from '@/views/securitySettings'
import MyData from '@/views/myData'
import MessageCenter from '@/views/messageCenter'
import MyMediate from '@/views/myMediate'
import MyAdvisory from '@/views/myAdvisory'

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
      path: '/related_cases_details',
      name: 'relatedCasesDetails',
      component: RelatedCasesDetails
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
    },
    {
      path: '/retrieve_password',
      name: 'RetrievePassword',
      component: RetrievePassword
    },
    {
      path: '/my_dispute',
      name: 'myDispute',
      component: MyDispute
    },
    {
      path: '/my_dispute_details',
      name: 'myDisputeDetails',
      component: MyDisputeDetails
    },
    {
      path: '/security_settings',
      name: 'securitySettings',
      component: SecuritySettings
    },
    {
      path: '/my_data',
      name: 'myData',
      component: MyData
    },
    {
      path: '/message_center',
      name: 'messageCenter',
      component: MessageCenter
    },
    {
      path: '/my_mediate',
      name: 'myMediate',
      component: MyMediate
    },
    {
      path: '/my_advisory',
      name: 'myAdvisory',
      component: MyAdvisory
    }
  ]
})