angular
  .module('ArtSmart')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.discover', {
      url: '/discover',
      views: {
        'tab-discover': {
          templateUrl: 'client/templates/discover.html',
          controller: 'DiscoverCtrl'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/discover');
}