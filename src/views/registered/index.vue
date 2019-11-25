<template>
  <div class="registered-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'registered'" />
    <div class="schedule-wrapper">
      <div
        class="item"
        v-for="(item, index) in scheduleLists"
        :class="{'item-active' : currentIndex >= index}"
        :key="index"
      >{{ item.title }}</div>
    </div>
    <div class="content-wrapper">
      <user-registered-a v-if="currentIndex === 0" @createNextChild="createNextFn" />
      <user-registered-b v-if="currentIndex === 1" @createNextChild="createNextFn" />
      <user-registered-c v-if="currentIndex === 2" @createNextChild="createNextFn" />
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import UserRegisteredA from '@/components/userRegisteredATemplate'
import UserRegisteredB from '@/components/userRegisteredBTemplate'
import UserRegisteredC from '@/components/userRegisteredCTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  data() {
    return {
      currentIndex: 0,
      scheduleLists: []
    }
  },
  created () {
    this.createScheduleFn()
  },
  methods: {
    createScheduleFn () {
      this.scheduleLists = [
        {
          title: '1. 创建账号'
        },
        {
          title: '2. 实名认证'
        },
        {
          title: '3. 注册完成'
        }
      ]
    },
    createNextFn (index) {
      if (index) {
        this.currentIndex = index
      } else {
        this.$router.push('/login')
      }
    }
  },
  components: {
    HeaderNav,
    TitleBox,
    UserRegisteredA,
    UserRegisteredB,
    UserRegisteredC,
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .registered-wrapper
    width: 100%
    height: auto
    .schedule-wrapper
      width: 1180px
      height: auto
      padding: 60px 250px 50px 165px
      margin: 0 auto
      display: flex
      box-sizing: border-box
      .item
        flex: 1
        line-height: 38px
        text-align: center
        font-size: 14px
        border-right: 2px solid #fff
        color: #999
        background-color: #f3f3f3
        &.item:last-child
          border: none
      .item-active
        color: #fff
        background-color: #d41a1d
    .content-wrapper
      width: 1180px
      height: auto
      padding: 0 250px 45px 165px
      margin: 0 auto
      background-color: #fff
      box-sizing: border-box
</style>