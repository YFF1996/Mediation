<template>
  <div class="login-wrapper">
    <div class="header-nav-wrapper">
      <div class="nav-content">
        <div class="logo">
          <img src="../../common/img/logo-active.png" />
          <div class="line"></div>
          <h3>欢迎登录</h3>
        </div>
        <div class="register-box">
          <p>还没有账号？</p>
          <p class="active" @click="onSkipPage('/registered')">马上注册</p>
        </div>
      </div>
    </div>
    <img class="login-bg" src="../../common/img/login-gb.png" />
    <div class="login-input-box">
      <h3>用户登录</h3>
      <ul>
        <li>
          <div class="input-box">
            <div class="icon">
              <img src="../../common/img/account-icon.png" />
            </div>
            <input type="text" v-model="accountVal" placeholder="请输入账号" />
          </div>
        </li>
        <li>
          <div class="input-box">
            <div class="icon">
              <img src="../../common/img/password-icon.png" />
            </div>
            <input type="password" v-model="passwordVal" placeholder="密码" />
          </div>
        </li>
        <li>
          <div class="input-box">
            <div class="icon">
              <img src="../../common/img/code-icon.png" />
            </div>
            <input type="text" v-model="imgCodeVal" placeholder="图形验证码" />
          </div>
          <div class="code-img"></div>
        </li>
      </ul>
      <p @click="onSkipPage('/retrieve_password')">忘记密码？</p>
      <div class="btn-box">
        <el-button :plain="true" @click="onLoginFn()">登录</el-button>
      </div>
    </div>
    <footer-tempate :footerState="false" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import FooterTempate from '@/components/footerTemplate'

export default {
  data() {
    return {
      accountVal: '',
      passwordVal: '',
      imgCodeVal: ''
    }
  },
  methods: {
    ...mapMutations({
      setLsLoginState: 'SET_LS_LOGIN_STATE'
    }),
    // 点击登录
    onLoginFn () {
      const accountVal = this.accountVal
      const passwordVal = this.passwordVal
      const imgCodeVal = this.imgCodeVal
      if (!accountVal) {
        this.$message.error('账号格式不对!')
        return false
      }
      if (!passwordVal) {
        this.$message.error('密码格式不对!')
        return false
      }
      if (!imgCodeVal) {
        this.$message.error('验证码不对!')
        return false
      }
      window.localStorage.setItem('setLsLoginState', true)
      this.setLsLoginState(true)
      this.onSkipPage('/')
    },
    // 跳转页面
    onSkipPage (path) {
      this.$router.push(path)
    }
  },
  components: {
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .login-wrapper
    position: relative
    width: 100%
    height: auto
  .header-nav-wrapper
    width: 100%
    height: auto
    padding: 18px 0
    .nav-content
      width: 1180px
      height: auto
      margin: 0 auto
      display: flex
      justify-content: space-between
      .logo
        width: auto
        height: auto
        display: flex
        align-items: center
        img
          width: 310px
          height: auto
        .line
          width: 2px
          height: 24px
          margin: 0 27px
          background-color: #e5e5e5
        h3
          font-size: 24px
          color: #666
      .register-box
        display: flex
        align-items: center
        p
          font-size: 16px
          color: #666
        .active
          cursor: pointer
          color: #d41a1d
  .login-bg
    width: 100%
    height: auto
  .login-input-box
    position: absolute
    right: 10%
    top: 20%
    width: 480px
    height: auto
    padding: 15px 55px 50px
    border-radius: 18px
    background-color: #fff
    box-sizing: border-box
    h3
      font-size: 32px
      line-height: 90px
      text-align: center
      color: #666
    ul
      width: 100%
      height: auto
      li
        width: 100%
        height: auto
        margin-bottom: 25px
        display: flex
        .input-box
          flex: 1
          height: auto
          border-radius: 4px
          border: 1px solid #e5e5e5
          display: flex
          background-color: #fbfcfc
          box-sizing: border-box
          .icon
            width: 50px
            height: 48px
            display: flex
            justify-content: center
            align-items: center
            img
              width: 22px
              height: 22px
          input
            flex: 1
            height: 48px
            padding: 0 10px 0 5px
            font-size: 16px
            background-color: transparent
            box-sizing: border-box
          input::-webkit-input-placeholder
            font-size: 16px
            color: #999
        .code-img
          width: 125px
          height: 48px
          margin-left: 15px
          background-color: #f3f3f3
      li:last-child
        margin-bottom: 0
    p
      width: 100%
      height: auto
      padding-bottom: 20px
      font-size: 14px
      line-height: 40px
      cursor: pointer
      color: #d41a1d
    .btn-box
      width: 100%
      height: auto
      border-radius: 4px
      background-color: #d41a1d
      button
        text-align: center
        font-size: 24px
        line-height: 60px
        color: #fff
</style>
