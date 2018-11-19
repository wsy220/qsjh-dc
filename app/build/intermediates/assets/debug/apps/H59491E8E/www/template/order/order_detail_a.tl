<ul class="mui-table-view">
	<li class="mui-table-view-cell">
		<strong>订单号：</strong><strong id="orderNo">{{ordernum}}</strong>
		<span style="float: right;">
			<button id="orderback" type="button" class="mui-btn mui-btn-outlined" 
				style="margin-top:4px;padding: 2px 8px;border-radius: 15px; font-size: 12px;color: #F0F0F0; display: none;background-color: #C5C5C5;">退单</button>
				<!--<button id="orderstop" type="button" class="mui-btn mui-btn-outlined" 
				style="margin-top:4px;padding: 2px 8px;border-radius: 15px; font-size: 12px;color: #F0F0F0; display: none;background-color: #C5C5C5;">终止服务</button>-->
		</span>
	</li>
	<li class="mui-table-view-cell">
		<strong id="serviceitem">{{serviceitem}}</strong><br/>
		<span class="serviceitem">订单时间：</span><span class="right serviceitem-content ">{{ordertime | formatDate }}</span><br/>
		<span class="serviceitem">服务费：</span><span class="right serviceitem-content ">{{gainsharing.yhprice | formatPrice}}元 / {{price.time}} 次</span><br/> {{if ishigherprice == "0"}}
		<span class="serviceitem">高级服务：</span><span class="right serviceitem-content ">全程陪护直至输液完成</span><br/> {{/if}}
		<!--{{if spanCuTimes}}<span class="serviceitem">当前服务次数：</span><span class="right serviceitem-content " style="color: red;"><strong id="cuTimes" >{{serviceNumber | formatServiceNumber price.time}}</strong></span><br/> {{/if}}-->
	</li>

	<ul class="mui-table-view ">
		{{if isprovidespares == true}}
		<li class="mui-table-view-cell">
			<span class="serviceitem">备品(单次服务)：</span>
			<span class="right" style="color: #8f8f94;font-size: 14px;">患者自备</span> <br/>
		</li>
		{{/if}} {{if isprovidespares == false }}
		<li class="mui-table-view-cell mui-collapse">
			<a class="mui-navigate-right serviceitem">备品(单次服务)：

			</a>

			<div id="showCollapse" class="mui-collapse-content">
				{{each orderSpares subvalue index}} {{each subvalue.spares value index}}
				<h5 class="right" style="color: #8f8f94;font-size: 14px;">{{value.name}} * {{value.standard}} * {{value.number}}</h5><br /> {{/each}} {{/each}}
				<h5 class="right" style="color: #8f8f94;font-size: 14px;">总价：{{orderSpares[0].groupprice | formatPrice}}元</h5><br />
			</div>
		</li>
		<li>
			{{if states=="orderd" &&allowThird == false}}
			<span id="showDrug" class="mui-pull-right" style="position: absolute;top:16px;right:15%; display: inline-block; font-size: 14px;">
				<input id="occupation" name="occupation" data-type = "dc" class="occupation" type="radio" value="dc" checked="checked"></input>
				<label>自备</label>
			</span> {{else}} {{if states=="orderd" && !sparesfrom}}
			<span id="showDrug" class="mui-pull-right" style="position: absolute;top:16px;right:15%; display: inline-block; font-size: 14px;">
				<input id="occupation" name="occupation" data-type = "dc" class="occupation" type="radio" value="dc"></input>
				<label>自备</label>&nbsp;&nbsp;&nbsp;&nbsp;
				<input id="occupation" name="occupation" data-type = "jl" class="occupation" type="radio" value="jl" checked="checked"></input>
				<label>吉林大药房</label>
			</span> {{/if}} {{if states=="orderd" && sparesfrom=="jl"}}
			<span id="showDrug" class="mui-pull-right" style="position: absolute;top:16px;right:15%; display: inline-block; font-size: 14px;">
				<input id="occupation" name="occupation" data-type = "jl" class="occupation" type="radio" value="jl" checked="checked"></input>
				<label>吉林大药房</label>
			</span> {{/if}} {{/if}}

		</li>
		{{/if}}
	</ul>
	{{if gainsharing.registration>0}}
	<ul class="mui-table-view ">
		<li class="mui-table-view-cell">
			<div class="mui-pull-left" style="width: 87%;">
				<p>挂号费：</p>
				<p style="color: red;line-height: 20px;">挂号费用由医护人员代付，该项费用会与服务费用一同为您结算。</p>
			</div>
			<div class="mui-pull-right">
				<p style="color: #EC971F;padding-top: 80%;">{{gainsharing.registration | formatPriceNo}}元</p>
			</div>

		</li>
	</ul>
	{{/if}}
	{{if states == "new" || states=="dc"}}
	<ul class="mui-table-view ">
		<li class="mui-table-view-cell">
			<p style="color: red;">温馨提示：医疗有风险，请您评估操作难度后再接单。因保险业务流程需要，如出现医疗事故，理赔时需要您出示本院正副本执照复印件。</p>
		</li>
	</ul>
	{{/if}}
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