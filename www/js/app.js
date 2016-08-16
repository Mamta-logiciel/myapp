// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
  })
  //   .state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })
  .state('application-listing', {
    url: '/application-listing',
    templateUrl: 'templates/application-listing.html'
  })
  .state('account-information', {
    url: '/account-information',
    templateUrl: 'templates/account-information.html'
  })
  .state('schemes', {
    url: '/schemes',
    templateUrl: 'templates/schemes.html'
  })
  .state('schemes-haryana', {
    url: '/schemes-haryana',
    templateUrl: 'templates/schemes-haryana.html'
  })
  .state('contact-point', {
    url: '/contact-point',
    templateUrl: 'templates/contact-point.html'
  })
  .state('technical-institute', {
    url: '/technical-institute',
    templateUrl: 'templates/technical-institute.html'
  })
  .state('news', {
    url: '/news',
    templateUrl: 'templates/news.html'
  })
  .state('sector-updates', {
    url: '/sector-updates',
    templateUrl: 'templates/sector-updates.html'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
