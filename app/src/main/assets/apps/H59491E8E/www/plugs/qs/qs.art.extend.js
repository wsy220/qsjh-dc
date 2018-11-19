template.defaults.imports.formatMsgTemplate = function(value, dataConfig) {
	if(value && dataConfig) {
		var str = dataConfig[value].opentype
		if(str != '1') {
			return 'mui-navigate-right'
		} else {
			return ''
		}
	} else {
		return ''
	}
}

template.defaults.imports.formatMsgIconTemplate = function(value, dataConfig) {
	if(value && dataConfig) {
		var str = dataConfig[value].icon
		if(str) {
			return str
		} else {
			return '../images/news/xtxx.png'
		}
	} else {
		return '../images/news/xtxx.png'
	}
}

template.defaults.imports.formatString = function(typestr, type) {
	if(type == 'notification') {
		if(typestr == 'order') {
			return '../images/news/ddxx.png'
		} else {
			return '../images/news/xtxx.png'
		}
	} else if(type == 'datestr') {
		var datetime = moment(typestr).format('YYYY-MM-DD HH:mm:ss');
		return datetime;
	} else if(type == 'condition') {
		if(typestr) {
			return typestr;
		} else {
			return '无'
		}
	} else if(type == 'saddr') {
		if(typestr == null || typestr == '') {
			return '../../images/fdt/fdt_patient_img.png';
		} else {
			return serverAddress + "/" + typestr.replace('client', '').replace(/\\/g, "/")
		}
	} else {
		return typestr;
	}

}

template.defaults.imports.formatMsgStyle = function(status) {
	if(status == "1") {
		return 'display: none;'
	}
}

template.defaults.imports.formatMsgDisplay = function(id, msgFlag, datestr, createdOn) {
	if(moment(createdOn) < moment(datestr, "YYYY-MM-DD HH:mm:ss")) {
		return 'display: none;'
	}
	if(msgFlag && msgFlag[id]) {
		return 'display: none;'
	}
}

template.defaults.imports.formatMediaBody = function(id, msgFlag, datestr, createdOn) {
	if(moment(createdOn) < moment(datestr, "YYYY-MM-DD HH:mm:ss")) {
		return 'read-color'
	}
	if(msgFlag && msgFlag[id]) {
		return 'read-color'
	}
}

template.defaults.imports.formatDate = function(datastr) {
	var datetime = moment(datastr).format('YYYY-MM-DD HH:mm:ss');
	return datetime;
}

template.defaults.imports.formatPrice = function(price) {
	var value = parseFloat(price) / 100;
	var xsd = value.toString().split(".");

	if(xsd.length == 1) {
		value = value.toString() + ".00";
		return value;
	}

	if(xsd.length > 1) {
		if(xsd[1].length < 2) {
			value = value.toString() + "0";
		}
		return value;
	}
	return value;
}

template.defaults.imports.formatPriceNo = function(price) {
	var value = parseFloat(price) / 100;
	var xsd = value.toString().split(".");

	if(xsd.length == 1) {
		value = value.toString();
		return value;
	}

	if(xsd.length > 1) {
		if(xsd[1].length < 2) {
			value = value.toString() + "0";
		}
		return value;
	}
	return value;
}

template.defaults.imports.formatDateEndDate = function(datastr) {
	var datetime = moment(datastr).format('YYYY-MM-DD');
	return datetime;
}

template.defaults.imports.formatIntervalYear = function(datastr) {
	var datetime = moment(datastr).format('YYYY');
	return datetime;
}
template.defaults.imports.formatIntervalStart = function(datastr) {
	var datetime = moment(datastr).format('YYYY-MM-DD HH:mm');
	return datetime;
}

template.defaults.imports.formatIntervalEnd = function(datastr) {
	var datetime = moment(datastr).format('HH:mm');
	return datetime;
}

