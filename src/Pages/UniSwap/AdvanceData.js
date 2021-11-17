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
                <h1 className='desc-wbtc-head'>What is Uniswap</h1>
                <p className='desc-wbtc-paragraph'>
                    uniswap is a protocol for exchanging ERC20 token on Ethereum eliminates trusted intermediatory and unncessary forms of rent 
                    extraction , allowing for fast , efficient , trading . Where it makes trades of decentralization cencorship, resisitence  and 
                    security for prioritized.
                    </p>           
       
                <hr className='under-desc-hr'/>
           </div>
        </div>

       
    )
}

export default AdvanceData
