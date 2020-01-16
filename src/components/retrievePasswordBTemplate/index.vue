<template>
  <div class="retrieve-password-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>重置密码</h3>
        </div>
        <div class="input-box">
          <input type="password" v-model="dataForm.password"  placeholder="请输入新密码" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>确认密码</h3>
        </div>
        <div class="input-box">
          <input type="password" v-model="dataForm.okPassword" placeholder="请再次输入新密码" />
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
      return {
        dataForm:{
          username:'',
          newPassword:'',
          okPassword:'',
        },
      }
    },
    methods: {
      onNextFn () {
        if (this.dataForm.password != this.dataForm.okPassword ){
          this.$message.error("两次密码不一致")
          return;
        }
        if (this.$cookie.get("username") == null) {
          this.$message.error("请先登录");
          return;
        }
        this.$http({
          url: this.$http.adornUrl('/api/sms/code'),
          method: 'post',
          data: this.$http.adornData({
            'newPassword':this.dataForm.newPassword,
            'username':this.$cookie.get("username")
          })
        }).then(({data}) => {
          if (data.data.code == 200){
            this.$message.success(data.data.msg)
            this.$router.push("/login")
          }  else {
            this.$message.error(data.data.msg)
          }
        })

      },
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
          input
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
