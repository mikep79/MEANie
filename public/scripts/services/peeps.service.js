myApp.service('PeepsService', function ($http) {
    var sv = this;
    sv.peepObj = {
        peeps: []
    };
    sv.peeps = {
        add: function (newPeep) {
            console.log('in addRecord:', newPeep);
            $http({                     // deleted . after $
                method: 'POST',
                url: '/peeps',
                data: newPeep
            })
        },
        get: function () {
            console.log('in getRecords');
            $http({                     // deleted 'return'
                method: 'GET',
                url: '/peeps',
            }).then(function (response) {
                console.log('in service, back from server with:', response);
                sv.peepObj.peeps = response.data;
            });
        }
    }
});