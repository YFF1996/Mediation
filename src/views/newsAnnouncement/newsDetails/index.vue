<template>
  <div class="news-details-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'news_announcement'" />
    <div class="content">
      <h1>{{dataForm.title}}</h1>
      <div class="deta-wrapper">
        <p>发布时间：{{dataForm.createTime}}</p>
        <p>浏览次数：{{dataForm.num}}</p>
      </div>
      <div class="news-content">
        <p>{{dataForm.content}}</p>
        <!--<img  src="../../../common/img/news-img2.jpg" />-->
        <img  :src="dataForm.urlPic" />
      </div>
      <div class="paging-wrapper">
        <div class="paging-item">
          <p>上一篇：</p>
          <p class="p">{{fontDataForm.title}}</p>
        </div>
        <div class="paging-item">
          <p>下一篇：</p>
          <p class="p">{{nextDataForm.title}}</p>
        </div>
      </div>
    </div>
    <footer-tempate :footerState="true"  />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  data() {
    return {
        dataForm: {
            paramValue: '',
            num: '',
            title: '',
            content: '',
            urlPic:'',
            creator: '',
            remark:'',
            createTime: ''
        },
        fontDataForm: {
            paramValue: '',
            num: '',
            title: '',
            content: '',
            urlPic:'',
            creator: '',
            remark:'',
            createTime: ''
        },
        nextDataForm: {
            paramValue: '',
            num: '',
            title: '',
            content: '',
            urlPic:'',
            creator: '',
            remark:'',
            createTime: ''
        },
    }
  },
    created () {
        this.getDataList()
    },
    methods: {
        getDataList() {
            (this.$route.params)
            this.$http({
                url: this.$http.adornUrl('/api/news/one'),
                method: 'get',
                params: this.$http.adornParams({
                    'id':  this.$route.params.id,
                })
            }).then(({data}) => {
                if (data && data.code == 200) {
                    if (data.data.current != null) {
                        this.dataForm = data.data.current
                    }
                    if (data.data.font != null) {
                        this.fontDataForm = data.data.font
                    }
                        if (data.data.next != null) {
                            this.nextDataForm = data.data.next
                        }
                    console.log(this.dataForm)
                    console.log(this.fontDataForm)
                    console.log(this.nextDataForm)
                }
            })
        }
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