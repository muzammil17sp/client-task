import React from 'react'
import Table from "@mui/material/Table";

import TableData from "./TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "./data";
import "./content.css";

const Tabless = () => {
    return (
        <div >
            
          <div className="main">
            <TableContainer component={Paper}>
             <div className="row ">
        <div className="col-12 col-md-5"></div>
        <div className="col-12 col-md-7 ">
          <div className="row">
            <div className="col-4"><h6 style={{marginLeft:"1rem"}} align="">VOLUME</h6></div>
            <div className="col-4"><h6 style={{marginLeft:"1rem"}} align="">SCORE</h6></div>
            <div className="col-4"><h6 align="center">REVIEW</h6></div>
          </div>
        </div>
      </div> 
              <Table  aria-label="simple table" style={{backgroundColor:"#f5f6ff"}}>
               
                <TableBody>
                  {data.map((row) => (
                    <TableData row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination count={4} variant="outlined" color="primary" />
            </Stack>
          </div>
        </div>
    )
}

export default Tabless
