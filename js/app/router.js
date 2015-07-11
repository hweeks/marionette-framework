define(['jquery', 'underscore', 'backbone', 'Marionette'],
  function ($, _, Backbone, Marionette) {
    var AppRouter = Marionette.AppRouter.extend({
      appRoutes: {
        "": "emptyRoute",
        "test": "aTest"
      }
    });

    var AppController = {
      emptyRoute: function(){
        console.log("No route");
      },
      aTest: function(){
        console.log("We can navigate else where.");
      }
    };

    var initialize = function(){
      var appRouter = new AppRouter({controller: AppController});
    }

    return {
      initialize: initialize
    }
  }
);