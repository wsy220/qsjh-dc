<div class="background-pic">
	<img class="background-pic-main" src="../images/exit/hzxq2.jpg">
	<div class="mui-media-object">
		<img class="mui-pull-center" src="{{obj.patientavatar | formatHttpString}}"/>
	</div>
	<div class="background-text1">
		<div>{{obj.realname}}</div>
		<div>{{obj.gender | formatChoiceGender}}</div>
	</div>
	
	
	<div class="background-text2 mui-row">
		<div class="mui-col-xs-6">发单数：<span class="background-text2-color">{{sub.orderNum}}单</span></div>
		<div class="mui-col-xs-6">医护好评率：<span class="background-text2-color ">{{sub.hp}}</span></div>
	</div>
</div>


<ul class="mui-table-view">
    <li class="mui-table-view-cell">实名状态：{{obj.idapprove | formatChoiceApprove}}</li>
</ul>
<!--<ul class="mui-table-view">
    <li class="mui-table-view-cell">健康档案</li>
</ul>-->

<!--<ul class="mui-table-view">
			 <li class="mui-table-view-cell write-remark" >
			        <a class="mui-navigate-right">备注</a>
			   </li>
			 </ul>-->