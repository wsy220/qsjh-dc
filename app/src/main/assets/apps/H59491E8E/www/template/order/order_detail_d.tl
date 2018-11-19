<ul class="mui-table-view" style="margin-top: 5px;" id="contentUl">
	<li class="mui-table-view-cell">
		<strong>护理记录：</strong>
	</li>
	{{each sub value index}}  
		<li class="mui-table-view-cell">
			<p>
				<span>
					{{value.serviceLog.logContent}}
				</span>
			</p>
			<div class="mui-table fudong">
				{{each value.serviceLog.logImgDrug subValue index}} 
				<div class="guohe_one">
					<img src="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			</div>
			<div class="mui-table fudong">
				{{each value.serviceLog.logImg subValue index}} 
				<div class="guohe_one">
					<img src="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			</div>
			<p style="text-align: right;color: #808080;">
				<span>
					{{ value.serviceLog.logTime | formatIntervalStart}}
				</span>
			</p> 
		</li>
	{{/each}}  
</ul>

