<template>
  <div class="news-details-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'news_announcement'" />
    <div class="content">
      <h1>《法制日报》新时代"发生地方就是发生的纠纷类似"，法定搜附近适得府君书两地分居</h1>
      <div class="deta-wrapper">
        <p>发布时间：2018-05-31</p>
        <p>浏览次数：114</p>
      </div>
      <div class="news-content">
        <h2>一、互联网</h2>
        <p>临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路,临时登记法律上的解放路</p>
        <h2>二、发生的房间里</h2>
        <p>水电费；开始的；福克斯 及时登录福建省砥砺奋进市领导机构来说的结论是及时登录福建省</p>
        <img src="../../../common/img/news-img2.jpg" />
      </div>
      <div class="paging-wrapper">
        <div class="paging-item">
          <p>上一篇：</p>
          <p class="p">珍藏品，放松多了</p>
        </div>
        <div class="paging-item">
          <p>下一篇：</p>
          <p class="p">水电费，放松多了</p>
        </div>
      </div>
    </div>
    <footer-tempate/>
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
  .news-details-wrapper
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
        h2
          font-size: 20px
          text-align: center
          line-height: 50px
          color: #666
        p
          text-indent: 2em
          font-size: 14px
          line-height: 30px
          color: #999
        img
          width: 100%
          height: auto
          padding: 50px 0
      .paging-wrapper
        width: 100%
        height: auto
        padding: 0 50px
        box-sizing: border-box
        .paging-item
          width: 100%
          height: auto
          display: flex
          p
            cursor: pointer
            font-size: 14px
            line-height: 30px
            color: #666
          .p
            color: #333
          .p:hover
            color: #d41a1d
</style>