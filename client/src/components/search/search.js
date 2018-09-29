import React, { Component } from 'react';
// import './customers.css';

class Drivers extends Component {
    constructor() {
        super();
        this.state = {
            drivers: []
        }
    }

    componentDidMount() {
        fetch('/api/drivers')
            .then(res => res.json())
            .then(drivers => this.setState({ drivers }, () => console.log('Drivers fetched..')));
    }

    render() {
        return (
            <div>
                <h2>Drivers</h2>
                <ul>
                    {this.state.drivers.map(driver =>
                        <li key={driver.id}> {driver.id} {driver.firstName} {driver.lastName} </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Drivers;
