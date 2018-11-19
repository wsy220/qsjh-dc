/**
 * 
 * ======================================================
 * 柒拾佳护公共方法
 * initImageList 初始化图片上传组件
 * 
 * ======================================================
 * @version:1.0.0
 * @author:dsq
 */
(function() {
	var imgList = {};

	var initImageList = function(options) {
		var index = 1;
		var imageIndexIdNum = 0;
		var endFlag = false;
		var feedback = {
			imageList: document.getElementById(options.id)
		};
		imgList[options.id] = feedback;
		var url = serverAddress + uploadImgFileUrl;
		feedback.files = [];
		feedback.uploader = null;
		feedback.deviceInfo = null;
		mui.plusReady(function() {
			//设备信息，无需修改
			feedback.deviceInfo = {
				appid: plus.runtime.appid,
				imei: plus.device.imei, //设备标识
				images: feedback.files, //图片文件
				p: mui.os.android ? 'a' : 'i', //平台类型，i表示iOS平台，a表示Android平台。
				md: plus.device.model, //设备型号
				app_version: plus.runtime.version,
				plus_version: plus.runtime.innerVersion, //基座版本号
				os: mui.os.version,
				net: '' + plus.networkinfo.getCurrentType()
			}
		});
		/**
		 *提交成功之后，恢复表单项 
		 */
		feedback.clearForm = function() {
			feedback.imageList.innerHTML = '';
			feedback.newPlaceholder();
			feedback.files = [];
			index = 0;
			size = 0;
			imageIndexIdNum = 0;
		};
		feedback.getFileInputArray = function() {
			return [].slice.call(feedback.imageList.querySelectorAll('.file'));
		};
		feedback.addFile = function(path) {
			feedback.files.push({
				name: "images" + index,
				path: path,
				id: "img-" + index
			});
			index++;
		};
		feedback.setEndFlag = function(flag) {
			endFlag = flag
		};
		feedback.galleryImgPhoto = function(index, self, placeholder, up) {
			plus.gallery.pick(function(e) {
				upload(url, e, function(imgPath, data) {
					if(data.result == 'success') {
						if(!self.parentNode.classList.contains('space')) { //已有图片
							feedback.files.splice(index - 1, 1, {
								name: "images" + index,
								path: data.obj.path
							});
						} else { //加号
							placeholder.classList.remove('space');
							feedback.addFile(data.obj.path);
							feedback.newPlaceholder();
						}
						up.classList.remove('image-up');
						placeholder.style.backgroundImage = 'url(' + e + ')';
					} else {
						mui.toast("文件上传失败");
					}
				});
			}, function(e) {
				//mui.toast(e.message);
			}, {});
		}

		feedback.getImagePhoto = function(index, self, placeholder, up) {
			var cmr = plus.camera.getCamera();
			var res = cmr.supportedImageResolutions[0];
			var fmt = cmr.supportedImageFormats[0];

			cmr.captureImage(function(p) {
				plus.io.resolveLocalFileSystemURL(p, function(entry) {
					upload(url, entry.toLocalURL(), function(imgPath, data) {
						if(data.result == 'success') {
							if(!self.parentNode.classList.contains('space')) { //已有图片
								feedback.files.splice(index - 1, 1, {
									name: "images" + index,
									path: data.obj.path
								});
							} else { //加号
								placeholder.classList.remove('space');
								feedback.addFile(data.obj.path);
								feedback.newPlaceholder();
							}
							up.classList.remove('image-up');
							placeholder.style.backgroundImage = 'url(' + entry.toLocalURL() + ')';
						} else {
							mui.toast("文件上传失败");
						}
					});
				}, function(e) {
					//mui.toast(e.message);
				});
			}, function(e) {}, {
				filename: "_doc/camera/"
			});
		}

		/**
		 * 初始化图片域占位
		 */
		feedback.newPlaceholder = function(path) {
			var fileInputArray = feedback.getFileInputArray();
			if(fileInputArray &&
				fileInputArray.length > 0 &&
				fileInputArray[fileInputArray.length - 1].parentNode.classList.contains('space')) {
				return;
			};
			if(options.num && index > options.num) {
				endFlag = true
				return;
			}
			imageIndexIdNum++;
			var placeholder = document.createElement('div');
			placeholder.setAttribute('class', 'image-item space');
			var up = document.createElement("div");
			up.setAttribute('class', 'image-up')
			//删除图片
			var closeButton = document.createElement('div');
			closeButton.setAttribute('class', 'image-close');
			closeButton.innerHTML = 'X';
			closeButton.id = "img-" + index;
			//小X的点击事件
			closeButton.addEventListener('tap', function(event) {
				setTimeout(function() {
					for(var temp = 0; temp < feedback.files.length; temp++) {
						if(feedback.files[temp].id == closeButton.id) {
							feedback.files.splice(temp, 1);
						}
					}
					feedback.imageList.removeChild(placeholder);
					if(endFlag) {
						options.num = options.num + 1;
						feedback.newPlaceholder();
					}
				}, 0);
				return false;
			}, false);

			var fileInput = document.createElement('div');
			fileInput.setAttribute('class', 'file');
			fileInput.setAttribute('id', 'image-' + imageIndexIdNum);
			fileInput.addEventListener('tap', function(event) {
				var self = this;
				var index = (this.id).substr(-1);
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
								feedback.getImagePhoto(index, self, placeholder, up); /*拍照*/
								break;
							case 2:
								feedback.galleryImgPhoto(index, self, placeholder, up); /*打开相册*/
								break;
							default:
								break;
						}
					})
				}
			}, false);
			placeholder.appendChild(closeButton);
			placeholder.appendChild(up);
			placeholder.appendChild(fileInput);
			feedback.imageList.appendChild(placeholder);

			if(path) {
				feedback.addFile(path);
				placeholder.style.backgroundImage = 'url(' + serverAddress + '/' + qsUtils.processImagePath(path) + ')';
				placeholder.classList.remove('space');
				up.classList.remove('image-up');
				feedback.imageList.appendChild(placeholder);
			}
		};
	}

	var qsUtils = {
		initImageList: function(options, imagePaths) {
			initImageList(options);
			if(imagePaths) {
				imagePaths.forEach(function(v, i) {
					imgList[options.id].newPlaceholder(v)
				});

				if(imagePaths && options.num && imagePaths.length < options.num) {
					imgList[options.id].newPlaceholder();
				}

				if(imagePaths && options.num && imagePaths.length == options.num) {
					imgList[options.id].setEndFlag(true);
				}
			} else {
				imgList[options.id].newPlaceholder();
			}

		},
		getImageListFiles: function(id) {
			return imgList[id].files;
		},
		getImageFilesPath: function(id) {
			var paths = [];
			imgList[id].files.forEach(function(v, i) {
				paths.push(v.path)
			})
			return paths;
		},
		processImagePath: function(str) {
			return str.replace('client', '').replace(/\\/g, "/")
		},

		/**
		 * 图片懒加载
		 * @param {Object}   obj       DOMElement
		 * @param {Function} callback  加载完成回调函数
		 * 
		 * @author fanrong33
		 * @version 1.1.0 build 20160107
		 */
		lazyload: function(obj, callback) {
			var debug = true; // 默认打印调试日志
			if(obj.getAttribute('data-loaded')) {
				return;
			}
			var image_url = obj.getAttribute('data-lazyload');
			debug && console.log(image_url);
			// 1. 转换网络图片地址为本地缓存图片路径，判断该图片是否存在本地缓存
			// http://...jpg -> md5
			// 缓存目录 _downloads/image/(md5).jpg
			var image_md5 = md5(image_url);
			var local_image_url = '_downloads/image/' + image_md5 + '.jpg'; // 缓存本地图片url
			var absolute_image_path = plus.io.convertLocalFileSystemURL(local_image_url); // 平台绝对路径
			// new temp_img 用于判断图片文件是否存在
			var temp_img = new Image();
			temp_img.src = absolute_image_path;
			temp_img.onload = function() {
				debug && console.log('存在本地缓存图片文件' + local_image_url + '，直接显示');

				// 1.1 存在，则直接显示（本地已缓存，不需要淡入动画）
				obj.setAttribute('src', absolute_image_path);
				obj.setAttribute('data-loaded', true);
				obj.classList.add('img-lazyload');

				callback && callback();
				return;
			}
			temp_img.onerror = function() {
				debug && console.log('不存在本地缓存图片文件');
				// 1.2 下载图片缓存到本地
				debug && console.log('开始下载图片' + image_url + ' 缓存到本地: ' + local_image_url);

				function download_img() {
					var download_task = plus.downloader.createDownload(image_url, {
						filename: local_image_url // filename:下载任务在本地保存的文件路径
					}, function(download, status) {
						if(status != 200) {
							// 下载失败,删除本地临时文件
							debug && console.log('下载失败,status' + status);
							if(local_image_url != null) {
								plus.io.resolveLocalFileSystemURL(local_image_url, function(entry) {
									entry.remove(function(entry) {
										debug && console.log("临时文件删除成功" + local_image_url);
										// 重新下载图片
										download_img();
									}, function(e) {
										debug && console.log("临时文件删除失败" + local_image_url);
									});
								});
							}
						} else {
							// 把下载成功的图片显示
							// 将本地URL路径转换成平台绝对路径
							obj.setAttribute('src', plus.io.convertLocalFileSystemURL(local_image_url));
							obj.setAttribute('data-loaded', true);
							obj.classList.add('img-lazyload');
							callback && callback();
						}
					});
					download_task.start();
				}
				download_img();
			}

		}
	}

	window.qsUtils = $$ = qs = qsUtils;
})();