<template>
  <div class="security-settings-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'security_settings'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <div class="table-wrapper">
          <div class="top-box">您的安全等级</div>
          <ul>
            <li>
              <div class="icon">
                <img src="../../common/img/green-safety-icon.png" />
              </div>
              <div class="item">
                <h3>安全等级</h3>
                <div class="schedule-wrapper">
                  <div class="schedule"></div>
                </div>
                <p class="active">100分</p>
              </div>
              <div class="status">完成全部绑定，提升账号安全</div>
            </li>
            <li>
              <div class="icon">
                <img src="../../common/img/green-complete-icon.png" />
              </div>
              <div class="item">
                <h3>身份认证</h3>
                <p>提升账户安全级别和信任级别，认证后将无法修改认证信息</p>
              </div>
              <div class="status">身份证号认证</div>
            </li>
            <li>
              <div class="icon">
                <img src="../../common/img/green-complete-icon.png" />
              </div>
              <div class="item">
                <h3>登入密码</h3>
                <p>密码设置包含数字和字母，长度应为8位以上，安全性高的密码更能保护账户的安全</p>
              </div>
              <div class="status status-active">修改</div>
            </li>
            <li>
              <div class="icon">
                <img src="../../common/img/green-complete-icon.png" />
              </div>
              <div class="item">
                <h3>绑定手机</h3>
                <p>绑定手机，可以提高安全性及找回密码等功能</p>
              </div>
              <div class="status status-active">修改</div>
            </li>
            <li>
              <div class="icon">
                <img src="../../common/img/green-complete-icon.png" />
              </div>
              <div class="item">
                <h3>绑定邮箱</h3>
                <p>绑定邮箱，可以提高安全性和信息的通知</p>
              </div>
              <div class="status status-active">设置</div>
            </li>
            <li>
              <div class="icon">
                <img src="../../common/img/green-complete-icon.png" />
              </div>
              <div class="item">
                <h3>预留签名</h3>
                <p>设置预留签名，可在案件文书签字过程直接使用预留签名</p>
              </div>
              <div class="status status-active">设置</div>
            </li>
          </ul>
        </div>
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
  .security-settings-wrapper
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
        padding: 35px 45px
        box-sizing: border-box
        .table-wrapper
          width: 100%
          height: auto
          .top-box
            width: 100%
            height: auto
            padding: 0 18px
            line-height: 44px
            font-size: 16px
            color: #666
            background-color: #f7f7f7
            box-sizing: border-box
        ul
          width: 100%
          height: auto
          border: 1px solid #e5e5e5
          box-sizing: border-box
          li
            width: 100%
            height: auto
            padding: 0 20px
            border-bottom: 1px solid #e5e5e5
            display: flex
            align-items: center
            box-sizing: border-box
            .icon
              width: 15px
              height: 15px
              img
                width: 100%
                height: 100%
            .item
              flex: 1
              padding-left: 10px
              display: flex
              align-items: center
              h3
                padding-right: 15px
                line-height: 54px
                font-size: 14px
                color: #333
              .schedule-wrapper
                width: 230px
                height: 14px
                padding: 2px
                margin-right: 10px
                border-radius: 7px
                background-color: #f3f3f3
                box-sizing: border-box
                .schedule
                  width: 100%
                  height: 100%
                  border-radius: 5px
                  background-color: #26e167
              p
                font-size: 14px
                line-height: 54px
                color: #666
              .active
                color: #26e167
            .status
              font-size: 14px
              line-height: 54px
              color: #aaa
            .status-active
              cursor: pointer
              color: #2f82ff
          li:last-child
            border-bottom: none
</style>