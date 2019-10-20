// Option 1
// app.controller('CustomersController', function ($scope) {
//     $scope.customers = [
//         {
//             name: 'kool',
//             city: 'hcm',
//             joined: '2018-11-09',
//             orderTotal: 99.995,
//             orders: [
//                 {
//                     id: 1,
//                     product: 'Shoes',
//                     total: 99.995
//                 }
//             ]
//         },
//         {
//             name: 'James',
//             city: 'danang',
//             joined: '2018-12-12',
//             orderTotal: 19.99,
//             orders: [
//                 {
//                     id: 2,
//                     product: 'Pants',
//                     total: 10.99
//                 },
//                 {
//                     id: 3,
//                     product: 'T-Shirt',
//                     total: 9
//                 }
//             ]
//         },
//         {
//             name: 'john',
//             city: 'hanoi',
//             joined: '2018-08-12',
//             orderTotal: 39.05,
//             orders: [
//                 {
//                     id: 4,
//                     product: 'Hat',
//                     total: 39.05
//                 }
//             ]
//         },
//     ]
//     $scope.doSort = function (propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//     }
// });


//Option 2
(function () {
    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.customers = [];
        $scope.appSettings = appSettings;
        console.log(customersFactory, 'customersFactory')
        function init() {
            customersFactory.getCustomers()
                .then(function (customers) {
                    console.log(customers, 'customers')
                    $scope.customers = customers.data
                }, function (data, status, headers, config) {
                    //handle error
                })
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }
    }

    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings']

    angular.module('customersApp').controller('CustomersController', CustomersController)
}())