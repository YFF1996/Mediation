<template>
  <div class="index-news-wrapper">
    <div class="content">
      <div class="title-wrapper">
        <div class="title">
          <img src="../../common/img/index-title-left.png" />
          <h2>新闻公告</h2>
          <img src="../../common/img/index-title-right.png" />
        </div>
        <p>说明说明说明说明</p>
      </div>
      <div class="news-wrapper">
        <div class="banner-wrapper">
          <img src="../../common/img/news-bg1.jpg" />
          <div class="mask-box">
            <h3>亚洲调解协会第四届国际调解研讨会亚洲调解协会第四届国际调解研讨会亚洲调解协会第四届国际调解研讨会亚洲调解协会第四届国际调解研讨会啊啊啊啊</h3>
            <div class="dot-box">
              <ul>
                <li class="active"></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="news-list-wrapper">
          <ul>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？公司的公司法是否水电费水电费</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
            <li>
              <h3>“人民法院调解平台APP”在哪下载？</h3>
              <p>2019-11-05</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .index-news-wrapper
    width: 100%
    height: auto
    padding-bottom: 55px
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
            color: #000
        p
          font-size: 16px
          text-align: center
          line-height: 56px
          color: #999
      .news-wrapper
        width: 100%
        height: auto
        display: flex
        .banner-wrapper
          position: relative
          width: 650px
          height: 410px
          border-radius: 10px
          overflow: hidden
          img
            width: 100%
            height: 100%
            object-fit: cover
          .mask-box
            position: absolute
            left: 0
            bottom: 0
            width: 100%
            height: 60px
            padding: 0 15px 0 25px
            display: flex
            background-color: rgba(0, 0, 0, 0.6)
            box-sizing: border-box
            h3
              flex: 1
              height: 60px
              line-height: 60px
              font-size: 18px
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 1
              overflow: hidden
              color: #fff
            .dot-box
              width: auto
              height: 100%
              ul
                width: auto
                height: 100%
                display: flex
                align-items: center
                li
                  width: 14px
                  height: 14px
                  margin-left: 12px
                  border-radius: 50%
                  cursor: pointer
                  background-color: #fff
                .active
                  background-color: #D41A1D
        .news-list-wrapper
          flex: 1
          padding: 0 30px
          box-sizing: border-box
          ul
            width: 100%
            height: auto
            li
              width: 100%
              height: auto
              border-bottom: 1px solid #efefef
              line-height: 50px
              display: flex
              box-sizing: border-box
              h3
                flex: 1
                height: 100%
                line-height: 50px
                font-size: 16px
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 1
                overflow: hidden
                color: #333
              p
                font-size: 12px
                color: #AAAAAA
</style>
