import React from 'react'
import '../footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import AddIcon from '@mui/icons-material/Add';


const Footer = () => {
    return (
        <div style={{ backgroundColor: "black", paddingTop: "2rem"}}>
            <div className={window.location.pathname!=='/' ? "container" :'' }>
                <div className="row" style={{ backgroundColor: "#141313", padding: "2rem 0" }}>
                    <div className="col-sm">
                        <h3 className="subscribe-Newsletter">Subscribe to Weekly Newsletter</h3>
                        <div>
                            <div className="subscribe-notification">
                                <button className="notification">+1</button>
                                <p>Subscribe to the Week in Review newsletter and get the latest trend directly to your inbox</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control enter-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your E-mail" />
                                <button type="submit" class="btn btn-primary submit-btn">Submit</button>

                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I agree to the <a href="">privacy policy</a> </label>
                            </div>
                        </form>

                    </div>

                </div>

                <div className="row" style={{ paddingTop: "2rem" }}>
                    <div className="col-sm">
                        <div>
                            <h6 style={{ color: "white" }}>DappRadar</h6>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div >
                            <h6 className="useful-header">USEFUL LINKS</h6>
                            <div className="useful">
                                <p>
                                <AddIcon style={{backgroundColor:"gray", borderRadius:"14px", fontSize:"16px",color:'black', justifyContent:"center"}}/> SUBMIT A DAPP</p>
                                <p>BLOG</p>
                                <p>ABOUT US</p>
                                <p>ADVERTISE</p>
                                <p>PRESS</p>
                                <p>DISCLAIMER</p>
                                <p>PRIVACY</p>
                                <p>TERMS</p>
                                <p>CAREARS</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm">
                        <div>
                            <h6 className="useful-header">RECOMMENDATION</h6>
                            <div className="useful">
                                <p>METAMASK</p>
                                <p>MYETHERWALLET</p>
                                <p>TOCKENPOCKET</p>
                                <p>IMTOKEN</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h6 className="useful-header">SOCIAL</h6>
                        <div>
                            <div className="fb-row">
                                <FacebookIcon  style={{fontSize:"3rem",color:"#4c4c4c",marginRight:"1rem"}}/>
                                <TwitterIcon style={{fontSize:"3rem",color:"#4c4c4c",marginRight:"1rem"}} />
                                <TelegramIcon style={{fontSize:"3rem",color:"#4c4c4c"}}/>

                            </div>
                            <div className="reddit-row">
                                <RedditIcon style={{fontSize:"3rem",color:"#4c4c4c", marginRight:"1rem"}} />
                                <TelegramIcon style={{fontSize:"3rem",color:"#4c4c4c"}}/>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p style={{ color: "gray", marginTop: "2rem" }}>The service that we use to calculate data:</p>
                        <div style={{ border: "1px solid gray", marginTop: "2rem" }}>

                        </div>
                        <div>
                            <p style={{ color: "gray", marginTop: "2rem" }}> &copy; 2018-2021 DappRadar, UAB</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
