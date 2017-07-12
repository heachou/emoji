<template>
<div class="tagsGroupWrap">
  <ul class="tagsGroup" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
  	<li class="tagsList" v-for="(item,index) in filterTagsData">
  		<a :href="item.tagHref" :title="item.tagTitle">{{item.tagText}}</a>
  	</li>
  </ul>
  <loading loadingText="请稍后" v-show="tagsData.length === 0"></loading>
</div>
</template>
<script type="text/javascript">
import Loading from '../components/Loading'
export default {
  name: 'Tags',
  props: ['inputText'],
  data () {
    return {
      tagsData: [],
      nextPage: 1,
      busy: false,
      filterTagsData: []
    }
  },
  watch: {
    inputText (to, from) {
      if (to !== from) {
        this._filterTagsData()
      }
    }
  },
  methods: {
    loadMore () {
      this.busy = true
      this._getTagsData(this.nextPage)
    },
    _getTagsData (page = 1) {
      var _this = this
      this.$http.get(`/getTag?page=${page}`).then((response) => {
        _this.tagsData = _this.tagsData.concat(response.data.result)
        _this._filterTagsData()
        _this.busy = false
        _this.nextPage += 1
      }, (reject) => {
        console.log(reject)
      }).catch((error) => {
        console.log(error)
      })
    },
    _filterTagsData () {
      if (this.inputText !== '') {
        var _text = this.inputText
        this.filterTagsData = this.tagsData.filter(function (item) {
          return item.tagText.indexOf(_text) > -1
        })
      } else {
        this.filterTagsData = this.tagsData
      }
      return this.filterTagsData
    }
  },
  components: {
    Loading
  }
}
</script>
<style type="text/css" scoped>
.tagsGroupWrap{
  height: 100%;
  overflow: auto;
}
ul{
  background: #fff;
  padding: 0px 15px;
  margin: 10px 0;
  position: relative;
}
ul:before{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
  background: #e2e2e2;
  content: '';
}
ul:after{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
  background: #e2e2e2;
  content: '';
}
li{
  height: 42px;
  line-height: 42px;
  position: relative;
}
li:after{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
  background: #e2e2e2;
  content: '';
}
a{
  display: inline-block;
  width: 100%;
  height: 100%;
  text-indent: 1em;
  font-size: 14px;
}
</style>
