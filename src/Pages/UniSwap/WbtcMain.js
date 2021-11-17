import React, { useState } from 'react'
// import { Row, Col } from 'reactstrap'
import Breadcrumbs from '../../components/Breadcrums/Breadcrums'
// import SlickSlider from '../../components/Slider/Slider'
import h1 from '../../assets/images/h1.PNG'
// import handshake from '../../assets/images/handshake.PNG'
import uniswap from '../../assets/images/uniswap.PNG'
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram'
// import RedditIcon from '@mui/icons-material/Reddit';
// import DiscordIcon from '../../assets/images/discordicon.png'
// import ShareIcon from '../../assets/images/share-icon.PNG'
import uniswapcarousal from '../../assets/images/uniswapcarousal.PNG';
import uniswapcarousal1 from '../../assets/images/uniswapcarousal1.PNG';
import DappCarousal3 from '../../assets/images/dapp3.jpg';
import metaCarousal1 from '../../assets/images/metaCarousal1.PNG';
import RatingStar from '../../dappradarComp/content/RatingStar'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageIcon from '@mui/icons-material/Language';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
// import Clipboard from './Clipboard';



import './styles/wbtc.css'

function WbtcMain() {

    const [imgList, setList] = useState([
        { img: uniswapcarousal },
        { img: uniswapcarousal1 },
        { img: uniswapcarousal },
        { img: metaCarousal1 },
        { img: uniswapcarousal },

    ])

    const [crumsTitle1, setCrumsTitle1] = useState('Exchanges')
    const [crumsTitle2, setCrumsTitle2] = useState('Uniswap')


    
    return (
        <div className="wbtc-main">
            <div className="container">
                <p className="pt-2"></p>
                <Breadcrumbs crumsTitle1={crumsTitle1} crumsTitle2={crumsTitle2} />
                <div className="d-flex mt-3 ">
                    <img src={h1} className="xlogo-img" />
                    <p className="nfl-text">Join Avalanche rush, DeFi largest incentive Program ft. Aave , Curve and More. </p>

                    <p className="sportx-bet-text">{" "}JOIN NOW!</p>
                </div>

                <div className="wbtc-bitcoin-section">
                    <div className="row mr-0 ml-0">
                        <div className="col-12 col-md-6">
                            <div className="row mr-0 ml-0">
                                <div className="col-12 col-md-4 mt-4">
                                    <img style={{ marginLeft: "3rem" }} src={uniswap} />

                                </div>
                                <div className="col-12 col-md-8 mt-4">
                                    <div className="p-3">
                                        <div className='d-flex'>
                                            <div className='ml-3'>
                                                <h1 className="wbtc-bitcoin-head">Aardy.com</h1>
                                                <p className='d-flex'>Reviews 7,805<span style={{ marginLeft: '1rem' }}><li>Excelent</li></span> </p>
                                                <div className="d-flex">
                                                    <RatingStar />

                                                    <div className="d-flex">
                                                        <p style={{ marginBottom: "0px", marginLeft: "-3rem"}}>4.9</p>
                                                        <AccessTimeIcon style={{ fontSize: "14px", marginLeft: "5px", marginTop: "5px" }} />
                                                    </div>

                                                </div>
                                                <div className="mt-2">
                                                    <button  style={{outline:'none',border:"none",fontSize:'10px',padding:"4px 2px"}}><StarsRoundedIcon style={{color:"#fec957",fontSize:"15px"}}/> Balance Smart Chain (BEP20):<b>0*7120__0.918</b><ContentCopyRoundedIcon style={{fontSize:"12px",marginLeft: '3px'}}/> </button>
                                                </div>


                                            </div>
                                        </div>



                                      
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="row mr-0 ml-0">
                                <div className="col-12 col-md-5 mt-4">

                                    <div>
                                        <div className="d-flex">
                                            <div><b style={{ fontWeight: "500" }}>TOKEN PRICE</b> </div>
                                            <div style={{ marginRight: "2px" }}><HelpCenterRoundedIcon style={{ color: "gray", fontSize: "20px", marginTop: "2px" }} /></div>

                                        </div>
                                        <div>
                                            <p style={{ fontSize: "20px", marginBottom: "0" }}><b>$26.31k</b></p>
                                            <p style={{ color: "green" }}>-3,45%</p>
                                        </div>


                                    </div>
                                    <div className="mt-5">
                                        <div className="d-flex">
                                            <div><b style={{ fontWeight: "500" }}>MARKETCAP</b> </div>
                                            <div style={{ marginRight: "2px" }}><HelpCenterRoundedIcon style={{ color: "gray", fontSize: "20px", marginTop: "2px" }} /></div>

                                        </div>
                                        <div>
                                            <p style={{ fontSize: "20px", marginBottom: "0" }}><b>$13.16B</b></p>
                                            <p style={{ color: "red" }}>-3,45%</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* <div className="row mr-0 ml-0" style={{ border: "1px solid gray", borderRadius: "5px" }}>

                                        <div className="col-12 col-md-8" >
                                            <div className="d-flex">
                                                <div style={{ marginRight: "2px" }}><LanguageIcon style={{ color: "gray", fontSize: "16px", marginTop: "5px" }} /></div>
                                                <div><b>aardy.com</b> </div>
                                            </div>
                                            <div><p style={{marginBottom:"0.5rem"}}>Visit this website</p></div>

                                        </div>
                                        <div className="col-4 mt-3" align="center">
                                            <ArrowForwardIosIcon style={{ color: "gray",fontSize:"14px"  }} />
                                        </div>

                                    </div> */}
                                    <div className="row mt-4 mb-4 ml-0 mr-0" style={{ border: "1px solid gray", borderRadius: "5px" }}>

                                        <div className="col-8" >
                                            <div className="d-flex">
                                                <div style={{ marginRight: "2px" }}><LanguageIcon style={{ color: "gray", fontSize: "16px", marginTop: "5px" }} /></div>
                                                <div><b>aardy.com</b> </div>
                                            </div>
                                            <div><p style={{ marginBottom: "0.5rem" }}>Visit this website</p></div>

                                        </div>
                                        <div className="col-4 mt-3" align="center">
                                            <ArrowForwardIosIcon style={{ color: "gray", fontSize: "14px" }} />
                                        </div>

                                    </div>
                                    <div className="row mt-4 mb-4 ml-0 mr-0" style={{ border: "1px solid gray", borderRadius: "5px" }}>

                                        <div className="col-8" >
                                            <div className="d-flex">
                                                <div style={{ marginRight: "2px" }}><LanguageIcon style={{ color: "gray", fontSize: "16px", marginTop: "5px" }} /></div>
                                                <div><b>aardy.com</b> </div>
                                            </div>
                                            <div><p style={{ marginBottom: "0.5rem" }}>Visit this website</p></div>

                                        </div>
                                        <div className="col-4 mt-3" align="center">
                                            <ArrowForwardIosIcon style={{ color: "gray", fontSize: "14px" }} />
                                        </div>

                                    </div>
                                    <div className="row mr-0 ml-0" style={{ border: "1px solid gray", borderRadius: "5px" }}>

                                        <div className="col-8" >
                                            <div className="d-flex">
                                                <div style={{ marginRight: "2px" }}><LanguageIcon style={{ color: "gray", fontSize: "16px", marginTop: "5px" }} /></div>
                                                <div><b>aardy.com</b> </div>
                                            </div>
                                            <div><p style={{ marginBottom: "0.5rem" }}>Visit this website</p></div>

                                        </div>
                                        <div className="col-4 mt-3" align="center">
                                            <ArrowForwardIosIcon style={{ color: "gray", fontSize: "14px" }} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4  d-flex'>
                                            <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#9</span>In General</p>
                                            <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'> #1</span>In Collectibles</p>
                                            <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#1</span>In ETH</p>
                                        </div>
                    </div>


                </div>


                <div className=' pt-3 uniswap-lower-section'>
                    {/* <Row>
                        <Col md='2'>
                            <div>
                                <p className="statics-sub-heads">TOKEN NAME</p>
                                <div>
                                    <h2>UNI</h2>
                                </div>
                            </div>
                        </Col>
                        <Col md='2'>
                            <div>
                                <p className="statics-sub-heads">TOKEN PRICE</p>
                                <div>
                                    <p className='statics-dollar-value'>$26.32</p>
                                    <p className="statics-minus-ratio">-3.43%</p>
                                </div>
                            </div>
                        </Col>
                        <Col md='2'>
                            <button className="buy-uni-btn">Buy UNI</button>
                        </Col>
                    </Row> */}

                    <div className="row " style={{backgroundColor:"#f2f2f4"}}>
                        <div className="col-12 col-md-3">
                        <div align="center" style={{backgroundColor:"white",height:"6rem",margin:"10px",boxShadow:" rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 10px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px"}}>
                            <h6 className="pt-3">Rate your recent experience</h6>
                            <RatingStar />


                        </div>
                        </div>
                        <div className="col-12 col-md-2" align="center">
                            <button className="mt-5" style={{ cursor: 'pointer',backgroundColor:'#006bff',borderRadius:"8px",color:"white",outline: "none",border:"none",padding:"6px 20px"}}><b style={{fontSize:"12px"}}>Open Dapp</b></button>
                        </div>
                        <div className="col-12 col-md-2" align="center">
                        <button className="mt-5" style={{ cursor: 'pointer', backgroundColor:'#006bff',borderRadius:"8px",color:"white",outline: "none",border:"none",padding:"6px 20px"}}><b style={{fontSize:"12px"}}>Open Dapp</b></button>

                        </div>
                        <div className="col-12 col-md-3" align="center">
                        <button className="mt-5" style={{ cursor: 'pointer',backgroundColor:'white',borderRadius:"8px",color:"black",outline: "none",border:"none",padding:"6px 20px"}}>
                            <b style={{fontSize:"12px"}}>Add to main watchlist <StarOutlineRoundedIcon style={{marginTop:"4px",fontSize:"16px",color:"gray"}}/></b>
                            </button>

                        </div>
                        <div className="col-12 col-md-2" align="center">
                        <button className="mt-5 mb-4" style={{ cursor: 'pointer',backgroundColor:'white',borderRadius:"8px",color:"black",outline: "none",border:"none",padding:"6px 20px"}}><b style={{fontSize:"12px"}}><IosShareRoundedIcon style={{fontSize:"16px",marginRight:"3px"}}/>Share</b></button>

                        </div>
                    </div>


                </div>
                
            </div>
            
        </div>
    )
}

export default WbtcMain
