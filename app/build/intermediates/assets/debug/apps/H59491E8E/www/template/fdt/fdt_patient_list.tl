<ul class="mui-table-view">
	{{each sub value index}}  
		<li class="mui-table-view-cell mui-media to-sign" data-id="{{value._id}}" >
			<a href="javascript:;">
				<!--<img class="mui-media-object mui-pull-left cus-img-list" src="../images/fdt/fdt_patient_img.png">-->
				<img class="mui-media-object mui-pull-left cus-img-list make-round" src="{{ value.patientavatar | formatHttpString}}">
				{{if value.node == 'YQ'}}
					<img class="mui-media-object mui-pull-right cus-img-list" src="../images/fdt/fdt_patient_complete_signed.png">
				{{/if}}
				<div class="mui-media-body">
					<div>姓名：{{value.realname}}</div>
					<div><span>{{value.gender | formatChoiceGender}}</span><span style="padding-left:20px">
					{{if value.birthdate != undefined}}
						{{value.birthdate | formatIntervalYear}}年</span>
					{{/if}}
					</div>
					<div class="cus-text-color-one mui-ellipsis-1" >疾病：{{value.illness}}</div>
				</div>
			</a>
		</li>
	{{/each}}
</ul>
