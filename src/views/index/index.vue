<template>
  <div class="index-wrapper">
    <index-banner />
    <index-special/>
  </div>
</template>

<script>
import IndexBanner from '@/components/indexBannerTemplate'
import IndexSpecial from '@/components/indexSpecialTemplate'

export default {
  components: {
    IndexBanner,
    IndexSpecial
  }
}
</script>

<style lang="stylus" scoped>
  .index-wrapper
    width: 100%
    height: auto
</style>