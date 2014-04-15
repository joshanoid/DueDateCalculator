define(['jquery', 'underscore', 'backbone', 'ddModel', 'ddMainView', 'jqueryuitime'], function ($, _, Backbone, ddm, ddv) {
    return {
		run: function(){
			//Generate layout
			var layout = new ddv();
			
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