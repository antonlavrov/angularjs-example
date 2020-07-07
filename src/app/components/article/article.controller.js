(function () {
  angular
    .module('app')
    .controller('ArticleController', NewsController)

  function NewsController($scope, $http, $location, $templateCache, $routeParams) {
    $scope.id = $routeParams['id']

    console.log($scope);
    console.log($http);
    console.log($location);
    console.log($templateCache);
    console.log($routeParams);
  }

})();