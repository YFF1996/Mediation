<template>
  <div class="index-wrapper">
    <header-nav :navState="true" />
    <index-banner />
    <index-special />
    <index-process />
    <index-news />
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import IndexBanner from '@/components/indexBannerTemplate'
import IndexSpecial from '@/components/indexSpecialTemplate'
import IndexProcess from '@/components/indexProcessTemplate'
import IndexNews from '@/components/indexNewsTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  components: {
    HeaderNav,
    IndexBanner,
    IndexSpecial,
    IndexProcess,
    IndexNews,
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .index-wrapper
    position: relative
    width: 100%
    height: auto
</style>
