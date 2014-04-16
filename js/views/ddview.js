define(['jquery', 'underscore', 'backbone', 'ddModel', 'text!templates/ddview.html', 'jqueryuitime'], 
	function($, _, Backbone, DueDateModel, topNavTemplate){
		return Backbone.View.extend({
			el: 'body',
			template: topNavTemplate,
			jQCache: {},
			render: function () {
				this.$el.append(this.template);
				this.jQCache = {
					sdDOM: $("#ddc-submit-date"),
					thDOM: $("#ddc-turnaround-hours"),		
					cdDOM: $("#ddc-calculated-date")					
				};
				
				//Initialize timepicker
				$("#ddc-submit-date").datetimepicker();

				//Initialize turnaround hours spinner
				$("#ddc-turnaround-hours").spinner();

				//Buttonize!
				$("#ddc-submit").button();
			},
			initialize: function () {
				this.render();
			},
			events: {
				"click #ddc-submit": "calculate"
			},
			calculate: function(){
				var DDModel = new DueDateModel({
					submitDate: this.jQCache.sdDOM.val(),
					turnaroundHours: parseInt(this.jQCache.thDOM.val())
				});
				
				this.jQCache.cdDOM.text( DDModel.calculateDueDate() );
			}
		});
	}
);