import { useState } from 'react'
import WebCam from './WebCam'
import WebCamButton from './WebCamButton'
import ImageSelector from './ImageSelector'

const Page = ({emotion}) => {
    const [useWebcam, setUseWebcam] = useState(false);

    const handleClick = () => {
        setUseWebcam(true);
    }
    return (
        <div className = "PageContainer">
            <h1>Please make this face!</h1>
            <h2>{emotion}</h2>
            {!useWebcam && (
                <div>
                    <WebCamButton onClick = {handleClick}/>
                    <ImageSelector/>  
                </div>
            )}
            {useWebcam && (
                <WebCam></WebCam>
            )}
        </div>
    )
}

export default Page;
