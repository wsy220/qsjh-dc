//更新最近会话的未读消息数


function updateSessDiv(sess_type, to_id, name, unread_msg_count, time) {
	

	//	//判断  比较更新的日期和界面的日期大小
	//	var oldtime = document.getElementById("patient_time" + to_id).innerHTML;
	console.log("更新最近会话的未读消息数sess_type=" + sess_type);
	console.log("更新最近会话的未读消息数to_id=" + to_id);
	console.log("更新最近会话的未读消息数unread_msg_count=" + unread_msg_count);
	if(time) {

		var now = moment().format("YYYY-MM-DD");
		time = webim.Tool.formatTimeStamp(time);
		var msgdate = moment(time).format("YYYY-MM-DD");
		var msgtime;

		if(now == msgdate) {
			msgtime = moment(time).format('HH:mm');
		} else {
			msgtime = moment(time).format('YYYY-MM-DD');
		}
	}

	var badgeDiv = document.getElementById("badgeDiv_" + to_id);
	var timeDiv = document.getElementById("patient_time" + to_id);
	if(badgeDiv && unread_msg_count > 0) {
		if(unread_msg_count >= 100) {
			unread_msg_count = '99+';
		}
		var numbericom = document.getElementById("number-icon" + to_id);
		numbericom.style.display = "block";
//		badgeDiv.innerHTML = "<span>" + unread_msg_count + "</span>";
		badgeDiv.innerHTML =  unread_msg_count ;
		badgeDiv.style.display = "block";
		if(time) {
			timeDiv.innerHTML = msgtime;
		}

	} else if(badgeDiv == null) { //没有找到对应的聊天id
		var headUrl;
		if(sess_type == webim.SESSION_TYPE.C2C) {
			headUrl = friendHeadUrl;
		} else {
			headUrl = groupHeadUrl;
		}
		var addPositonType = 'HEAD';
		addSess(sess_type, to_id, name, headUrl, unread_msg_count, 'mui-content', addPositonType, time);
	}
	totalcount = 0;
	$(".number-icon-center").each(function(i,v){
		console.log("$(v).innerHTML===>"+Number($(v).html()));
		totalcount = totalcount+Number($(v).html())
		console.log(totalcount);
	})
	$("#waitService").show();
	$("#waitChatNum").html(totalcount);
	if(totalcount == 0) {
		$("#waitService").hide();
	}

	if(totalcount == 1) {
		if(plus.os.name == "Android") {
			$("#waitChatNum").css("padding", "2px 3px 0 3px");
		} else {
			$("#waitChatNum").css("padding", "0 3.5px");
		}
	}

	if(totalcount > 1 && totalcount < 10) {
		if(plus.os.name == "Android") {
			$("#waitChatNum").css("padding", "2px 3.1px 0 3.1px");
		} else {
			$("#waitChatNum").css("padding", "0 3.5px");
		}
	}
	if(totalcount >= 10 && totalcount < 20) {
		if(plus.os.name == "Android") {
			$("#waitChatNum").css("padding", "2px 2px 0 0");
		} else {
			$("#waitChatNum").css("padding", "0 1px");
		}
	}
	if(totalcount >= 20) {
		if(plus.os.name == "Android") {
			$("#waitChatNum").css("padding", "2px 2px 0 0");
		} else {
			$("#waitChatNum").css("padding", "0 1px");
		}
	}
	if(totalcount >= 100) {
		$("#waitConfimNum").html("...");
		if(plus.os.name == "Android") {
			$("#waitChatNum").css("padding", "1px 2px");
		} else {
			$("#waitChatNum").css("padding", "0px 2.5px");
		}
	}
}

//新增一条最近会话

