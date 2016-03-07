app.controller("noteController", ['$scope', 'buttonVisibilityService', 'openNote', function($scope, buttonVisibilityService, openNote){
    $scope.buttonDisabledState = buttonVisibilityService.stateChecker;
    $scope.showNote = function(){
        $scope.popupDisabledState = true;
        $scope.noteText = openNote.loadData();
    };
}]);