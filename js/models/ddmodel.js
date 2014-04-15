define(['backbone'], function (Backbone) {
	var DDModel = Backbone.Model.extend({
        defaults: {
            submitDate: new Date(),
            turnaroundHours: 8,
            calculatedDate: ''
        },
        initialize: function(){
//            alert("Welcome to this world");
        }
    });
    
    return {
		ddmodel: new DDModel()
	};
});