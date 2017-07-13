<template>
	<header class="clearfix">
		<span class="fll back" @click="returnBack" v-show="showBack">
      <i class="icon iconfont icon-back"></i>
    </span>
    <h1>{{searchText}}</h1>
	</header>
</template>
<script type="text/javascript">
export default {
  name: 'Header',
  props: {
    search: {
      type: Function
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    searchText () {
      return this.$route.params.type
    }
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
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
h1{
  width: 65%;
  text-align: center;
  font-size: 14px;
  height: 100%;
  line-height: 42px;
  margin: auto;
  font-weight: 500;
}


</style>
