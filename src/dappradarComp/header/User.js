import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory, useLocation } from 'react-router-dom';
import './User.css'




export default function User() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userLogout, setuserLogout] = React.useState(false)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const history = useHistory();
  const Logout = () => {
    setAnchorEl(null);

    window.location.replace("/")
    // history.push("/login")
    localStorage.clear();
  }
  const Login = () => {
    window.location.replace("/")

  }

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-info"))
    if (!user) {
    }
  }, [userLogout])
  //   if(!JSON.parse(localStorage.getItem("user-info"))){
  //     history.push("/login");
  // }
  //   let user = JOSN.parse(localStorage.getItem("user-info"))

  return (
    <div>

      

      <div class="dropdown">
        <button class="dropbtn"><a style={{ color:"gray"}} href="/dashboard">Dashboard</a></button>
        <div class="dropdown-content">
        
          <a
          
          >{window.location.pathname == '/' ? <MenuItem onClick={Login}>Login</MenuItem> : <MenuItem onClick={Logout}>Logout</MenuItem>}
          </a>
        </div>
      </div>
    </div>

  );
}