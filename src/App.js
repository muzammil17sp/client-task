import React from 'react'
// import PrimarySearchAppBar from './dappradarComp/header/Header'
// import MainHeader from './dappradarComp/header/MainHeader'
// import Footer from './dappradarComp/footer/Footer'
// import MainFooter from './dappradarComp/footer/MainFooter'
import NftCollection from './dappradarComp/nftCollection/NftCollection'
import Content from './dappradarComp/content/Content'
import Matasuar from './Pages/Matasaur/index'
import Uniswap from './Pages/UniSwap/index'
import WBTC from './Pages/WBTC/index'
import Dashboard from './dappradarComp/Dashboard/Dashboard'
import Login from './dappradarComp/registeration/Login'
import Register from './dappradarComp/registeration/Register'
import { useHistory } from 'react-router-dom'

import { BrowserRouter,Switch, Route } from "react-router-dom"

function App() {
const history = useHistory();
if(localStorage.getItem("user-info")){
    const {user} = JSON.parse(localStorage.getItem("user-info"))
    if(!user){
      history.push("/login")
   
     } 
     console.log("hi",user);
  }
 
  return (

    <div className="App"style={{overflowX:"hidden"}}>
      {/* <PrimarySearchAppBar /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact  component={Login} />
          <Route path="/register"  component={Register} />
         
          <Route path="/nftCollection" component={NftCollection} />
          <Route path="/content"  component={Content} />
          <Route path="/uniswap"  component={Uniswap} />
          <Route path="/matasuar"  component={Matasuar} />
          <Route path="/WBTC"  component={WBTC} />
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}



    </div>

  );
}

export default App;



