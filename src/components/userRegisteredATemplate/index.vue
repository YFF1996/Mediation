<template>
  <div class="user-registered-a-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>真实姓名</h3>
        </div>
        <div class="input-box">
          <input type="text" v-model="dataForm.realname" placeholder="请输入账号" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>选择证件类型</h3>
        </div>
        <div class="input-box">
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
          <input type="number" v-model="dataForm.username"  placeholder="请输入真实的证件号(此号为登录名)" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>输入验证号</h3>
        </div>
        <div class="input-box">
          <input type="text" v-model="dataForm.captcha" placeholder="请输入图片验证码" />
          <div class="code-img">
            <img style="width: 120px;height: 100%" :src="captchaPath" @click="getCaptcha()" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>输入手机号</h3>
        </div>
        <div class="input-box">
          <input type="number" v-model="dataForm.mobile" placeholder="请输入你的手机号码" />
        </div>
      </li>
      <li>
        <div class="name"></div>
        <div class="input-box">
          <input type="number"  v-model="dataForm.smsCode" placeholder="请输入6位验证码" />
          <div class="get-code-btn" @click="onGetCodeFn()" v-if="second === 60">{{ codeText }}</div>
          <div class="get-code-btn" v-else>{{ second }}s</div>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>设置密码</h3>
        </div>
        <div class="input-box">
          <input  v-model="dataForm.password" type="text" placeholder="请设置密码，8~20个字符，由大写字母、小写字母和数字组成" />
        </div>
      </li>
      <li>
        <div class="name"></div>
        <div class="input-box">
          <input type="text" v-model="dataForm.rePassword" placeholder="再次输入密码" />
        </div>
      </li>
    </ul>
    <div class="protocol-wrapper">
      <el-checkbox v-model="checked" />
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
let stop = null

export default {
  data() {
    return {
        type:0,
        captchaPath: '',
        uuid: '',
      options: [{
        value: '身份证',
        label: '身份证'
      }],
      userId:0,
        dataForm: {
            userName: '',
            realname: '',
            mobile: '',
            password: '',
          rePassword:'',
            uuid: '',
            smsCode:'',
            captcha: ''
        },
      value: '',
      checked: false,
      second: 60,
      codeText: '免费获取验证码'
    }
  },
    mounted(){
        this.getCaptcha();
        this.getDataList()
    },
  methods: {
      getDataList(){
        if (this.$cookie.get("username") == null || this.$cookie.get("username") == '') {
          return;
        }
          this.$http({
              url: this.$http.adornUrl('/api/user/find'),
              method: 'get',
              params: this.$http.adornParams({
                  'username':this.$cookie.get("username")
              })
          }).then(({data}) => {
              if (data && data.code == 200) {
                  this.dataForm = data.data
              } else {
                  this.$message.error(data.msg)
              }
          })

      },
    onNextFn () {

          if (!this.checked){
              this.$message.error("请先同意,我已阅读并同意")
              return;
          }
      if (this.dataForm.password != this.dataForm.rePassword){
        this.$message.error("两次密码不一致")
        return;
      }
        if (this.$cookie.get("username")) {
            this.type =1
          this.userId = this.$cookie.get("userId")
        } else  {
            this.type =0
          this.userId =1
        }

        this.$http({
            url: this.$http.adornUrl('/api/register'),
            method: 'post',
            data: this.$http.adornData({
                'userId':this.userId,
                'username':this.dataForm.username,
                'smsCode': this.dataForm.smsCode,
                'mobile':this.dataForm.mobile,
                'realname':this.dataForm.realname,
                'password': this.dataForm.password,
                'captchaKey':this.uuid,
                'type':this.type,
                'captcha':this.dataForm.captcha,
            })
        }).then(({data}) => {
            if (data && data.code == 200) {
              this.$cookie.set("username",data.data.username);
              this.$cookie.set("userId",data.data.userId);
                this.$emit('createNextChild', 1)

            } else {
              this.$cookie.delete("username");
              this.$cookie.delete("userId");
              this.$message.error(data.msg)
            }
        })

    },
      getCaptcha () {
          this.$http({
              url: this.$http.adornUrl('/api/getCaptcha'),
              method: 'get',
              data: this.$http.adornParams({
              })
          }).then(({data}) => {
              if (data && data.code == 200) {
                  this.uuid = data.data.key
              } else {
                  this.getCaptcha()
                  this.$message.error(data.msg)
              }
          }).then(() => {
              this.captchaPath = this.$http.adornUrl(`/api/captcha.jpg?uuid=${this.uuid}`)
          })
      },
    onGetCodeFn () {
      stop = setInterval(() => {
        this.second --
        if (this.second <= 0) {
          this.second = 60
          this.codeText = '重新获取验证码'
          window.clearInterval(stop)
        }
      }, 1000),
            this.$http({
                url: this.$http.adornUrl('/api/sms/code'),
                method: 'post',
                data: this.$http.adornData({
                    'mobile':this.dataForm.mobile,
                    'smsmode':'1'
                })
            }).then(({data}) => {
                console.log(data)
            })
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
      align-items: center
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
