<div class="mui-card-content-inner">
	{{if publishType == "web"}}
	<div class="fudong text-center">
		<div class="content-info">
			<div id="textChange" style="text-align: justify;">
				{{@articlecontent}}
			</div>
		</div>
	</div>
	{{/if}}
	<div class="content-info">
		<div id="textChange" style="text-align: justify;">
			{{@articlecontent | textChange}}
		</div>
	</div>
	<div class="content-info-img mui-table fudong">
		{{if imgList}} {{each imgList subValue index}}
		<div class="guohe_one">
			<img class='qs-img-lazyload' src="{{ subValue | formatHttpString}}" data-lazyload="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
		</div>
		{{/each}} {{/if}}
	</div>
	<div class="content-list" style="float: right;display: inline-flex;">
		<div id="plBtn" style="padding-right: 10px;">
			<div style="display: inline-flex;padding-top: 1px;">
				<img class="cus-time-img" src="../images/circle/hf.png" style="width: 16px;height: 16px;" />
				<div>评论</div>
			</div>
		</div>
		<div id="zanBtn" style="padding-right: 10px;">
			<!--<p style="padding-top: 2px;"><i class="mui-icon-extra mui-icon-extra-like" style="font-size: 20px;color: #cdcdcd;"></i><span id="zannum"></span></p>-->
			<div style="display: inline-flex;padding-top: 1px;">
				<img class="cus-time-img" id="zanImg" src="../images/circle/zan.png" style="width: 16px;height: 16px;" />
				<div id="zannum">0</div>
			</div>
		</div>
		<div id="read" style="">
			<!--<img class="cus-time-img" id="zanImg" src="../images/circle/zan.png" style="width: 20px;height: 20px;" />-->
			<div style=""><i class="mui-icon mui-icon-eye" style="font-size: 20px;color: #cdcdcd;"></i><span id="readNum">0</span></div>
		</div>
	</div>
	<div style="clear: both;"></div>
</div>