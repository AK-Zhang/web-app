import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '@/components/index'
import count from '@/components/count'
import referprice from '@/components/referprice/referprice'
import trade from '@/components/trade/trade'
import position from '@/components/trade/position'
import tradeInfo from '@/components/trade/tradeInfo/tradeInfo'
import mine from '@/components/mine/mine'
import help from '@/components/help/help'
import guide from '@/components/help/newUserGuide'
import agreement from '@/components/help/agreement'
import login from '@/components/user/login'
import forgetPassword from '@/components/user/forgetPassword'
import register from '@/components/user/register'
import recharge from '@/components/user/recharge'
import chargeOrder from '@/components/user/chargeOrder'
import withdraw from '@/components/user/withdraw'
import mygold from '@/components/mine/mygold'
import myoptional from '@/components/mine/myoptional'
import myNews from '@/components/mine/myNews'
import broker from '@/components/mine/broker'
import setting from '@/components/mine/setting'
import ModifyPwd from '@/components/mine/ModifyPwd'
import newsInfo from '@/components/news/newsInfo'
import lastNews from '@/components/news/lastNews'
import newsList from '@/components/news/newsList'
import optimalTrade from '@/components/news/optimalTrade'
import deal from '@/components/trade/tradeInfo/deal'
import rules from '@/components/trade/tradeInfo/rules'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: indexpage
    },
    {
      path: '/indexpage',
      name: 'indexpage',
      component: indexpage
    }, {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/referprice',
      name: 'referprice',
      component: referprice
    },
    {
      path: '/trade/home',
      name: 'trade',
      component: trade
    },
    {
      path: '/trade/home:order',
      name: 'trade',
      component: trade
    },
    {
      path: '/trade/position',
      name: 'position',
      component: position
    },
    {
      path: '/trade/tradeInfo:code',
      name: 'tradeInfo',
      component: tradeInfo
    },
    {
      path: '/trade/deal',
      name: 'deal',
      component: deal
    },
    {
      path: '/trade/rules',
      name: 'rules',
      component: rules
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/mine/mygold',
      name: 'mygold',
      component: mygold
    },
    {
      path: '/mine/myoptional',
      name: 'myoptional',
      component: myoptional
    },
    {
      path: '/mine/myNews',
      name: 'myNews',
      component: myNews
    },
    {
      path: '/mine/broker',
      name: 'broker',
      component: broker
    },
    {
      path: '/mine/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/mine/ModifyPwd',
      name: 'ModifyPwd',
      component: ModifyPwd
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/Login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/user/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/user/chargeOrder',
      name: 'chargeOrder',
      component: chargeOrder
    },
    {
      path: '/user/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    {
      path: '/newsInfo',
      name: 'newsInfo',
      component: newsInfo
    },
    {
      path: '/news/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/lastNews',
      name: 'lastNews',
      component: lastNews
    },
    {
      path: '/optimalTrade',
      name: 'optimalTrade',
      component: optimalTrade
    },





  ]
})
