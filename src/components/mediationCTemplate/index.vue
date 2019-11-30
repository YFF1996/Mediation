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
            <el-radio :label="0">婚姻家庭</el-radio>
            <el-radio :label="1">道路纠纷</el-radio>
            <el-radio :label="2">物业纠纷</el-radio>
            <el-radio :label="3">劳动纠纷</el-radio>
            <el-radio :label="4">医疗纠纷</el-radio>
          </el-radio-group>
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
      <li>
        <div class="name">
          <p>*</p>
          <h3>相关资料</h3>
        </div>
        <div class="update-wrapper">
          <div class="update-item">
            <img src="../../common/img/mediation-update-icon.png" />
            <div class="text">
              <p>将文件拖到此处，或</p>
              <p class="active">点击上传</p>
            </div>
          </div>
          <div class="update-type">仅支持JPG、PNG、DEC、XLS、PDF、AVI、MP4等格式文件</div>
          <div class="file-ul">
            <div class="file-item">
              <img src="../../common/img/doc-icon.png" />
              <p>VPN销售清单收集.doc</p>
            </div>
            <div class="file-item">
              <img src="../../common/img/doc-icon.png" />
              <p>VPN销售清单收集.doc</p>
            </div>
          </div>
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
      typeRadio: 0
    }
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
          height: auto
        .update-item
          width: 100%
          height: 120px
          padding-top: 20px
          border: 1px dashed #e7e7e7
          border-radius: 12px
          cursor: pointer
          box-sizing: border-box
          img
            width: 62px
            height: 45px
            margin: 0 auto
        .update-type
          line-height: 30px
          font-size: 12px
          color: #999
        .file-ul
          width: 100%
          height: auto
          .file-item
            width: 100%
            height: auto
            padding: 5px
            margin-top: 10px
            border-radius: 2px
            cursor: pointer
            display: flex
            box-sizing: border-box
            img
              width: 10px
              height: 12px
            p
              flex: 1
              padding-left: 10px
              font-size: 12px
              line-height: 12px
              color: #999
          .file-item:hover
            background-color: #eef1f6
            p
              color: #4093ff
        .text
          display: flex
          justify-content: center
          p
            font-size: 12px
            line-height: 54px
            color: #999
          .active
            color: #409eff
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
