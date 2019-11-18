<template>
  <div class="index-wrapper">
    <header-nav />
    <index-banner />
    <index-special />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import IndexBanner from '@/components/indexBannerTemplate'
import IndexSpecial from '@/components/indexSpecialTemplate'

export default {
  components: {
    HeaderNav,
    IndexBanner,
    IndexSpecial
  }
}
</script>

<style lang="stylus" scoped>
  .index-wrapper
    position: relative
    width: 100%
    height: auto
</style>
