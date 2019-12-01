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
            <li @click="onShowHideFn(true)">
              <div class="item serial-number">1</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">张某</div>
              <div class="item">2019-12-12</div>
            </li>
            <li @click="onShowHideFn(true)">
              <div class="item serial-number">2</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">黄某</div>
              <div class="item">2019-12-12</div>
            </li>
            <li @click="onShowHideFn(true)">
              <div class="item serial-number">3</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">莫某</div>
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
    <div class="mask-wrapper" v-if="popUpsState">
      <div class="pop-ups">
        <div class="title">
          <h3>消息详情</h3>
          <img @click="onShowHideFn(false)" src="../../common/img/closed-icon.png" />
        </div>
        <div class="content">
          <h1>《法制日报》新时代"发生地方就是发生的纠纷类似"，法定搜附近</h1>
          <div class="deta-wrapper">
            <p>发布人：张某额</p>
            <p>发布时间：2018-05-31 15:30</p>
          </div>
          <div class="text-box">
            <p>青海省人力资源社会保障厅印发《青海省劳动人事争议调解员证书管理暂行规定》，将指导各地人社部门及各基层劳动人事争议调解组织加强对劳动人事争议调解员的聘用和管理工作，充分发挥基层劳动人事争议调解优势。</p>
            <p>青海省人力资源社会保障厅印发《青海省劳动人事争议调解员证书管理暂行规定》，将指导各地人社部门及各基层劳动人事争议调解组织加强对劳动人事争议调解员的聘用和管理工作，充分发挥基层劳动人事争议调解优势。</p>
            <p>青海省人力资源社会保障厅印发《青海省劳动人事争议调解员证书管理暂行规定》，将指导各地人社部门及各基层劳动人事争议调解组织加强对劳动人事争议调解员的聘用和管理工作，充分发挥基层劳动人事争议调解优势。</p>
            <p>青海省人力资源社会保障厅印发《青海省劳动人事争议调解员证书管理暂行规定》，将指导各地人社部门及各基层劳动人事争议调解组织加强对劳动人事争议调解员的聘用和管理工作，充分发挥基层劳动人事争议调解优势。</p>
            <p>青海省人力资源社会保障厅印发《青海省劳动人事争议调解员证书管理暂行规定》，将指导各地人社部门及各基层劳动人事争议调解组织加强对劳动人事争议调解员的聘用和管理工作，充分发挥基层劳动人事争议调解优势。</p>
            <p>青海省人力资源社会保障厅印发《青海省劳动人事争议调解员证书管理暂行规定》，将指导各地人社部门及各基层劳动人事争议调解组织加强对劳动人事争议调解员的聘用和管理工作，充分发挥基层劳动人事争议调解优势。</p>
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
      value: '',
      popUpsState: false
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
    },
    onShowHideFn (state) {
      this.popUpsState = state
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
              transition: 0.3s
              cursor: pointer
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
            li:hover
              background-color: #e5e5e5
        .pagination-wrapper
          width: 100%
          height: auto
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
        width: 680px
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
          padding: 10px 20px 35px 20px
          box-sizing: border-box
          h1
            font-size: 18px
            text-align: center
            line-height: 50px
            color: #333
          .deta-wrapper
            width: 100%
            height: auto
            display: flex
            justify-content: center
            p
              padding: 0 15px
              line-height: 20px
              font-size: 14px
              color: #999
          .text-box
            width: 100%
            height: 400px
            padding: 15px 25px
            margin-top: 25px
            border: 1px solid #e5e5e5
            overflow: auto
            box-sizing: border-box
            p
              font-size: 14px
              line-height: 30px
              text-indent: 2em
              color: #333
</style>