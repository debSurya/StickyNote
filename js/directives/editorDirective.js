app.directive("editorDirective", ['deleteNote', 'saveNote', 'buttonVisibilityService', function(deleteNote, saveNote, buttonVisibilityService){
    return {
        restrict : 'E',
        templateUrl : "partials/stickyNote.html",
        link : function(scope, elem, attr){
            scope.deleteText = function(){
                deleteNote.deleteData();
                scope.popupDisabledState = false;
                buttonVisibilityService.stateChecker.data = false;
            };
            scope.saveText = function(){
                saveNote.saveData(scope.noteText);
                scope.popupDisabledState = false;
                buttonVisibilityService.stateChecker.data = true;
            };
        }
    };
}]);