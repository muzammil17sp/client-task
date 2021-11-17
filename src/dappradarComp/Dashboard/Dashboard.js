import React,{useEffect} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MainHeader from '../../dappradarComp/header/MainHeader'
import MainFooter from '../../dappradarComp/footer/MainFooter'
import {useHistory} from 'react-router-dom'

import LeadingPage from '../Dashboard/LeadingPage'
const Dashboard = () => {

    const history =useHistory();
    // useEffect(() => {
    //     if(!localStorage.getItem('user-info')){
    //         history.push("/")
    //     }
        
    // }, [history])

    return (
        <div>
            {/* <Header/> */}
            <MainHeader/>

            <LeadingPage/>
            <MainFooter/>

            {/* <Footer/> */}
            
        </div>
    )
}

export default Dashboard
