var app= angular.module("oderform",[]);
app.controller("oderformctrl",function ($scope) {
    $scope.services = [
        {
            name: 'Web Development',
            price: 300,
            active:true
        },{
            name: 'Design',
            price: 400,
            active:false
        },{
            name: 'Integration',
            price: 250,
            active:false
        },{
            name: 'Training',
            price: 220,
            active:false
        }
    ];
    $scope.chose= function (s) {
        s.active=!s.active;
    }
    $scope.sum= function () {
        var sum = 0;
        angular.forEach($scope.services, function (s) {
            if (s.active){
                sum+= s.price;
            }
        });
        return sum;
    };
});