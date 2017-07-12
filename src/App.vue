<template>
  <div id="app" v-cloak>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style type="text/css">
  [v-cloak]{
    display: none;
  }
	#app{
		max-width: 720px;
    overflow: hidden;
		margin: auto;
	}
  footer~.content{
    padding-bottom: 46px;
  }
</style>
