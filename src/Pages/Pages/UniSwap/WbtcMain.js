import React, { useState } from 'react'
import {Row,Col} from 'reactstrap'
import Breadcrumbs from '../../components/Breadcrums/Breadcrums'
import SlickSlider from '../../components/Slider/Slider'
import h1 from '../../assets/images/h1.PNG'
import handshake from '../../assets/images/handshake.PNG'
import uniswap from '../../assets/images/uniswap.PNG'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram'
import RedditIcon from '@mui/icons-material/Reddit';
import DiscordIcon from '../../assets/images/discordicon.png'
import ShareIcon from '../../assets/images/share-icon.PNG'
import uniswapcarousal from '../../assets/images/uniswapcarousal.PNG';
import uniswapcarousal1 from '../../assets/images/uniswapcarousal1.PNG';
import DappCarousal3 from '../../assets/images/dapp3.jpg';
import metaCarousal1 from '../../assets/images/metaCarousal1.PNG';

import './styles/wbtc.css'

function WbtcMain() {

    const [imgList,setList]=useState([
        {img:uniswapcarousal},
        {img:uniswapcarousal1},
        {img:uniswapcarousal},
        {img:metaCarousal1},
        {img:uniswapcarousal},
        
    ])
    const [crumsTitle1,setCrumsTitle1]=useState('Exchanges')
    const [crumsTitle2,setCrumsTitle2]=useState('Uniswap')
    return (
        <div className="wbtc-main">
            <div className="container">
                <p className="pt-2"></p>
                <Breadcrumbs crumsTitle1={crumsTitle1} crumsTitle2={crumsTitle2}/>
                <div className="d-flex mt-3 ">
                    <img src={h1} className="xlogo-img"/>
                    <p className="nfl-text">Join Avalanche rush, DeFi largest incentive Program ft. Aave , Curve and More. </p>
                  
                    <p className="sportx-bet-text">{" "}JOIN NOW!</p>
                </div>

                <div className="wbtc-bitcoin-section">
                    <Row>
                        <Col md='6'>
                            <div className="p-3">
                                <div className='d-flex'>
                                    <img src={uniswap} className="wbtc-bitcoin-img"/>
                                    <div className='ml-3'>
                                        <h1 className="wbtc-bitcoin-head">Uniswap</h1>
                                        <p className="wbtc-bitcoin-text">
                                            Uniswap is fully decedntralized protocol for automated liquidity provision on Ethereum.
                                        </p>
                                        <div className='d-flex'>
                                            <TwitterIcon className="uniswap-icon-twitter" />
                                            <img src={DiscordIcon} className="uniswap-discord-icon"/>
                                            <RedditIcon className="uniswap-icon-twitter"/>
                                            <InstagramIcon className="uniswap-icon-twitter" />
                                        </div>
                                    </div>
                                </div>

                                <button className='open-dapp-btn'>
                                        <img src={ShareIcon}/>
                                        <span>Open Dapp</span>
                                </button>

                                <div className='mt-4  d-flex'>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#9</span>In General</p>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'> #1</span>In Collectibles</p>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#1</span>In ETH</p>
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


                <div className=' pt-3 uniswap-lower-section'>
                    <Row>
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
                    </Row>
                  

                    
                </div>
            </div>
        </div>
    )
}

export default WbtcMain
