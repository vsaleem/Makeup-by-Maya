import React from 'react'
import Button from '@material-ui/core/Button'


const BackButton = props => {
    return(
        <Button
            variant='contained'
            color='secondary'
            onClick={props.click}
        >
        Back
        </Button>
    )
}

export default BackButton