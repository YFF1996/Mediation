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
              <div data-v-26cb7cff="" class="customer-head-title"><a data-v-26cb7cff="">广西投资项目在线并联审批监管平台</a> · 智能咨询</div>
            </div>
            <div data-v-26cb7cff="" class="customer-body">
              <div data-v-26cb7cff="" class="customer-room">
                <div data-v-26cb7cff="" class="customer-room-content">
                  <div data-v-26cb7cff="" class="customer-room-scroll">
                    <div data-v-36edc3eb="" data-v-26cb7cff="" class="customer-room-chat">
                      <div data-v-36edc3eb="" class="chat-tip">智能咨询即将接入为您服务</div>
                      <div data-v-36edc3eb="" class="chat-list">
                        <div data-v-36edc3eb="" class="chat-list-item">
                          <div data-v-36edc3eb="" class="item-content item-left"><div data-v-36edc3eb="" class="message-item-container"><div>上午好，广西投资项目在线并联审批监管平台智能咨询为您服务，请问有什么可以帮到您？</div></div></div>
                        </div>
                        <div data-v-36edc3eb="" class="chat-list-item">
                          <div data-v-36edc3eb="" class="item-content item-right"><div data-v-36edc3eb="" class="message-item-container"><div>计划生育</div></div></div>
                        </div>
                        <div data-v-36edc3eb="" class="chat-list-item">
                          <div data-v-36edc3eb="" class="item-content item-left">
                            <div data-v-36edc3eb="" class="message-item-container">
                              <div>
                                <div class="message-item-dirs">
                                  <div>为您推荐广西以下事项类别:</div>
                                  <div data-v-cbbef2e8=""><div data-v-cbbef2e8=""><div data-v-cbbef2e8="" class="message-item-node">广西计划生育服务证</div></div></div>
                                </div>
                                <div class="message-item-dirs"><div data-v-cbbef2e8=""><div data-v-cbbef2e8=""><div data-v-cbbef2e8="" class="message-item-node">查看广西下级区域相关问题</div></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-bf2aee06="" data-v-26cb7cff="" class="customer-room-message"><textarea data-v-bf2aee06="" placeholder="请输入您想咨询的内容，如：深圳积分入户" class="message-text"></textarea><button data-v-bf2aee06="" class="message-btn">发送</button><div data-v-bf2aee06="" class="suggestions"></div></div>
              </div>
              <div data-v-26cb7cff="" class="customer-tool">
                <div data-v-26cb7cff="" class="customer-tool-hot tool-item">
                  <h3 data-v-26cb7cff="" class="tool-title">猜您想问</h3>
                  <ul data-v-26cb7cff="" class="hot-list">
                    <li data-v-26cb7cff="">人才引进</li>
                    <li data-v-26cb7cff="">往来港澳商务签注备案登记</li>
                    <li data-v-26cb7cff="">居民身份证丢失补领</li>
                    <li data-v-26cb7cff="">住房公积金提取</li>
                    <li data-v-26cb7cff="">养犬登记</li>
                    <li data-v-26cb7cff="">生育登记</li>
                  </ul>
                </div>
                <div data-v-26cb7cff="" class="customer-tool-entry tool-item">
                  <h3 data-v-26cb7cff="" class="tool-title">其他功能</h3>
                  <ul data-v-26cb7cff="" class="entry-list">
                    <li data-v-26cb7cff="" class="entry-list-offline"><a data-v-26cb7cff="" target="_blank"><i data-v-26cb7cff=""></i><p data-v-26cb7cff="">留言咨询</p></a></li>
                    <li data-v-26cb7cff="" class="entry-list-feedback"><a data-v-26cb7cff="" target="_blank"><i data-v-26cb7cff=""></i><p data-v-26cb7cff="">咨询反馈</p></a></li>
                    <li data-v-26cb7cff="" class="entry-list-progress"><a data-v-26cb7cff="" target="_blank"><i data-v-26cb7cff=""></i><p data-v-26cb7cff="">办件进度</p></a></li>
                  </ul>
                </div>
                <div data-v-26cb7cff="" class="customer-tool-contact tool-item"><h3 data-v-26cb7cff="" class="tool-title">联系我们</h3><p data-v-26cb7cff="" class="contact-phone">12345</p></div></div>
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
    return {}
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
