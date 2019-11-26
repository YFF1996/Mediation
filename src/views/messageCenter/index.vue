<template>
  <div class="message-center-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'message_center'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        消息中心
      </div>
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
  import HeaderNav from '@/components/headerNavTemplate'
  import TitleBox from '@/components/titleBoxTemplate'
  import MyNav from '@/components/myNavTemplate'
  import FooterTempate from '@/components/footerTemplate'

  export default {
    data() {
      return {}
    },
    components: {
      HeaderNav,
      TitleBox,
      MyNav,
      FooterTempate
    }
  }
</script>

<style lang="stylus" scoped>
  .message-center-wrapper
    width: 100%
    height: auto
    background-color: #f2f2f2
    .content-wrapper
      width: 1180px
      height: auto
      margin: 0 auto
      display: flex
      background-color: #fff
</style>