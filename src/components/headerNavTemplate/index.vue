<template>
  <div class="header-nav-wrapper" :style="{ position: navState ? 'absolute' : 'relative' }">
    <div class="nav-content">
      <div class="logo">
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
        <router-link to="/online_mediation">
          <li>在线调解</li>
        </router-link>
      </ul>
      <div class="register-box">
        <div class="btn-box" :class="{'btn-box-active' : navState}">
          <div class="btn" @click="onSkipPageFn('/login')">登录</div>
          <div class="btn btn-active" @click="onSkipPageFn('/registered')">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onSkipPageFn (path) {
      this.$router.push(path)
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
</style>
