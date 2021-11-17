import React,{useEffect} from 'react'
import WbtcMain from './WbtcMain'
import WbtcStatics from './WbtcStatics'
import AdvanceData from './AdvanceData'
import SimilarDapps from './SimilarDapps'
import {useHistory} from 'react-router-dom'


const Indexs = ()=> {


    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/")
        }

    }, [history])
    return (
        <div style={{ backgroundColor: ' #041941' }}>
            <WbtcMain />
            <WbtcStatics />
            <AdvanceData />
            <SimilarDapps />
        </div>
    )
}

export default Indexs;
