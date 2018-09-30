import React, { Component } from 'react';
import './search.css';

class Drivers extends Component {
    constructor() {
        super();
        this.state = {
            drivers: []
        }
    }

    componentDidMount() {
        fetch('/api/tirps')
            // .then(res => res.json())
            // .then(trips => this.setState({ trips }, () => console.log(trips)));
    }

    render() {
        return (
            <div>
                <h2>trips</h2>
                <ul>
                    {/* {this.state.drivers.map(driver =>
                        <li key={driver.id}> {driver.firstName} {driver.lastName} </li>
                    )} */}
                </ul>
            </div>
        );
    }
}

export default Drivers;
