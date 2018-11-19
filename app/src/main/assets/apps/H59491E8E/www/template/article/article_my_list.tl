{{each sub value index}}
<li class="mui-table-view-cell">
	<div class="mui-slider-right mui-disabled">
		<a data-id="{{value._id}}" class="mui-btn mui-btn-red mui-btn-del">删除</a>
	</div>
	<div class="mui-slider-handle" data-id="{{value._id}}">
		<div class="mui-media-object mui-pull-left cus-badge-box">
			<div class="banner">
				<a href="#"><img src="{{ value.imgList[0] | formatHttpString}}" data-lazyload="{{ value.imgList[0] | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" /></a>
			</div>
		</div>
		<div class="mui-media-body">
			<span class="cus-title">
			{{if value.wzfl =="wdxq"}}
			<img class="cus-title-img" src="../images/circle/fx.png">
			{{/if}}
			{{if value.wzfl =="wtjl"}}
			<img class="cus-title-img" src="../images/circle/wd.png">
			{{/if}}
			{{value.articletitle | formatStringLan 20}}</span>
			<!--<div class="cus-wd"><img class="cus-time-img" src="../images/circle/hf.png">0</div>-->
			<p class='mui-ellipsis-2'>{{value.articlecontent}}</p>
			<div class="cus-time">{{value.createdOn | formatDate }}</div>
		</div>
	</div>
</li>
{{/each}}