import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import "froala-editor/css/froala_editor.pkgd.min.css";
import "./upload.css";




function Upload({ uploadData, setUploadData }) {



  // value={uploadData.description} onChange={(e)=>setUploadData({...uploadData,description:e.target.value})}

  const getUser = async () => {
    //    const {token} = JSON.parse(localStorage.getItem("user-info"))
    //    console.log("token",token)

    //     const response = await fetch("http://202.182.97.224:8080/api/dapp",{
    //         method: "POST",
    //         headers:{
    //             Authorization: `bearer ${token}`,
    //         }
    //     });
    //     const data = await response.json();
    //     console.log(data);
  }
  useEffect(() => {

    // axios.get("http://202.182.97.224:8080/api/dapp/create").then((res) => setstate(res.data));
    // getUser();

  }, []);


  return (
    <div className="container ">
      <form action="" className="upload_form">
        <label htmlFor="protocol">
          ADD PROTOCOL <span className="staric">*</span>
        </label>
        <div className="protocol_container">
          <input
            type="text"
            name="protocol"
            id="protocol"
            placeholder="Select Protocol"
          />
          <ArrowDropDownIcon />
        </div>
        
        {/* <label htmlFor="protocol">
          ADD Description <span className="staric">*</span>
        </label> */}
        {/* <div className="description_container">
          <FroalaEditorComponent tag="textarea" />
        </div>

        <div className="check-point">
          <div >
            <input type="checkbox" className="mr-2" />
          </div>
          <div>
            <p>Is your Dapp  mobile denisty? </p>

          </div>

        </div> */}
        {/* <label htmlFor="email">
          Email Address <span className="staric">*</span>
        </label>
        <div className="protocol_container col-6">
          <AlternateEmailIcon style={{ opacity: '.5' }} />
          <input
            type="text"
            name="email_address"
            id="email"
            placeholder="xyz@gmail.com"
          />
        </div> */}

        <div className="full_column">
          <div>
            <label htmlFor="wechat">
              REDIT (DEVELOPERS) <span className="staric">*</span>
            </label>
            <div className="protocol_container">
              {/* <img src="/icons/wechat.png" alt="" className="wechat_icon" /> */}

              <ForumOutlinedIcon style={{ opacity: '.5' }} />
              <input
                value={uploadData.redit}
                onChange={(e) => setUploadData({ ...uploadData, redit: e.target.value })}
                type="text"
                name="wechat"
                id="wechat"
                placeholder="https://www.redit.com/"
              />
            </div>
          </div>
          <div>
            <label htmlFor="telegram">
              TELEGRAM (DEVELOPER) <span className="staric">*</span>
            </label>
            <div className="protocol_container">
              <TelegramIcon style={{ opacity: '.5' }} />
              <input
                value={uploadData.telegram}
                onChange={(e) => setUploadData({ ...uploadData, telegram: e.target.value })}
                type="text"
                name="telegram"
                id="telegram"
                placeholder="xhttps://www.google.com/search?q=telegram"
              />
            </div>
          </div>
        </div>
        {/* <div className="social">
          <h4>Social</h4>

          <div className="full_column">
            <div style={{display:"flex"}} >
              <div style={{width:"100%"}} className="protocol_container">
                <TwitterIcon />
                <input 
                  type="text"
                  name="wechat"
                  id="wechat"
                  placeholder="https://www.wechat.com/"
                />
              </div>
              <div>
              <RemoveCircleIcon/>
              </div>
                
            </div>
            <div style={{display:"flex"}} className="">
              <div className="protocol_container">
                <FacebookIcon />
                <input
                  type="text"
                  name="telegram"
                  id="telegram"
                  placeholder="xhttps://www.google.com/search?q=telegram"
                />
              </div>
              <RemoveCircleIcon/>
              <div></div>
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Upload;