function addSess(sess_type, to_id, name, face_url, unread_msg_count, sesslist, addPositonType, time, cb) {
	var sessDivId = "sessDiv_" + to_id;
	var sessDiv = document.getElementById(sessDivId);
	if(sessDiv) { //先判断是否存在会话DIV，已经存在，则不需要增加
		console.log("判断是否存在会话DIV，已经存在");
		return;

	}
	var now = moment().format("YYYY-MM-DD");
	var msgdate = moment(time).format("YYYY-MM-DD");
	var msgtime;
	if(now == msgdate) {
		msgtime = moment(time).format('HH:mm');
	} else {
		msgtime = moment(time).format('YYYY-MM-DD');
	}
	var sessList = document.getElementsByClassName("mui-content-chat")[0];
	if(sess_type == "GROUP") { //订单聊天
		var otherId;
		var selfId = localStorage.getItem("userID");
		var options = {
			'GroupId': to_id,
			'Offset': 0, //必须从0开始
			'Limit': 10,
			'MemberInfoFilter': [
				'Account'
			]
		};
		webim.getGroupMemberInfo(
			options,
			function(resp) {
				if(resp.MemberNum <= 0) {
					return;
				}
				for(var i in resp.MemberList) {
					var account = resp.MemberList[i].Member_Account;
					if(account !== selfId) {
						otherId = account;
						//通过ID取得name
						var username;
						getName(otherId, function(data) {
							if(data.date) {
								console.log(data.date);
								username = data.date.realname;
							}
							var imgsrc = "../images/orderchat.png"
							sessDiv = document.createElement("div");
							sessDiv.id = sessDivId;
							var htmls = getHtml(sess_type, imgsrc, username + '-' + name, to_id, unread_msg_count, msgtime);
							sessDiv.innerHTML = htmls;
							if(!addPositonType || addPositonType == 'TAIL') {
								//			sessList.insertBefore(sessDiv); //插入头部
								sessList.appendChild(sessDiv); //默认插入尾部
							} else if(addPositonType == 'HEAD') {
								//				sessList.insertBefore(sessDiv); //插入头部
								sessList.appendChild(sessDiv); //默认插入尾部
							} else {
								console.log(webim.Log.error('未知addPositonType' + addPositonType));
							}
							if(cb) {
								cb();
							}
						});
					}
				}
			}
		);
	} else {
		if(to_id !== "admin") {
			var user;
			getName(to_id, function(data) {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				if(data.result == "success") {
					user = data.date
					if(user == null) return;
					name = user.realname;
					var imgsrc = serverAddress + "/" + user.patientavatar.replace('client', '').replace(/\\/g, "/");
					sessDiv = document.createElement("div");
					sessDiv.id = sessDivId;
					var htmls = getHtml(sess_type, imgsrc, name, to_id, unread_msg_count, msgtime);
					sessDiv.innerHTML = htmls;
					if(!addPositonType || addPositonType == 'TAIL') {
						//			sessList.insertBefore(sessDiv); //插入头部
						sessList.appendChild(sessDiv); //默认插入尾部
					} else if(addPositonType == 'HEAD') {
						//				sessList.insertBefore(sessDiv); //插入头部
						sessList.appendChild(sessDiv); //默认插入尾部
					} else {
						console.log(webim.Log.error('未知addPositonType' + addPositonType));
					}
				}
			})
		} else if(to_id == "admin") {
			var imgsrc = "../images/familydoctor/xiao7.png"
			name = "人工客服"
			sessDiv = document.createElement("div");
			sessDiv.id = sessDivId;
			var htmls = getHtml(sess_type, imgsrc, name, to_id, unread_msg_count, msgtime);
			sessDiv.innerHTML = htmls;
			if(!addPositonType || addPositonType == 'TAIL') {
				sessList.insertBefore(sessDiv); //插入头部
			} else if(addPositonType == 'HEAD') {
				//				sessList.insertBefore(sessDiv); //插入头部
				sessList.appendChild(sessDiv); //默认插入尾部
			} else {
				console.log(webim.Log.error('未知addPositonType' + addPositonType));
			}
		}
	}

}

//切换好友或群组聊天对象

function onSelSess(sess_type, to_id) {
	if(selToID != null) {

		//将之前选中用户的样式置为未选中样式
		setSelSessStyleOff(selToID);

		//设置之前会话的已读消息标记
		webim.setAutoRead(selSess, false, false);

		//保存当前的消息输入框内容到草稿
		//获取消息内容
		//      var msgtosend = document.getElementsByClassName("msgedit")[0].value;
		//      var msgLen = webim.Tool.getStrBytes(msgtosend);
		//      if (msgLen > 0) {
		//          webim.Tool.setCookie("tmpmsg_" + selToID, msgtosend, 3600);
		//      }

		//清空聊天界面
		document.getElementsByClassName("msgflow")[0].innerHTML = "";

		selToID = to_id;
		//设置当前选中用户的样式为选中样式
		setSelSessStyleOn(to_id);

		var tmgmsgtosend = webim.Tool.getCookie("tmpmsg_" + selToID);
		if(tmgmsgtosend) {
			$("#send_msg_text").val(tmgmsgtosend);
		} else {
			$("#send_msg_text").val('');
		}

		//		bindScrollHistoryEvent.reset();

		var sessMap = webim.MsgStore.sessMap(); //获取到之前已经保存的消息
		var sessCS = webim.SESSION_TYPE.GROUP + selToID;
		if(sessMap && sessMap[sessCS]) { //判断之前是否保存过消息
			selType = webim.SESSION_TYPE.GROUP
			//			bindScrollHistoryEvent.init();

			function compare(property) {
				return function(a, b) {
					var value1 = a[property];
					var value2 = b[property];
					return value1 - value2;
				}
			}
			var sessMapOld = sessMap[sessCS]._impl.msgs.sort(compare('time'));

			for(var i = 0; i < sessMapOld.length; i++) {
				addMsg(sessMapOld[i]); //显示已经保存的消息
			}
		} else {
			if(sess_type == webim.SESSION_TYPE.GROUP) {
				if(selType == webim.SESSION_TYPE.C2C) {
					selType = webim.SESSION_TYPE.GROUP;
				}
				selSess = null;
				webim.MsgStore.delSessByTypeId(selType, selToID);

				getLastGroupHistoryMsgs(function(msgList) {
					getHistoryMsgCallback(msgList);
					//					bindScrollHistoryEvent.init();
				}, function(err) {
					alert(err.ErrorInfo);
				});

			} else {
				if(selType == webim.SESSION_TYPE.GROUP) {
					selType = webim.SESSION_TYPE.C2C;
				}
				//如果是管理员账号，则为全员推送，没有历史消息
				if(selToID == AdminAcount) {
					var sess = webim.MsgStore.sessByTypeId(selType, selToID);
					if(sess && sess.msgs() && sess.msgs().length > 0) {
						getHistoryMsgCallback(sess.msgs());
					} else {
						getLastC2CHistoryMsgs(function(msgList) {
							getHistoryMsgCallback(msgList);
							//							bindScrollHistoryEvent.init();
						}, function(err) {
							alert(err.ErrorInfo);
						});
					}
					return;
				}

				//拉取漫游消息
				getLastC2CHistoryMsgs(function(msgList) {
					getHistoryMsgCallback(msgList);
					//绑定滚动操作
					//					bindScrollHistoryEvent.init();
				}, function(err) {
					alert(err.ErrorInfo);
				});
			}
		}
	}
}

