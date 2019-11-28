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
          >{{ item.title }}</li>
        </ul>
      </div>
      <news-list :lists="lists" />
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
          title: '全部'
        },
        {
          title: '新闻栏目A'
        },
        {
          title: '新闻栏目B'
        },
        {
          title: '新闻栏目C'
        }
      ],
      lists: [
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          description: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          time: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          description: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          time: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          description: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          time: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          description: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          time: '2019-11-32 25:61:61'
        },
        {
          urlPic: UrlPic,
          title: '《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告，《法制日报》新时代"风墙经验" 系列报胜多负少的打广告',
          description: '东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。东方红适得府君书爽肤水，发生的纠纷类似、的发生大幅度发、就搞定了水电费ITIP我。',
          time: '2019-11-32 25:61:61'
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
    NewsList,
    FooterTempate
  }
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
