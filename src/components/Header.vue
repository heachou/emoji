<template>
	<header class="clearfix">
		<span class="fll back" @click="returnBack">
      <i class="icon iconfont icon-back"></i>
    </span>
    <div class="searchWrap" v-show="showSearch">
      <input type="text" v-model="searchText" @keyup.stop.prevent.13="emitSearch">
    </div>
    <h1 class="title" v-show="!showSearch">111</h1>
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
}
.searchWrap input{
  border:none;
  outline: none;
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
}




</style>
