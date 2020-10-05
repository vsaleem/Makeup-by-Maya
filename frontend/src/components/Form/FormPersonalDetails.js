import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class FormPersonalDetails extends Component {
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
        const { values, handleChange } = this.props;
        return (
            // these themeproviders have to have one element
            // React.Fragment acts as a DOM placeholder
            <div className='form-view'>
            <h2>Enter your Information</h2>
                <TextField
                id='standard-basic'
                label="Enter your City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                />
                <TextField
                id='standard-basic'
                label='Enter your Bio'
                onChange={handleChange('bio')}
                defaultValue={values.bio}
                />
                <div className='personal button-flex'>
                    <Button
                    variant='contained'
                    label="continue"
                    color='primary'
                    style={styles.button}
                    onClick={this.continue}
                    >
                    Continue
                    </Button>
                    <Button
                    variant='contained'
                    label="back"
                    color='secondary'
                    style={styles.button}
                    onClick={this.back}
                    >
                    Back
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

export default FormPersonalDetails
