<ul class="mui-table-view" style="margin-top: 5px;">
	<li class="mui-table-view-cell">
		<strong>服务对象信息：</strong> <span></span><br/>
		<p>姓名：<span id="cusName">{{customer.realname}}</span></p>
		<p>性别：<span id="cusName">{{customer.gender}}</span></p>
		<p>电话：<span id="cusTel">{{customer.tel}}</span></p>
		<p>出生年月：<span id="cusTel">{{customer.idnumber | getBirthdayFromIdCard}}</span></p>
		<p>身份证号：<span id="cusTel">{{customer.idnumber}}</span></p>
		<p>地址：<span id="cusAdd">{{customer.homeaddress}}</span></p>
		{{if !timeisconfirm}} 
		<p>时间：<span>{{timeinterval.specifieddate | formatDateEndDate }}</span><span class="right" style="color: red;">待确认</span></p>
		{{else}}
		<p>时间：<span id="cusTime">{{timeinterval.intervalbegin | formatIntervalStart }}-{{timeinterval.intervalend | formatIntervalEnd }}</span></p>
		{{/if}}
		<p>疾病：<span id="cusServ">{{disease}}</span></p>
	</li>
	<li class="mui-table-view-cell">
	<div class="mui-table fudong">
			{{if orderImgs.recipeImgs}}
				{{each orderImgs.recipeImgs subValue index}} 
				<div class="guohe_one">
					<img class='qs-img-lazyload' src="{{ subValue | formatHttpString}}" data-lazyload="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			{{/if}}
			{{if orderImgs.drugImgs}}
				{{each orderImgs.drugImgs subValue index}} 
				<div class="guohe_one">
					<img class='qs-img-lazyload' src="{{ subValue | formatHttpString}}" data-lazyload="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			{{/if}}
			{{if orderImgs.sparesImgs}}
				{{each orderImgs.sparesImgs subValue index}} 
				<div class="guohe_one">
					<img class='qs-img-lazyload' src="{{ subValue | formatHttpString}}" data-lazyload="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			{{/if}}
			{{if orderImgs.caseImgs}}
				{{each orderImgs.caseImgs subValue index}} 
				<div class="guohe_one">
					<img class='qs-img-lazyload' src="{{ subValue | formatHttpString}}" data-lazyload="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			{{/if}}
			{{if orderImgs.environmenImgs}}
				{{each orderImgs.environmenImgs subValue index}} 
				<div class="guohe_one">
					<img class='qs-img-lazyload' src="{{ subValue | formatHttpString}}" data-lazyload="{{ subValue | formatHttpString}}" alt="" data-preview-src="" data-preview-group="1" />
				</div>
				{{/each}}
			{{/if}}
		</div>
		<strong>病情描述：</strong><br/>
		<p><span id="condition">{{additional.condition | formatString 'condition'}}</span></p>
		<div class="mui-table fudong">
			{{each additional.pictureurl subValue index}} 
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
<script>
	
</script>
