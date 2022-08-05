import { React, Component } from "react";

import {
  FaMicrophone,
  FaVideo,
  FaHandPointUp,
  FaPhoneSlash,
} from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { BsChatRightTextFill } from "react-icons/bs";

class App extends Component {
  state = {
    isActive: false,
    isBack: false,
    StartMicroPhone: false,
    StartWebcam: false,
    StartRaiseHand: false,
    StartShareScreen: false,
  };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
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

    return (
      <div>
        <div className="room">
          <div className="middleContent">
            <div class={isActive ? "sharedScreen active" : "sharedScreen"}>
              Shared Screen
            </div>
            <div class={isActive ? "messagesPanel active" : "messagesPanel"}>
              <h3 class="messagesHeader">messages</h3>
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
                  title="messages"
                  className={isActive ? "toggle active" : "toggle"}
                  onClick={this.handleToggle}
                >
                  {" "}
                  <BsChatRightTextFill />{" "}
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
