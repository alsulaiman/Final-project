// var db = require("../modules");


module.exports = function (app) {
    app.get('/api/customers', (req, res) => {
        const customers = [
            { id: 1, firstName: 'John', lastName: 'Doe' },
            { id: 2, firstName: 'Steve', lastName: 'Smith' },
            { id: 3, firstName: 'Mary', lastName: 'Swanson' }
        ];
        
        res.json(customers);
    })
    
};