<template>
  <div class="news-announcement-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'news_announcement'" />
    <div class="content-wrapper">
      <div class="left-nav-wrapper">
        <ul>
          <li
            v-for="(item, index) in navLists"
            :class="{'active' : currendIndex === index}"
            :key="index"
            @click="onNavItemFn(index)"
          >{{ item.paramValue }}</li>
        </ul>
      </div>
      <news-list :lists="lists" :totalPage="totalPage"/>
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import NewsList from '@/components/newsListTemplate'
import FooterTempate from '@/components/footerTemplate'
import UrlPic from '@/common/img/news-bg1.jpg'

export default {
  data() {
    return {
      currendIndex: 0,
      navLists: [
        {
          paramValue: '全部',
            paramId: '全部'
        },
        {
          paramValue: '新闻栏目A',
            paramId: '全部'
        },
        {
          paramValue: '新闻栏目B',
            paramId: '全部'
        },
        {
          paramValue: '新闻栏目C',
            paramId: '全部'
        }
      ],
        paramId:'',
        totalPage:0,
      lists: [
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          content: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          createTime: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          content: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          createTime: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          content: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          createTime: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          content: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          createTime: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          content: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          createTime: '2019-11-32 25:61:61'
        }
      ]
    }
  },
  created () {
    this.getDataList()
      this.getConfigList()
  },
  methods: {
    onNavItemFn (index) {
      this.currendIndex = index
       this.paramId =  this.navLists[index].paramId
        this.getDataList()
    },
      //新闻分类
      getConfigList(){
          this.$http({
              url: this.$http.adornUrl('/sys/config/parent/list'),
              method: 'get',
              params: this.$http.adornParams({
                  'type': '1',
              })
          }).then(({data}) => {

              if (data && data.code == 200) {
                  this.navLists = data.data
                  var obj = {
                      paramValue: '全部',
                      paramId: '0'
                  }
                  this.navLists.splice(0,0,obj)
                  console.log(this.navLists)

              }
          })
      },
    // 获取数据列表
    getDataList () {
      this.$http({
        url: this.$http.adornUrl('/api/news/list'),
        method: 'get',
        params: this.$http.adornParams({
          'page': this.pageIndex,
          'pagesize': this.pageSize,
            'paramId':this.paramId
        })
      }).then(({data}) => {
        if (data && data.code == 200) {
         this.lists = data.data.list
          this.totalPage = data.data.totalCount
        } else {
          this.dataList = []
          this.totalPage = 0
        }
      })
    },
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.pageIndex = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.pageIndex = val
      this.getDataList()
    },

  },
  components: {
    HeaderNav,
    TitleBox,
    NewsList,
    FooterTempate
  },

}
</script>

<style lang="stylus" scoped>
  .news-announcement-wrapper
    width: 100%
    height: auto
    .content-wrapper
      width: 1180px
      height: auto
      padding-bottom: 20px
      margin: 0 auto
      display: flex
      .left-nav-wrapper
        width: 90px
        height: auto
        padding: 20px 0
        border-right: 1px solid #e5e5e5
        ul
          width: 100%
          height: auto
          li
            width: 100%
            height: auto
            margin-bottom: 10px
            line-height: 40px
            border-right: 5px solid #fff
            text-align: center
            font-size: 16px
            cursor: pointer
            box-sizing: border-box
            color: #333
            background-color: #fff
          li:hover
            color: #d41a1d
          .active
            color: #d41a1d
            border-color: #d41a1d
            background: linear-gradient(right, #f9e0e0, #fff)
</style>
