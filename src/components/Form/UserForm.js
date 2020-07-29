import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        bio: ''
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }
    // Go back to the prev step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }
    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state
        const {firstName, lastName, email, city, bio} = this.state
        const values = {firstName, lastName, email, city, bio}

        switch(step) {
            
            case 1:
                // console.log(step);
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                // console.log(step);
                return(
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                // console.log(step);
                return(
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 4:
                console.log(step);
                return(<Success />)
        }
    }
}

export default UserForm
