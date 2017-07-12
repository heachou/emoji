<template>
<transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
  <div class="tipsWrap" v-if="visible">
    <div class="tipsItem clearfix" :class='[ typeClass ]'>
      <i v-if="showIcon" class="icon" :class="[ iconClass ]"></i>
      <div class="icon-title-wrap">
        <span>{{title}}</span>
      </div>
      <i class="icon icon-close flr" @click="close"></i>
    </div>
  </div>
</transition>
</template>
<script type="text/javascript">
const TYPE_CLASSES_MAP = {
  'success': 'icon-success',
  'warning': 'icon-warning',
  'error': 'icon-error',
  'info': 'icon-info'
}
export default {
  name: 'Tips',
  props: {
    type: {
      type: String,
      default: 'info' // 共四种类型 info success error warning
    },
    title: {
      type: String,
      default: '',
      require: true
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    typeClass () {
      return `icon-tips-${this.type}`
    },
    iconClass () {
      return TYPE_CLASSES_MAP[this.type] || 'icon-info'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style type="text/css" scoped>
.tipsWrap{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 100px;
}
.tipsItem{
  height: 36px;
  color: #fff;
  border-radius: 4px;
  width: 90%;
  padding: 10px 10px 10px 15px;
  padding-left: 10px;
  box-sizing: border-box;
  margin: auto;
}
.icon-tips-success{
  background: #13ce66;
}
.icon-tips-warning{
  background: #f7ba2a;
}
.icon-tips-error{
  background: #ff4949;
}
.icon-tips-info{
  background: #50bfff;
}
.icon{
  width: 16px;
  display: inline-block;
  color: #fff;
  height: 16px;
}
.icon-error{
  background: #fff;
}
.icon-success{
  background: #fff;
}
.icon-info{
  background: #fff;
}
.icon-warning{
  background: #fff;
}
.icon-title-wrap{
  display: inline-block;
  max-width: 80%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  line-height: 16px;
}
.icon-title-wrap span{
  width: 100%;
  display: inline-block;
  height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.icon-close{
  background: #fff;
}
</style>
