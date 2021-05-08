import React from 'react'
import Button from '@material-ui/core/Button'

export default function ImageSelector() {
    return (
        <div>
            <Button
                variant="contained"
                component="label"
                >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
        </div>
    )
}
