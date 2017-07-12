const cheerio = require('cheerio')
const superagent = require('superagent')
const requstConfig = {
	"Accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 
	"Accept-Encoding": 'gzip, deflate, sdch',
	"Host":"www.ubiaoqing.com",
	"Connection":"keep-alive",
	"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36"
}



exports.getHot = (req,res) => {
	var page = req.query.page;
	superagent
	.get(`http://www.ubiaoqing.com/hot/${page}`,(err,result) => {
		if(err) {
			return console.log(err)
		}
		var hotImgArr = _getHotData(result.text);
		res.json({result:hotImgArr});
	})
	.set(requstConfig)
}

exports.getTag = (req,res) => {
	var page = req.query.page;
	superagent
	.get(`http://www.ubiaoqing.com/tag/${page}`,(err,result) => {
		if(err) {
			return console.log(err)
		}
		var TagArr = _getTag(result.text);
		res.json({result:TagArr});
	})
	.set(requstConfig)
}

function _getHotData(rawHtml){
	var hotImgArr = [];
	const $ = cheerio.load(rawHtml);
	$('.list-unstyled li').each(function(item,index){
		var _this = $(this);
		var linkObj = _this.find('a');
		if(linkObj.attr('href').indexOf('advertising') === -1){//说明不是广告
			var _linkObj = $(linkObj)
			var from = _linkObj.attr('href').lastIndexOf('/');
			var imgId = _linkObj.attr('href').slice(from+1);// 得到图片id
			var imgSrc = _linkObj.find('img').attr('src');//得到图片地址
			var imgDesc = _linkObj.find('img').attr('alt').replace(/ /g,'_');//去掉空格，并用下划线连接

			hotImgArr.push({
				imgId:imgId,
				imgSrc:imgSrc,
				imgDesc:imgDesc
			})
		}
	})
	return hotImgArr;
}
function _getTag(rawHtml){
	var TagArr = [];
	const $ = cheerio.load(rawHtml);
	$('tbody a').each(function(item,index){
		var _this = $(this);
		var tagHref = _this.attr('href');//得到标签链接
		var tagText = _this.text()//得到标签文字
		var tagTitle = _this.attr('title');//得到标签描述

		TagArr.push({
			tagHref:tagHref,
			tagText:tagText,
			tagTitle:tagTitle
		})
	})
	return TagArr;
}




