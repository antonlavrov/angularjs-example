(function() {
    'use sctrict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope) {
        $scope.articles = [
            {id: 1},
            {id: 2},
            {id: 3}
        ];
    }

})();