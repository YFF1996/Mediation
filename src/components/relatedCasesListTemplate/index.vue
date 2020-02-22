<template>
  <div class="related-cases-lists">
    <ul v-if="lists.length">
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="onSkipPageFn('relatedCasesDetails',item.id)"
      >
        <h3>{{ item.content }}</h3>
        <div class="time-wrapper">
          <p>发布时间：{{ item.createTime }}</p>
          <div class="mark">{{ item.paramsKey }}</div>
        </div>
      </li>
    </ul>
    <div class="pagination-wrapper">
    <el-pagination
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="pageIndex"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            :total="totalPage"
            layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        pageIndex: 1,
        pageSize: 10,
    }
  },
  methods: {
    onSkipPageFn (path,val) {
        this.$router.push({name:path, params:{id:val}});

    },
      sizeChangeHandle (val) {
          window.console.log(`每页 ${val} 条`)
          this.pageSize = val

      },
      currentChangeHandle (val) {
          window.console.log(`当前页: ${val}`)
          this.pageIndex = val
          this.getDataList();
      },
      // 获取数据列表
      getDataList () {
          this.$http({
              url: this.$http.adornUrl('/api/case/list'),
              method: 'get',
              params: this.$http.adornParams({
                  'page': this.pageIndex,
                  'pagesize': this.pageSize,
              })
          }).then(({data}) => {
              if (data && data.code == 200) {
                  this.currentLists = data.data.list
                  this.totalPage = data.data.totalCount
              } else {
                  this.dataList = []
                  this.totalPage = 0
              }
          })
      },
  },
    props: ['lists','totalPage'],
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