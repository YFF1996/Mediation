<template>
  <div class="index-process-wrapper">
    <div class="content">
      <div class="title-wrapper">
        <div class="title">
          <img src="../../common/img/index-title-left.png" />
          <h2>纠纷专题</h2>
          <img src="../../common/img/index-title-right.png" />
        </div>
        <p>说明说明说明说明</p>
      </div>
      <div class="special-content">
        <div class="line"></div>
        <ul>
          <li>
            <div class="icon-box">
              <img src="../../common/img/lct-icon1.png" />
              <div class="triangle"></div>
            </div>
            <h3>1.注册账号</h3>
            <p>输入手机号码，并根据提示完成注册</p>
          </li>
          <li>
            <div class="icon-box">
              <img src="../../common/img/lct-icon2.png" />
              <div class="triangle"></div>
            </div>
            <h3>1.调解申请</h3>
            <p>描述纠纷并上传资料</p>
          </li>
          <li>
            <div class="icon-box">
              <img src="../../common/img/lct-icon3.png" />
              <div class="triangle"></div>
            </div>
            <h3>1.在线调解</h3>
            <p>调解员介入，三方在线视频调解</p>
          </li>
          <li>
            <div class="icon-box">
              <img src="../../common/img/lct-icon4.png" />
              <div class="triangle"></div>
            </div>
            <h3>1.调解成功</h3>
            <p>调解成功，在线确认调解协议</p>
          </li>
          <li>
            <div class="icon-box">
              <img src="../../common/img/lct-icon5.png" />
            </div>
            <h3>1.申请司法确认</h3>
            <p>在线申请法院调解协议效力</p>
          </li>
        </ul>
      </div>
      <div class="btn-box">
        <router-link to="/my_mediate">立即申请</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .index-process-wrapper
    width: 100%
    height: 528px
    background: url("../../common/img/index-lct-bg.png") no-repeat
    background-size: cover
    .content
      width: 1180px
      height: auto
      margin: 0 auto
      .title-wrapper
        width: 100%
        height: auto
        padding: 80px 0 55px 0
        .title
          width: 100%
          height: auto
          display: flex
          justify-content: center
          img
            width: 62px
            height: 25px
          h2
            font-size: 28px
            padding: 0 15px
            line-height: 25px
            color: #fff
        p
          font-size: 16px
          text-align: center
          line-height: 56px
          color: #fff
      .special-content
        position: relative
        width: 100%
        height: auto
        padding: 0 135px 65px 135px
        box-sizing: border-box
        .line
          position: absolute
          left: 50%
          top: 40px
          width: 980px
          height: 1px
          margin-left: -490px
          z-index: 1
          background-color: #fff
        ul
          position: relative
          width: 100%
          height: auto
          display: flex
          justify-content: space-between
          z-index: 2
          li
            width: 140px
            height: auto
            .icon-box
              position: relative
              width: 75px
              height: 75px
              margin: 0 auto
              border-radius: 50%
              display: flex
              justify-content: center
              align-items: center
              background-color: #fff
              img
                width: 35px
                height: 35px
              .triangle
                position: absolute
                top: 30px
                right: -15px
                width: 0
                height: 0
                border-top: 10px solid transparent
                border-bottom: 10px solid transparent
                border-left: 20px solid #fff
    h3
              font-size: 18px
              text-align: center
              line-height: 55px
              color: #fff
            p
              text-align: center
              line-height: 18px
              font-size: 14px
              color: #fff
      .btn-box
        width: 100%
        height: auto
        display: flex
        justify-content: center
        a
          padding: 10px 25px
          font-size: 16px
          line-height: 16px
          border-radius: 2px
          color: #fff
          background-color: #d41a1d
</style>