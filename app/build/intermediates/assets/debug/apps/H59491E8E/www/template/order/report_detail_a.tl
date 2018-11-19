<ul class="mui-table-view">
	<li class="mui-table-view-cell">
		<strong>订单号：</strong><strong id="orderNo">{{ordernum}}</strong> 
		<span style="float: right;">
			<button id="orderback" type="button" class="mui-btn mui-btn-outlined" 
				style="margin-top:4px;padding: 2px 8px;border-radius: 15px; font-size: 12px;color: #F0F0F0; display: none;background-color: #C5C5C5;">退单</button>
		</span>
	</li>
	<li class="mui-table-view-cell">
		<strong id="serviceitem">{{serviceitem}}</strong><br/>
		<span class="serviceitem">订单时间：</span><span class="right serviceitem-content ">{{ordertime | formatDate }}</span><br/>
		{{if gainsharing}}
		<span class="serviceitem">服务费：</span><span class="right serviceitem-content ">{{gainsharing.yhprice | formatPrice}}元</span><br/>
		{{else}}
		<span class="serviceitem">服务费：</span><span class="right serviceitem-content ">{{serviceid.lcyh | formatPrice}}元</span><br/>
		{{/if}}
	</li>
</ul>

<style>
.fudong {
	overflow: hidden;
}

.fudong img {
	float: left;
}

.guohe_one {
	width: 65px;
	height: 65px;
	overflow: hidden;
	float: left;
	margin: 3px;
}
.mui-table-view-cell.mui-active {
	background-color: #fff
}

</style>