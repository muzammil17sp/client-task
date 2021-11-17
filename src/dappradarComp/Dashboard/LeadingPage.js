import React, { useState, useEffect } from 'react'
import '../Dashboard/LeadingPage.css'
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Celo from './celo.png';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Risk from './risk.png';
import Upload from '../upload/Upload'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Funfair from '../Dashboard/funfair.png'

// import Box from '@mui/material/Box';
// import Badge from '@mui/material/Badge';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
// import axios from 'axios'
// import Category from './Category'





export default function LeadingPage() {

    const [uploadData, setUploadData] = useState({
        name: "",
        volume: "",
        market_cap: "",
        traders: "",
        flor_price: "",
        sales_price: "",
        average_price: "",
        chain: "",
        telegram: "",
        website: "",
        redit: "",
        twitter: "",
        launch_date: "",
        votes: "",
        description: "",
        type: "",
    });











    const uploadFile = () => {

    }

    const getUser = async () => {
        const { token } = JSON.parse(localStorage.getItem("user-info"))
        console.log("token", token)

        const response = await fetch("http://202.182.97.224:8080/api/dapp", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,

                // "Access-Control-Allow-Origin" : "http://localhost:3000/"
            },
            body: JSON.stringify({

                "name": "parshotam",
                "volume": "2323",
                "market_cap": "34",
                "traders": "343",
                "flor_price": "434",
                "sales_price": "434",
                "average_price": "33",
                "chain": "abcd",
                "telegram": "abcd",
                "redit": "abcd",
                "website": "abcd",
                "twitter": "abcd",
                "launch_date": "2015-03-25",
                "votes": "545",
                "description": "abcdd",
                "type": "nft"




            })
        }
        );
        const data = await response.json();
        console.log("post api", data);
    }
    useEffect(() => {

        //     // axios.get("http://202.182.97.224:8080/api/dapp/create").then((res) => setstate(res.data));

    }, []);
    const checkButton = (e) => {
        e.preventDefault();
        getUser();
        console.log(uploadData);
    }


    return (
        <div style={{ backgroundColor: ' #f7f7f7', paddingLeft: '3%', paddingRight: '1%', width: '95%' }}>
            {/* <div className="container"> */}
            <div>
                <button className="navbar-toggler menu-hidden" type="button" data-toggle="collapse" data-target="#myhidden" aria-controls="myhidden" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <MenuIcon />
                    </span>
                </button>
            </div>

            <div className="row">




                <div className="col-12 col-md-2 collapse navbar-collapse " id="myhidden" >
                    <div className="side-menu">
                        <div className="icon-sidebar"><HomeIcon /></div>
                        <div>Overview</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><ArrowRightIcon /></div>
                        <div>My Dapps</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><AddCircleIcon /></div>
                        <div>Submit dapp</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><CreditCardIcon /></div>
                        <div>Advertise</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><BusinessCenterIcon /></div>
                        <div>Marketplace</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><CastForEducationIcon /></div>
                        <div>Learning Hub</div>
                    </div>
                </div>



                <div className="col-12 col-md-2 sidebar-coppied">
                    <div className="side-menu">
                        <div className="icon-sidebar"><HomeIcon /></div>
                        <div>Overview</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><ArrowRightIcon /></div>
                        <div>My Dapps</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><AddCircleIcon /></div>
                        <div>Submit dapp</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><CreditCardIcon /></div>
                        <div>Advertise</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><BusinessCenterIcon /></div>
                        <div>Marketplace</div>
                    </div>
                    <div className="side-menu">
                        <div className="icon-sidebar"><CastForEducationIcon /></div>
                        <div>Learning Hub</div>
                    </div>
                </div>
                <div className="col-12 col-md-10 ">
                    <div className="row pt-4 pb-3" style={{ backgroundColor: "#aaa9ad" }}>
                        <div className="col-12 col-md-3 ">
                            <img style={{ width: '40%' }} src={Risk} alt="" />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div>
                                <h6>One MillionWaltes Hackerthon</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quisquam!</p>

                            </div>
                        </div>
                        <div className="col-12 col-md-3 right-bar">
                            <div>
                                <button className="join-btn">Join hackeroth</button>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 pb-3" style={{ backgroundColor: "#808080" }}>
                        <div className="col-12 col-md-3 ">
                            <img style={{ width: '60%' }} src={Celo} alt="" />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div>
                                <h6>One MillionWaltes Hackerthon</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quisquam!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3   right-bar">
                            <div>
                                <button className="apply-btn">Join hackeroth</button>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-10 mt-3" style={{ backgroundColor: "white" }}>
                            <div className="row">
                                <div className="col">
                                    <div><h3 style={{ color: "#006CFF" }}>Submit a dapp</h3></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <FormGroup className="form-label">
                                        <Label for="exampleEmail"><b>Dapp logo</b><span style={{ color: '#05e8dd' }}>*</span></Label>
                                    </FormGroup>
                                    <div>
                                        <div style={{ width: '100%', marginBottom: "6rem", height: '10rem', border: '3px dashed gray', opacity: "0.5" }}>
                                            <div>
                                                {/* <input type="file" /> */}
                                                <div style={{ position: "relative", width: "100%", height: "9.6rem", lineHeight: "30px", textAlign: "center" }}>
                                                    <ImageIcon style={{ fontSize: "4rem", marginTop: "2rem", color: "gray", opacity: "0.5" }} />
                                                    <input type="file" style={{ opacity: "0.0", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", width: "100%", height: "100%" }} />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p>Upload file in PNG, JPG, PNG, JEPG with minimun resolution with less then 240pxile  1MB</p>
                                            </div>
                                            

                                        </div>
                                    </div>
                                </div>
                                {/* <button onClick={CheckConsole}>ok</button> */}

                                <div className="col-12 col-md-8">
                                    <Form >
                                        <FormGroup className="form-label">
                                            <Label for="exampleEmail"><b>Dapp Name</b><span style={{ color: '#05e8dd' }}>*</span></Label>
                                            <Input type="text"
                                                value={uploadData.name} onChange={(e) => setUploadData({ ...uploadData, name: e.target.value })}

                                                name="email" id="exampleEmail" placeholder="Your Dapp name" />
                                        </FormGroup>

                                        <Label for="exampleEmail"><b>Category</b><span style={{ color: '#05e8dd' }}>*</span></Label>

                                        <select style={{ width: "100%", height: "2.4rem", border: "1px solid gray", opacity: "0.5", borderRadius: "4px" }}
                                            onChange={(e) => setUploadData({ ...uploadData, type: e.target.value })}

                                            className="form-select mb-4 mt-2" aria-label="Default select example">
                                            <option value="Dapp">Dapp</option>
                                            <option value="Coin">Coin</option>
                                            <option value="FTP">FTP</option>
                                        </select>

                                        <FormGroup className="form-label" style={{ marginBottom: "-1px" }}>
                                            <Label for="examplePassword"><b>MdiWebsite</b><span style={{ color: '#05e8dd' }}>*</span></Label>
                                        </FormGroup>
                                        <FormGroup className="form-label" style={{ backgroundColor: "#4435fd" }}>
                                            <div>
                                                <div className="row" >
                                                    <div className="col-12 col-md-4">
                                                        <img style={{ width: "100%" }} src={Funfair} alt="" />
                                                    </div>
                                                    <div className="col-12 col-md-8"><p style={{ color: 'white', fontSize: '14px', marginTop: '8px', padding: '5px' }}>A fully intergrated with best service for your dapp</p></div>
                                                </div>
                                            </div>
                                            <Input type="text"
                                                value={uploadData.website} onChange={(e) => setUploadData({ ...uploadData, website: e.target.value })}
                                                name="text" id="examplePassword" placeholder="https://yourDappwebsite.com" />
                                        </FormGroup>
                                        <FormGroup className="form-label">
                                            <Label for="exampleText"><b>Short Discription</b><span style={{ color: '#05e8dd' }}>*</span></Label>
                                            <Input type="textarea"
                                                value={uploadData.description} onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}

                                                style={{ height: "9rem" }} placeholder="Dapp short description" name="text" id="exampleText" />
                                        </FormGroup>
                                    </Form>
                                    <button onClick={checkButton}>Okay</button>

                                </div>
                                <Upload uploadData={uploadData} setUploadData={setUploadData} />



                            </div>


                            <div >
                                <hr style={{ color: "#006CFF", border: "1px solid" }} />
                            </div>
                            <div className="row">
                                <div className="col"><h3 style={{ color: "#006CFF" }}>Social</h3></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6" >
                                    <div className="socail_iconContainer">
                                        <div style={{ width: "90%" }} className="protocol_container">
                                            <TwitterIcon style={{ opacity: '.5' }} />
                                            <input
                                                value={uploadData.twitter} onChange={(e) => setUploadData({ ...uploadData, twitter: e.target.value })}

                                                type="text"
                                                name="wechat"
                                                id="wechat"
                                                placeholder="https://www.Twitter.com/"
                                            />
                                            <RemoveCircleIcon style={{ opacity: '.5', position: 'absolute', right: '1rem' }} />
                                        </div>

                                    </div>

                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="socail_iconContainer">
                                        <div style={{ width: "90%" }} className="protocol_container">
                                            <FacebookIcon style={{ opacity: '.5' }} />
                                            <input
                                                type="text"
                                                name="wechat"
                                                id="wechat"
                                                placeholder="https://www.Facebook.com/"
                                            />
                                            <RemoveCircleIcon style={{ opacity: '.5', position: 'absolute', right: '1rem' }} />

                                        </div>
                                        <div className="youtube-description mt-3 mb-5">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <div className="row mb-5">
                                        <div className="col-12">
                                            <div><h6>Add More</h6></div>
                                            <div className="row" align="center">
                                                <div className="col-3 col-md-1">  <div ><  TwitterIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  PinterestIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  YouTubeIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  FacebookIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  LinkedInIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  GitHubIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  InstagramIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  YouTubeIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  FacebookIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  LinkedInIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  GitHubIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                <div className="col-3 col-md-1">  <div ><  InstagramIcon style={{ backgroundColor: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: "8px", padding: "3px", color: "gray", opacity: "0.8" }} /></div> </div>
                                                {/* <div className="col">  <div  style={{backgroundColor:"white",border:"1px solid gray",padding:"5px 10px",borderRadius:"13px",opacity:"0.8"}}><TwitterIcon style={{color:"gray",opacity:"0.8"}}/></div> </div>
                                        <div className="col">  <div  style={{backgroundColor:"white",border:"1px solid gray",padding:"5px 10px",borderRadius:"13px",opacity:"0.8"}}><TwitterIcon style={{color:"gray",opacity:"0.8"}}/></div> </div>
                                        <div className="col">  <div  style={{backgroundColor:"white",border:"1px solid gray",padding:"5px 10px",borderRadius:"13px",opacity:"0.8"}}><TwitterIcon style={{color:"gray",opacity:"0.8"}}/></div> </div>
                                        <div className="col">  <div  style={{backgroundColor:"white",border:"1px solid gray",padding:"5px 10px",borderRadius:"13px",opacity:"0.8"}}><TwitterIcon style={{color:"gray",opacity:"0.8"}}/></div> </div>
                                        <div className="col">  <div  style={{backgroundColor:"white",border:"1px solid gray",padding:"5px 10px",borderRadius:"13px",opacity:"0.8"}}><TwitterIcon style={{color:"gray",opacity:"0.8"}}/></div> </div> */}

                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>




                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4"></div>
                            </div>




                            <div >
                                <hr style={{ color: "#006CFF", border: "1px solid" }} />
                            </div>
                            <div className="row">
                                <div className="col"><h3 style={{ color: "#006CFF" }}>Media</h3></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div><h6>Screenshot 1</h6></div>
                                    <div style={{ width: '100%', height: '10rem', border: '3px dashed gray', opacity: "0.5" }}>
                                        <div>
                                            {/* <input type="file" /> */}
                                            <div style={{ position: "relative", width: "100%", height: "9.6rem", lineHeight: "30px", textAlign: "center" }}>
                                                <ImageIcon style={{ fontSize: "4rem", marginTop: "2rem", color: "gray", opacity: "0.5" }} />
                                                <input type="file" style={{ opacity: "0.0", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", width: "100%", height: "100%" }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div><h6>Screenshot 2</h6></div>
                                    <div style={{ width: '100%', height: '10rem', border: '3px dashed gray', opacity: "0.5" }}>
                                        <div>
                                            {/* <input type="file" /> */}
                                            <div style={{ position: "relative", width: "100%", height: "9.6rem", lineHeight: "30px", textAlign: "center" }}>
                                                <ImageIcon style={{ fontSize: "4rem", marginTop: "2rem", color: "gray", opacity: "0.5" }} />
                                                <input type="file" style={{ opacity: "0.0", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", width: "100%", height: "100%" }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div><h6>Screenshot 3</h6></div>
                                    <div style={{ width: '100%', height: '10rem', border: '3px dashed gray', opacity: "0.5" }}>
                                        <div>
                                            {/* <input type="file" /> */}
                                            <div style={{ position: "relative", width: "100%", height: "9.6rem", lineHeight: "30px", textAlign: "center" }}>
                                                <ImageIcon style={{ fontSize: "4rem", marginTop: "2rem", color: "gray", opacity: "0.5" }} />
                                                <input type="file" style={{ opacity: "0.0", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", width: "100%", height: "100%" }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 mb-5"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam quibusdam necessitatibus!</p></div>
                            <div className="socail_iconContainer">
                                <div><h4>Video URL</h4></div>
                                <div className="protocol_container">
                                    <YouTubeIcon style={{ opacity: '.5' }} />
                                    <input
                                        type="text"
                                        name="wechat"
                                        id="wechat"
                                        placeholder="https://www.youtube.com/"
                                    />
                                </div>
                                <div className="youtube-description mt-3 mb-5">
                                    <p className='mb-5'> Youtube URL as the chipp horizonals text with privacy</p>
                                </div>

                            </div>
                            <div >
                                <hr style={{ color: "#006CFF", border: "1px solid" }} />
                            </div>
                            <div>
                                <h3 className="promoting-text" style={{ color: "#006CFF" }}>Promoting your Dapp & Referal Program</h3>
                            </div>
                            <div className="check-point">
                                <div >
                                    <input type="checkbox" className="mr-2" />
                                </div>
                                <div>
                                    <p>Are you intersted to promoting and highlighting your Dapp and Dappradar </p>

                                </div>

                            </div>
                            <div className="check-point">
                                <div >
                                    <input type="checkbox" className="mr-2" />
                                </div>
                                <div>
                                    <p>Does your Dapp have an affilate program? </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div >
                                    <button className="btn-texts" style={{ width: '100%', paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: '#006CFF', color: "white", borderRadius: "16px", outline: "none", border: "none" }}>
                                        Your Account is not yet completed. You need to add your email address before submitng a Dapp</button></div>
                            </div>
                            <div className="check-point mt-4">
                                <div >
                                    <input type="checkbox" className="mr-2" />
                                </div>
                                <div>
                                    <p>I've read the <span style={{ color: "#006CFF" }}>Term of use</span> and I agree to be bound by the permission indicated thierin</p>

                                </div>

                            </div>
                            {/* ---------------------------------------------------------------- */}
                        </div>















                        <div className="col-2"></div>
                    </div>

                </div>

            </div>
            {/* </div> */}


        </div>

    )
}
