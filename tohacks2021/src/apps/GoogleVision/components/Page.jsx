import { useState, useEffect } from 'react'
import WebCam from './WebCam'
import WebCamButton from './WebCamButton'
import ImageSelector from './ImageSelector'
import '../styles/Page.css'
import EmotionDetection from './EmotionDetection'
import * as faceapi from 'face-api.js'


const Page = ({count, emotion, handleCount}) => {
    const [useWebcam, setUseWebcam] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);
    const [image, setImage] = useState();
    const [emotionDisplay, setEmotionDisplay] = useState();

    useEffect(() => {
        switch(emotion){
            case 'happy':
                setEmotionDisplay('Happy 😃')
                break;
            case 'sad':
                setEmotionDisplay('Sad 😞')
                break;
            case 'surprised':
                setEmotionDisplay('Surprised 😮')
                break;
            case 'neutral':
                setEmotionDisplay('Neutral 😐')
                break;
        }
    })

    function dataUriToBlob(dataUri) {
        var byteString = atob(dataUri.split(',')[1]);
        var mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0]
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
      
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: mimeString});
        return blob;
    }

    useEffect(() => {
        console.log(image);
    }, [image])

    const handleClick = () => {
        setUseWebcam(true);
    }

    const handleImageSelector = async (event) => {
		setImage(await faceapi.bufferToImage(event.target.files[0]));
		setImageSelected(true);
	};

    const handleWebcamPhoto = async(dataUri) => {
        setImage(await faceapi.bufferToImage(dataUriToBlob(dataUri)));
        setImageSelected(true);
    }

    const emotionMatch = (result) => {
        if (result) {
            handleCount();
            const emotions = ["happy", "neutral", "sad", "surprised"];
            const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
            emotion = randomEmotion;
            setImageSelected(false);
            setUseWebcam(false);
            setImage(null);
        }else {
            setImageSelected(false);
            setUseWebcam(false);
            setImage(null);
        }
    }

    return (
        <div className = "PageContainer">
            {!imageSelected && (
                <div>
                <h1>Please make this face!</h1>
                <h2>{emotionDisplay}</h2>
                {!useWebcam && (
                    <div>
                        <WebCamButton onClick = {handleClick}/>
                        <ImageSelector onChange = {handleImageSelector}/>  
                    </div>
                )}
                {useWebcam && (
                    <WebCam onClick = {handleWebcamPhoto}></WebCam>
                )}
                <h1>{count}/4</h1>
            </div>
            )}
            {imageSelected && image && (
                <div>
                    <EmotionDetection image = {image} emotion = {emotion} emotionMatch = {emotionMatch}/>
                </div>
            )}
        </div>
    )
}

export default Page;
