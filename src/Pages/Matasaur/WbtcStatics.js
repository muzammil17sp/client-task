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
                    <h1 className="wbtc-statics-head">Metasaurs by Dr. DMT statistics</h1>
                    <p className="wbtc-statics-text">This data represents the raw on-chain activity of the tracked smart contracts</p>
                </div>

                <div>
                    <Row>
                        <Col md='6' sm='12'>
                            <div>
                                <label className='available-day-label'>
                                    <input type="checkbox" className='available-day-input' />
                                    <span className='available-day-span' style={{borderRight: 'none'}}>24H</span>
                                </label>
                                <label className='available-day-label'>
                                    <input type="checkbox" className='available-day-input' />
                                    <span className='available-day-span'  style={{borderRight: 'none',borderLeft: 'none'}}>7D</span>
                                </label>
                                <label className='available-day-label'>
                                    <input type="checkbox" className='available-day-input' />
                                    <span className='available-day-span' style={{borderLeft: 'none'}}>30D</span>
                                </label>
                            </div>
                            <div className='mt-5 d-flex ' style={{justifyContent: 'space-around'}}>
                                <div className="d-flex">
                                    <div className="">
                                        <p className="statics-sub-heads">USERS <span className="statics-quest-mark">?</span></p>
                                        <p className="statics-dollar-value">$13.6B</p>
                                        <p className="statics-minus-ratio">-0.55%</p>
                                    </div>
                                    <img src={rateImg} className="rate-iamge"/>
                                </div>
                                <div className="d-flex">
                                    <div className="">
                                        <p className="statics-sub-heads">TRANSACTIONS <span className="statics-quest-mark">?</span></p>
                                        <p className="statics-dollar-value">$6.73B</p>
                                        <p className="statics-minus-ratio">-1.8%</p>
                                    </div>
                                    <img src={rateImg} className="rate-iamge"/>
                                </div>
                            </div>

                            <div className='mt-2 d-flex  ' style={{justifyContent: 'space-around'}}>
                                <div className="d-flex">
                                    <div className="">
                                        <p className="statics-sub-heads">VOLUME <span className="statics-quest-mark">?</span></p>
                                        <p className="statics-dollar-value">$0</p>
                                        <p className="statics-minus-ratio">-50% </p>
                                    </div>
                                    <img src={rateImg1} className="rate-iamge1"/>
                                </div>

                                <div className="d-flex">
                                    <div className="">
                                        <p className="statics-sub-heads">BALANCE<span className="statics-quest-mark">?</span></p>
                                        <p className="statics-dollar-value">$61.04k</p>
                                        <p className="statics-plus-ratio">-0.44%</p>
                                    </div>
                                    <img src={rateImg1} className="rate-iamge1"/>
                                </div>
                            </div>

                            
                        </Col>
                        <Col md='6' sm='12'>
                            <label className='available-day-label'>
                                <input type="checkbox" className='available-day-input' />
                                <span className='available-day-span' style={{borderRight: 'none'}}>7D</span>
                            </label>
                            <label className='available-day-label'>
                                <input type="checkbox" className='available-day-input' />
                                <span className='available-day-span'  style={{borderRight: 'none',borderLeft: 'none'}}>30D</span>
                            </label>
                            <label className='available-day-label'>
                                <input type="checkbox" className='available-day-input' />
                                <span className='available-day-span' style={{borderLeft: 'none'}}>All</span>
                            </label>
                            <LineChart/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='7'>
                            <div>
                                <div className="mt-1 d-flex"> 
                                    <span className='tracking-text'>    For this data we are tracking : </span>
                                    <span className='tracking-text-bold'> 1 Metasaurs by Dr. DMT Smart Contracts </span>
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
