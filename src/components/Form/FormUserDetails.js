import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class FormUserDetails extends Component {
    // this is another method in additon to the render method
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            // these themeproviders have to have one element
            // div acts as a DOM placeholder
        
            <div className='form-view'>
                <h2>Enter your Information</h2>
                <TextField 
                id='standard-full-width'
                label='First Name'
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                />
                <TextField 
                id='standard-full-width'
                label='Last Name'
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                />
                <TextField
                id='standard-full-width'
                label='Enter your email address'
                onChange={handleChange('email')}
                defaultValue={values.email}
                />
                <div className='first button-flex'>
                    <Button
                    variant='contained'
                    color='primary'
                    style={styles.button}
                    onClick={this.continue}
                    >
                    Continue
                    </Button>
                </div>
            </div>
        )
    }
}
// how to style the button
const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
