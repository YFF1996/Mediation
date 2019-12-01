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
              <div class="status status-active" @click="onShowHideFn(true)">修改</div>
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
    <div class="mask-wrapper" v-if="popUpsState">
      <div class="pop-ups">
        <div class="title">
          <h3>绑定手机</h3>
          <img @click="onShowHideFn(false)" src="../../common/img/closed-icon.png" />
        </div>
        <div class="content">
          <div class="item">
            <h4>登录密码</h4>
            <div class="input-box">
              <input type="password" placeholder="请输入登录密码" />
            </div>
          </div>
          <div class="item">
            <h4>新手机号码</h4>
            <div class="input-box">
              <input type="number" placeholder="请输入新的手机号码" />
            </div>
          </div>
          <div class="item">
            <h4>验证码</h4>
            <div class="input-box">
              <input type="number" placeholder="请输入验证码" />
              <div class="get-code-btn" @click="onGetCodeFn()" v-if="second === 60">{{ codeText }}</div>
              <div class="get-code-btn" v-else>{{ second }}s</div>
            </div>
          </div>
          <div class="btn-wrapper">
            <div class="btn" @click="onShowHideFn(false)">确定</div>
          </div>
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

let stop = null

export default {
  data() {
    return {
      popUpsState: false,
      second: 60,
      codeText: '发送验证码'
    }
  },
  methods: {
    onShowHideFn (state) {
      this.popUpsState = state
    },
    onGetCodeFn () {
      stop = setInterval(() => {
        this.second --
        if (this.second <= 0) {
          this.second = 60
          this.codeText = '重新获取'
          window.clearInterval(stop)
        }
      }, 1000)
    }
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
    .mask-wrapper
      position: fixed
      left: 0
      top: 0
      right: 0
      bottom: 0
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      background-color: rgba(0, 0, 0, 0.5)
      .pop-ups
        width: 655px
        height: auto
        border-radius: 4px
        overflow: hidden
        background-color: #fff
        .title
          width: 100%
          height: auto
          padding: 0 15px
          display: flex
          align-items: center
          box-sizing: border-box
          background-color: #d41a1d
          h3
            flex: 1
            height: auto
            line-height: 40px
            font-size: 14px
            color: #fff
          img
            width: 12px
            height: 12px
            cursor: pointer
        .content
          width: 100%
          height: auto
          padding: 40px 0
          .item
            padding-bottom: 25px
            display: flex
            h4
              width: 190px
              height: auto
              line-height: 40px
              text-align: right
              font-size: 14px
              color: #666
            .input-box
              flex: 1
              height: 40px
              padding: 0 120px 0 15px
              display: flex
              input
                flex: 1
                height: 100%
                padding: 0 20px
                font-size: 14px
                border: 1px solid #e7e7e7
                border-radius: 4px
                background-color: transparent
                box-sizing: border-box
              input::-webkit-input-placeholder
                font-size: 14px
                color: #aaa
              .get-code-btn
                width: 100px
                height: 100%
                margin-left: 25px
                text-align: center
                line-height: 38px
                font-size: 14px
                border-radius: 4px
                cursor: pointer
                color: #fff
                background-color: #d41a1d
          .btn-wrapper
            width: 100%
            height: auto
            display: flex
            justify-content: center
            .btn
              padding: 0 150px
              font-size: 16px
              border-radius: 2px
              line-height: 44px
              cursor: pointer
              color: #fff
              background-color: #d41a1d
</style>