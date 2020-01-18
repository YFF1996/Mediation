<template>
  <div class="my-dispute-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'my_dispute'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <div class="user-info">
          <div class="name-box">
            <div class="item">
              <h3>申请人：</h3>
              <p>{{dataForm.applicationName}}</p>
            </div>
            <div class="item">
              <h3>被申请人：</h3>
              <p>{{dataForm.respondentName}}</p>
            </div>
          </div>
          <div class="description-box">
            <h3>调解内容：</h3>
            <p>{{dataForm.detail}}</p>
          </div>
          <div class="schedule-box">
            <h3>调解进度</h3>
            <ul>
              <li>
                <div class="schedule-left">
                  <div class="dot"></div>
                  <div class="line"></div>
                </div>
                <div class="schedule-right">
                  <div class="top">
                    <h3>{{dataForm.createTime}}</h3>
                    <div class="status">
                      <img src="../../../common/img/green-complete-icon.png" />
                      <span>已确认</span>
                    </div>
                  </div>
                  <div class="text">
                    <p>联络员{{dataForm.contactName}}已确认受理，调解协议已生成，请确认。</p>
                    <div class="btn" @click="onShowHideFn(true)">查看</div>
                  </div>
                </div>
              </li>
              <li>
                <div class="schedule-left">
                  <div class="dot"></div>
                  <div class="line"></div>
                </div>
                <div class="schedule-right">
                  <div class="top">
                    <h3>{{dataForm.createTime1}}</h3>
                  </div>
                  <div class="text">
                    <p>调解员{{dataForm.mediateName}}已确认受理。</p>
                    <div class="btn" @click="onShowHideFn(true)">查看</div>
                  </div>
                </div>
              </li>
              <li>
                <div class="schedule-left">
                  <div class="dot"></div>
                  <div class="line"></div>
                </div>
                <div class="schedule-right">
                  <div class="top">
                    <h3>{{dataForm.createTime2}}</h3>
                  </div>
                  <div class="text">
                    <p>联络员{{dataForm.mediateName}}已结案</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="more-box">点击查看更多进度详情↓</div>
        </div>
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
        <div class="table-wrapper">
          <div class="table-top">
            <div class="item serial-number">排序</div>
            <div class="item">证据名称</div>
            <div class="item">上传时间</div>
            <div class="item item-operating">操作</div>
          </div>
          <ul>
            <li>
              <div class="item serial-number">1</div>
              <div class="item">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
              <div class="item">2019-12-12</div>
              <div class="item item-text">
                <p class="active">下载</p>
              </div>
            </li>
            <li>
              <div class="item serial-number">2</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">2019-12-12</div>
              <div class="item item-text">
                <p class="active">下载</p>
              </div>
            </li>
            <li>
              <div class="item serial-number">3</div>
              <div class="item">文字文字文字文字文字文字文字文字</div>
              <div class="item">2019-12-12</div>
              <div class="item item-text">
                <p class="active">下载</p>
              </div>
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
          <h3>进度查看</h3>
          <img @click="onShowHideFn(false)" src="../../../common/img/closed-icon.png" />
        </div>
        <div class="content">
          <div class="item">
            <h4>时间：</h4>
            <p>2019-11-11 09:25:05</p>
          </div>
          <div class="item">
            <h4>调解内容：</h4>
            <p>调解协议，调解协议，调解协议，调解协议，调解协议，调解协议，调解协议，调解协议，调解协议，调解协议。</p>
          </div>
          <div class="item">
            <h4>附件：</h4>
            <p>证据名称文档.doc<a href="#">下载</a></p>
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

