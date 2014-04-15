define(['backbone', 'text!templates/ddview.html'], 
	function(Backbone, topNavTemplate){
		return Backbone.View.extend({
			el: 'body',
			template: topNavTemplate,
			render: function () {
				this.$el.append(this.template);
			},
			initialize: function () {
				this.render();
			}
		});
	}
);