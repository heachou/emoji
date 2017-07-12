<template>
	<header class="clearfix">
		<span class="fll back" @click="returnBack" v-show="showBack">
      <i class="icon iconfont icon-back"></i>
    </span>
    <div class="searchWrap" v-show="showSearch">
      <input type="text" placeholder="doge" v-focus v-model="searchText" @keyup.stop.prevent.13="emitSearch">
    </div>
    <div class="searchWrap" v-show="!showSearch">
      <input type="text" placeholder="天线宝宝" v-model="searchText" @keyup.stop.prevent="emitSearch">
    </div>
	</header>
</template>
<script type="text/javascript">
export default {
  name: 'Header',
  props: {
    search: {
      type: Function
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    emitSearch () {
      let searchText = this.searchText
      this.$emit('search', searchText)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
<style type="text/css" scoped>
header{
  height: 42px;
  padding: 0 6px;
  box-sizing: border-box;
}
.back{
  height: 100%;
  padding: 13px 6px;
  box-sizing: border-box;
}
.searchWrap{
  width: 75%;
  height: 100%;
  margin: auto;
  padding-top: 10px;
  box-sizing: border-box;
  position: relative;
}
.searchWrap input{
  border:none;
  outline: none;
  position: relative;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  display: inline-block;
}
.searchWrap:before{
  position: absolute;
  display: inline-block;
  content: '';
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
  background: #d2d2d2;
}



</style>
