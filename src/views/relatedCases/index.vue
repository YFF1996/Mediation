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
          >{{ item.title }}</li>
        </ul>
      </div>
      <div class="related-right">
        <div class="select-wrapper">
          <p>关键词：</p>
          <input type="text" placeholder="请输入关键词">
          <p>时间：</p>
          <input class="select-time" type="text" placeholder="请选择时间">
          <div class="btn">搜索</div>
        </div>
        <related-cases-list :lists="lists" />
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
      currendIndex: 0,
      navLists: [
        {
          title: '全部'
        },
        {
          title: '婚姻家庭'
        },
        {
          title: '道路纠纷'
        },
        {
          title: '物业纠纷'
        },
        {
          title: '劳动纠纷'
        },
        {
          title: '医疗纠纷'
        }
      ],
      lists: [
        {
          title: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝',
          time: '2019-11-11',
          mark: '婚姻家庭'
        },
        {
          title: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某',
          time: '2019-11-11',
          mark: '婚姻家庭'
        },
        {
          title: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝',
          time: '2019-11-11',
          mark: '婚姻家庭'
        },
        {
          title: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某',
          time: '2019-11-11',
          mark: '婚姻家庭'
        },
        {
          title: '孔某与张某、三方受理纠纷聚少离多就分手了累计收到了粉丝孔某与张某',
          time: '2019-11-11',
          mark: '婚姻家庭'
        }
      ]
    }
  },
  methods: {
    onNavItemFn (index) {
      this.currendIndex = index
    }
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