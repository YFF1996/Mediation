<template>
  <div class="title-box-wrapper">
    <div class="content">
      <img v-if="urlPic" :src="urlPic" />
    </div>
  </div>
</template>

<script>
import newsImg from '@/common/img/news-title-bg.png'
import xgalImg from '@/common/img/xgal-title-bg.png'
import registeredImg from '@/common/img/register-title-bg.png'

export default {
  data() {
    return {
      urlPic: ''
    }
  },
  created () {
    this.computePathFn()
  },
  methods: {
    computePathFn () {
      switch(this.path) {
        case 'news_announcement':
          this.urlPic = newsImg
          break;
        case 'related_cases':
          this.urlPic = xgalImg
          break;
        case 'registered':
          this.urlPic = registeredImg
          break;
        default:
          return false
      }
    }
  },
  props: {
    path: String,
    default: []
  }
}
</script>

<style lang="stylus" scoped>
  .title-box-wrapper
    width: 100%
    height: auto
    background-color: #d41a1d
    .content
      width: 1180px
      height: 160px
      margin: 0 auto
      img
        width: 100%
        height: 100%
</style>