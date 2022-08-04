import { React, useState } from 'react';

function HandleShowMessagesPanel(ShowMessagesPanel) {
    if (ShowMessagesPanel) {
        return(
            <div class="messagesPanel" >
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
                            <p>Choose a job where someone has made a lot of money at this ...</p>
                            <span>master</span>
                        </li>
                        <li>
                            <p>and so so try to be a master in this</p>
                            <span>master</span>
                        </li>
                    </ul>
                </div>
                <div class="typeBox">
                    <input type="text" name="fname" />
                    <input type="submit" value=" "/>
                </div>
                
            </div>
        )
    }
}

function HandleStartMicroPhone(StartMicroPhone) {
    if (StartMicroPhone) {
        return(
            <img alt="icon" src="/icon/microphone.png"/>
        )
    }
}

function HandleStartWebcam(StartWebcam) {
    if (StartWebcam) {
        return(
            <img alt="icon" src="/icon/video-camera.png"/>
        )
    }
}

function HandleStartRaiseHand(StartRaiseHand) {
    if (StartRaiseHand) {
        return(
            <img alt="icon" src="/icon/raise-hand.png"/>
        )
    }
}

function HandleStartShareScreen(StartShareScreen) {
    if (StartShareScreen) {
        return(
            <img alt="icon" src="/icon/share-screen.png"/>
        )
    }
}

function App() {
    const [ShowMessagesPanel,setShowMessagesPanel]=useState(0);
    const [StartMicroPhone,setStartMicroPhone]=useState(0);
    const [StartWebcam,setStartWebcam]=useState(0);
    const [StartRaiseHand,setStartRaiseHand]=useState(0);
    const [StartShareScreen,setStartShareScreen]=useState(0);



  return(
    <div>
    <div class="room">
        <div class="middleContent">
            <div class="sharedScreen">Shared Screen</div>
            {HandleShowMessagesPanel(ShowMessagesPanel)}
        </div>
        <div class="users">
            <div class="boxes">
                <ul>
                    <li>
                        <div class="circle">
                            <img alt="img" src="/img/girl.jpg" />
                        </div>
                        <div class="IconUser">
                            {HandleStartMicroPhone(StartMicroPhone)}
                            {HandleStartWebcam(StartWebcam)}
                            {HandleStartRaiseHand(StartRaiseHand)}
                            {HandleStartShareScreen(StartShareScreen)}
                        </div>
                        <p>lisa</p>
                    </li>
                    <li>
                        <div class="circle">
                            <img alt="img" src="img/img1.jpg" />
                        </div>
                        <p>john</p>
                    </li>
                    <li>
                        <div class="circle">
                            <img alt="img" src="img/img2.jpg" />
                        </div>
                        <p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img3.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img5.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img6.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img7.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img8.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img9.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/img1.jpg" /></div><p>john</p>
                    </li>
                    <li>
                        <div class="circle"><img alt="img" src="img/girl.jpg" /></div><p>john</p>
                    </li>
                </ul>
            </div>
        </div>
        <span class="underline"></span>
        <div class="footerPanel">
            <p>class name</p>
            <div class="CenterMenu">
                <ul>
                    <li>
                        <img alt="icon" src="/icon/microphone.png" onClick={()=> setStartMicroPhone(!StartMicroPhone)}/>
                    </li>
                    <li>
                        <img alt="icon" src="/icon/video-camera.png" onClick={()=> setStartWebcam(!StartWebcam)}/>
                    </li>
                    <li>
                        <img alt="icon" src="/icon/raise-hand.png" onClick={()=> setStartRaiseHand(!StartRaiseHand)}/>
                    </li>
                    <li>
                        <img alt="icon" src="/icon/share-screen.png" onClick={()=> setStartShareScreen(!StartShareScreen)}/>
                    </li>
                    <li>
                        <img alt="icon" src="/icon/menu.png" />
                    </li>
                    <li>
                        <img alt="icon" src="/icon/phone.png" />
                    </li>
                </ul>
            </div>
            <div class="RightMenu">
                <ul>
                    <li>
                        <img alt="icon" src="/icon/chat.png"  onClick={()=> setShowMessagesPanel(!ShowMessagesPanel)}/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
  )
}

export default App;