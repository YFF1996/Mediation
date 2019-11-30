<template>
  <div class="my-data-wrapper">
    <header-nav :navState="false" />
    <title-box :path="'my_data'" />
    <div class="content-wrapper">
      <my-nav />
      <div class="content">
        <div class="update-avatar">
          <div class="top-box">
            <h3>修改头像</h3>
            <div class="avatar">
              <img class="edit-icon" src="../../common/img/edit-avatar-icon.png" />
            </div>
          </div>
          <p>仅支持JPEG、PNG图片格式、且文件小于5M</p>
        </div>
        <ul>
          <li>
            <div class="name">
              <p></p>
              <h3>申请人姓名</h3>
            </div>
            <div class="input-box">
              <input class="input-240" type="text" placeholder="请输入你的姓名" />
            </div>
          </li>
          <li>
            <div class="name">
              <p></p>
              <h3>申请人性别</h3>
            </div>
            <div class="radio-box">
              <el-radio-group v-model="sexTypeRadio">
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
                <el-radio :label="2">其他</el-radio>
              </el-radio-group>
            </div>
          </li>
          <li>
            <div class="name">
              <p></p>
              <h3>出生年月</h3>
            </div>
            <div class="input-box">
              <input class="input-240" type="text" />
            </div>
          </li>
          <li>
            <div class="name">
              <p></p>
              <h3>身份证号码</h3>
            </div>
            <div class="input-box">
              <input class="input-240" type="number" />
            </div>
          </li>
          <li>
            <div class="name">
              <p>*</p>
              <h3>现居地址</h3>
            </div>
            <div class="input-box">
              <select>
                <option>请选择</option>
              </select>
              <select>
                <option>请选择</option>
              </select>
              <select>
                <option>请选择</option>
              </select>
              <select>
                <option>请选择</option>
              </select>
              <select>
                <option>请选择</option>
              </select>
            </div>
          </li>
          <li>
            <div class="name">
              <p>*</p>
              <h3>详细地址</h3>
            </div>
            <div class="input-box">
              <input class="input-440" type="text" />
            </div>
          </li>
          <li>
            <div class="name">
              <p></p>
              <h3>户籍地址</h3>
            </div>
            <div class="input-box">
              <input class="input-440" type="text" />
            </div>
          </li>
          <li>
            <div class="name">
              <p>*</p>
              <h3>其他证件</h3>
            </div>
            <div class="input-box">
              <select>
                <option>身份证</option>
              </select>
              <input class="input-240" type="text" placeholder="请输入你的证件号">
            </div>
          </li>
        </ul>
        <div class="submit-wrapper">
          <div class="btn">保存</div>
          <div class="btn btn-active">保存</div>
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
      sexTypeRadio: 0
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
  .my-data-wrapper
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
        flex: none
        width: auto
        height: auto
        padding: 45px 20px
        .update-avatar
          width: 100%
          height: auto
          .top-box
            width: 100%
            height: auto
            display: flex
            align-items: center
            h3
              width: 110px
              padding-right: 15px
              font-size: 14px
              line-height: 120px
              text-align: right
              color: #333
              box-sizing: border-box
            .avatar
              position: relative
              width: 120px
              height: 120px
              border-radius: 50%
              background-color: #f4f4f4
              .edit-icon
                position: absolute
                right: 0
                bottom: 0
                width: 37px
                height: 37px
                cursor: pointer
          p
            padding: 0 0 10px 110px
            line-height: 55px
            font-size: 14px
            color: #aaa
            box-sizing: border-box
        ul
          width: 100%
          height: auto
          li
            width: 100%
            height: auto
            padding-bottom: 25px
            display: flex
            .name
              width: 110px
              height: auto
              padding-right: 15px
              overflow: hidden
              box-sizing: border-box
              h3
                font-size: 14px
                line-height: 38px
                float: right
                color: #333
              p
                font-size: 14px
                line-height: 38px
                float: right
                color: #d41a1d
            .radio-box
              flex: 1
              height: 100%
              display: flex
              align-items: center
            .input-box
              flex: 1
              height: 38px
              display: flex
              input, select
                flex: 1
                height: 100%
                padding: 0 20px
                font-size: 14px
                border: 1px solid #e7e7e7
                border-radius: 4px
                background-color: transparent
                box-sizing: border-box
              input::-webkit-input-placeholder
                      font-size: 14px
                      color: #aaa
              select
                flex: none
                width: 140px
                margin-right: 20px
              .input-240
                flex: none
                width: 240px
              .input-440
                flex: none
                width: 440px
          li:last-child
            padding-bottom: 0
        .submit-wrapper
          width: 100%
          height: auto
          padding-top: 40px
          .btn
            width: 150px
            height: 60px
            margin: 0 auto
            text-align: center
            line-height: 60px
            font-size: 18px
            cursor: pointer
            border-radius: 4px
            display: none
            color: #bdbdbd
            background-color: #ebebeb
          .btn-active
            display: block
            color: #fff
            background-color: #d41a1d
</style>
