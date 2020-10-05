import React from 'react'
import Button from '@material-ui/core/Button'
import '../Slider/logic'

const ContinueButton = props => {
    return(
        <Button
            variant='contained'
            color='secondary'
            // onClick={questionClick()}
        >
        Continue
        </ Button>
    )
}

export default ContinueButton