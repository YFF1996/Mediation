<template>
  <el-dialog
          :title="!dataForm.id ? '新增' : '修改'"
          :close-on-click-modal="false"
          :visible.sync="visible">
    <div class="mediation-c-wrapper">
      <ul>
        <li>
          <div class="name">
            <p>*</p>
            <h3>标题</h3>
          </div>
          <div class="textarea-box">
            <input v-model="dataForm.detail" placeholder="请输入标题" />
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
                    ref="upload"
                    :file-list="fileList"
                    action="http://10.196.85.115:8082/hc-online/api/file/upload"
                    multiple
                    :data="category"
                    :on-success="handleAvatarSuccessA"
                    :auto-upload="false"
                    :before-upload="beforeUploadHandle1">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">仅支持JPG、PNG、DEC、XLS、PDF、AVI、MP4等格式文件b</div>
            </el-upload>
          </div>
        </li>
      </ul>
      <div class="submit-wrapper">
        <div class="btn btn-active" @click="onNextFn()">提交申请</div>
      </div>
    </div>

  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl:'',
        visible:false,
        category:{
          title:'',
          detailId:'',
          status:'',
          type:0},
        fileList:[],

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
        detailId:'',
        index:0,
      }
    },

    methods: {
      init(detailId, index){
        if (index == 1){
          this.$message.error("权限不够,不能新增调解记录")
          return
        }
        this.visible = true
        this.detailId = detailId
        this.index = index
        this.fileList = []
      },
      onNextFn () {
        this.$refs.upload.submit();
      },
      // 上传之前
      // 上传之前
      beforeUploadHandle1 () {

        this.category.type = this.index +1
        this.category.status = '3'
        this.category.title = this.dataForm.detail
        this.category.detailId = this.detailId
      },
      handleAvatarSuccessA (response) {
        if (response && response.code == 200) {
          this.$message.success(response.msg)
        } else {
          this.$message.error(response.msg)
        }
        this.visible = false
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
        display: inline-block
        color: #fff
        background-color: #d41a1d
      .btn-active
        margin-left :100px
        display: inline-block
        color: #fff
        background-color: #d41a1d
</style>
