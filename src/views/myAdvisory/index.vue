<template>
  <div class="my-advisory-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'my_mediate'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <div data-v-26cb7cff="" class="wrapper">
          <div data-v-26cb7cff="" class="customer">
            <div data-v-26cb7cff="" class="customer-head">
              <div data-v-26cb7cff="" class="customer-head-logo"></div>
              <div data-v-26cb7cff="" class="customer-head-title"><a style="width: 600px" data-v-26cb7cff="">矛盾纠纷在线调解平台</a> · 智能咨询</div>
            </div>
            <div data-v-26cb7cff="" class="customer-body">
              <div data-v-26cb7cff="" class="customer-room">
                <div data-v-26cb7cff="" class="customer-room-content">
                  <div data-v-26cb7cff="" class="customer-room-scroll">
                    <div data-v-36edc3eb="" data-v-26cb7cff="" class="customer-room-chat">
                      <div data-v-36edc3eb="" class="chat-tip">智能咨询即将接入为您服务</div>
                      <div data-v-36edc3eb="" class="chat-list">
                        <div data-v-36edc3eb="" class="chat-list-item">
                          <div data-v-36edc3eb="" class="item-content item-left"><div data-v-36edc3eb="" class="message-item-container"><div>您好，矛盾纠纷在线调解平台智能咨询为您服务，请问有什么可以帮到您？</div></div></div>
                        </div>
                        <div data-v-36edc3eb="" class="chat-list-item">
                          <div data-v-36edc3eb="" class="item-content item-right"><div data-v-36edc3eb="" class="message-item-container"><div>{{problem}}</div></div></div>
                        </div>
                        <div data-v-36edc3eb="" class="chat-list-item">
                          <div data-v-36edc3eb="" class="item-content item-left">
                            <div data-v-36edc3eb="" class="message-item-container">
                              <div>
                                <div class="message-item-dirs">
                                  <div>您所提的问题:</div>
                                  <!--                                  <div data-v-cbbef2e8=""><div data-v-cbbef2e8=""><div data-v-cbbef2e8="" class="message-item-node">广西计划生育服务证</div></div></div>-->
                                  <!--                                </div>-->
                                  <!--                                <div class="message-item-dirs"><div data-v-cbbef2e8=""><div data-v-cbbef2e8=""><div data-v-cbbef2e8="" class="message-item-node">查看广西下级区域相关问题</div></div></div></div>-->
                                  <ul data-v-26cb7cff="" class="hot-list">
                                    <li
                                            v-for="(item, index) in lists"
                                            :class="{'active' : currendIndex === index}"
                                            :key="index"
                                            @click="onNavItemFn(index)"
                                    ><p>{{ item.problem}}</p></li>
                                  </ul>
                                </div>
                              </div>
                              <div>
                                <div class="message-item-dirs">
                                  <div>为您推荐以下答案:</div>
                                  <!--                                  <div data-v-cbbef2e8=""><div data-v-cbbef2e8=""><div data-v-cbbef2e8="" class="message-item-node">广西计划生育服务证</div></div></div>-->
                                  <!--                                </div>-->
                                  <!--                                <div class="message-item-dirs"><div data-v-cbbef2e8=""><div data-v-cbbef2e8=""><div data-v-cbbef2e8="" class="message-item-node">查看广西下级区域相关问题</div></div></div></div>-->
                                  <ul data-v-26cb7cff="" class="hot-list">
                                    <li
                                            v-for="(item, index) in lists"
                                            :class="{'active' : currendIndex === index}"
                                            :key="index"
                                            @click="onNavItemFn(index)"
                                    ><p>{{ item.answer}}</p></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-bf2aee06="" data-v-26cb7cff="" class="customer-room-message"><textarea data-v-bf2aee06="" v-model="content" placeholder="请输入您想咨询的内容，如：深圳积分入户" class="message-text"></textarea><button data-v-bf2aee06="" class="message-btn z-active" @click="submit">发送</button><div data-v-bf2aee06="" class="suggestions"></div></div>
              </div>
              <div data-v-26cb7cff="" class="customer-tool">
                <div data-v-26cb7cff="" class="customer-tool-hot tool-item">
                  <h3 data-v-26cb7cff="" class="tool-title">猜您想问</h3>
                  <ul data-v-26cb7cff="" class="hot-list">
                    <li
                            v-for="(item, index) in lists"
                            :class="{'active' : currendIndex === index}"
                            :key="index"
                            @click="onNavItemFn(index)"
                    ><p>{{ item.answer}}</p></li>
                    <!--                    <li data-v-26cb7cff="">人才引进</li>-->
                    <!--                    <li data-v-26cb7cff="">往来港澳商务签注备案登记</li>-->
                    <!--                    <li data-v-26cb7cff="">居民身份证丢失补领</li>-->
                    <!--                    <li data-v-26cb7cff="">住房公积金提取</li>-->
                    <!--                    <li data-v-26cb7cff="">养犬登记</li>-->
                    <!--                    <li data-v-26cb7cff="">生育登记</li>-->
                  </ul>
                </div>
                <!--                <div data-v-26cb7cff="" class="customer-tool-entry tool-item">-->
                <!--                  <h3 data-v-26cb7cff="" class="tool-title">其他功能</h3>-->
                <!--                  <ul data-v-26cb7cff="" class="entry-list">-->
                <!--                    <li data-v-26cb7cff="" class="entry-list-offline"><a data-v-26cb7cff="" target="_blank"><i data-v-26cb7cff=""></i><p data-v-26cb7cff="">留言咨询</p></a></li>-->
                <!--                    <li data-v-26cb7cff="" class="entry-list-feedback"><a data-v-26cb7cff="" target="_blank"><i data-v-26cb7cff=""></i><p data-v-26cb7cff="">咨询反馈</p></a></li>-->
                <!--                    <li data-v-26cb7cff="" class="entry-list-progress"><a data-v-26cb7cff="" target="_blank"><i data-v-26cb7cff=""></i><p data-v-26cb7cff="">办件进度</p></a></li>-->
                <!--                  </ul>-->
                <!--                </div>-->
                <div data-v-26cb7cff="" class="customer-tool-contact tool-item"><h3 data-v-26cb7cff="" class="tool-title">联系我们</h3><p data-v-26cb7cff="" class="contact-phone">暂无</p></div></div>
            </div>
          </div>
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
        currendIndex:'',
        lists: [
          {
            problem: '',
            answer: '',
            title: ''
          }
        ],
        problem:'',
        content:'',
        disputeId:'',
        title:'',
        sysUserId:'',
      }
    },
    created () {
      this.getDataList()
    },
    methods: {
      getDataList() {
        if (this.$route.params.id) {
         this.disputeId = this.$route.params.id
        } else  {
          this.disputeId = null
        }
        this.$http({
          url: this.$http.adornUrl('/api/consult/list'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'pagesize': this.pageSize,
            'key':this.problem,
            'disputeId':this.$route.params.id,
          })
        }).then(({data}) => {
          if (data && data.code == 200) {
            this.lists = data.data.list
          } else {
            this.dataList = []
            this.totalPage = 0
          }
        })
      },
      submit(){
        this.problem = this.content
        this.content= ''
        if (this.$route.params.id) {
          if (this.$route.params.content){
            this.title =this.$route.params.content
          }
          if (this.$route.params.sysUserId) {
            this.sysUserId =this.$route.params.sysUserId
          }
          this.$http({
            url: this.$http.adornUrl('/api/consult/save/one'),
            method: 'post',
            data: this.$http.adornData({
              'userId': this.$cookie.get("userId"),
              'creator': this.$cookie.get("realname"),
              'title':  this.title,
              'sysUserId':this.sysUserId,
              'content':this.problem,
              'disputeId': this.$route.params.id,
            })
          }).then(({data}) => {
            if (data && data.code == 200) {
                       this.$message.success(data.msg)
            } else {
              this.$message.error(data.msg)
            }
          })
        }
        this.getDataList()
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
  .my-advisory-wrapper
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
        padding: 45px 0
        box-sizing: border-box
</style>
