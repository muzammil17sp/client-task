import React, { useState } from 'react'
import {Row,Col} from 'reactstrap'
import Breadcrumbs from '../../components/Breadcrums/Breadcrums'
import SlickSlider from '../../components/Slider/Slider'
import xlogo from '../../assets/images/xlogo.PNG'
import handshake from '../../assets/images/handshake.PNG'
import bitcoinImg from '../../assets/images/bitcoin-img.PNG'
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '../../assets/images/share-icon.PNG'
import DappCarousal from '../../assets/images/dapp-carousal.png';
import DappCarousal1 from '../../assets/images/dapp-img3.png';
import DappCarousal2 from '../../assets/images/dapp-img2.png';
import DappCarousal3 from '../../assets/images/dapp3.jpg';

import './styles/wbtc.css'

function WbtcMain() {

    const [imgList,setList]=useState([
        {img:DappCarousal},
        {img:DappCarousal3},
        {img:DappCarousal2},
        {img:DappCarousal1},
        {img:DappCarousal3},
        
    ])
    const [crumsTitle1,setCrumsTitle1]=useState('DeFi')
    const [crumsTitle2,setCrumsTitle2]=useState('WBTC')

    return (
        <div className="wbtc-main">
            <div className="container">
                <p className="pt-2"></p>
                <Breadcrumbs crumsTitle1={crumsTitle1} crumsTitle2={crumsTitle2}/>
                <div className="d-flex mt-3 ">
                    <img src={xlogo} className="xlogo-img"/>
                    <p className="nfl-text">NFL, EPL and 50 other leagues offered on #1 DEX for sports betting</p>
                    <img src={handshake} className="handshake-img"/>
                    <p className="sportx-bet-text">Check otu SportX.bet</p>
                </div>

                <div className="wbtc-bitcoin-section">
                    <Row>
                        <Col md='6'>
                            <div className="p-3">
                                <div className='d-flex'>
                                    <img src={bitcoinImg} className="wbtc-bitcoin-img"/>
                                    <div className='ml-3'>
                                        <h1 className="wbtc-bitcoin-head">WBTC</h1>
                                        <p className="wbtc-bitcoin-text">
                                            Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent.100% verifiable . Community led.
                                        </p>
                                        <TwitterIcon className="wbtc-icon-twitter" />
                                    </div>
                                </div>

                                <button className='open-dapp-btn'>
                                        <img src={ShareIcon}/>
                                        <span>Open Dapp</span>
                                </button>

                                <div className='mt-4  d-flex'>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#1779</span>In General</p>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'> #783</span>In DeFi</p>
                                    <p className='counts-in-crrency mr-3'><span className='numbers-in-crrency'>#464</span>In ETH</p>
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
