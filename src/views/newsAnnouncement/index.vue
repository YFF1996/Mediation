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
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'

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
    TitleBox
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