<template>
  <div class="index-wrapper">
    <header-nav :navState="true" />
    <index-banner />
    <index-special />
    <index-process />
    <index-service-resources />
    <index-news />
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import qs from 'qs'
import HeaderNav from '@/components/headerNavTemplate'
import IndexBanner from '@/components/indexBannerTemplate'
import IndexSpecial from '@/components/indexSpecialTemplate'
import IndexProcess from '@/components/indexProcessTemplate'
import IndexServiceResources from '@/components/indexServiceResourcesTemplate'
import IndexNews from '@/components/indexNewsTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  created () {
    this.getDataFn()
  },
  methods: {
    getDataFn () {
      this.$http.request(
        {
          method: 'post',
          url: '/lottery/luck.php',
          data: qs.stringify({
              title: '标题'
          })
        }
      ).then((res) => {
        window.console.log(res)
      })
    }
  },
  components: {
    HeaderNav,
    IndexBanner,
    IndexSpecial,
    IndexProcess,
    IndexServiceResources,
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
