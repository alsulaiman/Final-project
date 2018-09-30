import React, { Component } from 'react';
<<<<<<< HEAD
import './search.css';
=======
// import './customers.css';
>>>>>>> 1e19d04a80c98f8f917a39d07b0ddf2b29c2d1fd

class Drivers extends Component {
    constructor() {
        super();
        this.state = {
            drivers: []
        }
    }

    componentDidMount() {
<<<<<<< HEAD
        fetch('/api/tirps')
            // .then(res => res.json())
            // .then(trips => this.setState({ trips }, () => console.log(trips)));
=======
        fetch('/api/drivers')
            .then(res => res.json())
            .then(drivers => this.setState({ drivers }, () => console.log('Drivers fetched..')));
>>>>>>> 1e19d04a80c98f8f917a39d07b0ddf2b29c2d1fd
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <h2>trips</h2>
                <ul>
                    {/* {this.state.drivers.map(driver =>
                        <li key={driver.id}> {driver.firstName} {driver.lastName} </li>
                    )} */}
=======
                <h2>Drivers</h2>
                <ul>
                    {this.state.drivers.map(driver =>
                        <li key={driver.id}> {driver.id} {driver.firstName} {driver.lastName} </li>
                    )}
>>>>>>> 1e19d04a80c98f8f917a39d07b0ddf2b29c2d1fd
                </ul>
            </div>
        );
    }
}

export default Drivers;
