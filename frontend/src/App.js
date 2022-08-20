import { React, useState } from "react";

import PrivateMessages from './Components/Messages/PrivateMessages';
import Cards from './Components/Cards/Cards';
import PublicMessages from './Components/Messages/PublicMessages';
import FooterComponent from './Components/Footer/FooterComponent';
import SharedScreen from './Components/SharedScreen/SharedScreen';
import Survey from './Components/Survey/Survey';



const App = () => {


  /* Footer Right icons */
  const [stateChat, setStateChat] = useState(false);
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [pvCardActive, setPvCardActive] = useState(false);
  const [pvFooterActive, setPvFooterActive] = useState(false);

  /* Footer Middle icons */
  const [micActive, setMicActive] = useState(false);
  const [webcamActive, setWebcamActive] = useState(false);
  const [raiseHandActive, setRaiseHandActive] = useState(false);
  const [screenShareActive, setScreenShareActive] = useState(false);
  const [surveyActive, setSurvayActive] = useState(false);
 
  

  let Messages = [];

  return (
      <div>
        <div className="room">
          {surveyActive ? <Survey/> : null}
          
          <div className="middleContent">

            <SharedScreen IA={isActive} PIA={(pvFooterActive || pvCardActive)} />
            
            {isActive ? <PublicMessages /> : null}

            {pvCardActive ? <PrivateMessages stateChat={stateChat} name={name} messages={Messages} /> : null}
            {pvFooterActive ? <PrivateMessages stateChat={stateChat} name={name} messages={Messages} /> : null}


          </div>
          
          <Cards 
            setStateChat={setStateChat}
            setName={setName} 
            setPvCardActive={setPvCardActive}
            setPvFooterActive={setPvFooterActive}
            setIsActive={setIsActive}
            isActive={isActive}
            mic={micActive}
            webcam={webcamActive}
            raiseHand={raiseHandActive}
            shareScreen={screenShareActive}
            pvFooterActive={pvFooterActive}
            pvCardActive={pvCardActive} />

          <span className="underline"></span>

          <FooterComponent 
            setStateChat={setStateChat}
            setMicActive={setMicActive}
            setWebcamActive={setWebcamActive}
            setRaiseHandActive={setRaiseHandActive}
            setScreenShareActive={setScreenShareActive}
            setSurvayActive={setSurvayActive}
            setIsActive={setIsActive}
            setPvFooterActive={setPvFooterActive}
            setPvCardActive={setPvCardActive}
            isActive={isActive}
            pvCardActive={pvCardActive}
            pvFooterActive={pvFooterActive}  />
          
        </div>
      </div>
    );
  
}

export default App;


