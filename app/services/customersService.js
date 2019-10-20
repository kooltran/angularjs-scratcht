(function () {
    var customersService = function () {
        var customers = [
            {
                id: 1,
                name: 'Kiet',
                city: 'hcm',
                joined: '2018-11-09',
                orderTotal: 99.995,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 99.995
                    }
                ]
            },
            {
                id: 2,
                name: 'James',
                city: 'danang',
                joined: '2018-12-12',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Pants',
                        total: 10.99
                    },
                    {
                        id: 3,
                        product: 'T-Shirt',
                        total: 9
                    }
                ]
            },
            {
                id: 3,
                name: 'john',
                city: 'hanoi',
                joined: '2018-08-12',
                orderTotal: 49.05,
                orders: [
                    {
                        id: 4,
                        product: 'Hat',
                        total: 39.05
                    },
                    {
                        id: 5,
                        product: 'Bell',
                        total: 10.00
                    }
                ]
            },
        ];

        this.getCustomers = function () {
            return customers;
        };

        this.getCustomer = function (customerId) {
            for (var i = 0, len = customers.length; i < len; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }
            return {};
        }
    };

    angular.module('customersApp').service('customersService', customersService);
}())