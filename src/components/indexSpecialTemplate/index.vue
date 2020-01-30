<template>
  <div class="index-special-wrapper">
    <div class="content">
      <div class="title-wrapper">
        <div class="title">
          <img src="../../common/img/index-title-left.png" />
          <h2>纠纷专题</h2>
          <img src="../../common/img/index-title-right.png" />
        </div>
        <p>详细说明</p>
      </div>
      <ul>
        <li>
          <div class="bg">
            <img class="bg-img" src="../../common/img/zt-bg1.png" />
            <div class="mask">
              <img src="../../common/img/zt-icon1.png" />
            </div>
          </div>
          <h3>婚姻家庭</h3>
          <div class="btn-box">
            <router-link to="/online_mediation" v-if="realname != null">立即申请</router-link>
            <router-link to="/registered" v-if="realname == null">立即申请</router-link>
          </div>
        </li>
        <li>
          <div class="bg">
            <img class="bg-img" src="../../common/img/zt-bg2.png" />
            <div class="mask">
              <img src="../../common/img/zt-icon2.png" />
            </div>
          </div>
          <h3>道路纠纷</h3>
          <div class="btn-box">
            <router-link to="/online_mediation" v-if="realname != null">立即申请</router-link>
            <router-link to="/registered" v-if="realname == null">立即申请</router-link>
          </div>
        </li>
        <li>
          <div class="bg">
            <img class="bg-img" src="../../common/img/zt-bg3.png" />
            <div class="mask">
              <img src="../../common/img/zt-icon3.png" />
            </div>
          </div>
          <h3>物业纠纷</h3>
          <div class="btn-box">
            <router-link to="/online_mediation" v-if="realname != null">立即申请</router-link>
            <router-link to="/registered" v-if="realname == null">立即申请</router-link>
          </div>
        </li>
        <li>
          <div class="bg">
            <img class="bg-img" src="../../common/img/zt-bg4.png" />
            <div class="mask">
              <img src="../../common/img/zt-icon4.png" />
            </div>
          </div>
          <h3>劳动纠纷</h3>
          <div class="btn-box">
            <router-link to="/online_mediation" v-if="realname != null">立即申请</router-link>
            <router-link to="/registered" v-if="realname == null">立即申请</router-link>
          </div>
        </li>
        <li>
          <div class="bg">
            <img class="bg-img" src="../../common/img/zt-bg5.png" />
            <div class="mask">
              <img src="../../common/img/zt-icon5.png" />
            </div>
          </div>
          <h3>医疗纠纷</h3>
          <div class="btn-box" >
            <router-link to="/online_mediation" v-if="realname != null">立即申请</router-link>
            <router-link to="/registered" v-if="realname == null">立即申请</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
      computed: {
          realname: {
              get() {
                  return window.sessionStorage.getItem('realname')
              }
          },
      },
      method:{
          submit(){
              this.$router.push('/online_mediation');
          },
      }
  }
</script>

<style lang="stylus" scoped>
  .index-special-wrapper
    width: 100%
    height: auto
    .content
      width: 1180px
      height: auto
      padding-bottom: 50px
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
            color: #000
        p
          font-size: 16px
          text-align: center
          line-height: 56px
          color: #999
      ul
        width: 100%
        height: auto
        display: flex
        justify-content: space-between
        li
          width: 225px
          height: auto
          padding-bottom: 16px
          border-radius: 2px
          border: 1px solid #e5e5e5
          overflow: hidden
          box-sizing: border-box
          .bg
            position: relative
            width: 100%
            height: 185px
            border-radius: 2px 2px 0 0
            overflow: hidden
            .bg-img
              width: 100%
              height: 100%
            .mask
              position: absolute
              left: 0
              top: 0
              width: 100%
              height: 100%
              display: flex
              justify-content: center
              align-items: center
              background-color: rgba(68, 106, 150, 0.5)
              img
                width: 52px
                height: 52px
          h3
            font-size: 20px
            line-height: 60px
            text-align: center
            color: #333
          .btn-box
            width: 100%
            height: auto
            display: flex
            justify-content: center
            a
              padding: 7px 20px
              border-radius: 4px
              line-height: 14px
              font-size: 14px
              color: #f8090d
              background-color: #fdf3f3
</style>
