<template>
  <div class="my-dispute-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'message_center'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <div class="top-nav-wrapper">
          <ul v-if="navList.length">
            <li
              v-for="(item, index) in navList"
              :class="{'active' : currentIndex === index}"
              @click="onItemFn(index)"
              :key="index"
            >
              {{ item.title }}
              <div class="line"></div>
            </li>
          </ul>
        </div>
        <div class="time-wrapper">
          <div class="select-box">
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="search-box">
            <input type="text">
            <div class="search-btn">搜索</div>
          </div>
          <div class="del-wrapper">
            <div class="btn">删除</div>
          </div>
        </div>
        <div class="table-wrapper">
          <div class="table-top">
            <div class="item serial-number">排序</div>
            <div class="item">消息标题</div>
            <div class="item">发布者</div>
            <div class="item">发布时间</div>
          </div>
          <ul>
            <li>
              <div class="item serial-number">1</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">未受理</div>
              <div class="item">2019-12-12</div>
            </li>
            <li>
              <div class="item serial-number">2</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">已受理</div>
              <div class="item">2019-12-12</div>
            </li>
            <li>
              <div class="item serial-number">3</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">未受理</div>
              <div class="item">2019-12-12</div>
            </li>
          </ul>
        </div>
        <div class="pagination-wrapper">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="100"
            layout="total, prev, pager, next, sizes, jumper"
            :total="50">
          </el-pagination>
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
    return {
      currentIndex: 0,
      navList: [
        {
          title: '个人中心'
        },
        {
          title: '消息通知'
        }
      ],
      currentPage: 1,
      options: [
        {
          value: '未读消息',
          label: '未读消息'
        },
        {
          value: '已读消息',
          label: '已读消息'
        }
      ],
      value: ''
    }
  },
  methods: {
    onItemFn (index) {
      this.currentIndex = index
    },
    handleSizeChange (val) {
      window.console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      window.console.log(`当前页: ${val}`)
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
  .my-dispute-wrapper
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
        padding: 0 45px
        .top-nav-wrapper
          width: 100%
          height: auto
          ul
            width: 100%
            height: 100px
            display: flex
            align-items: center
            li
              position: relative
              padding-right: 45px
              line-height: 20px
              font-size: 20px
              cursor: pointer
              color: #999
              .line
                position: absolute
                left: 50%
                bottom: -15px
                margin-left: -45px
                width: 50px
                height: 5px
                background-color: #fff
            .active
              font-weight: bold
              color: #333
              .line
                background-color: #d41a1d
        .time-wrapper
          width: 100%
          height: auto
          display: flex
          .select-box
            width: 125px
            height: 38px
            margin-right: 20px
          .search-box
            width: auto
            height: auto
            display: flex
            input
              width: 230px
              height: 38px
              padding: 0 10px
              font-size: 14px
              border: 1px solid #ddd
              border-radius: 4px 0 0 4px
              box-sizing: border-box
            input::-webkit-input-placeholder
                    font-size: 14px
                    color: #999
            .search-btn
              width: auto
              height: 38px
              padding: 0 30px
              line-height: 38px
              font-size: 14px
              border: 1px solid #ddd
              border-left: none
              border-radius: 0 4px 4px 0
              cursor: pointer
              background-color: #f5f7fa
              box-sizing: border-box
          .del-wrapper
            flex: 1
            height: auto
            overflow: hidden
            .btn
              float: right
              width: auto
              height: 38px
              padding: 0 30px
              line-height: 38px
              font-size: 14px
              border: 1px solid #ddd
              border-radius: 4px
              cursor: pointer
              box-sizing: border-box
        .table-wrapper
          width: 100%
          height: auto
          padding: 20px 0
          .table-top
            width: 100%
            height: auto
            display: flex
            background-color: #f7f7f7
            .item
              flex: 1
              font-size: 16px
              text-align: center
              line-height: 40px
              border-right: 1px solid #f2f2f2
              color: #666
            .serial-number
              flex: none
              width: 55px
              height: auto
            .item:first-child
              border-left: 1px solid #f2f2f2
          ul
            width: 100%
            height: auto
            li
              width: 100%
              height: auto
              display: flex
              .item
                flex: 1
                height: 60px
                padding: 0 10px
                font-size: 14px
                text-align: center
                line-height: 60px
                border-right: 1px solid #f2f2f2
                border-bottom: 1px solid #f2f2f2
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 1
                overflow: hidden
                color: #666
              .serial-number
                flex: none
                width: 55px
                height: auto
                padding: 0
              .item:first-child
                border-left: 1px solid #f2f2f2
        .pagination-wrapper
          width: 100%
          height: auto
</style>