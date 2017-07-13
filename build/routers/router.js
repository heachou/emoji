const cheerio = require('cheerio')
const superagent = require('superagent')
var http = require('http')
var fs = require("fs")
const requstConfig = {
	"Accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 
	"Accept-Encoding": 'gzip, deflate, sdch',
	"Host":"www.ubiaoqing.com",
	"Connection":"keep-alive",
	"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36"
}
const requstConfig2 = Object.assign({},requstConfig,{
	"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
	"Accept-Encoding":"gzip, deflate",
	"Accept-Language":"zh-CN,zh;q=0.8",
	"Cache-Control":"max-age=0",
	"Connection":"keep-alive",
	"Cookie":"UM_distinctid=15d2c1a4b9bc2d-013ebd1ed749c5-871123a-e1000-15d2c1a4b9c9c6; PHPSESSID=fc87qcglvc0d7irom2d2s91lr2; CNZZDATA1260151748=1239023941-1499682433-http%253A%252F%252Fsearch.chongbuluo.com%252F%7C1499917111",
	"Host":"www.ubiaoqing.com",
	"Referer":"http://www.ubiaoqing.com/",
	"Upgrade-Insecure-Requests":1,
	"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
})

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
exports.addFavorite = (req,res) => {
	var imgId = req.body.imgId;
	console.log(imgId)
	res.json({result:imgId})
}
exports.cancelFavorite = (req,res) => {
	var imgId = req.body.imgId;
	console.log(imgId)
	res.json({result:imgId})
}

exports.getSearchByType = (req,res) => {
	var type = encodeURIComponent(req.query.type);
	var page = req.query.page;
	superagent
	.get(`http://www.ubiaoqing.com/search/${type}/${page}`,(err,result) => {
		if(err) {
			return console.log(err)
		}
		var result = _SearchByType(result.text);
		res.json(result);
	})
	.set(requstConfig2)
}
function _SearchByType(rawHtml){
	var hotImgObj = {};
		hotImgObj.hotImgArr = [];
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

			hotImgObj.hotImgArr.push({
				imgId:imgId,
				imgSrc:imgSrc,
				imgDesc:imgDesc
			})
		}
	})
	hotImgObj.hasNext = false;
	$('ul.pagination li').find('a').each(function(index,item){
		var _this = $(this);
		if(_this.attr('aria-label') === 'Next'){
			hotImgObj.hasNext = true;
		}
	})
	return hotImgObj;
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




