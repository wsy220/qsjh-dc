{{each sub value index}} {{if value.timeinterval}}
<div class="clear_float clear_float_top" style="width:100%;background-color: #fff;">
	<ul class="mui-table-view kuan_qi mui-confirm-button-confim" data-id="{{value._id}}">
		<li class="mui-table-view-cell kuan_one kuan_two" data-id="{{value._id}}">
			<span class="cus_title_01"><span class="mui-icon iconfont icon-sj" style="padding-right: 2%;"></span>预约时间:{{value.timeinterval.intervalbegin | formatIntervalStart }}-{{value.timeinterval.intervalend | formatIntervalEnd }}</span>
		</li>
		<li class="mui-table-view-cell kuan_two" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-hzdd" style="color:red"></span>
			<span>订&nbsp;单&nbsp;号&nbsp;：</span>
			<span class="black_tip">{{value.ordernum}}</span>
		</li>
		<li class="mui-table-view-cell kuan_two" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-fbz" style="color:green"></span> <span>发&nbsp;布&nbsp;者&nbsp;：</span>&nbsp;<span class="black_tip">{{value.username}}</span>
		</li>
		<li class="mui-table-view-cell  kuan_two" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-dz" style="color:dodgerblue"></span> <span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;：</span>
			<span class="black_tip"> {{value.customer.homeaddress | formatStringLan 24 }}</span>
		</li>
		{{if value.gainsharing}}
		<li class="mui-table-view-cell kuan_two" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-je " style="color:orange"></span> <span>服&nbsp;务&nbsp;费&nbsp;：</span>
			<span style="color:red;">{{value.gainsharing.yhprice | formatPrice}}元/{{value.price.time}}次</span>
		</li>
		{{/if}}
		<li class="mui-table-view-cell kuan_two" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-fwxm" style="color:red"></span>
			<span>服务项目：</span> <span class="black_tip">{{value.serviceitem | formatStringLan 20 }}</span>
		</li>
		<li class="mui-table-view-cell" style="padding-bottom: 0;">
			<div style="display: inline-flex;width: 100%;">
				<span class="tel_phone" data-id="{{value._id}}" data-phone="{{value.customer.tel}}" style="border-right: 1px solid gainsboro;">
					<img class="icon-size" src="../images/order/u97(1).png" style="width: 35px;height:35px;padding-top: 0;" />
				<span class="black_tip">电话联系</span>
				</span>
				<span class="message-main" data-userId="{{value.userid}}" data-name="{{value.username}}" data-id="{{value._id}}" data-serviceitem="{{value.serviceitem}}">
					<img class="icon-size" src="../images/order/u125(1).png" style="width:35px;height:35px;padding-top: 0" />
				<span class="black_tip">发起聊天</span>
				</span>
			</div>
		</li>
	</ul>
</div>
{{else}}
<div class="clear_float clear_float_top_one" style="width:100%;">
	<ul class="mui-table-view kuan_qi mui-confirm-button" data-id="{{value._id}}">
		<li class="mui-table-view-cell kuan_one report-order-detail " data-id="{{value._id}}">
			<span class="cus_title_01 deeptip"><span class="mui-icon iconfont icon-bgjd" style="padding-right: 2%;"></span>报告解读</span>
		</li>
		<li class="mui-table-view-cell report-order-detail" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-hzdd" style="color:red"></span> <span>订&nbsp;单&nbsp;号&nbsp;：</span><span>{{value.ordernum}}</span>
		</li>
		<li class="mui-table-view-cell report-order-detail" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-fbz" style="color:green"></span> <span>发&nbsp;布&nbsp;者&nbsp;：</span><span>{{value.username}}</span>
		</li>
		<li class="mui-table-view-cell report-order-detail" data-id="{{value._id}}">
			<span class="mui-icon iconfont icon-je" style="color:orange"></span> <span>服&nbsp;务&nbsp;费&nbsp;：</span><span style="color:red;">{{value.gainsharing.yhprice | formatPrice}}元</span>
		</li>
	</ul>
</div>

{{/if}} {{/each}}