<ul class="mui-table-view">
	<li class="mui-table-view-cell">
		<span class="mui-pull-left">应扣款总金额：</span>
		<span class="mui-pull-right" style="color: red;">-{{money | formatPrice}}元</span>
	</li>
	<li class="mui-table-view-cell">
		<span class="mui-pull-left">扣款时间：</span>
		<span class="mui-pull-right">{{sub.backDate | formatIntervalStart}}</span>
	</li>
	<li class="mui-table-view-cell">
		<div>扣款原因:</div>
		<div class="padding-p"><p>{{sub.backReason.text}}</p></div>
	</li>
</ul>
<ul class="mui-table-view">
	<li class="mui-table-view-cell">
		<span class="mui-pull-left">订单号：</span>
		<span class="mui-pull-right">{{sub.ordernum}}</span>
	</li>
	<li class="mui-table-view-cell">
		<span class="mui-pull-left">服务费：</span>
		<span class="mui-pull-right">{{sub.gainsharing.yhprice | formatPrice}}元</span>
	</li>
</ul>
<style>
	.mui-table-view{
		margin-bottom: 5px;
		font-size: 15px;
	}
	.mui-table-view-cell{
		padding: 15px 15px;
	}
	.padding-p{
		padding-top: 10px;
	}
</style>