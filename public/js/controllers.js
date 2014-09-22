

angular.module('myApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
        templateUrl: '/partials/signup.html',
        controller: 'SignUpController'
    }).when('/weather/:city', {
        templateUrl: '/partials/weather.html',
        controller: 'WeatherController'
    }).when('/users', {
        templateUrl: '/partials/users.html',
        controller: 'UsersController'
    }).otherwise({
            redirectTo: '/signup'
    });
}]).controller('SignUpController', function ($http, $scope, $location) {

    $scope.user = {};

    $scope.signup = function () {
        console.log($scope.user);

        $http.post('/users', $scope.user).success(function (data) {
            console.log('Posting data to screen ... ');
            console.log(data);
            $location.url('/weather/' + $scope.user.city);
        }).error(function (data) {
            alert(data);
        });
    };
}).controller('WeatherController', function ($scope, $http, $routeParams) {
    $scope.city = $routeParams.city;
}).controller('UsersController', function ($scope, $http) {
    $http.get('/users').success(function (users) {
        $scope.users = users;
    });
});