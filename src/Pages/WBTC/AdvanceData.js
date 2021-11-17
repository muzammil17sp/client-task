import React from 'react'
import {Row,Col} from 'reactstrap'
import './styles/AdvanceData.css'
function AdvanceData() {
    return (
        <div className='container'>
           <div className=''>
            <div className='mt-3 p-3 advancedata-main'>
                    <Row>
                        <Col md='6' sm='12'>
                            <h2 className='advance-data-head'>Advanced data</h2>
                            <p className='advance-data-text'>See more in-depth analytics</p>
                        </Col>
                        <Col md='6'  sm='12'>
                            <div  className='d-flex justify-content-end'>
                                <button className='go-advance-btn'>Go Advanced</button>
                            </div>
                        </Col>
                    </Row>
                </div>  
                <p className='mt-4 desc-head'>Description</p>  
                <h1 className='desc-wbtc-head'>What is WBTC</h1>
                <p className='desc-wbtc-paragraph'>WBTC brings great liquidity to Ethereum ecosystem including decenntralized exchanges (DEXs) and financial applications.
                    Today the majority of trading volume takes place on centralized exchanges with Bitcoin.WBTC changes that, bringing Bitcoins
                    liquidity to DEXs and make it possible to use Bitcoins for token trades.WBTC centralized bitcoin tp ERC20 format creating smart 
                    contracts for Bitcoin.This makes easier to write smart contracts that integrate bitcoin transfers.Maintaining various nodes
                    and managing transactions types in order to support multiple currencies on eonerous. Now exchanges, wallets and payemnt apps 
                    only need to handle an Ethereum node</p>           
       
                <hr className='under-desc-hr'/>
           </div>
        </div>

       
    )
}

export default AdvanceData
