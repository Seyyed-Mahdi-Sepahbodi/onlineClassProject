import React, {useState} from 'react';

import {
    FaMicrophone,
    FaVideo,
    FaHandPointUp,
  } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";



const Cards = ({
  setStateChat,  
  setPvCardActive, 
  setPvFooterActive, 
  pvFooterActive,
  setName, 
  setIsActive,
  isActive,
  mic, 
  webcam, 
  raiseHand,
  shareScreen, 
  pvCardActive
  }) => {

    const [isBack, setIsBack] = useState(false)
    const [pvBox, setPvBox] = useState(true);

    /* After a certain movement the pvCard closes instead of opening so bellow code for cover this problem */
    if (pvCardActive===false && isActive===true && pvBox===false) {setPvBox(pvBox => true);}
    if (pvCardActive===false && isActive===false && pvBox===false && pvFooterActive===true) {setPvBox(pvBox => true);}


    function handleRotationCard() {
        setIsBack( isBack => !isBack)
    }

    function HandlePrivateIsActive(Chat, Name) {

      /* check for sure */
      setIsActive(false);

      /* Conditions for active and unactive pvm */
      if (pvBox===true && pvFooterActive===true) {setPvFooterActive(false); setPvCardActive(true); setPvBox(pvBox => false);}
      if (pvBox===false && pvFooterActive===true) {setPvFooterActive(false); setPvCardActive(true); setPvBox(pvBox => true);}
      if (pvBox===true && pvFooterActive===false) {setPvCardActive(true); setPvBox(pvBox => false);}
      if (pvBox===false && pvFooterActive===false) {setPvCardActive(false); setPvBox(pvBox => true)}

      // adjust name and state of pvBox
      setStateChat(Chat);
      setName(Name);

    }

    return (
        <div className="users">

            {/* <Card /> */}

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard" onClick={() => HandlePrivateIsActive(false, "Lisa")}>
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button  className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>


            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>
              

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                    <button className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                </div>
              </div>

              {/* end back card */}
            </div>

            <div className={isBack ? "card active" : "card"} onClick={handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={mic ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={webcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        shareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={raiseHand ? "raiseHand" : ""}
                    >
                      <FaHandPointUp />
                    </li>
                  </ul>
                </div>
                <p>
                    lisa
                </p>
              </div>
              {/* end front card*/}

              <div className="backCard">
                <div className="details">
                    <p className="fullName">Full Name</p><span>Lisa</span>
                    <p className="idCard">ID Card</p><span>8546321</span>
                </div>
              </div>

              {/* end back card */}
            </div>

          </div>
    )

}

export default Cards;