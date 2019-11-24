<template>
  <div class="mediation-c-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>纠纷类型</h3>
        </div>
        <div class="radio-box">
          <div class="dot dot-active"></div>
          <p>婚姻家庭</p>
          <div class="dot"></div>
          <p>道路纠纷</p>
          <div class="dot"></div>
          <p>物业纠纷</p>
          <div class="dot"></div>
          <p>劳动纠纷</p>
          <div class="dot"></div>
          <p>医疗纠纷</p>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>纠纷类型</h3>
        </div>
        <div class="textarea-box">
          <textarea placeholder="请输入纠纷内容" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>你的起诉</h3>
        </div>
        <div class="textarea-box">
          <textarea placeholder="请输入纠纷内容" />
        </div>
      </li>
    </ul>
    <div class="submit-wrapper">
      <div class="btn">提交申请</div>
      <div class="btn btn-active" @click="onNextFn()">提交申请</div>
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mediation-c-wrapper
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
        .radio-box
          flex: 1
          height: 100%
          display: flex
          align-items: center
          .dot
            width: 20px
            height: 20px
            border: 1px solid #e5e5e5
            border-radius: 50%
            cursor: pointer
            box-sizing: border-box
          .dot-active
            border: 6px solid #d41a1d
          p
            padding: 0 30px 0 10px
            font-size: 14px
            line-height: 38px
            color: #333
        .textarea-box
          flex: 1
          height: auto
          display: flex
          textarea
            flex: 1
            height: 130px
            padding: 10px 20px
            font-size: 14px
            border: 1px solid #e7e7e7
            border-radius: 4px
            background-color: transparent
            box-sizing: border-box
          textarea::-webkit-input-placeholder
                  font-size: 14px
                  color: #aaa
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
        color: #bdbdbd
        background-color: #ebebeb
      .btn-active
        display: none
        color: #fff
        background-color: #d41a1d
</style>