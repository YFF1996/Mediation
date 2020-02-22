<template>
  <div class="header-nav-wrapper" :style="{ position: navState ? 'absolute' : 'relative' }">
    <div class="nav-content">
      <div class="logo" @click="onSkipPageFn('/')">
        <img src="../../common/img/logo.png" v-if="navState" />
        <img src="../../common/img/logo-active.png" v-else />
      </div>
      <ul :class="{'ul-active' : navState}">
        <router-link to="/">
          <li>首页</li>
        </router-link>
        <router-link to="/news_announcement">
          <li>新闻公告</li>
        </router-link>
        <router-link to="/related_cases">
          <li>相关案例</li>
        </router-link>
        <router-link  to="/online_mediation">
          <li>在线调解</li>
        </router-link>
      </ul>
      <div class="register-box">
        <div class="login-later-box" v-if="isLoginState">
          <div class="message-icon">
            <img v-if="navState" src="../../common/img/message-bs-icon.png" />
            <img v-else src="../../common/img/message-icon.png" />
          </div>
          <p :style="{ color: navState ? '#fff' : '#000' }">欢迎您！{{realname}}</p>
          <div class="more-icon">
            <img v-if="navState" src="../../common/img/pull-down-bs-icon.png" />
            <img v-else src="../../common/img/pull-down-icon.png" />
          </div>
          <div class="my-wrapper">
            <div class="my-item" @click="onSkipPageFn('/my_dispute')">
              <img src="../../common/img/my-icon.png" />
              <p>个人中心</p>
            </div>
            <div class="my-item" @click="onReturnLoginFn()">
              <img src="../../common/img/return-login-icon.png" />
              <p>退出登录</p>
            </div>
          </div>
        </div>
        <div class="btn-box" :class="{'btn-box-active' : navState}" v-else>
          <div class="btn" @click="onSkipPageFn('/login')">登录</div>
          <div class="btn btn-active" @click="onSkipPageFn('/registered')">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { clearLoginInfo } from '@/utils'

export default {
  data () {
    return {
    }
  },
  created () {
    const state = window.localStorage.getItem('setLsLoginState')
    this.setLsLoginState(state)
  },
  computed: {
    realname: {
      get () {
        return window.sessionStorage.getItem('realname')
      }
    },
    ...mapState([
      'isLoginState'
    ])
  },
  methods: {
    ...mapMutations({
      setLsLoginState: 'SET_LS_LOGIN_STATE'
    }),
    onSkipPageFn (path) {
      this.$router.push(path)
    },
    onReturnLoginFn (){
      window.localStorage.removeItem('setLsLoginState')
        window.localStorage.removeItem('realname')
        window.localStorage.removeItem('sign')
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('status')
        window.localStorage.removeItem('applicationId')
        window.localStorage.removeItem('respondentId')
        clearLoginInfo();
      this.setLsLoginState(false)
    }
  },
  props: {
    navState: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-nav-wrapper
    position: relative
    top: 0
    left: 0
    width: 100%
    height: auto
    padding: 18px 0
    background-color: transparent
    .nav-content
      width: 1180px
      height: auto
      margin: 0 auto
      display: flex
      .logo
        width: 310px
        height: auto
        cursor: pointer
        display: flex
        align-items: center
        img
          width: 100%
          height: auto
      ul
        flex: 1
        padding: 0 50px
        display: flex
        a
          width: 105px
          height: 38px
          display: flex
          align-items: center
          li
            width: 100%
            height: auto
            text-align: center
            line-height: 16px
            font-size: 16px
            border-left: 1px solid #e5dede
            color: #666
        .router-link-exact-active
          border-radius: 4px
          background-color: #fff
          li
            border-right: none
            color: #D41A1D
        a:first-child
          li
            border-left: none
      ul.ul-active
        a
          li
            border-left: 1px solid #fff
            color: #fff
        .router-link-exact-active
          border-radius: 4px
          background-color: #fff
          li
            border-right: none
            color: #D41A1D
        .router-link-exact-active + a
          li
            border-left: none
      .register-box
        width: auto
        height: auto
        .btn-box
          width: auto
          height: 100%
          display: flex
          align-items: center
          .btn
            padding: 0 20px
            margin-right: 15px
            line-height: 30px
            border-radius: 2px
            cursor: pointer
            border: 1px solid #D41A1D
            color: #D41A1D
            box-sizing: border-box
          .btn-active
            color: #fff
            background-color: #D41A1D
        .btn-box-active
          .btn
            border-color: #fff
            color: #fff
          .btn-active
            color: #D41A1D
            background-color: #fff
        .login-later-box
          position: relative
          height: 100%
          cursor: pointer
          display: flex
          align-items: center
          .message-icon
            width: 20px
            height: 20px
            img
              width: 100%
              height: 100%
          p
            padding: 0 10px
            font-size: 14px
            color: #000
          .more-icon
            width: 18px
            height: 18px
            img
              width: 100%
              height: 100%
          .my-wrapper
            display: none
            position: absolute
            left: 50%
            top: 35px
            width: 132px
            height: auto
            padding: 0 10px
            margin-left: -66px
            border-radius: 2px
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1)
            background-color: #fff
            box-sizing: border-box
            .my-item
              width: 100%
              height: 42px
              padding: 0 10px
              border-bottom: 1px solid #D8D8D8
              cursor: pointer
              display: flex
              align-items: center
              box-sizing: border-box
              img
                width: 14px
                height: 14px
              p
                font-size: 14px
                color: #333333
            .my-item:last-child
              border-bottom: none
            .my-item:hover
              p
                color: #D41A1D
        .login-later-box:hover
          .my-wrapper
            display: block
</style>
