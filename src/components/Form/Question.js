import React from 'react'
import ContinueButton from '../buttons/ContinueButton'
import BackButton from '../buttons/BackButton'

import Button from '@material-ui/core/Button'

const Question = props => {
    console.log(props)
    return(
        <form className='form-view'>
            <h2>{props.number}</h2>
            <p>{props.text}</p>
            <textarea name={props.name} id={props.number} cols="30" rows="10"></textarea>
            <div className='question button-flex'>
                <ContinueButton click={props.nextStep} />
                <BackButton click={props.prevStep} />
                
            </div>
        </form>
    )
}

export default Question 