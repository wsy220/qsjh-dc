<div id="slider" class="mui-slider">

	<div class="mui-slider-group mui-slider-loop" id="lunbo">
		<div class="mui-slider-item mui-slider-item-duplicate" data-ext="3" data-forward="{{sub[0].forwardtype}}" data-id="{{sub[0].localUrl}}" data-url="{{sub[0].url}}" data-name="{{sub[0].name}}">
			<a href="#">
				<img style="height: 230px;" class="qs-img-lazyload" src="{{sub[0].img|formatHttpString}}" data-lazyload="{{sub[0].img|formatHttpString}}">
			</a>
		</div>
		{{each sub value index}}
		<div class="mui-slider-item" data-ext="3" data-forward="{{value.forwardtype}}" data-id="{{value.localUrl}}" data-url="{{value.url}}" data-name="{{value.name}}">
			<a href="#">
				<img style="height:230px;" class="qs-img-lazyload" src="{{value.img|formatHttpString}}" data-lazyload="{{value.img|formatHttpString}}">
			</a>
		</div>
		{{/each}}
		<div class="mui-slider-item mui-slider-item-duplicate" data-forward="{{sub[sub.length-1].forwardtype}}" data-id="{{sub[sub.length-1].localUrl}}" data-url="{{sub[sub.length-1].url}}" data-name="{{sub[sub.length-1].name}}">
			<a href="#">
				<img style="height: 230px;" class="qs-img-lazyload" src="{{sub[sub.length-1].img|formatHttpString}}" data-lazyload="{{sub[sub.length-1].img|formatHttpString}}">
			</a>
		</div>
	</div>
	<div class="mui-slider-indicator">
		{{each sub value index}}
		<div class="mui-indicator"></div>
		{{/each}}
	</div>
</div>