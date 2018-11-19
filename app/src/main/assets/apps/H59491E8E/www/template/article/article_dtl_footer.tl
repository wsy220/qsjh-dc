{{each answer value index}} {{if value.userId}}
{{if publishType =="dcapp"}}
<li class="mui-table-view-cell mui-media">
	<div class="mui-media-body mui-row">
		<div class="mui-col-xs-2">
			<img src="{{value.userId.userfaceimage | formatHttpString}}" style="width: 30px;height: 30px;border-radius: 50%;" />
		</div>
		<div class="other-info mui-col-xs-8">
			<span class="other-name">{{value.userId.nickname}}</span>
			<p class='mui-ellipsis-10'>{{value.content}}</p>
		</div>
	</div>
	<ul class="mui-table-view sub-ul" id="sub-{{value._id}}" style="width: 100%;">
		{{each value.sub reply index}}
		<li class="mui-table-view-cell" style="margin-left:45px;padding:6px 10px;background-color: #f1f1f1;" id="make-reply">
			<div class="mui-media-body">
				<div class="other-info mui-pull-left">
					<span class="other-name" style="color: #fdb664;">
						
					{{if reply.userId._id !== articledc._id}}  
					{{reply.userId.nickname}}
					{{/if}} 
					{{if reply.userId._id == articledc._id}}
					{{articledc.nickname}} 
					{{/if}}
					
					{{if reply.userId.nickname !== value.userId.nickname}}
					<span style="color: black;"> 回复 </span>@{{value.userId.nickname}} {{/if}} 
					{{if reply.userId.nickname == value.userId.nickname}}
					<span style="color: black;"> 回复 </span>@{{articledc.nickname}} {{/if}}
					</span>
					<p class='mui-ellipsis-10'>{{reply.content}}</p>
					<p style="font-size: 12px;">{{reply.timeCreated | formatIntervalStart }}</p>
				</div>
			</div>
		</li>
		{{/each}}
	</ul>
	<div style="margin-left: 45px;margin-top: 10px;">
		<span class="other-time">{{value.timeCreated | formatIntervalStart }}</span> 
		{{if value.type=="0" && userId == articledc._id }}
		<div class="mui-pull-right" style="font-size: 12px;" id="hfBtn" data-sid="{{value._id}}" data-name="{{value.userId.nickname}}" data-artName="{{articledc.nickname}}">
			<span><img src="../images/circle/hf.png" style="width: 20px;height: 20px;" /></span>
		</div>
		{{/if}} 
		{{if value.sub.length !== 0 && userId == value.userId._id}}
		<div class="mui-pull-right" style="font-size: 12px;" id="hfBtn" data-sid="{{value._id}}" data-name="{{value.userId.nickname}}" data-artName="{{articledc.nickname}}">
			<span><img src="../images/circle/hf.png" style="width: 20px;height: 20px;" /></span>
		</div>
		{{/if}}
	</div>

</li>
{{/if}}

{{if publishType =="web"}}
<li class="mui-table-view-cell mui-media">
	<div class="mui-media-body mui-row">
		<div class="mui-col-xs-2">
			<img src="{{value.userId.userfaceimage | formatHttpString}}" style="width: 30px;height: 30px;border-radius: 50%;" />
		</div>
		<div class="other-info mui-col-xs-8">
			<span class="other-name">{{value.userId.nickname}}</span>
			<p class='mui-ellipsis-10'>{{value.content}}</p>
		</div>
	</div>
	<div style="margin-left: 45px;margin-top: 10px;">
		<span class="other-time">{{value.timeCreated | formatIntervalStart }}</span> 
	</div>
</li>
{{/if}}
{{/if}} {{/each}}

<style>
	.mui-table-view-cell {
		padding-left: 0px;
		padding-right: 0px;
	}
</style>