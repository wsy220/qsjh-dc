{{each sub value index}}
<li class="mui-table-view-cell">
	{{if value.publishType =="dcapp"}}
	<div class="mui-slider-handle" id="dcappDel" data-id="{{value._id}}">
		{{else}}
		<div class="mui-slider-handle" id="webDel" data-id="{{value._id}}">
			{{/if}}
			<div class="mui-media-object mui-pull-left cus-badge-box">
				<div class="banner">
					{{if value.imgList[0]}}
					<a href="#"><img src="{{ value.imgList[0] | formatHttpString}}" data-lazyload="{{ value.imgList[0] | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" /></a>
					{{else}}
					<a href="#"><img src="{{ value.cover | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" /></a>
					{{/if}}
				</div>
			</div>
			<div class="mui-media-body">
				<span class="cus-title">
			{{if value.wzfl =="wdxq"}}
			<img class="cus-title-img" src="../images/circle/xq.png">
			{{/if}}
			{{if value.wzfl =="wtjl"}}
			<img class="cus-title-img" src="../images/circle/wd.png">
			{{/if}}
			{{if value.wzfl =="jyfx"}}
			<img class="cus-title-img" src="../images/circle/fx.png">
			{{/if}}
			
			{{value.articletitle | formatStringLan 20}}</span>
				<p class='mui-ellipsis-2'>{{value.introduction}}</p>
				<div class="cus-time mui-row">
					<div class="mui-col-xs-9">{{value.createdOn | formatDate }}</div>
					<div class="mui-col-xs-3" style="text-align: right;">{{value.readcount}}浏览</div>
				</div>
			</div>
		</div>
</li>
{{/each}}