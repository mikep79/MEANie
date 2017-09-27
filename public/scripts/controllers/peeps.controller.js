myApp.controller('WhereMyPeeps', function ( PeepsService) { //deleted $http
    var vm = this;
    vm.newPeep = function () {
        console.log('in newPeep');
        var peepToAdd = {
            name: PeepsService.nameIn, //changed vm to PeepsService
            location: PeepsService.locationIn // changed = to :
        }; //end peepToAdd
        PeepsService.peeps.add(peepToAdd);
    }; //end whereMyPeepsAt
    vm.whereMyPeepsAt = function () {
        console.log('in whereMyPeepsAt');
        PeepsService.peeps.get();
    }; //end whereMyPeepsAt
}); // end controller