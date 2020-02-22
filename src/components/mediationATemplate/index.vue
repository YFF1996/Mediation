<template>
  <div class="mediation-a-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>申请人类型</h3>
        </div>
        <div class="radio-box">
          <el-radio-group v-model="dataForm.type">
            <el-radio :label="0">自然人</el-radio>
            <el-radio :label="1">法人</el-radio>
            <el-radio :label="2">非法人组织</el-radio>
          </el-radio-group>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>申请人姓名</h3>
        </div>
        <div class="input-box">
          <input type="text" v-model="dataForm.name" placeholder="请输入申请人姓名" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>证件</h3>
        </div>
        <div class="input-box">
          <div class="select-box">
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <input type="text" v-model="dataForm.cardNumber" placeholder="请输入你的证件号">
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>申请人性别</h3>
        </div>
        <div class="radio-box">
          <el-radio-group v-model="dataForm.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
            <el-radio :label="2">其他</el-radio>
          </el-radio-group>
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>联系电话</h3>
        </div>
        <div class="input-box">
          <input type="number" v-model="dataForm.phone" placeholder="请输入你的手机号码" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>其他联系方式</h3>
        </div>
        <div class="input-box">
          <input type="text" v-model="dataForm.mobile"  placeholder="请输入其他手机号码" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>常住地址</h3>
        </div>
        <div class="input-box">
          <input type="text" v-model="dataForm.currentAddress" placeholder="请输入你的常住地址" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>详细地址</h3>
        </div>
        <div class="input-box">
          <input type="text" v-model="dataForm.address" placeholder="请输入你的详细地址" />
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
          url:'',
        dataForm: {
          id: 0,
          type: '',
          name: '',
          cardName: '',
          phone:'',
          sex: 1,
          mobile: '',
          address: '',
          currentAddress:'',
          remark: ''
        },
        sexTypeRadio: 0,
        options: [{
          value: '身份证',
          label: '身份证'
        }],
        value: ''
      }
    },
      created(){
        this.getDataList()
      },
    methods: {
        getDataList(){
     var applicationId =  window.localStorage.getItem("applicationId")

      var userId =  this.$cookie.get("userId");
     if (userId == null){
          this.$router.push("/login")
         return
     }

      if (applicationId == null ||applicationId ==''){
          return
      }
            this.$http({
                url: this.$http.adornUrl('/api/application/find'),
                method: 'post',
                params: this.$http.adornParams({
                    'userId':userId,
                    'applicationId': applicationId,
                })
            }).then(({data}) => {
                if (data && data.code == 200) {
                    if(data.data != null) {
                        this.dataForm = data.data
                    }
                } else {
                    this.$message.error(data.msg)
                }
            })

  },
      onNextFn () {

        var username = this.$cookie.get("username");
          var applicationId =  window.localStorage.getItem("applicationId")
        if (username == null) {
            this.$emit('nextChild', 1)
          this.$message.error("请先登录")
          return
        }
          if (applicationId == null){
              this.url=this.$http.adornUrl('/api/application/save');
          } else  {
              this.url=this.$http.adornUrl('/api/application/update');
          }
          this.$http({
          url: this.url,
          method: 'post',
          data: this.$http.adornData({
              'applicationId':applicationId,
              'userId':this.$cookie.get("userId"),
            'name':this.dataForm.name,
            'type': this.dataForm.type,
            'cardName':this.value,
            'cardNumber':this.dataForm.cardNumber,
            'sex': this.dataForm.sex,
            'phone':this.dataForm.phone,
            'mobile':this.dataForm.mobile,
            'address': this.dataForm.address,
            'currentAddress':this.dataForm.currentAddress,
          })
        }).then(({data}) => {
          if (data && data.code == 200) {
              window.localStorage.setItem("applicationId",data.data.applicationId)
            this.$emit('nextChild', 1)
          } else {
            this.$message.error(data.msg)
          }
        })

      },
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
          .select-box
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
