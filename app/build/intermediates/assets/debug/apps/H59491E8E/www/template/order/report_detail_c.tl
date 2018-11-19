<ul class="mui-table-view" style="margin-top: 5px;color: #FF9900;">
	<li class="mui-table-view-cell">
		{{if answer.description}}
		<strong>医护回答：</strong><br/>
		<p style="color: #FF9900;"><span id="condition">{{answer.description | formatString 'condition'}}</span></p>
		<div class="mui-table fudong">
			{{each answer.pictures subValue index}}
			<div class="guohe_one">
				<img src="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
			</div>
			{{/each}}
		</div>
		{{else}}
		<strong>退单原因：</strong><br/>
		<p style="color: #FF9900;"><span id="condition">{{backReason.text | formatString 'condition'}}</span></p>
		{{/if}}
	</li>
</ul>

<style>
	.fudong {
		overflow: hidden;
	}
	
	.fudong img {
		float: left;
	}
	
	.guohe_one {
		width: 65px;
		height: 65px;
		overflow: hidden;
		float: left;
		margin: 3px;
	}
	
	.mui-table-view-cell.mui-active {
		background-color: #fff
	}
</style>