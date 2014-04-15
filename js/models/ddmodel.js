define(['backbone'], function (Backbone) {
	var DDModel = Backbone.Model.extend({
        defaults: {
            submitDate: new Date(),
            turnaroundHours: 8,
            calculatedDate: ''
        },
        initialize: function(){
			//Trigger recalculate only if these properties changes
//			this.on("change:submitDate", this.reCalculate);
//			this.on("change:turnaroundHours", this.reCalculate);
        },
		validate: function( attributes ){
            if(attributes.turnaroundHours < 0){
                return "Turnaround Hours can't be smaller then 0 hours!";
            }
			
			var sDate = new Date(attributes.submitDate);
			
            if(sDate.getHours() < 9 || sDate.getHours() > 17){
                return "Submit date must be between 9 AM and 5 PM!";
            }
			
			return true;
        },
		calculate: function(model){
			var sd = model.get("submitDate"),
				th = model.get("turnaroundHours");
		
			console.log("changed!", sd, th);
		}
    });
    
    return {
		ddmodel: new DDModel()
	};
});