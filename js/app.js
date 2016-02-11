var app = angular.module('myApp', ['ui.router', 'ngParallax']);
app.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('portfolio', {
      url: '/',
      templateUrl: 'portfolio.html'
    })
    .state('project', {
      url: '/project',
      templateUrl: 'project.html'
    })

  $urlRouterProvider.otherwise('/');
}
