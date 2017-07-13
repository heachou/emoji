<template>
	<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
		<div class="imgBox">
			<div class="imgBoxTop">
				<h2 class="ellipsis">{{emojiDataArr[index].imgDesc}}</h2>
				<div class="tool clearfix">
					<span class="flr">
						<a :href="emojiDataArr[index].imgSrc" download="w3logo" class="icon iconfont icon-icondownload"></a>
					</span>
					<span class="flr">
            <i class="icon iconfont icon-favorite" v-show="!isFavorite" @click="favorite($event,emojiDataArr[index].imgId)"></i>
            <i class="icon iconfont icon-favoritesfilling" v-show="isFavorite" @click="cancelfavorite($event,emojiDataArr[index].imgId)"></i>
					</span>
				</div>
				<div class="imgBoxWrap">
					<img :src="emojiDataArr[index].imgSrc">
				</div>
			</div>
			<div class="imgBoxBottom">
				<div class="boTools">
					<span class="prev" @click="showPrev">
						<i class="icon iconfont icon-back"></i>
					</span>
					<span @click="closeBigImg">
						<i class="icon iconfont icon-close"></i>
					</span>
					<span class="next" @click="showNext">
						<i class="icon iconfont icon-more"></i>
					</span>
				</div>
			</div>
		</div>
	</transition>
</template>
<script type="text/javascript">
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'ShowBigImg',
  props: [],
  data () {
    return {
      isFavorite: false
    }
  },
  computed: {
    ...mapGetters(['emojiDataArr', 'index'])
  },
  methods: {
    ...mapActions(['closeBigImg', 'showPrev', 'showNext']),
    favorite (event, imgId) {
      var _this = this
      this.$http.post('/addFavorite', {imgId: imgId}).then((response) => {
        _this.isFavorite = true
        console.log(response.data.result)
      }, (reject) => {
        console.log(reject)
      }).catch((error) => {
        console.log(error)
      })
    },
    cancelfavorite (event, imgId) {
      var _this = this
      this.$http.post('/cancelFavorite', {imgId: imgId}).then((response) => {
        _this.isFavorite = false
        console.log(response.data.result)
      }, (reject) => {
        console.log(reject)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style type="text/css" scoped>
.imgBox{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
	background: #fff;
	z-index: 100;
}
.imgBoxTop{
	height: calc(100% - 60px);
	overflow: auto;
}
.imgBoxBottom{
	height: 60px;
	position: absolute;
	left: 0;
	width: 100%;
	bottom: 0;
}
.boTools{
	width: 100%;
	height: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.boTools span i{
	font-size: 26px;
}
h2{
	width: 75%;
	text-align: center;
	margin: auto;
  font-size: 14px;
  font-weight: normal;
	line-height: 42px;
	height: 42px;
}
.tool{
	margin-top: 10px;
}
.tool span{
	width: 30px;
	height: 30px;
	display: inline-block;
	text-align: center;
	margin-right: 20px;
}
.tool span i,.tool span a{
	font-size: 24px;
}
.imgBoxWrap{
	width: 100%;
	height: calc(100% - 90px);
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}
.imgBoxWrap img{
	display: inline-block;
	width: 90%;
	max-width: 90%;
	height: auto;
}
</style>
