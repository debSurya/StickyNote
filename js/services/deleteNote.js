app.service("deleteNote", ['dataStorage', function(dataStorage){
    this.deleteData = function(){
        dataStorage.storedData = null;
    };
}]);