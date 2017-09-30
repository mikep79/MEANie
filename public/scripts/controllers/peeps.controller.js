myApp.controller('WhereMyPeeps', function ( PeepsService) { //deleted $http
    var vm = this;
    vm.peepObj = PeepsService.peepObj;
    vm.newPeep = function () {
        console.log('in newPeep');
        var peepToAdd = {
            name: vm.nameIn,
            location: vm.locationIn // changed = to :
        }; //end peepToAdd
        PeepsService.peeps.add(peepToAdd);
    }; //end whereMyPeepsAt
    vm.whereMyPeepsAt = function () {
        console.log('in whereMyPeepsAt');
        PeepsService.peeps.get();
    }; //end whereMyPeepsAt
}); // end controller