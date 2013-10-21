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
  
  $scope.test = function() {
    console.log("test");
  }

});


app.directive('async', function($compile) {
  return {
    restrict : 'E',
    transclude : true,
    scope: {
      method : "&function",
    },
    template: '<div ng-transclude style="width: 100%; position: relative"></div>',
    replace : true,
    link: function(scope, element, attrs) {
      var isLaunch = false;
      scope.load = false;
      scope.error = false;
      scope.success = false;

      var tpl = '<span ng-show="load" class="loading"></span><span ng-show="error" class="error">error </span><span ng-show="success" class="success">success</span>';

      element.bind('click', function() {
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
          scope.load = false;
          isLaunch = false;
        })
      });
      element.append($compile(tpl)(scope));



    }
  }
})