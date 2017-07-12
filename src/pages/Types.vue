<template>
	<div class="typesWrap">
    <v-header @search="search" :show-search="false"></v-header>
    <footer-bar></footer-bar>
    <div class="content">
      <div class="divide">
        <span>标签大全：</span>
      </div>
      <tags :input-text="inputText"></tags>
    </div>
    <tips v-show="tips.isShow" :title="tips.title" show-icon :type="tips.type"></tips>
	</div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterRouter'
import Tips from '../components/Tips'
import VHeader from '../components/Header'
import Tags from '../components/Tags'
export default {
  name: 'types',
  props: [],
  data () {
    return {
      tips: {
        isShow: false,
        title: '',
        type: 'info'
      },
      inputText: ''
    }
  },
  methods: {
    search (inputText) {
      this.inputText = inputText
    }
  },
  components: {
    VHeader,
    Tips,
    Tags,
    FooterBar
  }
}
</script>
<style type="text/css" scoped>
.typesWrap{
  width: 100%;
  height: 100%;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 42px;
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
}
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
