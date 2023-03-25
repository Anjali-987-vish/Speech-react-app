import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
   const commands=[
    {
      command: 'reset',
      callback:({resetTranscript})=>resetTranscript()
    },
    {
      command: 'open *',
      callback: (site) =>{
        window.open('http://'+site)
      }
      },
      {
      command: 'change background colour to *',
      callback: (color) =>{
       document.body.style.background = color;
      }


    }
   ]

  //  if (browserSupportsContinuousListening) {
  //   SpeechRecognition.startListening({ continuous: true })
  // } else {
  //   return null
  // } 
   



  const {transcript,resetTranscript
  } = useSpeechRecognition({commands})

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default App;