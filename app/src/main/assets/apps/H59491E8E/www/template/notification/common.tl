{{each sub value index}}
<li class="mui-table-view-cell mui-media" style="padding-right: 65px;" id="{{value._id}}" data-id="{{value._id}}" >
	<div class="mui-slider-right mui-disabled">
		<a class="mui-btn mui-btn-red" data-id={{value._id}}>删除</a>
	</div>
	<a  class="cus-msg-box mui-slider-handle {{value.template | formatMsgTemplate dataConfig}}" href="javascript:;" data-id="{{value._id}}" data-type="{{value.template}}" data-link="" data-opentype="" data-ext="{{value.extras}}">
		<div class="mui-media-object mui-pull-left cus-badge-box">
			<span class="mui-badge" style="{{value.toId.status | formatMsgStyle}}"></span>
			<img class="mui-media-object" type="{{value.type}}" src="{{@value.template | formatMsgIconTemplate dataConfig}}">
		</div>
		<div class="mui-media-body {{value._id | formatMediaBody msgFlag datestr value.createdOn}}" style="padding-right: 2px;">
			<span class="cus-title">{{value.title}}</span>
			<div class="cus-time">{{value.createdOn | formatString 'datestr'}}</div>
			<p class='mui-ellipsis-10'>{{value.content}}</p>
		</div>
	</a>
</li>
{{/each}}