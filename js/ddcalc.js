define(['jquery', 'underscore', 'backbone', 'jqueryuitime'], function ($, _, Backbone) {
    "use strict";
    return {
		run: function(){
			//Initialize timepicker
			$("#ddc-submit-date").datetimepicker();
			
			//Initialize turnaround hours spinner
			$("#ddc-turnaround-hours").spinner({
				min: 0
			});
			
			//Buttonize!
			$("#ddc-submit").button();
		}
	};
});