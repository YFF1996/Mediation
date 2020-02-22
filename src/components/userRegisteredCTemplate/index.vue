<template>
  <div class="user-registered-c-wrapper">
    <div class="finish-state-icon">
      <img src="../../common/img/finish-state-icon.png" />
      <p>你已成功注册!</p>
    </div>
    <div class="submit-wrapper">
      <div class="btn" @click="onBackFn()">上一步</div>
      <div class="btn btn-active" @click="onNextFn()">去登陆</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
      onBackFn(){
          this.$emit('createNextChild', 1)
      },
    onNextFn () {
      this.$cookie.delete("username");
      this.$cookie.delete("userId");
      this.$emit('createNextChild',3)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user-registered-c-wrapper
    width: 100%
    height: auto
    .finish-state-icon
      position: relative
      width: 100%
      height: auto
      padding: 50px 0
      img
        width: 276px
        height: 266px
        margin: 0 auto
      p
        position: absolute
        left: 0
        bottom: 50px
        width: 100%
        height: auto
        text-align: center
        font-size: 16px
        color: #999
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
        display: inline-block
        color: #fff
        background-color: #d41a1d
      .btn-active
        margin-left :50px
        display: inline-block
        color: #fff
        background-color: #d41a1d
</style>
