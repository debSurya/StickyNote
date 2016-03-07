app.service("openNote", ['dataStorage', function(dataStorage){
    this.loadData = function(){
        if(dataStorage.storedData){
            return dataStorage.storedData;
        }
        else{
            return null;
        }
    };
}]);