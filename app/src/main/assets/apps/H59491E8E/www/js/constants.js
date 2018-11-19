//服务器地址
//var serverAddress = "http://192.168.0.6:3000";
//var serverAddress = "http://123.207.186.30";
//var serverAddress = "http://192.168.0.18:3000";
//var serverAddress = "http://192.168.0.13:3000";
//var serverAddress = "http://192.168.0.11:3000";
//var serverAddress = "http://192.168.0.12:3000";
//var serverAddress="http://pt.70jiahu.com";
var serverAddress = "http://tpt.70jiahu.com"; //测试环境

var appregisterUrl = "/api/__DoOVES70/Od676Z8998_1/REG"; //注册
var upappdetailUrl="/api/baseinfo/commitstaticinfo"; //上传应用信息

var gethisUrl = "/api/doctor/gethis"; //获得医院信息
var loginUrl = "/api/doctor/applogin"; //登陆
var apploginoutUrl = "/api/doctor/apploginout"; //登陆
var loginbindwxUrl = "/api/doctor/apploginbindwx"; //微信绑定并登录
var wxbindphoneUrl = "/api/doctor/wxbindphone"; //微信绑定手机号码

var changeimgeUrl = "/api/doctor/changeimge"; //修改头像 post  path
var setnicknameUrl = "/api/doctor/setnickname"; //修改昵称 put  nikeName
var clauseUrl = "/api/doctor/clause"; //更新服务条款
var bingWeixinUrl = "/api/doctor/bingWeixin";
var lunbUrl="/api/commerical/app/dc/list?type=ggw"; //轮播图片获取
var aboutUsUrl="/api/baseinfo/appgetbaseinfo"; //post 轮播点击关于我们
var shanpingUrl="/api/commerical/app/dc/list?type=sp"; //闪屏图片获取

var setnewpasswordUrl = "/api/doctor/setnewpassword"; //设置新密码 post  newpassword
var authenticationUrl = "/api/__DoOVES70/Od676Z8998_1/AUT"; //认证接口  post
var zgauthenticationUrl = "/api/doctor/zgauthentication";  //批量导入认证   put
var changepasswordUrl = "/api/doctor/changepassword"; //修改密码 POST  参数: oldpassword newpassword
var addopinionUrl = "/api/doctor/addopinion"; //修改密码 POST  参数: content
var changeservicestatusUrl = "/api/doctor/changeservicestatus"; //修改密码 POST  参数: isActive

var showhomenothavelistUrl = "/api/__DoOVES70/Od676Z8998_0/SHL"; //家附近未抢单列表   GET
var showworknothavelistUrl = "/api/__DoOVES70/Od676Z8998_0/SWL"; //公司附近未抢单列表  GET
var showreportnothhavelistUrl = "/api/__DoOVES70/Od676Z8998_0/SRL"; //报告解读未抢单列表  GET

var getorderdetailGrabUrl = "/api/__DoOVES70/Od676Z8998_0/GODG/"; //订单添详情 +/:orderid Get
var getorderdetailGrabReadUrl = "/api/__DoOVES70/Od676Z8998_0/GODR/"; //报告解读详情页  +/:orderid Get
var getorderdetailallUrl = "/api/__DoOVES70/Od676Z8998_0/GOD/"; //待服务详情页  +/:orderid Get
var confirmorderUrl = "/api/__DoOVES70/Od676Z8997_0/OCD/"; //抢单 +/:orderid PUT

var showwaitconfirmedlistUrl = "/api/__DoOVES70/Od676Z8997_0/SWCL"; //待确认订单列表 +/:userid GET
var showwaitservicelistUrl = "/api/dc/order/showwaitservicelist"; //待服务订单列表 +/:userid GET
var showendservicelistUrl = "/api/dc/order/showendservicelist"; //完成订单列表 +/:userid GET

var getHosServiceItemsUrl = "/api/dc/order/getHosServiceItems"; //获取筛选的项目选择    PUT

var backorderUrl = "/api/dc/order/backorder/"; //退单 +/:orderid PUT
var backReadyOrderUrl = "/api/dc/order/backReadyOrder"; //取退单原因 +/: id, backReason PUT
var backreportUrl = "/api/__DoOVES70/Od676Z8997_0/OCB/"; //退单 +/:orderid PUT
var backreportcauseUrl = "/api/__DoOVES70/Od676Z8997_0/OCBR"; //取报告退单原因+/: id, backReason PUT

