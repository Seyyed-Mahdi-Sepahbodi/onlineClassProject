import { React, Component } from "react";

import {
  FaMicrophone,
  FaVideo,
  FaHandPointUp,
  FaPhoneSlash,
} from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { BsChatRightTextFill } from "react-icons/bs";
import { SiGooglechat } from "react-icons/si"


import PrivateMessages from "./Components/PrivateMessages/PrivateMessages";



class App extends Component {
  state = {
    Chat:false,
    Name:"",
    Messages: [''],
    isActive: false,
    privateIsActive: false,
    isBack: false,
    togglePrivateChat: false,
    StartMicroPhone: false,
    StartWebcam: false,
    StartRaiseHand: false,
    StartShareScreen: false,
  };

  handlePrivateIsActive = (chat, name) => {
    if (this.state.privateIsActive===false && this.state.isActive===true)
    {
      this.setState({isActive: !this.state.isActive})
    }

    /* Find messages */
    if(name !== "")
    {
      /* search database with name or smt and find messages of this user */
      /* and setState it */
    }

    this.setState({privateIsActive: !this.state.privateIsActive, Chat: chat, Name: name});
  }

  handleToggle = () => {
    if (this.state.privateIsActive===true && this.state.isActive===false)
    {
      this.setState({privateIsActive: !this.state.privateIsActive})
    }
    this.setState({ isActive: !this.state.isActive });
  };

  handleTogglePrivateChat = chat => () => {
    this.setState({togglePrivateChat: !this.state.togglePrivateChat, Chat: chat}
      /* send a request for receive informations from database about message of a user that click on it */)
  };

  handleRotationCard = () => {
    this.setState({isBack: !this.state.isBack})
  }

  HandleStartMicroPhone = () => {
    this.setState({ StartMicroPhone: !this.state.StartMicroPhone });
    console.log(this.state.StartMicroPhone);
  };

  HandleStartWebcam = () => {
    this.setState({ StartWebcam: !this.state.StartWebcam });
  };

  HandleStartRaiseHand = () => {
    this.setState({ StartRaiseHand: !this.state.StartRaiseHand });
  };

  HandleStartShareScreen = () => {
    this.setState({ StartShareScreen: !this.state.StartShareScreen });
  };

  render() {
    const isActive = this.state.isActive;
    const isBack = this.state.isBack;
    const privateIsActive = this.state.privateIsActive;
    let Chat = this.state.Chat;
    let Name = this.state.Name;
    let Messages = this.state.Messages;

    return (
      <div>
        <div className="room">
          <div className="middleContent">
            <div class={(isActive || privateIsActive) ? "sharedScreen active" : "sharedScreen"}>
              Shared Screen
            </div>
            <div class={isActive ? "messagesPanel active" : "messagesPanel"}>
              <h3 class="messagesHeader">public messages</h3>
              <div class="messages">
                <ul>
                  <li>
                    <p>hello everybody</p>
                    <span>john</span>
                  </li>
                  <li>
                    <p>hello</p>
                    <span>lisa</span>
                  </li>
                  <li>
                    <p>i wanna ask a question from master ... </p>
                    <span>mike smith</span>
                  </li>
                  <li>
                    <p>yes mike ask!</p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>how can i have a lot money ?</p>
                    <span>mike smith</span>
                  </li>
                  <li>
                    <p>this is easy mike!!</p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>
                      Choose a job where someone has made a lot of money at this
                      ...
                    </p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>and so so try to be a master in this</p>
                    <span>master</span>
                  </li>
                </ul>
              </div>
              <div class="typeBox">
                <p>Type here</p>
                <span>icon</span>
              </div>
            </div>

              {privateIsActive ? <PrivateMessages chat={Chat} name={Name} messages={Messages} /> : null}

            </div>
          <div className="users">


            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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
                    <button onClick={() => this.handlePrivateIsActive(false, "Lisa")} className="startChat">Start Chat</button>
                </div>
              </div>

              {/* end back card */}
            </div>


            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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
              

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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

            <div className={isBack ? "card active" : "card"} onClick={this.handleRotationCard}>
              <div className="frontCard">
                <div className="circle">
                  <img alt="personImg" src="/img/girl.jpg" />
                </div>
                <div className="iconUser">
                  <ul>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartMicroPhone ? "mic" : ""}
                    >
                      <FaMicrophone />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartWebcam ? "webcam" : ""}
                    >
                      <FaVideo />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={
                        this.state.StartShareScreen ? "shareScreen" : ""
                      }
                    >
                      <TbScreenShare />
                    </li>
                    <li
                      style={{ display: "none" }}
                      className={this.state.StartRaiseHand ? "raiseHand" : ""}
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
          
          <span className="underline"></span>
          <footer>
            <p className="projectName">Cyber meeting</p>
            <div className="middleIcons">
              <ul>
                <li title="microphone" onClick={this.HandleStartMicroPhone}>
                  {" "}
                  <FaMicrophone />{" "}
                </li>
                <li title="camera" onClick={this.HandleStartWebcam}>
                  {" "}
                  <FaVideo />{" "}
                </li>
                <li title="share screen" onClick={this.HandleStartShareScreen}>
                  {" "}
                  <TbScreenShare />
                </li>
                <li title="raise hand" onClick={this.HandleStartRaiseHand}>
                  {" "}
                  <FaHandPointUp />{" "}
                </li>
                <li title="call out" className="COut">
                  {" "}
                  <FaPhoneSlash />{" "}
                </li>
              </ul>
            </div>
            <div className="rightIcons">
              <ul>
                <li
                  title="Public messages"
                  className={isActive ? "toggle active" : "toggle"}
                  onClick={this.handleToggle}
                >
                  {" "}
                  <BsChatRightTextFill />{" "}
                </li>

                <li
                  title="Private messages"
                  className={privateIsActive ? "privateToggle active" : "privateToggle"}
                  onClick={() => this.handlePrivateIsActive(true, "")}
                >
                  {" "}
                  <SiGooglechat />{" "}
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;


