import { React } from 'react';

function App() {
  return(
    <div>
    <div class="room">
        <div class="middleContent">
            <div class="sharedScreen">Shared Screen</div>
            <div class="messagesPanel">
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
                    <p>Type here</p>
                    <span>icon</span>
                </div>
            </div>
        </div>
        <div class="users">
            <div class="boxes">
                <ul>
                    <li>
                        <div class="circle">
                            <img alt="img" src="/img/girl.jpg" />
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
        <div class="footerPanel"></div>
    </div>
  </div>
  )
}

export default App;