var addorderdrugsUrl = "/api/dc/order/addorderdrugs/"; //订单添加药品 +/:orderid PUT
var addordersparesUrl = "/api/dc/order/addorderspares/"; //订单添加备品 +/:orderid PUT

var getorderdetailUrl = "/api/dc/order/getorderdetail/"; //订单添详情 +/:orderid Get

var stoporderUrl="/api/__DoOVES70/Od676Z8997_0/SOA"     //异常订单标记  get id：订单号

var addorderstarttimeUrl = "/api/dc/order/addorderstarttime/"; //添加服务出发状态+/:orderid put
var addorderarrivetimeUrl = "/api/dc/order/addorderarrivetime/"; //添加服务到达状态+/:orderid put
var addservicestarttimeUrl = "/api/dc/order/addservicestarttime/"; //添加开始服务+/：orderid put
var addorderleavetimeUrl = "/api/dc/order/addorderleavetime/"; //添加服务离开状态+/:orderid put
var addorderserviceUrl = "/api/dc/order/addorderservice/"; //添加工作日志+/:orderid put

var getorderserviceUrl = "/api/dc/order/getorderservice/"; //添加工作日志+/:orderid get

var confirmserviceUrl = "/api/__DoOVES70/Od676Z8997_0/EOS/" //确认完成订单 +/:orderid put
var setorderconfirmUrl = "/api/__DoOVES70/Od676Z8997_0/SOC"; //确认订单+/:orderid put
var addordergpsUrl = "/api/dc/order/addordergps/";
var getordergpsUrl = "/api/dc/order/getordergps/";
var deductionsDetailUrl = "/api/dc/order/getorderdetailback/"; //获取扣款详细列表+/：orderBackId GET

var alladdressandgpsUrl = "/api/doctor/alladdressandgps/"; //+/:userid put
var showdetailUrl = "/api/doctor/showdetail"; //医护详细信息 get
var getdoctoraccountUrl = "/api/doctor/getdoctoraccount"; //获得账户信息 get
var getdoctoraccountdetailUrl = "/api/doctor/getdoctoraccountdetail"; //获得账户详细信息 get
var savecardinfoUrl = "/api/doctor/savecardinfo"; //存储银行卡信息 put cardUserName cardUserPhone checkCode cardBankName cardNo
var withdrawalsUrl = "/api/doctor/withdrawals"; //提现  put  参数：amount

var srvcUrl = "/api/au/srvc"; //获得验证码  ?pn=xxx&uid=yyy
var crvcUrl = "/api/au/crvc"; //验证 ?pn=xx&vc=xxx
var checkcodeUrl = "/api/doctor/checkcode"; //验证验证码
var chengephonenoUrl = "/api/doctor/chengephoneno"; //修改手机号码
var uploadfileUrl = "/api/upload"; //音频文件上传接口
var uploadImgFileUrl = "/api/uploadImg"; //上传图片接口

var deleteMsgUrl="/api/__DoOVES70/Od676Z8998_0/D/USTF/"; //删除系统消息   post

var getnotificationUrl = "/api/__DoOVES70/Od676Z8998_0/D/GNTF"; //   消息接口
var upmsgreadUrl="/api/__DoOVES70/Od676Z8998_0/D/UNTF/" //+ /:msgId   //上传消息已读   post
var appsendBackVerCodeUrl = "/api/doctor/appsendBackVerCode"; //密码找回发送验证码 get || uid pn
var appsendBackVerCodeTwoUrl = "/api/doctor/appsendBackVerCodeTwo"; //密码找回发送验证码 get || uid pn

var getpatientsUrl = "/api/__DoOVES70/Od676Z8997_0/GPT"; //获得病人列表   get || page limit

var getpatientsdetailUrl = "/api/dc/order/getpatientdtl"; //获取患者详情   post ||id
var createQrcodeUrl = "/api/doctor/createQrcode"; //获得二维码 get || jiahuno
var appitemdetailsUrl = "/api/doctor/getServiceItems"; //获得服务项目 get || pid
var addServiceItemsUrl = "/api/doctor/addServiceItems"; //获得服务项目

