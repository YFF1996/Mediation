<template>
  <div class="retrieve-password-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>证件号码</h3>
        </div>
        <div class="input-box">
          <select>
            <option>身份证</option>
          </select>
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
    </ul>
    <div class="submit-wrapper">
      <div class="btn">下一步</div>
      <div class="btn btn-active" @click="onNextFn()">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onNextFn () {
      this.$emit('nextChild', 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .retrieve-password-wrapper
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