template.defaults.imports.formatHttpString = function(str) {
	return serverAddress + '/' + str.replace('client', '').replace(/\\/g, "/");
}
template.defaults.imports.formatDistance = function(distance) {
	return(distance / 1000).toFixed(2);
}

template.defaults.imports.formatStringLan = function(str, lan) {
	if($.getLength(str) > lan) {
		return $.cutstr(str, lan);
	} else {
		return str;
	}
}

template.defaults.imports.formatServiceNumber = function(serviceNumber, times) {
	var serviceNumberInt = parseInt(serviceNumber)
	var timesInt = parseInt(times)
	if(serviceNumberInt > timesInt) {
		return "已完成";
	} else {
		return "第" + serviceNumberInt + "次";
	}
}

template.defaults.imports.formatChoiceGender = function(gender) {
	if(gender == '0') {
		return "男"
	} else {
		return "女"
	}
}

template.defaults.imports.formatChangePercent = function(signRate) {
	var str = Number(signRate * 100).toFixed(1);
	str += "%";
	return str;
}

template.defaults.imports.formatChoiceApprove = function(idapprove) {
	if(idapprove == '0') {
		return "未认证"
	} else if(idapprove == '1') {
		return "待认证"
	} else if(idapprove == '2') {
		return "已认证"
	} else {
		return "未通过审核"
	}
}

template.defaults.imports.formatChoiceMenberTtpe = function(memberType) {
	if(memberType == "QKYS") {
		return "队长、全科医生"
	} else if(memberType == "QKHS") {
		return "全科护士"
	} else if(memberType == "GWYS") {
		return "公卫医生"
	} else if(memberType == "YF") {
		return "预防"
	} else if(memberType == "FBYS") {
		return "妇保医生"
	} else if(memberType == "EBYS") {
		return "儿保医生"
	}
}

template.defaults.imports.formatMoney = function(subjectDirection) {
	if(subjectDirection == "D") {
		return "-";
	} else if(subjectDirection == "C") {
		return "+"
	}
}
template.defaults.imports.textChange = function(text) {
	var text = text.replace(/\n/g, '<br/>');
	text = text.replace(/ /g, "&nbsp;")
	return text;
}

template.defaults.imports.getBirthdayFromIdCard = function(str) {
	var birthday = "";
	if(str != null && str != "") {
		if(str.length == 15) {
			birthday = "19" + str.substr(6, 6);
		} else if(str.length == 18) {
			birthday = str.substr(6, 8);
		}

		birthday = birthday.replace(/(.{4})(.{2})/, "$1年$2月")+"日";
	}

	return birthday;
}

