{{each sub value index}}
	<div class="choice-button" id="choiceButton" data-name="{{value.typename}}">
		{{value.nickname}}
	</div>
{{/each}}
<div class="mui-row mui-text-center button-bottom">
	<div class="mui-col-xs-6" id="resetChoice">重置</div>
	<div class="mui-col-xs-6" id="confirmChoice">确认</div>
</div>
<style>
	
	#resetChoice {
		background-color: #8f95cd;
		padding: 15px 0;
	}
	
	#confirmChoice {
		background-color: #5e64c5;
		padding: 15px 0;
	}
</style>