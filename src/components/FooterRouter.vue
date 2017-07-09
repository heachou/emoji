<template>
	<footer>
		<ul>
			<li>
				<router-link to="/index">首页</router-link>
			</li>
			<li>
				<router-link to="/types">标签</router-link>
			</li>
			<li>
				<router-link to="/me">本大王</router-link>
			</li>
		</ul>
	</footer>
</template>
<script type="text/javascript">
export default {
  name: 'FooterRouter',
  props: [],
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style type="text/css" scoped>
footer{
	position: fixed;
	left: 0;
	width: 100%;
	height: 46px;
	bottom: 0;
}
ul{
	display: flex;
	width: 100%;
	max-width: 720px;
	margin: auto;
	height: 100%;
}
li{
	flex: 1;
	display: flex;
}
a{
	flex: 1;
	line-height: 46px;
	text-align: center
}
.router-link-active{
	color: blue;
}
</style>
