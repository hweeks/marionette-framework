define(['jquery', 'underscore', 'backbone', 'Marionette', 'stache!../templates/main-view'],
	function ($, _, Backbone, Marionette, MainTemplate) {

		var MainView = Marionette.LayoutView.extend({
			el: '#container',
			template: MainTemplate,
			regions: {
				header: '#header',
				body: '#body',
				footer: '#footer'
			},
			onRender: function(){
				console.log("A view is ready");
			}
		});

		var initialize = function(){
			var mainLayout = new MainView;
			mainLayout.render();
		}

		return {
			initialize: initialize
		};
	}
);