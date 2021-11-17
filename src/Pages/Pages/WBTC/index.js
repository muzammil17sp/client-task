import React from 'react'
import WbtcMain from './WbtcMain'
import WbtcStatics from './WbtcStatics'
import AdvanceData from './AdvanceData'
import SimilarDapps from './SimilarDapps'
function WBTC() {
    return (
        <div style={{backgroundColor:' #041941'}}>
            <WbtcMain/>
            <WbtcStatics/>
            <AdvanceData/>
            <SimilarDapps/>
        </div>
    )
}

export default WBTC
