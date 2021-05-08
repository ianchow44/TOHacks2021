import React from 'react'
import WebCam from './WebCam'
import Button from '@material-ui/core/Button'

export default function WebCamContainer() {
    const handleClick = () => {
        return (
            <WebCam/>
        )
    }
    return (
        <Button
                variant="contained"
                component="label"
                onClick = {() => handleClick()}
                >
                Webcam
        </Button>
    )
}
