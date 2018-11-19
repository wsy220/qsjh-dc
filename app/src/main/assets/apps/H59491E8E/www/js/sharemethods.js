/**
 * 依赖MUI
 * @param {String} url
 * @param {String} httpReqType
 * @param {Object} data
 * @param {Function} sussess
 * @param {Function} error
 */
function commonHttpUtils(url, httpReqType, data, success, errors, complete) {
	//console.log(url)
	var reqUrl = serverAddress + url;
	var access_token = localStorage.getItem("ACCESSTOKEN");
	mui.ajax(reqUrl, {
		data: data,
		crossDomain : true,
		dataType: 'json', //服务器返回json格式数据
		type: httpReqType, //HTTP请求类型
		timeout: 180000, //超时时间设置为180秒
		beforeSend: function() {
			plus.nativeUI.showWaiting();
		},
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		complete: function() {
			if(complete) {
				complete();
			} else {
				plus.nativeUI.closeWaiting();
			}
		},
		success: function(resData) {
			//console.log(JSON.stringify(data))
			if(resData.result == "error" && resData.code == "T000001") {
				mui.toast("登录过期，请重新登录");
				appRestart();
			} else if(resData.result == "error" && resData.code == "D000001") {
				mui.toast("登录过期，请重新登录");
				appRestart();
			} else {
				success(resData)
			}
		},
		error: function(xhr, type, errorThrown) {
			if(errors) {
				errors(xhr, type, errorThrown);
			}
		}
	});
}
function commonHttpUtilsByAsync(url, httpReqType, data, success, errors, complete) {
	//console.log(url)
	var reqUrl = serverAddress + url;
	var access_token = localStorage.getItem("ACCESSTOKEN");
	mui.ajax({
		url:reqUrl,
		async: true,
		data: data,
		crossDomain : true,
		dataType: 'json', //服务器返回json格式数据
		type: httpReqType, //HTTP请求类型
		timeout: 180000, //超时时间设置为180秒
		beforeSend: function() {
			plus.nativeUI.showWaiting();
		},
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		complete: function() {
			if(complete) {
				complete();
			} else {
				plus.nativeUI.closeWaiting();
			}
		},
		success: function(resData) {
			//console.log(JSON.stringify(data))
			if(resData.result == "error" && resData.code == "T000001") {
				mui.toast("登录过期，请重新登录");
				appRestart();
			} else if(resData.result == "error" && resData.code == "D000001") {
				mui.toast("登录过期，请重新登录");
				appRestart();
			} else {
				success(resData)
			}
		},
		error: function(xhr, type, errorThrown) {
			if(errors) {
				errors(xhr, type, errorThrown);
			}
		}
	});
}
function commonHttpUtilsNoWaiting(url, httpReqType, data, success, errors, complete) {
	//console.log(url)
	var reqUrl = serverAddress + url;
	var access_token = localStorage.getItem("ACCESSTOKEN");
	mui.ajax(reqUrl, {
		data: data,
		dataType: 'json', //服务器返回json格式数据
		type: httpReqType, //HTTP请求类型
		timeout: 180000, //超时时间设置为180秒
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		complete: function() {
			if(complete) {
				complete();
			}
		},
		success: function(resData) {
			//console.log(JSON.stringify(data))
			if(resData.result == "error" && resData.code == "T000001") {
				mui.toast("登录过期，请重新登录");
				appRestart();
			} else if(resData.result == "error" && resData.code == "D000001") {
				mui.toast("登录过期，请重新登录");
				appRestart();
			} else {
				success(resData)
			}
		},
		error: function(xhr, type, errorThrown) {
			if(errors) {
				errors(xhr, type, errorThrown);
			}
		}
	});
}

function appRestart() {
	localStorage.clear();
	plus.runtime.restart();
}

/**
 * 通用错误处理
 * @param {Object} xhr
 * @param {Object} type
 * @param {Object} errorThrown
 */
var error = function(xhr, type, errorThrown) {
	//异常处理；
	console.log(xhr)
	console.log(type)
	console.log(errorThrown)
	mui.toast('网络请求超时，请稍后再试！');
}

String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}

function setPagePos() {
	var topoffset = '45px';
	if(plus.navigator.isImmersedStatusbar()) { // 兼容immersed状态栏模式
		// 获取状态栏高度并根据业务需求处理，这里重新计算了子窗口的偏移位置
		topoffset = (Math.round(plus.navigator.getStatusbarHeight()) + 45) + 'px';
		document.querySelector("header").style.height = topoffset;
		document.querySelector("header").style.paddingTop = Math.round(plus.navigator.getStatusbarHeight()) + "px";
		document.getElementById('content').style.paddingTop = topoffset;
		if(document.getElementById('cus-modal')) {
			document.getElementById('cus-modal').style.top = topoffset;
		}
	}
}

function getBase64Code(path) { //path绝对路径
	var bitmap = new plus.nativeObj.Bitmap("test"); //test标识谁便取
	// 从本地加载Bitmap图片
	bitmap.load(path, function() {
		var base4 = bitmap.toBase64Data();
		var datastr = base4.split(',', 3)
		var pics = [];
		if(datastr.length > 1) {
			pics.push(datastr[1]);
		} else {
			pics.push(datastr[0]);
		}
		console.log("md5", md5(base4))
		console.log('加载图片：' + base4);
	}, function(e) {
		console.log('加载图片失败：' + JSON.stringify(e));
	});
}

