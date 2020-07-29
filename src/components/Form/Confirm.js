import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'

export class Confirm extends Component {
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
        const { values: { firstName, lastName, email, city, bio } } = this.props;
        return (
            // these themeproviders have to have one element
            // React.Fragment acts as a DOM placeholder
            <div className='form-view'>
                <h2>Confirm</h2>
                <div id='confirm-view'>
                    <List>
                        <ListItemText
                        primary="First Name"
                        secondary= { firstName }
                        />
                        <ListItemText 
                        primary="Last Name"
                        secondary= { lastName }
                        />
                        <ListItemText 
                        primary="Email"
                        secondary= { email }
                        />
                        <ListItemText 
                        primary="City"
                        secondary= { city }
                        />
                        <ListItemText 
                        primary="Bio"
                        secondary= { bio }
                        />
                    </List>
                </div>
                <div className='confirm button-flex'>
                    <Button
                    variant='contained'
                    color='primary'
                    style={styles.button}
                    onClick={this.continue}
                    >
                    Continue
                    </Button>
                    <Button
                    variant='contained'
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

export default Confirm