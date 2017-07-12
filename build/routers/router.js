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

exports.downloadEmoji = (req,res) => {
	var imgSrc = req.query.imgSrc;
	res.json({result:11})
	// http.get(imgSrc, function(res){
	    /*var imgData = "";
	    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
	    res.on("data", function(chunk){
	        imgData+=chunk;
	    });*/

	   /* res.on("end", function(){
	        fs.writeFile("../temp/logonew.png", imgData, "binary", function(err){
	            if(err){
	                console.log("down fail");
	            }
	            console.log("down success");
	        });
	    });*/
	// });
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