export default {
  data() {
    return {
      currentIndex: 0,
      navList: [
        {
          title: '证件列表'
        },
        {
          title: '调解笔录'
        },
        {
          title: '调解协议'
        }
      ],
        dataForm: {
            id: 0,
            detailId: '',
            applicationName: '',
            respondentName: '',
            status: 0,
            mediateName: '',
            contactName: '',
            createTime: '',
            createTime1: '',
            createTime2: '',
            detail:'',
        },
      dateValue: '',
      currentPage: 1,
      popUpsState: false
    }
  },
    created () {
        this.getDataList()
    },
  methods: {
      // 获取数据列表
      getDataList () {
          alert("===="+this.$route.params.id)
          this.$http({
              url: this.$http.adornUrl('/api/application/dispute/one'),
              method: 'get',
              params: this.$http.adornParams({
                  'id': this.$route.params.id,
              })
          }).then(({data}) => {
              if (data && data.code == 200) {
                  this.dataForm = data.data
              }
          })
      },
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
        padding: 30px 45px
        .user-info
          width: 100%
          height: auto
          padding: 10px 20px 20px 20px
          background-color: #f9f9f9
          box-sizing: border-box
          .name-box
            width: 100%
            height: auto
            display: flex
            .item
              padding-right: 40px
              display: flex
              h3, p
                font-size: 14px
                line-height: 50px
                font-weight: bold
                color: #333
              p
                font-weight: normal
          .description-box
            width: 100%
            height: auto
            h3, p
              font-size: 14px
              font-weight: bold
              color: #333
            h3
              padding: 5px 0 10px 0
            p
              font-weight: normal
              line-height: 24px
              color: #666
          .schedule-box
            width: 100%
            height: auto
            padding-top: 15px
            h3
              font-size: 14px
              font-weight: bold
              color: #333
            ul
              width: 100%
              height: auto
              padding-top: 15px
              li
                width: 100%
                height: auto
                display: flex
                .schedule-left
                  .dot
                    width: 10px
                    height: 10px
                    border: 5px solid #ffe2e3
                    border-radius: 50%
                    background-color: #d41a1d
                  .line
                    width: 1px
                    height: 100%
                    margin-left: 10px
                    border-left: 1px dashed #d41a1d
                .schedule-right
                  flex: 1
                  padding: 0 20px
                  .top
                    width: 100%
                    height: auto
                    padding-bottom: 5px
                    display: flex
                    h3
                      font-size: 14px
                      font-weight: bold
                      color: #333
                    p
                      padding: 0 15px
                      font-size: 14px
                      color: #333
                    .status
                      display: flex
                      align-items: center
                      img
                        width: 16px
                        height: 16px
                      span
                        padding-left: 8px
                        font-size: 14px
                        color: #0fdc87
                  .text
                    width: 100%
                    height: auto
                    padding-bottom: 40px
                    display: flex
                    p
                      flex: 1
                      font-size: 14px
                      line-height: 28px
                      color: #666
                    .btn
                      padding: 0 18px
                      border: 1px solid #d41a1d
                      border-radius: 2px
                      line-height: 28px
                      cursor: pointer
                      color: #d41a1d
              li:last-child
                .schedule-left
                  .line
                    display: none
          .more-box
            text-align: center
            font-size: 14px
            cursor: pointer
            color: #aaa
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
        .table-wrapper
          width: 100%
          height: auto
          padding: 0 0 20px 0
          .table-top
            width: 100%
            height: auto
            display: flex
            background-color: #f7f7f7
            .item
              flex: 1
              padding: 0 10px
              font-size: 16px
              text-align: center
              line-height: 40px
              border-right: 1px solid #f2f2f2
              color: #666
            .serial-number
              flex: none
              width: 55px
              height: auto
              padding: 0
            .item-operating
              flex: none
              width: 149px
              padding: 0
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
              .item-active
                color: #0cdd56
              .item-text
                flex: none
                width: 150px
                box-sizing: border-box
                p
                  text-align: center
                  cursor: pointer
                  color: #2f82ff
              .item:first-child
                border-left: 1px solid #f2f2f2
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
        width: 525px
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
            padding-bottom: 20px
            display: flex
            h4
              width: 90px
              height: auto
              text-align: right
              font-size: 14px
              color: #666
            p
              flex: 1
              padding-right: 45px
              font-size: 14px
              display: flex
              color: #333
              a
                padding-left: 30px
                font-size: 14px
                text-decoration: underline
                color: #069eff
          .btn-wrapper
            width: 100%
            height: auto
            display: flex
            justify-content: center
            .btn
              padding: 0 18px
              font-size: 14px
              border-radius: 2px
              line-height: 28px
              cursor: pointer
              color: #fff
              background-color: #d41a1d
</style>