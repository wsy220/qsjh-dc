{{if publishType =="dcapp"}}
<div class="title-div">
	<div class="title-text">
		{{articletitle}}
	</div>
	<div class="title-others">
		{{if realNameFlag}}
		<span class="title-user">{{articledc.name}}</span> 
		{{else}}
		<span class="title-user">{{articledc.nickname}}</span> 
		{{/if}}
		<span class="title-zy">{{articledc.dtype != "doctor"?"护士":"医生"}}</span> 

		<span class="title-time">{{createdOn | formatDate }}</span>
	</div>
</div>
{{/if}}

{{if publishType =="web"}}
<div class="title-div">
	<div class="title-text">
		{{articletitle}}
	</div>
	<div class="title-others">
		<span class="title-user">{{articleauthor}}</span> 
		<span class="title-time">{{createdOn | formatDate }}</span>
	</div>
</div>
{{/if}}
