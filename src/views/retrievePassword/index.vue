<template>
  <div class="retrieve-password-wrapper">
    <header-nav :navState="false" />
    <title-box />
    <div class="schedule-wrapper">
      <div
        class="item"
        v-for="(item, index) in scheduleLists"
        :class="{'item-active' : currentIndex >= index}"
        :key="index"
      >{{ item.title }}</div>
    </div>
    <div class="content-wrapper">
      <retrieve-password-a v-if="currentIndex === 0" @nextChild="nextFn" />
      <retrieve-password-b v-if="currentIndex === 1" @nextChild="nextFn" />
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import retrievePasswordA from '@/components/retrievePasswordATemplate'
import retrievePasswordB from '@/components/retrievePasswordBTemplate'
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
          title: '1. 身份验证'
        },
        {
          title: '2. 重置密码'
        }
      ]
    },
    nextFn (index) {
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
    retrievePasswordA,
    retrievePasswordB,
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .retrieve-password-wrapper
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
        width: 255px
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