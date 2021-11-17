import React, { useState } from 'react'
import {Row,Col} from 'reactstrap'
import Breadcrumbs from '../../components/Breadcrums/Breadcrums'
import SlickSlider from '../../components/Slider/Slider'
import xlogo from '../../assets/images/xlogo.PNG'
import handshake from '../../assets/images/handshake.PNG'
import metaMain from '../../assets/images/metaMain.PNG'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram'
import DiscordIcon from '../../assets/images/discordicon.png'
import ShareIcon from '../../assets/images/share-icon.PNG'
import DappCarousal1 from '../../assets/images/dapp-img3.png';
import DappCarousal2 from '../../assets/images/dapp-img2.png';
import DappCarousal3 from '../../assets/images/dapp3.jpg';
import metaCarousal from '../../assets/images/metaCarousal.PNG';
import metaCarousal1 from '../../assets/images/metaCarousal1.PNG';

import './styles/wbtc.css'

function WbtcMain() {

    const [imgList,setList]=useState([
        {img:metaCarousal},
        {img:metaCarousal1},
        {img:DappCarousal2},
        {img:metaCarousal},
        {img:DappCarousal1},
        
    ])
    const [crumsTitle1,setCrumsTitle1]=useState('Collectibles')
    const [crumsTitle2,setCrumsTitle2]=useState('Metasaurs by Dr. DMT')
    return (
        <div className="wbtc-main">
            <div className="container">
                <p className="pt-2"></p>
                <Breadcrumbs crumsTitle1={crumsTitle1} crumsTitle2={crumsTitle2}/>
                <div className="d-flex mt-3 ">
                    <img src={xlogo} className="xlogo-img"/>
                    <p className="nfl-text">Join the VulcanForged community on Discord .</p>
                  
                    <p className="sportx-bet-text">JOIN NOW!</p>
                </div>

                <div className="wbtc-bitcoin-section">
                    <Row>
                        <Col md='6'>
                            <div className="p-3">
                                <div className='d-flex'>
                                    <img src={metaMain} className="wbtc-bitcoin-img"/>
                                    <div className='ml-3'>
                                        <h1 className="wbtc-bitcoin-head">Metasaurs by Dr. DMT</h1>
                                        <p className="wbtc-bitcoin-text">
                                            Metasaurs by Dr. DMT is a collection of 9,999 unique Metasaurs living on the Ethereum blockchain, this time , forever..
                                        </p>
                                        <div className='d-flex'>
                                            <TwitterIcon className="wbtc-icon-twitter" />
                                            <img src={DiscordIcon} className="discord-icon"/>
                                            <InstagramIcon className="wbtc-icon-twitter" />
                                        </div>
                                    </div>
                                </div>

                                <button className='open-dapp-btn'>
                                        <img src={ShareIcon}/>
                                        <span>Open Dapp</span>
                                </button>

                                <div className='mt-4  d-flex'>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#145</span>In General</p>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'> #13</span>In Collectibles</p>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#15</span>In ETH</p>
                                </div>
                            </div>

                        </Col>
                        <Col md='6'>
                           <div className='p-3'>
                                <SlickSlider imgList={imgList}/>
                           </div>
                        </Col>
                    </Row>

                   
                </div>
            </div>
        </div>
    )
}

export default WbtcMain
