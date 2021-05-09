// function main(fileName) {
//     // [START vision_face_detection]
//     // Imports the Google Cloud client library
//     const vision = require('@google-cloud/vision');

//     // Creates a client
//     const client = new vision.ImageAnnotatorClient();

//     async function detectFaces() {
//       /**
//        * TODO(developer): Uncomment the following line before running the sample.
//        */
//       // const fileName = 'Local image file, e.g. /path/to/image.png';

//       const [result] = await client.faceDetection(fileName);
//       const faces = result.faceAnnotations;
//       console.log('Faces:');
//       faces.forEach((face, i) => {
//         console.log(`  Face #${i + 1}:`);
//         console.log(`    Joy: ${face.joyLikelihood}`);
//         console.log(`    Anger: ${face.angerLikelihood}`);
//         console.log(`    Sorrow: ${face.sorrowLikelihood}`);
//         console.log(`    Surprise: ${face.surpriseLikelihood}`);
//       });
//     }
//     detectFaces();
//     // [END vision_face_detection]
//   }
