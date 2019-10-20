//Option 2
(function () {
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null

        function init() {
            customersFactory.getCustomer(customerId)
                .then(function (customer) {
                    $scope.customer = customer.data
                }, function () {
                    //handle error
                });
        }

        init();
    };

    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory']


    angular.module('customersApp').controller('OrdersController', OrdersController)
}())