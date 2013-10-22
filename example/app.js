var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $q, $timeout) {
  $scope.name = 'World';
  
  $scope.getData = function() {
    var deferred = $q.defer();
    
    $timeout(function() {
      deferred.resolve();
    }, 1000);
    
    return deferred.promise;
  }

  $scope.handle = function(err) {
    return "test";
  }

});


app.directive('async', function($compile) {
  return {
    restrict : 'E',
    scope: {
      method : "&function",
      handleError : '&error'
    },
    link: function(scope, element, attrs) {
      var isLaunch = false;
      scope.load = false;
      scope.error = false;
      scope.success = false;


      var button = element[0].firstChild;
      var aButton = angular.element(button);

      var tpl = '<span ng-show="load" class="loading"></span><span ng-show="error" class="error">{{errorMessage}}</span><span ng-show="success" class="success"></span>';

      aButton.bind('click', function() {
        if (isLaunch) {
          return false;
        }
        isLaunch = true;
        scope.load = true;
        scope.error = false;
        scope.success = false;
        scope.$digest();

        scope.method().then(function() {
          scope.load = false;
          scope.success = true;
            isLaunch = false;
        }, function(err) {
          scope.error = true;
          scope.succes = false;

          scope.errorMessage = scope.handleError(err);
          scope.load = false;
          isLaunch = false;
        })
      });
      element.append($compile(tpl)(scope));



    }
  }
})