function upload(url, imgPath, func) {
	var wt = plus.nativeUI.showWaiting();
	var task = plus.uploader.createUpload(url, {
			method: "POST",
			blocksize: 204800,
			priority: 100
		},
		function(t, status) {
			if(status == 200) {
				var data = JSON.parse(t.responseText)
				if(func) {
					func(imgPath, data);
				}
				wt.close(); //关闭等待提示按钮
			} else {
				mui.toast(t.message);
				wt.close(); //关闭等待提示按钮
			}
		}
	);

	resize(imgPath, function(zipSrc) {
		task.addFile(zipSrc, {
			key: 'single-file'
		});
		//task.addData(zipSrc, zipSrc);
		task.start();
	});

	//	task.addFile(imgPath, {
	//		key: 'single-file'
	//	});
	//	task.start();
}

function albumPhoto(url, func) {
	plus.gallery.pick(function(e) {
		upload(url, e, func);
	}, function(e) {
		//mui.toast(e.message);
	}, {});
}

function cameraPhoto(url, func) {
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	cmr.captureImage(function(p) {
		plus.io.resolveLocalFileSystemURL(p, function(entry) {
			upload(url, entry.toLocalURL(), func);
		}, function(e) {
			alert(e.message);
		});
	}, function(e) {}, {
		filename: "_doc/camera/"
	});
}

function albumPhotoHead(func) {
	plus.gallery.pick(function(e) {
		func(e)
	}, function(e) {
		//mui.toast(e.message);
	}, {});
}

function cameraPhotoHead(func) {
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	cmr.captureImage(function(p) {
		plus.io.resolveLocalFileSystemURL(p, function(entry) {
			//upload(url, entry.toLocalURL(), func);
			func(entry.toLocalURL())
		}, function(e) {
			alert(e.message);
		});
	}, function(e) {}, {
		filename: "_doc/camera/"
	});
}

function uploadImg(url, func) {
	if(mui.os.plus) {
		var a = [{
			title: "拍照"
		}, {
			title: "从手机相册选择"
		}];
		plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: a
		}, function(b) { /*actionSheet 按钮点击事件*/
			switch(b.index) {
				case 0:
					break;
				case 1:
					cameraPhoto(url, func); /*拍照*/
					break;
				case 2:
					albumPhoto(url, func); /*相册*/
					break;
				default:
					break;
			}
		})
	}
}

function uploadHead(url, imgPath, func) {
	var wt = plus.nativeUI.showWaiting();
	var task = plus.uploader.createUpload(url, {
			method: "POST",
			blocksize: 204800,
			priority: 100
		},
		function(t, status) {
			if(status == 200) {
				var data = JSON.parse(t.responseText)
				if(func) {
					func(data);
				}
				wt.close(); //关闭等待提示按钮
			} else {
				mui.toast(t.message);
				wt.close(); //关闭等待提示按钮
			}
		}
	);

	task.addFile(imgPath, {
		key: 'single-file'
	});
	task.start();
}

function headImg(func) {
	if(mui.os.plus) {
		var a = [{
			title: "拍照"
		}, {
			title: "从手机相册选择"
		}];
		plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: a
		}, function(b) { /*actionSheet 按钮点击事件*/
			switch(b.index) {
				case 0:
					break;
				case 1:
					cameraPhotoHead(func); /*拍照*/
					break;
				case 2:
					albumPhotoHead(func); /*相册*/
					break;
				default:
					break;
			}
		})
	}
}

//压缩（需要获取本地文件权限）
function resize(src, callback) {
	var filename = src.substring(src.lastIndexOf('/') + 1);
	plus.zip.compressImage({
			src: src,
			dst: '_doc/' + filename,
			overwrite: true,
			//width: '1000px', //这里指定了宽度，同样可以修改
			format: 'jpg',
			quality: 80 //图片质量不再修改，以免失真
		},
		function(e) {
			callback(e.target);
		},
		function(err) {
			console.log('图片压缩错误!')
			//mui.back();
		})
}

document.addEventListener( "plusready",  function(){
// 声明的JS“扩展插件别名”
    var _BARCODE = 'qsPlugin', B = window.plus.bridge;
    var qsPlugin = {
		// 声明异步返回方法
        openActivityWithHtml5 : function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback )
        {
            var success = typeof successCallback !== 'function' ? null : function(args)
            {
                successCallback(args);
            },
            fail = typeof errorCallback !== 'function' ? null : function(code)
            {
                errorCallback(code);
            };
            callbackID = B.callbackId(success, fail);
			// 通知Native层plugintest扩展插件运行”PluginTestFunction”方法
            return B.exec(_BARCODE, "openActivityWithHtml5", [callbackID, Argus1, Argus2, Argus3, Argus4]);
        },
    };
    window.plus.qsPlugin = qsPlugin;
}, true );
