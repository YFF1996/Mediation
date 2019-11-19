<template>
  <div class="related-cases-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'related_cases'" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'

export default {
  data() {
    return {
    }
  },
  components: {
    HeaderNav,
    TitleBox
  }
}
</script>

<style lang="stylus" scoped>
  .related-cases-wrapper
    width: 100%
    height: auto
</style>