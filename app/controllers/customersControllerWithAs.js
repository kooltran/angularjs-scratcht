function CustomersController() {
    console.log(this)
    this.customers = [{ name: 'kool', city: 'hcm', joined: '2018-11-09', orderTotal: '9.993' }, { name: 'john', city: 'hanoi', joined: '2018-08-12', orderTotal: '39.03' }, { name: 'James', city: 'danang', joined: '2018-12-12', orderTotal: '59.03' }]
    this.doSort = function (propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    }
}