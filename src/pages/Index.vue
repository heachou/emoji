<template>
	<div>
    <v-header @search="search"></v-header>
    <footer-bar></footer-bar>
    <div class="content">
		  <tips v-show="tips.isShow" :title="tips.title" show-icon :type="tips.type" @close="closeTips"></tips>
    </div>
	</div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterRouter'
import VHeader from '../components/Header'
import Tips from '../components/Tips'
export default {
  name: 'index',
  data () {
    return {
      tips: {
        isShow: false,
        title: '',
        type: 'info'
      }
    }
  },
  methods: {
    search (value) {
      value.trim() === '' ? this._showTips('请输入要搜索的内容', 'error') : this._search(value)
    },
    closeTips () {
      this.tips.isShow = false
    },
    _search (value) {
      console.log(value)
    },
    _showTips (title, type) {
      this.tips.isShow = true
      this.tips.title = title
      this.tips.type = type
    }
  },
  components: {
    FooterBar,
    VHeader,
    Tips
  }
}
</script>
<style type="text/css" scoped>

</style>
