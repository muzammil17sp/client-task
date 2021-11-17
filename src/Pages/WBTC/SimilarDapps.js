import React,{useState} from 'react'
import {Row,Col} from 'reactstrap'
import './styles/SimilarDapps.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Ads1 from '../../assets/images/ads-1.PNG'
import Ads2 from '../../assets/images/ads-2.PNG'
function SimilarDapps() {

    const [dappsList,setDappList]=useState([
        {head:'Nominex (NMX)',text:'BSC'},
        {head:'YieldParrot',text:'BSC'},
        {head:'PolyPlay ',text:'BSC'},
        {head:'DeFis Network',text:'EOS'},
        {head:'Sonic Swap',text:'HARMONY'},
        {head:'1inch Network',text:'POLYGON'},
    ])
    return (
        <div className="container">
            <div className="mt-5 d-flex">
                <ArrowForwardIcon className="similar-dapps-arrow"/>
                <div className="">
                    <h2 className="similar-dapps">SIMILAR DAPPS YOU MAY LIKE</h2>
                    <p className="similar-dapps-text"> Explore more popular decentralized applications</p>
                </div>
            </div>

            <div>
                <Row>
                    {dappsList && dappsList.map((item,index)=>{
                        return(
                            <Col md='2' sm='12'>
                                <div className='dapp-content-div mb-2'>
                                    <h3 className='dapp-content-head'>{item.head}</h3>
                                    <p className='dapp-content-text'>{item.text}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>

            <div className='mt-5 pb-5'>
                <Row>
                    <Col md='6' sm='12'>
                        <img src={Ads1} className='ads-image'/>
                    </Col>
                    <Col md='6' sm='12'>
                        <img src={Ads2} className='ads-image'/>
                    </Col>
                </Row>
            </div>


        </div>
    )
}

export default SimilarDapps
