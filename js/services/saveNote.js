app.service("saveNote", ['dataStorage', function(dataStorage){
     this.saveData = function(dataToSave){
        dataStorage.storedData = dataToSave;
    };
}]);