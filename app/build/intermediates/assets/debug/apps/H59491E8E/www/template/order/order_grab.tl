{{each sub value index}} 
{{if !value.serviceid.name}}
<div class="mui-card ">
	{{if value.isrecommend}}
	<div class="cus-mui-title">系统推荐订单：抢单可获得额外爱心值20!</div>
	{{/if}}
	<div class="mui-card-content">
		<ul class="mui-table-view left nui-order-detail" data-id="{{value._id}}" style="width: 80%; padding-top:0px;">
			{{if value.timeinterval.intervalbegin && value.timeinterval.intervalend}}
			<li class="mui-table-view-cell greentip">
				<span class="mui-icon iconfont icon-sj" style="padding-right: 2%;"></span><span>预约时间:{{value.timeinterval.intervalbegin | formatIntervalStart }}-{{value.timeinterval.intervalend | formatIntervalEnd }}</span>
			</li>
			{{/if}}
			<li class="mui-table-view-cell">
				<span style="color: #9cddff;" class="mui-icon iconfont icon-dz"></span> <span style="color:#000">地址</span>: <span class="zhangxin">{{value.customer.homeaddress | formatStringLan 20 }}</span>
			</li>
			<li class="mui-table-view-cell">
				<span style="color: #2bb478;" class="mui-icon iconfont icon-fbz"></span> <span style="color:#000">发布者</span>: <span class="zhangxin">{{ value.username }}</span>
			</li>
			<li class="mui-table-view-cell">
				<span style="color: #db5937;" class="mui-icon iconfont icon-fwxm"></span> <span style="color:#000">服务项目</span>: <span class="zhangxin">{{ value.serviceitem }}</span>
			</li>
			<li class="mui-table-view-cell" style="color: #ef7a03;">
				<span class="mui-icon iconfont icon-je"></span> <span style="color:#000">服务费</span>: <span class="orange">{{value.gainsharing.yhprice | formatPrice}}元/{{value.price.time}}次</span>
			</li>
			{{if value.ishigherprice == "0"}}
			<li class="mui-table-view-cell">
				<span style="color:#ff5053;font-size: 12px;"> 注:含高级服务费(全程陪护直至输液完成)</span>
			</li>
			{{/if}}
		</ul>
		<div class="dot_qiangdan left" style="background-color: #FFF;padding-right: 10px;padding-top:10px!important;">
			<!--<span class="mui-icon iconfont icon-dz" style="margin-left: 6px; margin-top: 10px;"> -->
			<span class="red_km">{{value.distance | formatDistance}}km</span>
			<img src="../images/order/dtl.png" alt="" class="mui-confirm-button nui-order-delBtn" id="{{value._id}}" />
		</div>
	</div>
</div>
{{else}}
<div class="mui-card">
	<div class="mui-card-content">
		<ul class="mui-table-view left report-order-detail" data-id="{{value._id}}" style="width: 80%; padding-top:0px;">
			<li class="mui-table-view-cell deeptip">
				<span class="mui-icon iconfont icon-bgjd" style="padding-right: 2%;"></span><span>报告解读</span>
			</li>
			<li class="mui-table-view-cell">
				<span style="color: #2bb478;" class="mui-icon iconfont icon-fbz"></span><span style="color:#000">发布者</span>: <span class="zhangxin">{{ value.username }}</span>
			</li>
			<li class="mui-table-view-cell">
				<span style="color: #db5937;" class="mui-icon iconfont icon-fwxm"></span><span style="color:#000">服务项目</span>: <span class="zhangxin">{{ value.serviceitem }}</span>
			</li>
			<li class="mui-table-view-cell" style="color: #ef7a03;">
				{{if classtype=="L"}}
				<span class="mui-icon iconfont icon-je"></span><span style="color:#000">服务费</span>: <span class="orange">{{value.serviceid.lcyh | formatPrice}}元</span>
				{{else}}
				<span class="mui-icon iconfont icon-je"></span><span style="color:#000">服务费</span>: <span class="orange">{{value.serviceid.fzyh | formatPrice}}元</span>
				{{/if}}
			</li>
			<li class="mui-table-view-cell"></li>
		</ul>
		<div class="dot_qiangdan left" style="background-color: #FFF;padding-right: 10px;padding-top:10px!important;">
			<!--<span class="mui-icon iconfont icon-dz" style="margin-left: 6px; margin-top: 10px;"> -->
			<img src="../images/order/dtl.png" alt="" class="mui-confirm-button report-order-delBtn" id="{{value._id}}" />
		</div>
	</div>
</div>
{{/if}} {{/each}}