var templateRegister = {

	common: {
		id: 'common',
		src: '../template/notification/common.tl'
	},
	orderChoice: {
		id: 'orderChoice',
		src: '../template/order/order_choice.tl',
		desc: '筛选列表'
	},
	ordera: {
		id: 'ordera',
		src: '../template/order/order_detail_a.tl'
	},
	orderb: {
		id: 'orderb',
		src: '../template/order/order_detail_b.tl'
	},
	orderc: {
		id: 'orderc',
		src: '../template/order/order_detail_c.tl'
	},
	orderd: {
		id: 'orderd',
		src: '../template/order/order_detail_d.tl'
	},
	reporta: {
		id: 'reporta',
		src: '../template/order/report_detail_a.tl',
		desc: '报告解读订单信息'
	},
	reportb: {
		id: 'reportb',
		src: '../template/order/report_detail_b.tl',
		desc: '报告解读具体描述'
	},
	reportc: {
		id: 'reportc',
		src: '../template/order/report_detail_c.tl',
		desc: '报告解读医护回答'
	},
	reportd: {
		id: 'reportd',
		src: '../template/order/report_detail_d.tl',
		desc: '报告解读患者评论'
	},
	orderDrugSpare: {
		id: 'orderDrugSpare',
		src: '../template/order/order_drug_spare.tl'
	},
	orderListEnd: {
		id: 'orderListEnd',
		src: '../template/order/order_list_end.tl',
		desc: '订单完成列表'
	},
	orderListConfim: {
		id: 'orderListConfim',
		src: '../template/order/order_list_confim.tl',
		desc: '订单完成列表'
	},
	orderListWait: {
		id: 'orderListWait',
		src: '../template/order/order_list_wait.tl',
		desc: '订单完成列表'
	},

	orderAddDrug: {
		id: 'orderAddDrug',
		src: '../template/order/order_add_drug.tl',
		desc: '订单完成列表'
	},
	orderAddSpare: {
		id: 'orderAddSpare',
		src: '../template/order/order_add_spare.tl',
		desc: '订单完成列表'
	},
	orderGrab: {
		id: 'orderGrab',
		src: '../template/order/order_grab.tl',
		desc: '抢单列表'
	},
	patientsList: {
		id: 'patientsList',
		src: '../template/set/set_patients_list.tl',
		desc: '病患列表'
	},
	patientsDetailsList: {
		id: 'patientsDetailsList',
		src: '../template/set/patients_details_list.tl',
		desc: '我的患者详情'
	},
	serviceList: {
		id: 'serviceList',
		src: '../template/set/set_service_list.tl',
		desc: '服务列表'
	},
	articleList: {
		id: 'articleList',
		src: '../template/article/article_my_list.tl',
		desc: '服务列表'
	},
	articleAllList: {
		id: 'articleAllList',
		src: '../template/article/article_list.tl',
		desc: '服务列表'
	},

	articleDtlHeader: {
		id: 'articleDtlHeader',
		src: '../template/article/article_dtl_header.tl',
		desc: '服务列表'
	},
	articleDtlBody: {
		id: 'articleDtlBody',
		src: '../template/article/article_dtl_body.tl',
		desc: '服务列表'
	},
	articleDtlFooter: {
		id: 'articleDtlFooter',
		src: '../template/article/article_dtl_footer.tl',
		desc: '服务列表'
	},
	fdtpatientList: {
		id: 'fdtpatientList',
		src: '../template/fdt/fdt_patient_list.tl',
		desc: '家庭医生团队已签约病患列表'
	},
	fdtPatientListSigned: {
		id: 'fdtpatientListSigned',
		src: '../template/fdt/fdt_patient_list_signed.tl',
		desc: '家庭医生团队未签约病患列表'
	},
	fdtMemberListUl: {
		id: 'fdtMemberListUl',
		src: '../template/fdt/fdt_member_list_ul.tl',
		desc: '家庭医生团队成员列表'
	},
	diagnosisBehaviorList: {
		id: 'diagnosisBehaviorList',
		src: '../template/fdt/diagnosis_behavior_list.tl',
		desc: '诊疗行为列表'
	},
	doctorRemindingHistory: {
		id: "doctorRemindingHistory",
		src: "../template/fdt/doctor_reminding_history.tl",
		desc: "就诊提醒历史纪录"
	},
	doctorArticlesList: {
		id: "doctorArticlesList",
		src: "../template/fdt/doctor_articles_list.tl",
		desc: "醫生發表文章列表"
	},
	signAgreement: {
		id: "signAgreement",
		src: "../template/fdt/sign_agreement.tl",
		desc: "合同协议"
	},
	accountDetail: {
		id: "accountDetail",
		src: "../template/set/account_detail.tl",
		desc: "账户明细"
	},
	deductionDetail: {
		id: "deductionDetail",
		src: "../template/set/deduction_detail.tl",
		desc: "扣款明细"
	},
	lunboMain:{
		id:"lunboMain",
		src:'../template/text/lunbo_image.tl',
		desc:'首页轮播图'
	},
	shanpingMain:{
		id:"shanpingMain",
		src:'template/text/shanping_image.tl',
		desc:'闪屏'
	}
	

}