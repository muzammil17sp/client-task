import React from 'react'
import './Header.css';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import User from './User'



const MainHeader = () => {



    return (
        <div >
            <div className="containers main-headers" style={{ backgroundColor: "#ffffff", width: "95%" }}>

                <nav style={{ backgroundColor: 'green!important' }} className="navbar navbar-expand-lg main-navbar">
                    <a className="navbar-brand" href="#"><b style={{ color: "#006cff" }}>DappRadar</b></a>

                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Box sx={{ color: 'action.active' }}>
                            <Badge color="secondary" variant="dot">
                                <AppsIcon style={{ color: "", fontSize: "2rem" }} />
                            </Badge>
                        </Box>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <MenuIcon />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">



                            {/* <li className="nav-item">
                  <Box sx={{ color: 'action.active' }}>
                    <Badge color="secondary" variant="dot">
                     <AppsIcon/>
                    </Badge>
                  </Box>
                </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                {/* <li className="nav-item active">
                    <a className="nav-link" href="#">Ranking <span className="sr-only">(current)</span></a>
                  </li> */}







                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'gray' }} href="#">Advertise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'gray' }} href="#">Marketplase</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'gray' }} href="#">Blog</a>
                                </li>


                                {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}

                            </ul>


                        </form>

                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href="#"><NotificationsIcon style={{ fontSize: "2rem", marginTop: "5px", color: "white", backgroundColor: "#d8d8d8", padding: "0 12px", width: "50px", borderRadius: "5px", marginRight: "1rem" }} /></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#"><AccountCircleIcon style={{ fontSize: "2rem", marginTop: "5px", color: "gray", marginRight: "1rem" }} /></a>
                                </li>



                                {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          EN
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}

                                <User/>
                                <select className="form-select " style={{ border: 'none', outline: "none",color:'gray' }} aria-label="Default select example">
                                    <option  selected>EN</option>
                                    <option value="1">Urdu</option>

                                    <option value="3">Hindi</option>
                                </select>



                            </ul>


                        </form>

                    </div>
                </nav>
                {/* </div> */}
            </div>

        </div>
    )
}

export default MainHeader;



