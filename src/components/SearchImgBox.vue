<template>
	<div>
  	<ul v-show="emojiData.length"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
      <li v-for="(item,index) in emojiData">
        <a :href="'/biaoqinng/'+item.imgId" @click.prevent.stop="">
          <img :alt="item.imgDesc" v-lazy="item.imgSrc">
        </a>
      </li>
  	</ul>
    <no-data v-if="emojiData.length == 0" slogan="暂无数据，稍后再来~~"></no-data>
    <loading loadingText="请稍后" v-show="emojiData.length === 0"></loading>
	</div>
</template>
<script type="text/javascript">
import NoData from './Nodata'
import Loading from '../components/Loading'
export default {
  name: 'EmoijBox',
  props: [],
  data () {
    return {
      busy: false,
      emojiData: [],
      nextPage: 1
    }
  },
  methods: {
    loadMore: function () {
      this.busy = true
      this._getSearchByType(this.$route.params.type, this.nextPage)
    },
    _getSearchByType (type, page = 1) {
      var _this = this
      this.$http.get(`/getSearchByType?type=${type}&page=${page}`).then((response) => {
        _this.emojiData = _this.emojiData.concat(response.data.hotImgArr)
        if (!response.data.hasNext) {
          _this.busy = true
        } else {
          _this.busy = false
          _this.nextPage += 1
        }
      }, (reject) => {
        console.log(reject)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    Loading,
    NoData
  }
}
</script>
<style type="text/css" scoped>
ul{
  padding: 20px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
li{
  width: 50%;
  height: 150px;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
}
li a{
  display: inline-block;
  width: 100%;
  font-size: 0;
  line-height: 0;
  height: 100%;
  text-align: center;
}
li a img{
  max-width: 100%;
  height: auto;
  max-height: 100%;
}
</style>
