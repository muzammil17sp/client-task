import React from 'react'
import {Row,Col} from 'reactstrap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LineChart from '../../components/Chart/ApexChart'
import rateImg from '../../assets/images/rateImg.PNG'
import rateImg1 from '../../assets/images/rateImg1.PNG'
import './styles/wbtcStatics.css'
function WbtcStatics() {
    return (
        
        <div className='container'>
            <div className='mt-3 p-3 wbtc-statics-main'>
                <div className="mt-3 ">
                    <h1 className="wbtc-statics-head">Uniswap statistics</h1>
                    <p className="wbtc-statics-text">This data represents the raw on-chain activity of the tracked smart contracts</p>
                </div>

                <div>
                    <Row>
                        <Col md='6' sm='12'>
                            <div className='mt-3 d-flex justify-content-between'>
                                <div className="">
                                    <p className="statics-sub-heads">TVL <span className="statics-quest-mark">?</span></p>
                                    <p className="statics-dollar-value">$8.86B</p>
                                    <p className="statics-plus-ratio">+2.53%</p>
                                </div>
                                <div className="">
                                    <p className="statics-sub-heads">ATVL <span className="statics-quest-mark">?</span></p>
                                    <p className="statics-dollar-value">$9.54B</p>
                                    <p className="statics-plus-ratio">+1.19%</p>
                                </div>
                                <div className="">
                                    <p className="statics-sub-heads">MARKETCAP <span className="statics-quest-mark">?</span></p>
                                    <p className="statics-dollar-value">$13.16B</p>
                                    <p className="statics-minus-ratio">-3.45%</p>
                                </div>
                            </div>

                            <div className='mt-2 d-flex  justify-content-between'>
                                <div className="">
                                    <p className="statics-sub-heads">TOKEN <span className="statics-quest-mark">?</span></p>
                                    <p className="statics-dollar-value">UNI</p>
                                </div>
                                <div className="">
                                    <p className="statics-sub-heads">TOKEN PRICE <span className="statics-quest-mark">?</span></p>
                                    <p className="statics-dollar-value">$26.31k</p>
                                    <p className="statics-plus-ratio">-3.45%</p>
                                </div>
                                <div className="">
                                    <p className="statics-sub-heads">CAP/TVL <span className="statics-quest-mark">?</span></p>
                                    <p className="statics-dollar-value">2.97</p>
                                </div>
                            </div>

                            
                        </Col>
                        <Col md='6' sm='12'>
                            <label className='available-day-label'>
                                <input type="checkbox" className='available-day-input' />
                                <span className='available-day-span' style={{borderRight: 'none'}}>30D</span>
                            </label>
                            <label className='available-day-label'>
                                <input type="checkbox" className='available-day-input' />
                                <span className='available-day-span'  style={{borderRight: 'none',borderLeft: 'none'}}>90D</span>
                            </label>
                            <label className='available-day-label'>
                                <input type="checkbox" className='available-day-input' />
                                <span className='available-day-span' style={{borderLeft: 'none'}}>1 Year</span>
                            </label>
                            <LineChart/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='7'>
                            <div>
                                <div className="mt-1 d-flex"> 
                                    <span className='tracking-text'>    For this data we are tracking : </span>
                                    <span className='tracking-text-bold'> 46088 Uniswap Smart Contracts </span>
                                    <ArrowForwardIcon className='arrow-forward-icon-statics'/>  
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default WbtcStatics
