<template>
  <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
    <div class="topBox" @click="toTop" v-show="showTop">
      <span>
        <i class="icon iconfont icon-less"></i>
      </span>
    </div>
  </transition>
</template>
<script type="text/javascript">
export default {
  name: 'ToTop',
  props: {
    ratio: {
      type: Number,
      default: 1.5
    }
  },
  data () {
    return {
      scrollPositon: 0,
      windowH: 0,
      showTop: false
    }
  },
  watch: {
    scrollPositon: function () {
      if (this.scrollPositon >= this.ratio * this.windowH) {
        this.showTop = true
      } else {
        this.showTop = false
      }
    }
  },
  mounted () {
    this.windowH = document.documentElement.clientHeight || window.innerHeight
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrollPositon = document.body.scrollTop || document.documentElement.scrollTop
    },
    toTop () {
      var timer = setInterval(() => {
        if (this.scrollPositon <= 0) {
          clearInterval(timer)
        } else {
          var speed = Math.ceil(this.scrollPositon / 5)
          document.documentElement.scrollTop = document.body.scrollTop = this.scrollPositon - speed
        }
      }, 30)
    }
  }
}
</script>
<style type="text/css" scoped>
.topBox{
  position: fixed;
  width: 26px;
  height: 30px;
  right: 0;
  bottom: 48px;
  background: #e2e2e2;
}
span{
  display: block;
  width: 100%;
  text-align: center;
  height: 100%;
}
.icon-less{
  font-size: 26px;
}
</style>
