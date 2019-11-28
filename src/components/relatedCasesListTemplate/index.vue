<template>
  <div class="related-cases-lists">
    <ul v-if="lists.length">
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="onSkipPageFn()"
      >
        <h3>{{ item.title }}</h3>
        <div class="time-wrapper">
          <p>发布时间：{{ item.time }}</p>
          <div class="mark">{{ item.mark }}</div>
        </div>
      </li>
    </ul>
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
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0
    }
  },
  methods: {
    onSkipPageFn () {
      this.$router.push('/related_cases_details')
    },
    handleSizeChange (val) {
      window.console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      window.console.log(`当前页: ${val}`)
    }
  },
  props: ['lists']
}
</script>

<style lang="stylus" scoped>
  .related-cases-lists
    width: 100%
    height: auto
    padding: 30px 0 65px 0
    ul
      width: 100%
      height: auto
      li
        width: 100%
        height: auto
        padding-bottom: 30px
        margin-bottom: 20px
        border-bottom: 1px solid #ddd
        cursor: pointer
        h3
          width: 100%
          height: 44px
          font-size: 16px
          line-height: 44px
          font-weight: bold
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 1
          overflow: hidden
          color: #333
        .time-wrapper
          width: 100%
          height: auto
          display: flex
          p
            padding-right: 20px
            line-height: 30px
            font-size: 14px
            color: #666
          .mark
            width: auto
            height: 30px
            padding: 0 12px
            line-height: 30px
            border-radius: 4px
            font-size: 14px
            color: #f8090d
            background-color: #fdf3f3
    .pagination-wrapper
      width: 100%
      height: auto
</style>