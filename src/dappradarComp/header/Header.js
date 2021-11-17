import React from 'react'
import './Header.css';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {



  return (
    <div>
      <div className="containers" style={{backgroundColor:'#006cff'}}>
        <div className="container"  >

          <nav className="navbar navbar-expand-lg main-navbar">
            <a className="navbar-brand" href="#"><b>DappRadar</b></a>
          
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <Box sx={{ color: 'action.active' }}>
                    <Badge color="secondary" variant="dot">
                     <AppsIcon style={{color:"white",fontSize:"2rem"}}/>
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
                  


              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ranking
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">ETH</a>
                    <a className="dropdown-item" href="#">Exchange</a>
                    <a className="dropdown-item" href="#">Uniswap</a>
                  </div>
                </li> 


                  
                  <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">NFTs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">DeFi</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Reports</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
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
                <div>
                <input className="form-control mr-sm-2 search-item" type="search" placeholder="Search" aria-label="Search" style={{position: 'relative'}} />
                  <SearchIcon className="search-icon"/>
                </div>

              </form>

              <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">

                  <li className="nav-item">
                    <a className="nav-link" href="#"><AccountCircleIcon style={{ fontSize: "2rem", marginTop: "5px", marginRight: "1rem" }} /></a>
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
                  <select className="form-select select-language" aria-label="Default select example">
                    <option selected>Chinnese</option>
                    <option value="1">Urdu</option>
                    <option value="2">EN</option>
                    <option value="3">Hindi</option>
                  </select>



                </ul>


              </form>

            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default Header;



