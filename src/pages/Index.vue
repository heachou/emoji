<template>
	<div>
    <v-header @search="search" :show-back="false"></v-header>
    <footer-bar></footer-bar>
    <div class="content">
      <div class="divide">
        <span>当前热搜：</span>
      </div>
      <emoji-box></emoji-box>
		  <tips v-show="tips.isShow" :title="tips.title" show-icon :type="tips.type" @close="closeTips"></tips>
    </div>
    <to-top :ratio="2"></to-top>
	</div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterRouter'
import VHeader from '../components/Header'
import Tips from '../components/Tips'
import EmojiBox from '../components/EmoijBox'
import ToTop from '../components/ToTop'
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
      // 定向到搜索页面,默认是第一页
      this.$router.push(`/search/${value}/1`)
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
    EmojiBox,
    Tips,
    ToTop
  }
}
</script>
<style type="text/css">
.divide{
  margin-top: 15px;
  background: #d2d2d2;
  height: 30px;
  padding-left: 15px;
  line-height: 30px;
  color: #000;
  font-size: 14px;
}
</style>
