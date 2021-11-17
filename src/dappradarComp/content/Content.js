import React,{useEffect} from "react";
import Image from "./asset/img1.png";
import Image2 from "./asset/img2.png";
import Tabless from './Table'
import "./content.css";
import {useHistory} from 'react-router-dom'



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


function Content() {
  const history =useHistory();
  useEffect(() => {
      if(!localStorage.getItem('user-info')){
          history.push("/")
      }
      
  }, [history])


  return (
    <div className="content-bg">
      <div className="container" style={{paddingLeft:"0px",paddingRight:"0px"}}>
        <p className="content-heading">Top Decentralized Exchange</p>
        <div className="container"style={{paddingLeft:"0px",paddingRight:"0px"}}>
          <div className="content-btn-container">
            <button className="content-btn">New</button>
            <div className="content-btn-subContainer">
              <button className="content-btn  fisrt-btn">24H</button>
              <button className="content-btn btns">7D</button>
              <button className="content-btn btns">30D</button>
            </div>
          </div>
          <Tabless />

          <div className="bottom-imageContainer">
            <div>
              <img src={Image} alt="" />
            </div>
            <div className="bottom-imageContainer2">
              <img src={Image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
