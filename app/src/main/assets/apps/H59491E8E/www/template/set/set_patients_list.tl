{{each sub value index}} {{if value._id}}
<ul class="mui-table-view">
	<li class="mui-table-view-cell mui-media">
		<div class="mui-row">
			<div class="mui-col-xs-10 nui-patient-detail" data-id="{{value._id.userid}}">
				<img class="mui-pull-left" id="head-img" src="{{ value._id.docs | formatHttpString}}" style="width: 45px;margin-top: 2%;">
				<div class="mui-media-body mui-row">
					<div class="mui-col-xs-4 padding-top" style="">{{value._id.username}} </div>
					<div class="mui-col-xs-8 padding-top">发单数：{{value.count}}单</div>
				</div>
			</div>
		</div>
	</li>
</ul>

{{/if}} {{/each}}