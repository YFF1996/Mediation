<template>
  <div class="user-registered-a-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>真实姓名</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请输入真实姓名" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>选择证件类型</h3>
        </div>
        <div class="input-box">
          <!--<select>-->
            <!--<option>身份证</option>-->
          <!--</select>-->
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>输入证件号</h3>
        </div>
        <div class="input-box">
          <input type="number" placeholder="请输入真实的证件号(此号为登录名)" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>输入验证号</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请输入图片验证码" />
          <div class="code-img"></div>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>输入手机号</h3>
        </div>
        <div class="input-box">
          <input type="number" placeholder="请输入你的手机号码" />
        </div>
      </li>
      <li>
        <div class="name"></div>
        <div class="input-box">
          <input type="number" placeholder="请输入6位验证码" />
          <div class="get-code-btn">免费获取验证码</div>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>设置密码</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请设置密码，8~20个字符，由大写字母、小写字母和数字组成" />
        </div>
      </li>
      <li>
        <div class="name"></div>
        <div class="input-box">
          <input type="text" placeholder="再次输入密码" />
        </div>
      </li>
    </ul>
    <div class="protocol-wrapper">
      <div class="checkbox-box"></div>
      <div class="text">
        <p>我已阅读并同意</p>
        <p class="active">《河池调解平台注册协议》</p>
      </div>
    </div>
    <div class="submit-wrapper">
      <div class="btn">下一步</div>
      <div class="btn btn-active" @click="onNextFn()">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '身份证',
        label: '身份证'
      }],
      value: ''
    }
  },
  methods: {
    onNextFn () {
      this.$emit('createNextChild', 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user-registered-a-wrapper
    width: 100%
    height: auto
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
          .code-img
            width: 95px
            height: 100%
            margin-left: 25px
            background-color: #f3f3f3
          .get-code-btn
            width: 190px
            height: 100%
            margin-left: 25px
            text-align: center
            line-height: 38px
            font-size: 14px
            border-radius: 4px
            cursor: pointer
            color: #fff
            background-color: #d41a1d
      li:last-child
        padding-bottom: 0
    .protocol-wrapper
      width: 100%
      height: auto
      padding: 35px 0 35px 105px
      display: flex
      box-sizing: border-box
      .checkbox-box
        width: 14px
        height: 14px
        border: 1px solid #e7e7e7
        border-radius: 2px
        cursor: pointer
        box-sizing: border-box
      .text
        flex: 1
        padding-left: 10px
        display: flex
        p
          font-size: 14px
          line-height: 14px
          color: #333
        .active
          color: #d41a1d
          cursor: pointer
    .submit-wrapper
      width: 100%
      height: auto
      padding-top: 40px
      .btn
        width: 330px
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
