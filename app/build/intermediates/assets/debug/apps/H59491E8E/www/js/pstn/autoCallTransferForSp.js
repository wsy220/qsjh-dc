var id = "513";
var seqId = "209332";
var timestamp = Date.parse(new Date());
var bindTime = "1440";//一天24小时
var beLong = "0431";
var key = "Z3YQXKFDV7BQAMLCXKHXFTZN";

function pstnBind(fm,tm) {
	var url = "http://sandbox.teleii.com/autoCallTransferForSp.do"; //测试环境的url   2. 生产环境url：http://api.teleii.com
	var sign = getSign(fm,tm);
	var data = "id=" + id + "&seqId=" + seqId + "&timestamp=" + timestamp + "&fm=" + fm + "&&tm=" + tm + "&bindTime=" + bindTime + "&belong=" + beLong + "&sign=" + sign;
	var urlData = getUrl(url,data);
	$.ajax({
		url: urlData,
		type: 'POST',
		success: function(data) {
			console.log('**Success' + data)
			if(data.result == "0"){
				return data.virtualMobile;//返回中间号
			}
		},
		error: function(data) {
			console.log('**Error: ' + JSON.stringify(data));
		},
	});
}
function pstnUnbind(fm,tm,vm) {
	var url = "http://sandbox.teleii.com/unbindCallTransferForSp.do"; //测试环境的url   2. 生产环境url：http://api.teleii.com
	var sign = getSign(fm,tm);
	var data = "id=" + id + "&timestamp=" + timestamp + "&fm=" + fm + "&&tm=" + tm + "&vm=" + vm + "&sign=" + sign;
	var urlData = getUrl(url,data);

	$.ajax({
		url: urlData,
		type: 'POST',
		success: function(data) {
			console.log('**Success' + data)
		},
		error: function(data) {
			console.log('**Error: ' + JSON.stringify(data));
		},
	});
}

function getUrl(url,data){
	var urlData = url + "?" + data;
	return urlData;
}
function getSign(fm,tm){
	var sign_url = key + id + seqId + timestamp + fm + tm;
	var sign = md5(sign_url);
	return sign;
}