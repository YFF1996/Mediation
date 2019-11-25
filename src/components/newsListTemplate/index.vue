<template>
  <div class="news-ul-wrapper">
    <ul v-if="lists.length">
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="onSkipNewsDetailsFn()"
      >
        <div class="news-img">
          <img :src="item.urlPic" />
        </div>
        <div class="news-text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <div class="date-box">{{ item.time }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onSkipNewsDetailsFn () {
      this.$router.push('/news_details')
    }
  },
  props: ['lists']
}
</script>

<style lang="stylus" scoped>
  .news-ul-wrapper
    flex: 1
    height: auto
    padding: 45px
    box-sizing: border-box
    ul
      width: 100%
      height: auto
      li
        width: 100%
        height: auto
        padding: 20px 35px 20px 20px
        margin-bottom: 20px
        border-radius: 6px
        cursor: pointer
        transition: all 0.5s
        display: flex
        box-sizing: border-box
        .news-img
          width: 340px
          height: 195px
          border-radius: 2px
          overflow: hidden
          img
            width: 100%
            height: 100%
            object-fit: cover
        .news-text
          flex: 1
          height: auto
          padding-left: 25px
          h2
            width: 100%
            height: 76px
            font-size: 24px
            line-height: 38px
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
            color: #333
          p
            width: 100%
            height: 78px
            margin: 10px 0
            font-size: 14px
            line-height: 26px
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 3
            overflow: hidden
            color: #666
          .date-box
            font-size: 14px
            line-height: 20px
            color: #aaa
      li:hover
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1)
        background-color: #fff
</style>