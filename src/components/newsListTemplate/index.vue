<template>
  <div class="news-ul-wrapper">
    <ul v-if="lists.length">
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="onSkipPageFn('newsDetails',item.id)"
      >
        <div class="news-img">
          <img :src="item.urlPic" />
        </div>
        <div class="news-text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
          <div class="date-box">{{ item.createTime }}</div>
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
        url: this.$http.adornUrl('/api/news/list'),
        method: 'get',
        params: this.$http.adornParams({
          'page': this.pageIndex,
          'pagesize': this.pageSize,
        })
      }).then(({data}) => {
        if (data && data.code == 200) {
          this.lists = data.data.list
            this.totalPage = data.data.totalCount
        } else {
          this.dataList = []
        }
      })
    },
  },
    props: ['lists','totalPage'],
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
    .pagination-wrapper
      width: 100%
      height: auto
</style>
