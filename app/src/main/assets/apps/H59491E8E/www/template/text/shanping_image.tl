<div id="slider" class="mui-slider mui-fullscreen" >
	<div class="mui-slider-group">
		{{each sub value index}}
		<div class="mui-slider-item">
			<div class="item-logo" data-ext="3" data-forward="{{value.forwardtype}}">
				<img class="qs-img-lazyload" src="{{value.img|formatHttpString}}" data-lazyload="{{value.img|formatHttpString}}" height="100%">
			</div>
		</div>
		{{/each}}

	</div>
	<div class="mui-slider-indicator">
		{{each sub value index}}
		<div class="mui-indicator"></div>
		{{/each}}
	</div>
</div>