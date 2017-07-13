<template>
	<div class="searchWrap">
    <search-header></search-header>
		<div class="searchImgBox" ref="searchImgBox">
      <search-img-box></search-img-box>  
    </div>
	</div>
</template>
<script type="text/javascript">
import SearchHeader from '../components/SearchHeader'
import SearchImgBox from '../components/SearchImgBox'
export default {
  name: 'search',
  props: [],
  data () {
    return {
    }
  },
  components: {
    SearchImgBox,
    SearchHeader
  },
  mounted () {
    this.$refs.searchImgBox.style.height = (window.innerHeight - 42) + 'px'
  }
}
</script>
<style type="text/css" scoped>
.searchWrap{
  height: 100%;
  overflow: hidden;
}
.searchImgBox{
  overflow: auto;
}
</style>
