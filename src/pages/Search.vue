<template>
	<div>
		searchPage
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'search',
  props: [],
  data () {
    return {
    }
  },
  created () {
    console.info(this.$route.params.type)
    console.info(this.$route.params.nowpage)
  },
  methods: {

  }
}
</script>
<style type="text/css" scoped>

</style>
