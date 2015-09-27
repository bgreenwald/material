angular
    .module('bitwisejobs')
    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: 'client/home.ng.html',
                controller: 'HomeCtrl'
            });

        $urlRouterProvider.otherwise('/');
    });
