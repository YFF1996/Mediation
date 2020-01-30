<template>
  <div class="index-banner-wrapper">
    <div class="content">
      <div class="content-text">
        <img src="../../common/img/banner-text.png" />
      </div>
      <div class="content-right">
        <div class="submit-box">
          <h2>已受理纠纷(件)</h2>
          <div class="dispute-num">
            <ul>
              <li>
                <div class="bg"></div>
                <h5>{{qian}}</h5>
              </li>
              <li>
                <div class="bg"></div>
                <h5>{{bai}}</h5>
              </li>
              <li>
                <div class="bg"></div>
                <h5>{{shi}}</h5>
              </li>
              <li>
                <div class="bg"></div>
                <h5>{{ge}}</h5>
              </li>
            </ul>
          </div>
          <div class="dispute-box">
            <ul>
              <li>
                <div class="icon">
                  <img src="../../common/img/dispute-icon-tj.png" />
                </div>
                <div class="dispute-text">
                  <h3>{{rate}}%</h3>
                  <h4>调解成功率</h4>
                </div>
              </li>
              <li class="right">
                <div class="icon">
                  <img src="../../common/img/dispute-icon-me.png" />
                </div>
                <div class="dispute-text">
                  <h3>{{sum}}</h3>
                  <h4>调解成功率</h4>
                </div>
              </li>
            </ul>
          </div>
          <div class="submit-btn" @click="submit()">提交纠纷</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          qian:'',
          bai:'',
          shi:'',
          ge:'',
          rate:'',
          sum:'',
      }
    },
      created () {
          this.getDataList()
      },
      methods: {
          submit(){
              this.$router.push('/online_mediation');
          },
          getDataList () {
              this.dataListLoading = true
              this.$http({
                  url: this.$http.adornUrl('/api/application/dispute/count'),
                  method: 'get',
                  params: this.$http.adornParams({
                  })
              }).then(({data}) => {
                  if (data && data.code == 200) {
                      this.qian = (data.data.done/1000)%10;
                      this.bai = (data.data.done/100)%10;
                      this.shi = (data.data.done/10)%10;
                      this.ge = (data.data.done/1)%10;
                      this.rate=data.data.rate *100;
                      this.sum=data.data.sum;
                  } else {
                      this.dataList = []
                      this.totalPage = 0
                  }
                  this.dataListLoading = false
              })
          },
      },
  }
</script>

<style lang="stylus" scoped>
  .index-banner-wrapper
    width: 100%
    height: 510px
    background: url("../../common/img/index-bg-banner.jpg") no-repeat
    background-size: cover
    .content
      width: 1180px
      height: auto
      padding: 100px 70px 0 80px
      margin: 0 auto
      display: flex
      box-sizing: border-box
      .content-text
        width: 670px
        height: auto
        padding-top: 85px
      .content-right
        flex: 1
        height: auto
        .submit-box
          width: 100%
          height: 375px
          padding: 10px 35px 0 35px
          border-radius: 10px
          background-color: #fff
          box-sizing: border-box
          h2
            font-size: 24px
            line-height: 78px
            font-weight: bold
            text-align: center
            color: #222
          .dispute-num
            width: 100%
            height: auto
            ul
              width: 100%
              height: auto
              display: flex
              justify-content: space-between
              li
                position: relative
                width: 65px
                height: 86px
                border-radius: 5px
                overflow: hidden
                box-shadow: 0 0 5px #f2f2f2
                color: #d41a1d
                background-color: #fff
                .bg
                  width: 100%
                  height: 50%
                  background-color: #f7f7f7
                h5
                  position: absolute
                  top: 0
                  left: 0
                  width: 100%
                  height: 100%
                  font-size: 48px
                  line-height: 86px
                  text-align: center
                  font-weight: bold
          .dispute-box
            width: 100%
            height: auto
            padding: 35px 0 40px 0
            box-sizing: border-box
            ul
              width: 100%
              height: auto
              display: flex
              li
                flex: 1
                height: auto
                padding-left: 15px
                display: flex
                align-items: center
                box-sizing: border-box
                &.right
                  border-left: 1px solid #e2e2e2
                .icon
                  width: 36px
                  height: 34px
                  img
                    width: 100%
                    height: 100%
                .dispute-text
                  flex: 1
                  height: auto
                  padding: 0 10px
                  h3
                    font-size: 24px
                    line-height: 24px
                    font-weight: bold
                    color: #d41a1d
                  h4
                    font-size: 14px
                    color: #666
          .submit-btn
            width: 100%
            height: 48px
            font-size: 20px
            line-height: 48px
            text-align: center
            border-radius: 5px
            cursor: pointer
            color: #fff
            background-color: #d41a1d
</style>