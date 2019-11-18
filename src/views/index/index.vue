<template>
  <div class="index-wrapper">
    <header-nav />
    <index-banner />
    <index-special />
    <index-process />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import IndexBanner from '@/components/indexBannerTemplate'
import IndexSpecial from '@/components/indexSpecialTemplate'
import IndexProcess from '@/components/indexProcessTemplate'

export default {
  components: {
    HeaderNav,
    IndexBanner,
    IndexSpecial,
    IndexProcess
  }
}
</script>

<style lang="stylus" scoped>
  .index-wrapper
    position: relative
    width: 100%
    height: auto
</style>
