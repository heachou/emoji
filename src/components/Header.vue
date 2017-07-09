<template>
	<header class="clearfix">
		<span class="fll">&lt;</span>
    <div class="searchWrap" v-show="showSearch">
      <input type="text" v-model="searchText" @keyup.stop.prevent.13="emitSearch">
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

</style>
