<template>
  <div class="related-cases-details-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'related_cases'" />
    <div class="content">
      <h1>《法制日报》新时代"发生地方就是发生的纠纷类似"，法定搜附近适得府君书两地分居</h1>
      <div class="deta-wrapper">
        <p>发布时间：2018-05-31</p>
        <p>浏览次数：114</p>
      </div>
      <div class="news-content">
        <p>
          临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,
          临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路
        </p>
      </div>
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  data() {
    return {}
  },
  components: {
    HeaderNav,
    TitleBox,
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .related-cases-details-wrapper
    width: 100%
    height: auto
  .content
    width: 1180px
    height: auto
    padding: 50px 0
    margin: 0 auto
    h1
      font-size: 24px
      text-align: center
      line-height: 46px
      color: #333
    .deta-wrapper
      width: 100%
      height: auto
      display: flex
      justify-content: center
      p
        padding: 0 15px
        line-height: 36px
        font-size: 14px
        color: #999
    .news-content
      width: 100%
      height: auto
      padding: 30px 200px
      box-sizing: border-box
      p
        text-indent: 2em
        font-size: 14px
        line-height: 30px
        color: #999
</style>