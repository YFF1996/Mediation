<template>
  <div class="online-mediation-wrapper">
    <header-nav :navState="false" />
    <title-box />
    <div class="schedule-wrapper">
      <div
        class="item"
        v-for="(item, index) in mediationLists"
        :class="{'item-active' : currentIndex >= index}"
        :key="index"
      >{{ item.title }}</div>
    </div>
    <div class="content-wrapper">
      <mediation-a v-if="currentIndex === 0" @nextChild="onNextFn" />
      <mediation-b v-if="currentIndex === 1" @nextChild="onNextFn" />
      <mediation-c v-if="currentIndex === 2" @nextChild="onNextFn" />
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNavTemplate'
import TitleBox from '@/components/titleBoxTemplate'
import MediationA from '@/components/mediationATemplate'
import MediationB from '@/components/mediationBTemplate'
import MediationC from '@/components/mediationCTemplate'
import FooterTempate from '@/components/footerTemplate'

export default {
  data() {
    return {
      currentIndex: 0,
      mediationLists: []
    }
  },
  created () {
    this.createScheduleFn()
  },
  methods: {
    createScheduleFn () {
      this.mediationLists = [
        {
          title: '1. 填写申请人信息'
        },
        {
          title: '2. 填写被申请人信息'
        },
        {
          title: '3. 填写纠纷详情'
        }
      ]
    },
    onNextFn (index) {
      this.currentIndex = index
    }
  },
  components: {
    HeaderNav,
    TitleBox,
    MediationA,
    MediationB,
    MediationC,
    FooterTempate
  }
}
</script>

<style lang="stylus" scoped>
  .online-mediation-wrapper
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