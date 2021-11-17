import React from "react";
import { TableRow, TableCell } from "@mui/material";
import Coin from "./asset/coin.png";
import Modals from "./Model"
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RatingStar from './RatingStar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function TableRo({ row }) {
  return (
    <>
    
    <TableRow 
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
     

<div className="row" style={{borderBottom:"1px solid rgba(224, 224, 224, 1)"}}>
  {/* <div className="col-12 col-sm-6 col-md-1 ">
  <TableCell component="th" >
        {row.id}
      </TableCell>
  </div> */}
  <div className="col-2 col-sm-6 col-md-2" style={{paddingLeft: '77px!important'}}>

  <TableCell component="td" scope="row">
        <img src={row.image} className="image-container" />
      </TableCell>
  </div>
  <div className="col-6 col-sm-6 col-md-3">
  <TableCell align="right">
        <div>
          <td className="name-container">
            {row.name}
            <td>
              <img src={Coin} alt="" />
              {row.brandname}
            </td>
          </td>
        </div>
      </TableCell>
  </div>
  {/* <div className="col-12 col-sm-6 col-md-1">
  <TableCell align="right">
        <td className="category">{row.category}</td>
      </TableCell>
  </div> */}
  <div className="col-2 col-sm-6 col-md-2">
  <TableCell align="right">
        <td className="users-container">
          <span>{row.upper}K</span>
          <span className={row.red ? "color-red " : "color-green"}>
            +{row.bottom}K
          </span>
        </td>
      </TableCell>
  </div>
  <div className="col-7 col-sm-6 col-md-3">
  <TableCell align="">
        <div className="starratting">
         
          <div className="d-flex">
            <p  style={{marginBottom:"0px",marginLeft:"-3rem"}}>4.9</p>
            <AccessTimeIcon style={{fontSize:"14px",marginLeft:"5px",marginTop:"2px"}}/>
            </div>
          <div className='ratingstarss'>
            <RatingStar />
          </div>

        </div>



      </TableCell>
  </div>
  <div className="col-4 col-md-1">
  <TableCell align="right">
        <div>
          <div>
            <p style={{ marginBottom: "1px", fontSize: "10px" }}>Review 282</p>
          </div>
          <div>

            <Modals />
          </div>

        </div>
      </TableCell>     
  </div>

  

</div>

      

      





    </TableRow>
    </>
  );
}

export default TableRo;
