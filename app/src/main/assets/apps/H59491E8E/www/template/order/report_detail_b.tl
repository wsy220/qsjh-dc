<ul class="mui-table-view" style="margin-top: 5px;">
	<li class="mui-table-view-cell">
		<div style="margin-bottom: 10px;"><span id="cusName">{{customer.realname}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
			<span id="cusName">{{customer.gender}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
			<span id="cusName">{{customer.age}}岁</span>
		</div>
		<strong>问题描述：</strong><br/>
		<p><span id="condition">{{question.description | formatString 'condition'}}</span></p>

	</li>
</ul>
<ul class="mui-table-view">
	<li class="mui-table-view-cell">
		<strong>化验单图片：</strong><br/>
		<div class="mui-table fudong">
			{{each question.pictures subValue index}}
			<div class="guohe_one">
				<img src="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
			</div>
			{{/each}}
		</div>
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