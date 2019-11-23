<template>
  <div class="footer-wrapper" :class="{'footer-active' : footerState}">
    <div class="content">
      <p>浙公网安备33010602008175号</p>
      <p>浙ICP备09000381号</p>
      <p class="right">浙江省高级人民法院版权所有2019</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footerState: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer-wrapper
    width: 100%
    height: auto
    background-color: #fff
    .content
      width: 1180px
      height: auto
      margin: 0 auto
      overflow: hidden
      p
        padding-right: 30px
        float: left
        font-size: 14px
        line-height: 68px
        color: #d3d3d3
      .right
        float: right
        padding-right: 0
  .footer-active
    background-color: #282828
</style>
