<template>
  <div class="online-mediation-wrapper">
    <header-nav :navState="false" />
    <p>在线调解</p>
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'

export default {
  data() {
    return {
    }
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="stylus" scoped>
  .online-mediation-wrapper
    width: 100%
    height: auto
</style>