(function () {
  'use strict';

  angular
    .module('app')
    .config(['$routeProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController'
      })
      .when('/article/:id', {
        templateUrl: 'app/components/article/article.html',
        controller: 'ArticleController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }

})();
