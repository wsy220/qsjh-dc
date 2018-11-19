{{each sub value index}} {{if value.timeinterval}}
<div class="clear_float clear_float_top_one" style="width:100%;">
	<ul class="mui-table-view mui-table-view-cus kuan_qi left mui-confirm-button-end" data-id="{{value._id}}">
		<li class="mui-table-view-cell kuan_one ">
			<span class="cus_title_01"><span class="mui-icon iconfont icon-sj" style="padding-right: 2%;"></span>预约时间:{{value.timeinterval.intervalbegin | formatIntervalStart }}-{{value.timeinterval.intervalend | formatIntervalEnd }}</span>
			<span style="float: right;"><div style="padding: 2px 10px; color: #a5a5a5;">{{value.states == 'finish'?'已完成':'已退单'}}</div></span>
		</li>
		<li class="mui-table-view-cell ">
			<span class="mui-icon iconfont icon-hzdd" style="color:green"></span> <span class="beaty">订&nbsp;单&nbsp;号&nbsp;：</span> <span class="black_tip">{{value.ordernum}}</span>
		</li>
		<li class="mui-table-view-cell ">
			<span class="mui-icon iconfont icon-fbz" style="color:green"></span> <span class="beaty">发&nbsp;布&nbsp;者&nbsp;：</span> <span class="black_tip">{{value.username}}</span>
		</li>
		<li class="mui-table-view-cell ">
			<span class="mui-icon iconfont icon-dz" style="color:dodgerblue"></span> <span class="beaty">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;：</span>
			<span class="black_tip"> {{value.customer.homeaddress  | formatStringLan 24 }}</span>
		</li>
		<li class="mui-table-view-cell ">
			<span class="mui-icon iconfont icon-je " style="color:orange"></span> <span class="beaty">服&nbsp;务&nbsp;费&nbsp;：</span>
			<span style="color:red;">{{value.gainsharing.yhprice | formatPrice}}元/{{value.price.time}}次</span>
		</li>
		<li class="mui-table-view-cell ">
			<span class="mui-icon iconfont icon-fwxm " style="color:red"></span> <span class="beaty">服务项目：</span> <span class="black_tip">{{value.serviceitem  | formatStringLan 20 }}</span>
		</li>
	</ul>
</div>
{{else}}
<div class="clear_float clear_float_top_one" style="width:100%;">
	<ul class="mui-table-view kuan_qi mui-confirm-button end-report" data-id="{{value._id}}">
		<li class="mui-table-view-cell kuan_one kuan_two" data-id="{{value._id}}">
			<span class="cus_title_01 deeptip"><span class="mui-icon iconfont icon-bgjd" style="padding-right: 2%;"></span>报告解读<span style="float: right;"><div style="padding: 2px 10px; color: #a5a5a5;">{{value.states == 'finish'?'已完成':'已退单'}}</div>
		</li>
		<li class="mui-table-view-cell" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-hzdd" style="color:red"></span> <span>订&nbsp;单&nbsp;号&nbsp;：</span><span>{{value.ordernum}}</span>
		</li>
		<li class="mui-table-view-cell" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-fbz" style="color:green"></span> <span>发&nbsp;布&nbsp;者&nbsp;：</span><span>{{value.username}}</span>
		</li>
		<li class="mui-table-view-cell" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-je" style="color:orange"></span> <span>服&nbsp;务&nbsp;费&nbsp;：</span><span style="color:red;">{{value.gainsharing.yhprice | formatPrice}}元</span>
		</li>
	</ul>
</div>

{{/if}} {{/each}}