//删除会话

function deleteSessDiv(sess_type, to_id) {
	var sessDiv = document.getElementById("sessDiv_" + to_id);
	sessDiv && sessDiv.parentNode.removeChild(sessDiv);
}

//更新最近会话的名字

function updateSessNameDiv(sess_type, to_id, newName) {

	var nameDivId = "nameDiv_" + to_id;
	var nameDiv = document.getElementById(nameDivId);
	if(nameDiv) {
		if(newName.length > maxNameLen) { //帐号或昵称过长，截取一部分
			newName = newName.substr(0, maxNameLen) + "...";
		}
		nameDiv.innerHTML = webim.Tool.formatText2Html(newName);
	}
}

//更新最近会话的头像

function updateSessImageDiv(sess_type, to_id, newImageUrl) {
	if(!newImageUrl) {
		return;
	}
	var faceImageId = "faceImg_" + to_id;
	var faceImage = document.getElementById(faceImageId);
	if(faceImage) {
		faceImage.innerHTML = webim.Tool.formatText2Html(newImageUrl);
	}
}

function setSelSessStyleOn(newSelToID) {

	var selSessDiv = document.getElementById("sessDiv_" + newSelToID);
	if(selSessDiv) {
		selSessDiv.className = "sessinfo-sel"; //设置当前选中用户的样式为选中样式
	} else {
		webim.Log.warn("不存在selSessDiv: selSessDivId=" + "sessDiv_" + newSelToID);
	}

	var selBadgeDiv = document.getElementById("badgeDiv_" + newSelToID);
	if(selBadgeDiv) {
		selBadgeDiv.style.display = "none";
	} else {
		webim.Log.warn("不存在selBadgeDiv: selBadgeDivId=" + "badgeDiv_" + selToID);
	}
}

function setSelSessStyleOff(preSelToId) {
	var preSessDiv = document.getElementById("sessDiv_" + preSelToId);
	if(preSessDiv) {
		preSessDiv.className = "sessinfo"; //将之前选中用户的样式置为未选中样式
	} else {
		webim.Log.warn("不存在preSessDiv: selSessDivId=" + "sessDiv_" + preSelToId);
	}
}

function getName(id, sussess) {
	var showdetailUrl = "/api/appfamilydoctorteam/readOnePatient/" + id;
	commonHttpUtils(showdetailUrl, "get", {}, sussess, error);
};

function getHtml(sess_type, imgsrc, name, to_id, unread_msg_count, msgtime) {
	var htmls = '';
	htmls += '<ul class="mui-table-view mui-table-view-chevron">'
	htmls += '<li class="mui-table-view-cell mui-table-view-cell-chat" data-type="' + sess_type + '" data-imgsrc = "' + imgsrc + '" data-name = "' + name + '"  data-id="' + to_id + '" style="list-style: none; border-bottom: 1px solid #cfcfcf !important;"><div class="mui-slider-right mui-disabled"><a class="mui-btn mui-btn-red">删除</a></div>';
	htmls += '	<div class="mui-slider-handle go-chat"><div class="mui-media-body mui-row">';
	htmls += '	<div class="mui-col-xs-2 icon-round" id="">';
	htmls += '<img src="' + imgsrc + '" style="width: 45px;border-radius: 50%;margin: 5px 5px 0 5px;" />';
	htmls += '<div id="number-icon' + to_id + '" style="display:none" class="number-icon"><div id = "badgeDiv_' + to_id + '" class="number-icon-center">' + unread_msg_count + '</div></div></div>';

	htmls += '	<div class="mui-col-xs-7" style="padding: 7px 0 0 0;">';
	htmls += '	<div class="" id="patient_name">' + name + '</div>';
	htmls += '	<p class="" id="patient_message' + to_id + '" style="height: 20px;overflow: hidden;"></p></div>';
	//处理time 判断当天则取时间，否则取日期
	htmls += '<div  id="patient_time' + to_id + '" class="mui-col-xs-3" style="text-align: right;font-size:13px;color:#8f8f94;padding-right:5px;margin-top: 10px;">' + msgtime + '</div></div></div></li>';
	htmls += '</ul>'
	return htmls;
}