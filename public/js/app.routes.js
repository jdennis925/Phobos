angular.module('routerRoutes', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl : 'views/pages/home.html',
            controller : 'homeController',
            controllerAs : 'home',
        })
        
        .when('/about', {
            templateUrl : 'views/pages/about.html',
            controller : 'aboutController',
            controllerAs : 'about',
        })

        .when('/board', {
            templateUrl : 'views/pages/board.html',
            controller : 'boardController',
            controllerAs : 'board',
        });
        
        $locationProvider.html5Mode(true);
    })