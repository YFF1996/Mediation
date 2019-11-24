<template>
  <div class="mediation-a-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>申请人姓名</h3>
        </div>
        <div class="radio-box">
          <div class="dot dot-active"></div>
          <p>自然人</p>
          <div class="dot"></div>
          <p>法人</p>
          <div class="dot"></div>
          <p>非法人组织</p>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>申请人姓名</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请输入你的手机号" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>证件</h3>
        </div>
        <div class="input-box">
          <select>
            <option>身份证</option>
          </select>
          <input type="text" placeholder="请输入你的证件号">
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>申请人性别</h3>
        </div>
        <div class="radio-box">
          <div class="dot dot-active"></div>
          <p>男</p>
          <div class="dot"></div>
          <p>女</p>
          <div class="dot"></div>
          <p>其他</p>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>联系电话</h3>
        </div>
        <div class="input-box">
          <input type="number" placeholder="请输入你的手机号码" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>其他联系方式</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请输入其他手机号码" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>常住地址</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请输入你的常住地址" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>详细地址</h3>
        </div>
        <div class="input-box">
          <input type="text" placeholder="请输入你的详细地址" />
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
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mediation-a-wrapper
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