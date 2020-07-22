import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton' 

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
            // React.Fragment acts as a DOM placeholder
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                    hintText="Enter your first name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstname}
                    />
                    <TextField 
                    hintText="Enter your last name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastname}
                    />
                    <TextField 
                    hintText="Enter your email address"
                    floatingLabelText="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <RaisedButton 
                    label="continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
