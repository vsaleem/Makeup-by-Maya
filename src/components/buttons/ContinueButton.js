import React from 'react'
import Button from '@material-ui/core/Button'



const ContinueButton = props => {
    return(
        <Button
            variant='contained'
            color='secondary'
            onClick={props.click}
        >
        Continue
        </Button>
    )
}

export default ContinueButton