var articlesappUrl = "/api/article/articlesapp/"; //自己的文章列表
var articleslistUrl = "/api/article/articleslist"; //自己的文章列表
var articlestypeUrl = "/api/article/articlestype"; //分类
var savearticlesUrl = "/api/article/savearticles"; //上传文章
var articlesalllistUrl = "/api/article/articlesalllist" //获取全部的文章
var articlesrmlistUrl = "/api/article/articlesrmlist" //获取热门分类
var articlessublistUrl = "/api/article/getArticlesSubList"; //根据不同的文章类型取值
var articleswdxqlistUrl = "/api/article/articleswdxqlist"
var articleswtjllistUrl = "/api/article/articleswtjllist"
var appdelearticlesUrl = "/api/article/appdelearticles/"
var appzanarticlesUrl = "/api/article/appzanarticles/"
var appplarticlesUrl = "/api/article/appplarticles/";
var appasarticlesUrl = "/api/article/appasarticles/"; //文章作者回复评论

var fdtListUrl = "/api/appfamilydoctorteam/fdtlist"; //查询当前医生所在的家庭医生团队
var getfdtpatientUrl = "/api/appfamilydoctorteam/patientsbyfdt"; //分页获取分配给当前家庭医生团队的社区病患，分已签约和未签约
var getFdtDetailUrl = "/api/appfamilydoctorteam/redaone/"; //根据id获取家庭医生团队对象
var getFdtPatientDetailUrl = "/api/appfamilydoctorteam/readOnePatient/"; //根據id查詢社區病患詳細信息
var fdtUpdateUrl = "/api/appfamilydoctorteam/update/"; //修改家庭医生团队信息
var uploadFdtPatientProtocolFile = "/api/appfamilydoctorteam/uploadFdtPatientProtocolFile/"; //上传社区病患和家庭医生团队签约协议
var updatePatient = "/api/appfamilydoctorteam/updatePatient/"; //修改社区病患

var createDTB = "/api/appfamilydoctorteam/createDTB"; //创建诊疗行为记录
var readOneDTB = "/api/appfamilydoctorteam/readOneDTB/" //根据id获取诊疗行为
var getDTBList = "/api/appfamilydoctorteam/getDTBList"; //分页查询诊疗行为

var getFDTPatientSignQuantity = "/api/appfamilydoctorteam/getFDTPatientSignQuantity" //统计当前家庭医生团队分配到的患者的签约率
var getServicePackageDTBQuantity = "/api/appfamilydoctorteam/getServicePackageDTBQuantity"; //统计服务包中的项目执行的次数

var appgetdisdepartmentall = "/api/patient/appgetdisdepartmentall" //获取全部疾病类别
var dcarticleslistUrl = "/api/article/dcarticleslist/" //根据医护id获取该医护发表的文章

var createHealthData = "/api/appfamilydoctorteam/createHealthData"; //创建健康数据记录
var readOneHealthData = "/api/appfamilydoctorteam/readOneHealthData/"; //根据id获取健康数据 //get
var readOneHealthDataToday = "/api/appfamilydoctorteam/readOneHealthDataToday"; //获取今天健康数据详情
var getHealthDataList = "/api/appfamilydoctorteam/getHealthDataList"; //分页查询健康数据
var getChartsData = "/api/appfamilydoctorteam/getChartsData"; //查询健康数据图表数据
var getServicePatientQuantity = "/api/appfamilydoctorteam/getServicePatientQuantity/"; //获得医生服务患者数量

var aCity = {
	11: "北京",
	12: "天津",
	13: "河北",
	14: "山西",
	15: "内蒙古",
	21: "辽宁",
	22: "吉林",
	23: "黑龙江",
	31: "上海",
	32: "江苏",
	33: "浙江",
	34: "安徽",
	35: "福建",
	36: "江西",
	37: "山东",
	41: "河南",
	42: "湖北",
	43: "湖南",
	44: "广东",
	45: "广西",
	46: "海南",
	50: "重庆",
	51: "四川",
	52: "贵州",
	53: "云南",
	54: "西藏",
	61: "陕西",
	62: "甘肃",
	63: "青海",
	64: "宁夏",
	65: "新疆",
	71: "台湾",
	81: "香港",
	82: "澳门",
	91: "国外"
}