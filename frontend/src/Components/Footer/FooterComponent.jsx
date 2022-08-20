import React,{useState} from 'react';

import {
  FaMicrophone,
  FaVideo,
  FaHandPointUp,
  FaPhoneSlash, 
  FaChartLine,
} from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { BsChatRightTextFill } from "react-icons/bs";
import { SiGooglechat } from "react-icons/si";



const FooterComponent = ({
  setStateChat, 
  setIsActive, 
  setMicActive,
  setWebcamActive,
  setRaiseHandActive,
  setScreenShareActive,
  setSurvayActive,
  setPvFooterActive,
  setPvCardActive,
  isActive,
  pvCardActive,
  pvFooterActive,
  }) => {

    const [survey, setSurvey] = useState(true);
    const [mic, setMic] = useState(true);
    const [webcam, setWebcam] = useState(true);
    const [raiseHand, setRaiseHand] = useState(true);
    const [shareScreen, setShareScreen] = useState(true);
    const [pubMess, setPubMess] = useState(true);
    const [pvBox, setPvBox] = useState(true);


    /* Conditions for active and unactive pvbox */
    if (pvFooterActive===false && pvCardActive===false && pvBox===false) {setPvBox(pvBox => true);}
    if (pvFooterActive===false && pvCardActive===true && pvBox===true) {setPvBox(pvBox => false);}
    if (isActive===false && pubMess===false) {setPubMess(pubMess => true);}


    function HandleShowSurvey() {
      setSurvey(survey => !survey);
      setSurvayActive(survey)
    }

    function HandleStartMicroPhone() {
      setMic(mic => !mic);
      setMicActive(mic);
    }

    function HandleStartWebcam() {
      setWebcam(webcam => !webcam);
      setWebcamActive(webcam);
    }

    function HandleStartShareScreen() {
      setShareScreen(shareScreen => !shareScreen);
      setScreenShareActive(shareScreen);
    }

    function HandleStartRaiseHand() {
      setRaiseHand(raiseHand => !raiseHand);
      setRaiseHandActive(raiseHand);
    }

    function handleToggle() {
      /* Conditions for active and unactive public messages */
      if(pvFooterActive===true || pvCardActive===true) {setPvFooterActive(false); setPvCardActive(false); setPvBox(pvBox => true); setPubMess(pubMess => true);}
      if(isActive===true && pvCardActive===true) {setPubMess(pubMess => true);}
      if(isActive===false) {setIsActive(true); setPubMess(pubMess => false);}
      if(isActive!==false) {setIsActive(false); setPubMess(pubMess => true);}

    }

    function HandlePrivateIsActive(Chat)
    {
      /* Conditions for unactive pubm */
      if (isActive===true) {setIsActive(false); setPubMess(pubMess => true);}

      /* Conditions for active and unactive pvm */
      if(pvBox===true && pvCardActive===true) {setPvCardActive(false);}
      if(pvBox===false && pvCardActive===true) {setPvCardActive(false); setPvFooterActive(true);}
      if(pvBox===true && pvCardActive===false) {setPvFooterActive(true); setPvBox(pvBox => false)}
      if(pvBox===false && pvCardActive===false) {setPvFooterActive(false); setPvBox(pvBox => true)}

      // adjust state of pvBox
      setStateChat(Chat);
    }

    function HandleCallOut() {
      /* kill call */
    }

    return (
      <footer>
            <p className="projectName">Cyber meeting</p>
            <div className="middleIcons">
              <ul>
                <li className={survey ? '' : 'survey active'} title="Survey" onClick={HandleShowSurvey}>
                  {" "}
                  <FaChartLine />{" "}
                </li>
                <li title="microphone" onClick={HandleStartMicroPhone}>
                  {" "}
                  <FaMicrophone />{" "}
                </li>
                <li title="camera" onClick={HandleStartWebcam}>
                  {" "}
                  <FaVideo />{" "}
                </li>
                <li title="share screen" onClick={HandleStartShareScreen}>
                  {" "}
                  <TbScreenShare />
                </li>
                <li title="raise hand" onClick={HandleStartRaiseHand}>
                  {" "}
                  <FaHandPointUp />{" "}
                </li>
                <li title="call out" className="COut" onClick={HandleCallOut}>
                  {" "}
                  <FaPhoneSlash />{" "}
                </li>
              </ul>
            </div>
            <div className="rightIcons">
              <ul>
                <li
                  title="Public messages"
                  className={pubMess ? "toggle" : "toggle active"}
                  onClick={() => handleToggle()}
                >
                  {" "}
                  <BsChatRightTextFill />{" "}
                </li>

                <li
                  title="Private messages"
                  className={pvBox ? "privateToggle" : "privateToggle active"}
                  onClick={() => HandlePrivateIsActive(true, "", "")}
                >
                  {" "}
                  <SiGooglechat />{" "}
                </li>
              </ul>
            </div>
          </footer>
    )
}

export default FooterComponent;