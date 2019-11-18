<template>
  <div class="header-nav-wrapper">
    <div class="nav-content">
      <div class="logo">
        <img src="../../common/img/logo.png" />
      </div>
      <ul>
        <li>
          <router-link to="">首页</router-link>
        </li>
        <li>
          <router-link to="">新闻公告</router-link>
        </li>
        <li class="active">
          <router-link to="">法制知识</router-link>
        </li>
        <li>
          <router-link to="">相关案例</router-link>
        </li>
        <li>
          <router-link to="">在线调解</router-link>
        </li>
      </ul>
      <div class="register-box"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .header-nav-wrapper
    position: absolute
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
        li
          width: 105px
          height: 38px
          display: flex
          align-items: center
          a
            width: 100%
            border-right: 1px solid #fff
            text-align: center
            line-height: 16px
            font-size: 16px
            color: #fff
        .active
          border-radius: 4px
          background-color: #fff
          a
            border-right: none
            color: #D41A1D
        li:last-child
          a
            border-right: none
</style>
