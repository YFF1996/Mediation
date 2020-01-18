<template>
  <div class="mediation-c-wrapper">
    <ul>
      <li>
        <div class="name">
          <p>*</p>
          <h3>纠纷类型</h3>
        </div>
        <div class="radio-box">
          <el-radio-group v-model="typeRadio">
            <el-radio   v-for="param in params" :key="param.paramId" :label="param.id">{{ param.paramKey }}</el-radio >
          </el-radio-group>
        </div>
      </li>
      <li>
      <div class="name">
        <p>*</p>
        <h3>选择法院</h3>
      </div>
      <div class="input-box">
        <div class="select-box">
          <el-select v-model="value" clearable placeholder="请选择" @click.native="selectConfig(open)">
            <el-option
                    v-for="item in options"
                    :key="item.courtId"
                    :label="item.courtName"
                    :value="item.courtId">
            </el-option>
          </el-select>
        </div>
      </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>纠纷类型</h3>
        </div>
        <div class="textarea-box">
          <textarea v-model="dataForm.detail" placeholder="请输入纠纷内容" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>你的起诉</h3>
        </div>
        <div class="textarea-box">
          <textarea v-model="dataForm.content" placeholder="请输入纠纷内容" />
        </div>
      </li>
      <li>
        <div class="name">
          <p>*</p>
          <h3>相关资料</h3>
        </div>
        <div class="update-wrapper">
          <el-upload
            drag
            action="http://192.168.0.101:8082/hc-online/api/upload/card"
            multiple
            :on-success="handleAvatarSuccessA"
            :data="category"
            :before-upload="beforeUploadHandle1">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">仅支持JPG、PNG、DEC、XLS、PDF、AVI、MP4等格式文件b</div>
          </el-upload>
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
    return {
        imageUrl:'',
        open:'true',
        value:'',
        options: [{
            courtId: '选项1',
            courtName: '黄金糕'
        }],
        category:{ status:''},
        params: [{
            paramId: '0',
            paramKey: '默认父级'
        }],
        urlList:[],
        dataForm: {
            id: 0,
            applicationId: '',
            respondentId: '',
            courtId: '',
            detail:'',
            content: '',
            paramsId: ''
        },
      typeRadio: 0
    }
  },
    created () {
        this.getCategory()
    },
  methods: {
      getCategory(){
          this.$http({
              url: this.$http.adornUrl(`/sys/config/parent/list`),
              method: 'get',
              params: this.$http.adornParams({
                  'type':'2',
              })
          }).then(({data}) => {
              if (data && data.code == 200) {
                  this.params = data.data;
              }
          })
      },
      selectConfig(val){  //获取所有法院
          if (val == 'true') {
              this.$http({
                  url: this.$http.adornUrl(`/sys/court/list`),
                  method: 'get',
                  params: this.$http.adornParams({
                  })
              }).then(({data}) => {
                  if (data && data.code == 200) {
                      console.log(data.data)
                      this.options = data.data.list;
                      this.data = data.data.list;
                  }
              })
              this.open = 'false';
          } else  {
              this.open = 'true';
          }
      },
        onNextFn () {
            let username = this.$cookie.get("username");
            if (username == null) {
                this.$message.error("请先登录")
                return
            }
            if(this.value.length == 0){
                this.$message.error("请先选择法院")
            }

            this.$http({
                url: this.$http.adornUrl('/api/application/dispute/save'),
                method: 'post',
                data: this.$http.adornData({
                    'paramsId':this.typeRadio,
                    'applicationId': window.localStorage.getItem("applicationId"),
                    'respondentId':window.localStorage.getItem("respondentId"),
                    'courtId':this.value,
                    'detail': this.dataForm.detail,
                    'content':this.dataForm.content,
                    'username': username,
                    'upLoadsId': this.urlList
                })
            }).then(({data}) => {
                if (data && data.code == 200) {
                    this.$router.push("/my_dispute")
                } else {
                    this.$message.error(data.msg)
                }
            })

        },
      // 上传之前
      beforeUploadHandle1 () {
          this.category.status = '2'
      },
      handleAvatarSuccessA (response) {
          if (response && response.code == 200) {
              this.urlList.push(response.data.uploadId)
          } else {
              this.$message.error(response.msg)
          }

      },
  }
}
</script>

<style lang="stylus" scoped>
  .mediation-c-wrapper
    width: 100%
    height: auto
    .name
      width: 110px
      height: auto
      padding-right: 15px
      overflow: hidden
      box-sizing: border-box
    .input-box
      flex: 1
      height: 38px
      display: flex
      .select-box
        flex: none
        width: 250px
        margin-right: 20px
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
        .update-wrapper
          width: 390px
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
