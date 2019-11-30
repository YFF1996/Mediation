<template>
  <div class="user-registered-b-wrapper">
    <div class="update-content">
      <ul>
        <li>
          <div class="title">
            <h3>请上传身份证反面</h3>
            <p>*</p>
          </div>
          <div class="update-list">
            <div class="update-item">
              <img v-if="imageUrlA" class="avatar-img" :src="imageUrlA" />
              <div class="update-btn" v-else>
                <el-upload
                  class="avatar-uploader"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessA"
                >
                </el-upload>
                <img src="../../common/img/update-sfz-icon.png" />
                <div class="text">
                  <p>将文件拖到此处，或</p>
                  <p class="active">点击上传</p>
                </div>
              </div>
            </div>
            <div class="update-item">
              <img v-if="imageUrlB" class="avatar-img" :src="imageUrlB" />
              <div class="update-btn" v-else>
                <el-upload
                  class="avatar-uploader"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessB"
                >
                </el-upload>
                <img src="../../common/img/update-sfz-icon.png" />
                <div class="text">
                  <p>将文件拖到此处，或</p>
                  <p class="active">点击上传</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="title">
            <h3>手持正面证件照片</h3>
            <p>*</p>
          </div>
          <div class="update-list">
            <div class="update-item">
              <img v-if="imageUrlC" class="avatar-img" :src="imageUrlC" />
              <div class="update-btn" v-else>
                <el-upload
                  class="avatar-uploader"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessC"
                >
                </el-upload>
                <img src="../../common/img/update-csimg-icon.png" />
                <div class="text">
                  <p>将文件拖到此处，或</p>
                  <p class="active">点击上传</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="submit-wrapper">
      <div class="btn">确认认证</div>
      <div class="btn btn-active" @click="onNextFn()">确认认证</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrlA: '',
      imageUrlB: '',
      imageUrlC: ''
    }
  },
  methods: {
    onNextFn () {
      this.$emit('createNextChild', 2)
    },
    handleAvatarSuccessA (res, file) {
      this.imageUrlA = URL.createObjectURL(file.raw)
    },
    handleAvatarSuccessB (res, file) {
      this.imageUrlB = URL.createObjectURL(file.raw)
    },
    handleAvatarSuccessC (res, file) {
      this.imageUrlC = URL.createObjectURL(file.raw)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user-registered-b-wrapper
    width: 100%
    height: auto
    .update-content
      width: 100%
      height: auto
      ul
        width: 100%
        height: auto
        li
          width: 100%
          height: auto
          padding-bottom: 45px
          .title
            width: 100%
            height: auto
            padding-bottom: 30px
            display: flex
            h3
              font-size: 14px
              color: #333
            p
              padding-left: 5px
              color: #d41a1d
          .update-list
            width: 100%
            height: auto
            display: flex
            justify-content: space-between
            .update-item
              position: relative
              width: 360px
              height: 190px
              border: 1px dashed #efdddd
              border-radius: 12px
              cursor: pointer
              overflow: hidden
              box-sizing: border-box
              .avatar-img
                width: 100%
                height: 100%
                object-fit: cover
              .update-btn
                width: 100%
                height: 100%
                padding-top: 45px
                box-sizing: border-box
                img
                  width: 60px
                  height: 54px
                  margin: 0 auto
                .text
                  display: flex
                  justify-content: center
                  p
                    font-size: 14px
                    line-height: 54px
                    color: #000
                  .active
                    color: #d41a1d
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