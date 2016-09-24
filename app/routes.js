Agstock.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('sign-in', {
      url: '',
      views: {
        'main': {
          templateUrl: 'components/friends/_index.html',
          controller: 'FriendsCtrl as myFriends',
          resolve: {
            friendsPromise: function(friendsFactory) {
              return friendsFactory.ensureFriends();
            }
          }
        },
      }
    })

    .state('friends', {
      url: '/companies',
      views: {
        'main': {
          templateUrl: 'components/google_map/_index.html',
          controller: 'MapAllCtrl as map',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        }
      }
    })    

    .state('rewards', {
      url: '/companies',
      views: {
        'main': {
          templateUrl: 'components/google_map/_index.html',
          controller: 'MapAllCtrl as map',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        }
      }
    })    

    .state('', {
      url: '/companies',
      views: {
        'main': {
          templateUrl: 'components/google_map/_index.html',
          controller: 'MapAllCtrl as map',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        }
      }
    })    

    .state('page-not-found', {
      url: '/page-not-found',
      templateUrl: 'error.html'
    })


 $urlRouterProvider.otherwise('/page-not-found');

}]);