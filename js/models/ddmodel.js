define(['backbone'], function (Backbone) {
	var DDModel = Backbone.Model.extend({
        defaults: {
            submitDate: false,
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
			
			if(attributes.submitDate === false){
				return "Please set a submit date!";
			}
			
			var sDate = new Date(attributes.submitDate);
			
			if(sDate.getDay() === 0 || sDate.getDay() === 6){
                return "Ticket can't be submitted on weekend!";
            }
			
            if(sDate.getHours() < 9 || sDate.getHours() > 17){
                return "Submit date must be between 9 AM and 5 PM!";
            }
        },
		calculate: function(){
			var sd = new Date(this.get("submitDate")),
				th = this.get("turnaroundHours"),
				endDate = "", 
				noOfDaysToAdd = Math.floor(th / 8),
				remainingHours = th % 8,
				count = 0;
		
			//First increment the days
			while(count < noOfDaysToAdd){
				endDate = new Date(sd.setDate(sd.getDate() + 1));
				if(endDate.getDay() !== 0 && endDate.getDay() !== 6){
				   //Date.getDay() gives weekday starting from 0(Sunday) to 6(Saturday)
				   count++;
				}
			}
			
			//Next handle the remaining part
			var endHours = endDate.getHours();
			if(endHours + remainingHours <= 17){
				endDate.setHours(endHours + remainingHours);
			}else{
				var remainingHours2 = endHours + remainingHours - 17; //Add one plus day!
				endDate.setDate(endDate.getDate() + 1);
				if(endDate.getDay() === 6){ // If saturday, then go to monday (can't be sunday because of previous algorithm
				   endDate.setDate(endDate.getDate() + 2);
				}
				endDate.setHours(remainingHours2); //Add the remaining hours
			}
			
			return endDate;
		}
    });
    
    return {
		ddmodel: new DDModel()
	};
});