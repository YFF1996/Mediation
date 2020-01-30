<template>
  <div class="my-dispute-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'my_dispute'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <div class="top-nav-wrapper">
          <ul v-if="navList.length">
            <li
                    v-for="(item, index) in navList"
                    :class="{'active' : currentIndex === index}"
                    @click="onItemFn(index)"
                    :key="index"
            >
              {{ item.title }}
              <div class="line"></div>
            </li>
          </ul>
        </div>
        <div class="time-wrapper">
          <p>时间：</p>
          <div class="date-box">
            <el-date-picker
                    v-model="dateValue"
                    type="daterange"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="btn" @click="getDataList()">查询</div>
        </div>
        <div>
          <el-table
                  :data="dataList"
                  border
                  v-loading="dataListLoading"
                  style="width: 100%;">
            <el-table-column
                    type="selection"
                    header-align="center"
                    align="center"
                    width="50">
            </el-table-column>
            <el-table-column
                    type="index"
                    header-align="center"
                    align="center"
                    prop="id"
                    width="80"
                    label="序号">
            </el-table-column>
            <el-table-column
                    prop="detail"
                    header-align="center"
                    align="center"
                    label="纠纷概括">
            </el-table-column>
            <el-table-column
                    prop="content"
                    header-align="center"
                    align="center"
                    label="申诉内容">
            </el-table-column>
            <el-table-column
                    prop="type"
                    header-align="center"
                    align="center"
                    label="处理方式">
              <template slot-scope="scope">
                <span v-if="scope.row.type ==1">线上处理</span>
                <span v-if="scope.row.type ==2">线下处理</span>
              </template>
            </el-table-column>
            <el-table-column
                    prop="remark"
                    header-align="center"
                    align="center"
                    label="备注">
            </el-table-column>
            <el-table-column
                    prop="createTime"
                    header-align="center"
                    align="center"
                    label="申请时间">
            </el-table-column>
            <el-table-column
                    prop="status"
                    header-align="center"
                    align="center"
                    label="办理阶段">
              <template slot-scope="scope">
                <span v-if="scope.row.status ==1">待受理</span>
                <span v-if="scope.row.status ==2">已受理</span>
                <span v-if="scope.row.status ==3">成功</span>
                <span v-if="scope.row.status ==4">驳回</span>
                <span v-if="scope.row.status ==5">失败</span>
              </template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    header-align="center"
                    align="center"
                    width="150"
                    label="操作">
              <template slot-scope="scope">
                <el-button  type="text"  size="small" @click="onSkipPageFn(scope.row.id)">查看</el-button>
                <el-button type="text" size="small" v-if="scope.row.status ==4||scope.row.status ==1" @click="deleteHandle(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
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
    </div>
    <footer-tempate :footerState="true" />
  </div>
</template>

<script>
    import HeaderNav from '@/components/headerNavTemplate'
    import TitleBox from '@/components/titleBoxTemplate'
    import MyNav from '@/components/myNavTemplate'
    import FooterTempate from '@/components/footerTemplate'

    export default {
        data() {
            return {
                currentIndex: 0,
                dataListLoading: false,
                navList: [
                    {
                        title: '全部案例'
                    },
                    {
                        title: '待受理案例'
                    },
                    {
                        title: '已受理案例'
                    }
                ],
                dataList:[],
                dateValue: [],
                currentPage: 1
            }
        },
        created () {
            this.getDataList()
        },
        methods: {
            // 获取数据列表
            getDataList () {
                alert("=="+this.currentIndex)
                this.$http({
                    url: this.$http.adornUrl('/api/application/dispute/list'),
                    method: 'get',
                    params: this.$http.adornParams({
                        'page': this.pageIndex,
                        'pagesize': this.pageSize,
                        'startTime':this.dateValue[0],
                        'endTime':this.dateValue[1],
                        'status':this.currentIndex,
                      'username':this.$cookie.get("username")
                    })
                }).then(({data}) => {
                    if (data && data.code == 200) {
                        this.dataList = data.data.list
                        this.totalPage = data.data.totalCount
                    } else {
                        this.dataList = []
                        this.totalPage = 0
                    }
                })
            },
            onItemFn (index) {
                this.currentIndex = index
                this.getDataList()
            },
            onSkipPageFn (val) {
                this.$router.push({name:'myDisputeDetails', params:{id:val}});
            },
            handleSizeChange (val) {
                window.console.log(`每页 ${val} 条`)
            },
            handleCurrentChange (val) {
                window.console.log(`当前页: ${val}`)
            }
        },
        components: {
            HeaderNav,
            TitleBox,
            MyNav,
            FooterTempate
        }
    }
</script>

<style lang="stylus" scoped>
  .my-dispute-wrapper
    width: 100%
    height: auto
    background-color: #f2f2f2
    .content-wrapper
      width: 1180px
      height: auto
      margin: 0 auto
      display: flex
      background-color: #fff
      .content
        flex: 1
        width: auto
        height: auto
        padding: 0 45px
        .top-nav-wrapper
          width: 100%
          height: auto
          ul
            width: 100%
            height: 100px
            display: flex
            align-items: center
            li
              position: relative
              padding-right: 45px
              line-height: 20px
              font-size: 20px
              cursor: pointer
              color: #999
              .line
                position: absolute
                left: 50%
                bottom: -15px
                margin-left: -45px
                width: 50px
                height: 5px
                background-color: #fff
            .active
              font-weight: bold
              color: #333
              .line
                background-color: #d41a1d
        .time-wrapper
          width: 100%
          height: auto
          display: flex
          p
            line-height: 38px
            font-size: 16px
            color: #333
          .date-box
            height: 38px
            margin-right: 20px
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
        .table-wrapper
          width: 100%
          height: auto
          padding: 20px 0
          .table-top
            width: 100%
            height: auto
            display: flex
            background-color: #f7f7f7
            .item
              flex: 1
              font-size: 16px
              text-align: center
              line-height: 40px
              border-right: 1px solid #f2f2f2
              color: #666
            .serial-number
              flex: none
              width: 55px
              height: auto
            .item:first-child
              border-left: 1px solid #f2f2f2
          ul
            width: 100%
            height: auto
            li
              width: 100%
              height: auto
              display: flex
              .item
                flex: 1
                height: 60px
                padding: 0 10px
                font-size: 14px
                text-align: center
                line-height: 60px
                border-right: 1px solid #f2f2f2
                border-bottom: 1px solid #f2f2f2
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 1
                overflow: hidden
                color: #666
              .serial-number
                flex: none
                width: 55px
                height: auto
                padding: 0
              .item-active
                color: #0cdd56
              .item-text
                display: flex
                align-items: center
                p
                  cursor: pointer
                  color: #2f82ff
                .active
                  padding-left: 15px
                .line
                  width: 1px
                  height: 16px
                  margin: 0 15px
                  background-color: #e6e6e6
              .item:first-child
                border-left: 1px solid #f2f2f2
        .pagination-wrapper
          width: 100%
          height: auto
</style>
