import React from 'react'
import '../footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import AddIcon from '@mui/icons-material/Add';
import Cryptocompare from './Cryptocompare.jpg'
import Coingecko from './Coingecko.jpg'
import Marketcap from './Marketcap.jpg'
import Discord from './Discord.png'

const mydate =new Date().getFullYear()
const MainFooter = () => {
    return (
        <div  style={{ backgroundColor: "black", paddingTop: "2rem",width: "100%"}} >
            <div className=" mt-3 main-footers">
           

                <div className="row" style={{ paddingTop: "3rem" }}>
                    <div className="col-12 col-md-3 mb-5">
                        <div>
                            <h6 style={{ color: "white",fontSize:'30px'}}><b>DappRadar</b></h6>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
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
                    <div className="col-6 col-md-3">
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
                                <img style={{ opacity: "0.4", marginBottom:'2rem',width:'3rem'}} src={Discord} alt="" />

                            </div>
                            <div className="reddit-row">
                                <RedditIcon style={{fontSize:"3rem",color:"#4c4c4c", marginRight:"1rem"}} />
                                <TelegramIcon style={{fontSize:"3rem",color:"#4c4c4c"}}/>
                            </div>
                        </div>



                    </div>
                </div>
               
                <div className="row mt-5">
                    <div className="col">

                        <div className="row" style={{color: 'gray'}}>
                            <div className="col-12 col-md-6 footer-contributer" >
                            <p>The services that we use to calculate data</p>
                            <div><img style={{opacity:"0.5",width:'8rem'}} src={Cryptocompare} alt="" /></div>
                            <div><img style={{opacity:"0.5",width:'8rem'}} src={Coingecko} alt="" /></div>
                            <div><img style={{opacity:"0.5",width:'8rem'}} src={Marketcap} alt="" /></div>
                            
                            

                            </div>
                            
                            <div className="col-12 col-md-6"></div>
                        </div>

                        <div style={{ border: "1px solid gray", marginTop: "2rem" }}>

                        </div>
                        <div>
                            <p style={{ color: "gray", marginTop: "2rem" }}> &copy; 2018- {mydate} DappRadar, UAB</p>
                        </div>

                    </div>
                    </div>

                </div>

            {/* </div> */}
        </div>
    )
}

export default MainFooter
