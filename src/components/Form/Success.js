import React, { Component } from 'react'


export class Success extends Component {
    // this is another method in additon to the render method
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        // const { values: { firstName, lastName, email, city, bio } } = this.props;
        return (
            // these themeproviders have to have one element
            // React.Fragment acts as a DOM placeholder
            <React.Fragment>
                <h3>Thank you for your submission!</h3>
                <p>you will get an email with further instructions</p>
            </React.Fragment>
        )
    }
}


export default Success