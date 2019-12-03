<template>
  <div class="service-resources-wrapper">
    <div class="content">
      <div class="title-wrapper">
        <div class="title">
          <img src="../../common/img/index-title-left.png" />
          <h2>服务资源</h2>
          <img src="../../common/img/index-title-right.png" />
        </div>
        <p>说明说明说明说明</p>
      </div>
      <ul>
        <li>
          <h3>5123</h3>
          <p>咨询师</p>
        </li>
        <li>
          <h3>577</h3>
          <p>办案法官</p>
        </li>
        <li>
          <h3>2390</h3>
          <p>调解员</p>
        </li>
        <li>
          <h3>563</h3>
          <p>仲裁机构</p>
        </li>
        <li>
          <h3>104</h3>
          <p>法院</p>
        </li>
      </ul>
      <div class="canvas-box">
        <canvas id="canvas" width="600" height="600" style="width: 400px; height: 400px;"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: '',
      ctx: '',
      canvasX: 0,
      canvasY: 0,
      radius: 150,
      lists: [
        { title: '婚姻家庭', num: 15, color: '#8db8fe' },
        { title: '物业纠纷', num: 40, color: '#559dff' },
        { title: '劳动纠纷', num: 15, color: '#42decb' },
        { title: '医疗纠纷', num: 5, color: '#45ea85' },
        { title: '道路纠纷', num: 25, color: '#ffc572' }
      ],
      outLine: 50
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvasX = 300 + 25
    this.canvasY = 300
    this.writeCircle()
  },
  methods: {
    // 绘制最外层细圈
    writeCircle () {
      // 1、将数据转为弧度
      let start = 3 // 起始弧度
      const angleList = this.drawAngleFn()

      angleList.forEach((item) => {
        let end = item.angle + start

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasX, this.canvasY)
        this.ctx.arc(this.canvasX, this.canvasY, this.radius, start, end)
        this.ctx.fillStyle = item.color
        this.ctx.fill()
        // 调用标的方法
        this.drawTitle(start, item, this.ctx.fillStyle)
        // 记录上一个结束的弧度
        start = end + 0.05
      })

      // 变成圈图，中间加点东西
      this.ctx.beginPath()
      this.ctx.arc(this.canvasX, this.canvasY, this.radius / 1.5, 0, Math.PI * 2, false)
      this.ctx.closePath()
      this.ctx.fillStyle = '#fff'
      this.ctx.fill()
    },
    // 添加标题
    drawTitle (start, item, color) {
      // 斜边的长度
      let edge = this.radius + this.outLine
      // x轴方向的直角边
      let edgeX = edge * Math.cos(start + item.angle / 2)
      // y轴方向的直角边
      let edgeY = edge * Math.sin(start + item.angle / 2)
      // 伸出去的横纵坐标
      let outX = this.canvasX + edgeX
      let outY = this.canvasY + edgeY
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvasX, this.canvasY)
      this.ctx.lineTo(outX, outY)
      this.ctx.strokeStyle = color
      this.ctx.stroke()
      // 添加字体
      let align = outX > this.canvasX ? 'left' : 'right'
      this.ctx.font = '20px 微软雅黑'
      this.ctx.textAlign = align
      this.ctx.textBaseline = 'bottom'
      this.ctx.fillStyle = color
      this.ctx.fillText(item.title + item.num + '%', outX, outY + -5)
      // 添加文字下面的线
      let textW = this.ctx.measureText(item.title).width + 50
      this.ctx.moveTo(outX, outY)
      outX = outX > this.canvasX ? outX + textW : outX - textW
      this.ctx.lineTo(outX, outY)
      this.ctx.stroke()
    },

    // 添加转化弧度的方法
    drawAngleFn () {
      // 先获取数据的总和
      let total = 0
      const lists = this.lists

      lists.forEach((item) => {
        total += item.num
      })

      // 获取每条数据的弧度
      lists.forEach((item, index) => {
        const angle = item.num / total * Math.PI * 2
        if (lists.length - 1 !== index) {
          item.angle = angle
        } else {
          item.angle = angle - 0.25
        }
      })
      return lists
    }
  }
}
</script>

<style lang="stylus" scoped>
  .service-resources-wrapper
    width: 100%
    height: auto
    background-color: #FFFBFB
    .content
      width: 1180px
      height: auto
      padding-bottom: 50px
      margin: auto
      .title-wrapper
        width: 100%
        height: auto
        padding: 80px 0 55px 0
        .title
          width: 100%
          height: auto
          display: flex
          justify-content: center
          img
            width: 62px
            height: 25px
          h2
            font-size: 28px
            padding: 0 15px
            line-height: 25px
            color: #000
        p
          font-size: 16px
          text-align: center
          line-height: 56px
          color: #999
      ul
        width: 100%
        height: auto
        display: flex
        justify-content: center
        li
          width: 180px
          height: auto
          h3
            font-size: 40px
            line-height: 80px
            text-align: center
            color: #D41A1D
          p
            font-size: 16px
            text-align: center
            color: #666
      .canvas-box
        width: 400px
        height: auto
        margin: auto
</style>