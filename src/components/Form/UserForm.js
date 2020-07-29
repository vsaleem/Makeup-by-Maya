import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import Question from './Question'

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
                return(
                    <Success 
                        nextStep={this.nextStep}
                    />
                )
            case 5:
                return(
                    <Question number='1' 
                        text='What are your skin concerns, i.e. rosacea, acne, wrinkles, dark spots, dull skin, dry skin, hyperpigmentation, under eye bags and dark circles, etcele Be Specific as possible'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='skin concerns'
                    />
                )
            case 6:
                return(
                    <Question number='2' 
                        text='What is your skin type? (Dry, combination,normal, sensitive, or oily)'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='skin type'
                    />
                )
            case 7:
                return(
                    <Question number='3' 
                        text='How does your skin respond to peels (if you have had them had them)?'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='skin peels'
                    />
                )
            case 8:
                return(
                    <Question number='4' 
                        text='Do you have any known allergies? Please list all:'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='allergies'
                    />
                )
            case 9:
                return(
                    <Question number='5' 
                        text='When your skin is exposed to the sun, does it tan brown, remain the same color, or turn red?'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='sun exposure'
                    />
                )
            case 10:
                return(
                    <Question number='6' 
                        text='What current products are you using on your skin, i.e. cleanser, scrub, peel, etc?'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='current skin products'
                    />
                )
            case 11:
                return(
                    <Question number='7' 
                        text='Do you have any severe health concerns?'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='health problems'
                    />
                )
            case 12:
                return(
                    <Question number='8' 
                        text='Are you pregnant or breast-feeding?'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='breast-feeding'
                    />
                )
            case 13:
                return(
                    <Question number='9' 
                        text='Anything else you think I should know about your skin?'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        name='anything else'
                    />
                )
                
        }
    }
}

export default UserForm
