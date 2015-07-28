angular.module('bono', []).controller('MainCtrl', function($scope, $http) {
    $scope.submitEmail = function() {
        //Request
        $http.post('/email', $scope.email) 
        .success(function(data, status) {
            console.log("Sent ok");
        })
        .error(function(data, status) {
            console.log("Error");
        })
    };
});