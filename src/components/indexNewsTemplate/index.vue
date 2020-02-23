<template>
  <div class="index-news-wrapper">
    <div class="content">
      <div class="title-wrapper">
        <div class="title">
          <img src="../../common/img/index-title-left.png" />
          <h2>新闻公告</h2>
          <img src="../../common/img/index-title-right.png" />
        </div>
        <p>说明</p>
      </div>
      <div class="news-wrapper">
        <div class="banner-wrapper">
          <el-carousel
                  height="410px"
                  v-if="lists.length"
                  :initial-index="currendIndex"
                  @change="onChangeFn"
          >
            <el-carousel-item
                    v-for="(item, index) in lists"
                    :key="index"
            >

              <img :src="item.urlPic" />
              <!--<h3 >{{item.name}}</h3>-->
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="news-list-wrapper">
          <ul>
            <li
                    v-for="(item, index) in lists"
                    :key="index"
                    @click="onSkipPageFn('newsDetails',item.id)"
                    :class="{'active' : currendIndex === index}"
            >
              <h3>{{item.title}}</h3>
              <p>{{item.createTime}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // import imgUrl1 from '@/common/img/news-bg1.jpg'
    // import imgUrl2 from '@/common/img/news-bg2.jpeg'
    // import imgUrl3 from '@/common/img/news-bg3.jpg'

    export default {
        data () {
            return {

                currendIndex: 0,
                lists: [
                    {
                        name:'',
                        createTime:'',
                        path: '',
                    },

                ]
            }
        },
        created () {
            this.getDataList()
        },
        methods: {
          onSkipPageFn(path,val){
            this.$router.push({name:path, params:{id:val}});
          },
            onChangeFn(index) {
                this.currendIndex = index
            },
          // 获取数据列表
          getDataList () {
            this.$http({
              url: this.$http.adornUrl('/api/news/list'),
              method: 'get',
              params: this.$http.adornParams({
                'page': this.pageIndex,
                'pagesize': this.pageSize,
              })
            }).then(({data}) => {
              if (data && data.code == 200) {
                console.log(data)
                this.lists = data.data.list
                this.totalPage = data.data.totalCount
              } else {
                this.dataList = []
              }
            })
          },

        }
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
          height: auto
          border-radius: 10px
          overflow: hidden
          background-color: #ccc
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
            z-index: 999
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
              cursor: pointer
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
            li:hover
              h3
                color:#D41A1D
</style>
