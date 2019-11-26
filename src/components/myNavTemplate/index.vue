<template>
  <div class="my-nav-wrapper">
    <div class="avatar-box">
      <img src="../../common/img/my-img.png" />
      <h3>李建国</h3>
    </div>
    <ul>
      <li>
        <router-link to="/my_dispute">我的纠纷</router-link>
        <router-link to="/security_settings">安全设置</router-link>
        <router-link to="/my_data">我的资料</router-link>
        <router-link to="/message_center">消息中心</router-link>
        <router-link to="/my_mediate">我要调解</router-link>
        <router-link to="/my_advisory">我要咨询</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .my-nav-wrapper
    width: 230px
    height: auto
    padding: 30px 0 230px 0
    background-color: #fffbfb
    .avatar-box
      width: 100%
      height: auto
      img
        width: 120px
        height: 120px
        margin: 0 auto
        border-radius: 50%
        overflow: hidden
        object-fit: cover
      h3
        font-size: 20px
        line-height: 50px
        text-align: center
        color: #333
    ul
      width: 100%
      height: auto
      li
        width: 100%
        height: auto
        a
          padding-left: 48px
          border-left: 8px solid transparent
          line-height: 46px
          font-size: 16px
          cursor: pointer
          transition: 0.3s
          color: #666
          box-sizing: border-box
        a:hover
          background-color: #fbe4e4
        .router-link-exact-active
          border-color: #d41a1d
          background-color: #fbe4e4
</style>