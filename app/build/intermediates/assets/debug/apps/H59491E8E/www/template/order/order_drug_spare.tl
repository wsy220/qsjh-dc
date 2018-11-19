{{if !sparesconfirm && doctorisconfirm && !isprovidespares}}
<ul class="mui-table-view" style="margin-top: 5px;">
	<li class="mui-table-view-cell">
		<strong>备品(单次服务)：</strong> <span></span><br/>
		{{each orderSpares subvalue index}}  
		{{each subvalue.spares value index}} 
		<p><span id="cusName">{{value.name}} * {{value.standard}} * {{value.number}}</span></p>	
		{{/each}}  
		{{/each}}  
	</li>
</ul>
{{/if}}
		
		





