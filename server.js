const app = require('express')();
const port = 5000; 

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
        {id: 4, firstName: 'Hamad', lastName: 'alsulaiman'}
    ];

    res.json(customers);
})


app.listen(port, () => console.log(`Server started on port ${port}`));