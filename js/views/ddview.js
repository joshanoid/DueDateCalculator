define(['jquery', 'underscore', 'backbone', 'ddModel', 'text!templates/ddview.html', 'jqueryuitime'], 
	function($, _, Backbone, ddm, topNavTemplate){
		return Backbone.View.extend({
			el: 'body',
			template: topNavTemplate,
			calculatedDateDOM: "",
			render: function () {
				this.$el.append(this.template);
				this.calculatedDateDOM = $("#ddc-calculated-date"); //Cache
				
				//A trick to trigger validate on start
				ddm.ddmodel.set({ 
					submitDate: false
				}, {validate : true});
				
				//Initialize timepicker
				$("#ddc-submit-date").datetimepicker({
					onSelect: function(date){
						ddm.ddmodel.set({
							submitDate: date
						}, {validate : true});
					}
				});

				//Initialize turnaround hours spinner
				$("#ddc-turnaround-hours").spinner({
					min: 0,
					spin: function(event, ui) {
						ddm.ddmodel.set({
							turnaroundHours: ui.value
						}, {validate : true});
					}
				});

				//Buttonize!
				$("#ddc-submit").button();
			},
			initialize: function () {
				this.render();
			},
			events: {
				"click #ddc-submit": "calculate"
			},
			calculate: function(event){
				var dm = ddm.ddmodel;
				
				this.calculatedDateDOM.text( !!dm.validationError ? dm.validationError : dm.calculate() );
			}
		});
	}
);