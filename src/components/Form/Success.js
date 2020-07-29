import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


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
            
            <div className='form-view'>
                <h3>Thank you for your submission!</h3>
                <p>you will get an email with further instructions</p>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={this.continue}
                    >
                    Continue
                </Button>

            </div>
        )
    }
}


export default Success