require.config({
	baseUrl: "js",
	paths: {
		jquery		: "https://code.jquery.com/jquery-2.1.0.min",
		jqueryui	: "https://code.jquery.com/ui/1.10.4/jquery-ui.min",
		jqueryuitime: "libs/jquery-ui-timepicker-addon",
		underscore	: "libs/underscore-min",
		backbone	: "libs/backbone-min"
	},
	shim: {
		jquery:{
			exports: "$",
			init: function(){
				jQuery.noConflict();
			}
		},
		jqueryui: ['jquery'],
		jqueryuitime: ['jqueryui'],
		underscore:{
			exports: "_"
		},
		backbone:{
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	}
});

require(['ddcalc', 'jquery'], function(ddcalc){
	ddcalc.run();
});