import React from 'react'
import WebCam from './WebCam'
import WebCamContainer from './WebCamContainer'
import ImageSelector from './ImageSelector'

const Page = ({emotion}) => {
    return (
        <div>
            <h1>Please make this face!</h1>
            <h2>{emotion}</h2>
            <WebCamContainer/>
            <ImageSelector/>
        </div>
    )
}

export default Page;
