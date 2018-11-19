<ul class="mui-table-view">
	{{each sub value index}} 
	{{if value.subjectDirection == 'D'}}
	<li class="mui-table-view-cell mui-media get-id" data-id="{{value.otherInfo.orderBackId}}" data-money="{{value.amount}}">
		<a class="mui-navigate-right">
			<div class="mui-media-body">
				<div>
					<span class="mui-pull-left">{{value.desc}}</span>
				</div>
				<div style="padding-top: 30px;">
					<p class="mui-pull-left">{{value.amountDate | formatIntervalStart}}</p>
					<p class="mui-pull-right" style="color: red;padding-right: 10px;">{{value.subjectDirection | formatMoney}}{{value.amount | formatPrice}}元</p>
				</div>
			</div>
		</a>
	</li>
	{{else}}
	<li class="mui-table-view-cell mui-media" data-money="{{value.amount}}">
		<div class="mui-media-body">
			<div>
				<span class="mui-pull-left">{{value.desc}}</span>
			</div>
			<div style="padding-top: 30px;">
				<p class="mui-pull-left">{{value.amountDate | formatIntervalStart}}</p>
				<p class="mui-pull-right" style="color: red;padding-right: 10px;">{{value.subjectDirection | formatMoney}}{{value.amount | formatPrice}}元</p>
			</div>
		</div>
	</li>
	{{/if}} 
	{{/each}}
</ul>
<style>
	
	.mui-table-view {
		margin-bottom: 5px;
		font-size: 15px;
	}
	
	.mui-table-view-cell {
		padding: 15px 0px 10px 15px;
		margin: 0 !important;
	}
</style>