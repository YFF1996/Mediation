<template>
  <div class="related-cases-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'related_cases'" />
    <div class="content-wrapper">
      <div class="left-nav-wrapper">
        <ul>
          <li
            v-for="(item, index) in navLists"
            :class="{'active' : currendIndex === index}"
            :key="index"
            @click="onNavItemFn(index)"
          >{{ item.paramValue}}</li>
        </ul>
      </div>
      <div class="related-right">
        <div class="select-wrapper">
          <p>关键词：</p>
          <input type="text" v-model="key" placeholder="请输入相关内容">
          <p>时间：</p>
          <div class="date-box">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              value-format="yyyy-MM-dd HH:mm:ss"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="submit-wrapper">
            <div class="btn btn-active" @click="search()">搜索</div>
          </div>
        </div>
        <related-cases-list :lists="lists" :totalPage="totalPage" />
      </div>
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import RelatedCasesList from '@/components/relatedCasesListTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  data() {
    return {
      dateValue: [],
      currendIndex: 0,
        data:[],
        key:'',
      navLists: [
        {
            paramValue: '全部',
            paramId: '全部'
        },
        {
            paramValue: '婚姻家庭',
            paramId: '全部'
        },
        {
            paramValue: '道路纠纷',
            paramId: '全部'
        },
        {
            paramValue: '物业纠纷',
            paramId: '全部'
        },
        {
            paramValue: '劳动纠纷',
            paramId: '全部'
        },
        {
            paramValue: '医疗纠纷',
            paramId: '全部'
        }
      ],
        totalPage:0,
        paramId:'',
      lists: [
        {
            content: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝',
          time: '2019-11-11',
          mark: '婚姻家庭'
        },
        {
            content: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某',
            createTime: '2019-11-11',
            paramsKey: '婚姻家庭'
        },
        {
            content: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝',
            createTime: '2019-11-11',
            paramsKey: '婚姻家庭'
        },
        {
          title: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某',
            createTime: '2019-11-11',
            paramsKey: '婚姻家庭'
        },
        {
            content: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某',
            createTime: '2019-11-11',
            paramsKey: '婚姻家庭'
        }
      ]
    }
  },
    created () {
        this.getConfigList()
        this.getDataList()
    },
  methods: {
      search () {
         this.getDataList ()
      },
    onNavItemFn (index) {
        this.currendIndex = index
        this.paramId =  this.navLists[index].paramId
        this.getDataList()
    },
      //相关案例分类
      getConfigList(){
          this.$http({
              url: this.$http.adornUrl('/sys/config/parent/list'),
              method: 'get',
              params: this.$http.adornParams({
                  'type': '2',
              })
          }).then(({data}) => {
              if (data && data.code == 200) {
                  console.log(data.data)
                  this.navLists = data.data
                  var obj = {
                      paramValue: '全部',
                      paramId: '0'
                  }
                  this.navLists.splice(0,0,obj)
              }
          })
      },
// 获取数据列表
getDataList () {
    this.$http({
        url: this.$http.adornUrl('/api/case/list'),
        method: 'get',
        params: this.$http.adornParams({
            'page': this.pageIndex,
            'pagesize': this.pageSize,
            'startTime':this.dateValue[0],
            'endTime':this.dateValue[1],
            'paramId':this.paramId,
            'key':this.key
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
  },
  components: {
    HeaderNav,
    TitleBox,
    RelatedCasesList,
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .related-cases-wrapper
    width: 100%
    height: auto
    .content-wrapper
      width: 1180px
      height: auto
      padding-bottom: 80px
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
      .related-right
        flex: 1
        height: auto
        padding: 40px 0 0 25px
        .select-wrapper
          width: 100%
          height: auto
          display: flex
          p
            line-height: 38px
            font-size: 16px
            color: #333
          input
            width: 250px
            height: 38px
            padding: 0 10px
            font-size: 14px
            margin-right: 20px
            border: 1px solid #ddd
            border-radius: 4px
            box-sizing: border-box
          input::-webkit-input-placeholder
                  font-size: 14px
                  color: #999
          .date-box
            height: 38px
            margin-right: 20px
          .btn
            width: auto
            height: 38px
            padding: 0 30px
            line-height: 38px
            font-size: 14px
            border-radius: 4px
            cursor: pointer
            color: #fff
            background-color: #d41a1d
</style>