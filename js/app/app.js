define(['jquery', 'underscore', 'backbone', 'Marionette', '../app/router', '../app/views/main-view'],
	function ($, _, Backbone, Marionette, Router, MainView) {
	
		var App = Marionette.Application.extend({
			container: '#container',
			initialize: function(){
				Router.initialize();
				MainView.initialize();
				this.on('start', this.beginHistory());
			},
			beginHistory: function(){
				console.log('History started');
				Backbone.history.start();
			}
		});

		var initialize = function(){
			var app = new App;
		}

		return {
			initialize: initialize
		};
	}
);