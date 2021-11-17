import React from 'react'
import Coin from "./asset/coin.png";
import Modals from "./Model"
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RatingStar from './RatingStar';
import { TableCell } from "@mui/material";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
const TableRow = ({ row }) => {
  return (
    <div>
      <div className="row mr-0 ml-0 mb-3 pb-2 mt-2" style={{borderBottom:"1px solid rgb(224, 224, 224)"}}> 
        <div className="col-8 col-md-10">
          <div className="row mr-0 ml-0">
            <div className="col-2 col-md-2" align="left">
              
                <img  src={row.image} className="image-container" />
              
            </div>
            <div className="col-7 col-md-4 title-category" align="center">
              
                <div>
                  <td className="name-container">
                    {row.name}
                    <td>
                      <img src={Coin} alt="" />
                      {row.brandname}
                    </td>
                  </td>
                </div>
              
            </div>
            <div className="col-2 col-md-3">
              
                <td className="users-container mr-4">
                  <span>{row.upper}K</span>
                  <span className={row.red ? "color-red " : "color-green"}>
                    +{row.bottom}K
                  </span>
                </td>
              
            </div>
            <div className="col-12 col-md-3">
              <div className="starratting">

                {/* <div className="d-flex">
                  <p style={{ marginBottom: "0px", marginLeft: "-3rem" }}>4.9</p>
                  <AccessTimeIcon style={{ fontSize: "14px", marginLeft: "5px", marginTop: "2px" }} />
                </div> */}
                <div className='ratingstarss'>
                  <RatingStar />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-md-2">
          <div align="center">
            <div>
              <p style={{ marginBottom: "1px", fontSize: "10px" }}>Review 282</p>
            </div>
            <div>

              <Modals />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TableRow
