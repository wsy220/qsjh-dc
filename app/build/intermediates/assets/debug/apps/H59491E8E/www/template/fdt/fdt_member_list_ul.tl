<ul class="mui-table-view">
	<li class="no-padding">
		<div class="background-pic">
			<div class="icon-team">
				<img class="icon-team-pic" src="{{arr.logo | formatHttpString}}" />
			</div>
			<div class="team-name">
				{{arr.name}}
			</div>
		</div>
	</li>
	<li class="mui-table-view-cell mui-row eliminate-interval">
		<div class="mui-col-xs-4 mui-col-sm-4 text-center">
			<div class="mui-row border-no-left">
				<div class="mui-col-xs-4 mui-col-sm-4 text-right" style="padding-top:3% ;">
					<img src="../images/fdt/qyl.png" / style="width:25px;">
				</div>
				<div class="mui-col-xs-8 mui-col-sm-8" style="padding-left:10% ;">
					<p>签约率</p>
					<p>{{signRate | formatChangePercent}}</p>
				</div>
			</div>
		</div>
		<div class="mui-col-xs-4 mui-col-sm-4 text-center">
			<div class="mui-row border-no-left">
				<div class="mui-col-xs-4 mui-col-sm-4 text-right" style="padding-top:3% ;">
					<img src="../images/fdt/yqy.png" / style="width:25px">
				</div>
				<div class="mui-col-xs-8 mui-col-sm-8" style="padding-left:10% ;">
					<p>已签约</p>
					<p>{{signNum}}</p>
				</div>
			</div>
		</div>
		<div class="mui-col-xs-4 mui-col-sm-4 text-center">
			<div class="mui-row border-no-left">
				<div class="mui-col-xs-4 mui-col-sm-4 text-right" style="padding-top:3% ;">
					<img src="../images/fdt/wqy.png" / style="width:25px">
				</div>
				<div class="mui-col-xs-8 mui-col-sm-8" style="padding-left:10% ;">
					<p>未签约</span>
						<p>{{unSignNum}}</p>
				</div>
			</div>
		</div>
	</li>
</ul>
 	
<ul class="mui-table-view change-font-15">
	<li class="mui-table-view-cell">
		<a class="mui-navigate-right btn_edit_fdt_info">团队介绍</a>
	</li>
	<li class="mui-table-view-cell memberInfo" data-id="{{teamLeader._id}}" data-memberType="general-practitioner"  data-name="{{arr.name}}">
		<span >{{teamLeader.name}} </span>   
		<span class=" change-font-13" style="color: #797979;">队长、全科医生</span>  
	</li>
	{{each sub value index}} 
	{{if value.doctor._id}}
		<li class="mui-table-view-cell memberInfo" data-id="{{value.doctor._id}}" data-memberType="{{value.memberType}}"  data-name="{{arr.name}}">
			<span >{{value.doctor.name}} </span>   
			<span class=" change-font-13" style="color: #797979;">{{value.memberType | formatChoiceMenberTtpe}}</span>  
		</li>
		{{/if}}
{{/each}}
</ul>
