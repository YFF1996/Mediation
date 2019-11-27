<template>
  <div class="my-mediate-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'my_mediate'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <ul>
          <li>
            <div class="pic-url-img">
              <img class="bg" src="../../common/img/news-img.jpg" />
              <div class="mask">
                <img src="../../common/img/my-mediate-img-icon.png" />
              </div>
            </div>
            <div class="text-right">
              <h3>申请人可在平台申请调解服务,申请人登记调解案件时需填写纠纷详情，包括纠纷描述、我的诉求、纠纷发生地信息,选择相应的调解机构，申请人和被申请人信息。</h3>
              <div class="description-wrapper">
                <p>1.平台支持自然人、法人、非法人组织三种当事人类型；</p>
                <p>2.平台允许多个当事人参与调解；</p>
                <p>3.平台支持当事人的代理人上传证据、参与调解、签署文书等。</p>
              </div>
              <div class="btn-wrapper">
                <div class="btn">
                  <img src="../../common/img/contribution-icon.png" />
                  <p>申请调解</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="pic-url-img">
              <img class="bg" src="../../common/img/news-img.jpg" />
              <div class="mask">
                <img src="../../common/img/my-mediate-img-icon.png" />
              </div>
            </div>
            <div class="text-right">
              <h3>申请人可在平台申请调解服务,申请人登记调解案件时需填写纠纷详情，包括纠纷描述、我的诉求、纠纷发生地信息,选择相应的调解机构，申请人和被申请人信息。</h3>
              <div class="description-wrapper">
                <p>1.平台支持自然人、法人、非法人组织三种当事人类型；</p>
                <p>2.平台允许多个当事人参与调解；</p>
                <p>3.平台支持当事人的代理人上传证据、参与调解、签署文书等。</p>
              </div>
              <div class="btn-wrapper">
                <div class="btn">
                  <img src="../../common/img/contribution-icon.png" />
                  <p>申请调解</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
  import HeaderNav from '@/components/headerNavTemplate'
  import TitleBox from '@/components/titleBoxTemplate'
  import MyNav from '@/components/myNavTemplate'
  import FooterTempate from '@/components/footerTemplate'

  export default {
    data() {
      return {}
    },
    components: {
      HeaderNav,
      TitleBox,
      MyNav,
      FooterTempate
    }
  }
</script>

<style lang="stylus" scoped>
  .my-mediate-wrapper
    width: 100%
    height: auto
    background-color: #f2f2f2
    .content-wrapper
      width: 1180px
      height: auto
      margin: 0 auto
      display: flex
      background-color: #fff
      .content
        flex: 1
        width: auto
        height: auto
        padding: 45px
        ul
          width: 100%
          height: auto
          li
            width: 100%
            height: auto
            margin-bottom: 20px
            border: 1px solid #e5e5e5
            border-radius: 2px
            overflow: hidden
            display: flex
            .pic-url-img
              position: relative
              width: 355px
              height: 260px
              .bg
                width: 100%
                height: 100%
                object-fit: cover
                border-radius: 2px
              .mask
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 100%
                display: flex
                justify-content: center
                align-items: center
                background-color: rgba(255, 255, 255, 0.5)
                img
                  width: 115px
                  height: 115px
            .text-right
              flex: 1
              padding: 15px 25px 0 25px
              box-sizing: border-box
              h3
                width: 100%
                height: 56px
                line-height: 28px
                font-size: 14px
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
                color: #666
              .description-wrapper
                width: 100%
                height: auto
                padding: 15px 0 25px 0
                p
                  font-size: 12px
                  line-height: 28px
                  color: #999
              .btn-wrapper
                width: 100%
                height: auto
                display: flex
                justify-content: center
                .btn
                  padding: 0 20px
                  border-radius: 4px
                  cursor: pointer
                  display: flex
                  align-items: center
                  background-color: #00a0e9
                  img
                    width: 18px
                    height: 18px
                  p
                    padding-left: 8px
                    font-size: 16px
                    line-height: 42px
                    color: #fff
</style>