import React from 'react'
import Button from '@material-ui/core/Button'
import { render } from '@testing-library/react';

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