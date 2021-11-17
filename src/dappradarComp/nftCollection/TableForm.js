import React from 'react';
import { Table } from 'reactstrap';
import tableimag from '../nftCollection/assest/tableImage1.png'
import tableimagTwo from '../nftCollection/assest/image2.png'
import tableimagThree from '../nftCollection/assest/image3.png'
import tableimagFour from '../nftCollection/assest/image4.png'
import tableimagFive from '../nftCollection/assest/image5.png'


const Example = (props) => {
  return (
    <div  className="container">
    <Table >
      <thead>
        <tr>
          
          <th className="table-heading">COLLECTIONS </th>
          <th className="table-heading">
          <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">

                  <select style={{border:"none"}} className="form-select table-dropdown"  aria-label="Default select example">
                    <option selected>VOLUME</option>
                    {/* <option value="1">Urdu</option>
                    <option value="2">EN</option>
                    <option value="3">Hindi</option> */}
                  </select>



                </ul>


              </form>
          </th>
          <th className="table-heading">
          <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">

                  <select style={{border:"none"}} className="form-select table-dropdown"  aria-label="Default select example">
                    <option selected>TRADERS</option>
                    {/* <option value="1">Urdu</option>
                    <option value="2">EN</option>
                    <option value="3">Hindi</option> */}
                  </select>



                </ul>


              </form>
              </th>
          <th className="table-heading">
          <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">

                  <select style={{border:"none"}} className="form-select table-dropdown"  aria-label="Default select example">
                    <option selected>SALES</option>
                    {/* <option value="1">Urdu</option>
                    <option value="2">EN</option>
                    <option value="3">Hindi</option> */}
                  </select>



                </ul>


              </form></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td className="icon-lists">
            <div>
              <span className="mr-2">1</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimag} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
         
          <td className="icon-lists">
          <div>
          <span className="mr-2">2</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagThree} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td >
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
        
          <td className="icon-lists">
          <div>
          <span className="mr-2">3</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagTwo} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
         
          <td className="icon-lists">
          <div>
          <span className="mr-2">4</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagThree} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>Axes infinity</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
        
          <td className="icon-lists">
          <div>
          <span className="mr-2">5</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagFour} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
          
          <td className="icon-lists">
          <div>
          <span className="mr-2">6</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagFive} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>Axes infinity</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
          
          <td className="icon-lists">
          <div>
          <span className="mr-2">7</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagThree} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MutantCatas</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
          
          <td className="icon-lists">
          <div>
          <span className="mr-2">8</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagFour} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
       
          <td className="icon-lists">
          <div>
          <span className="mr-2">9</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagFive} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
      
          <td className="icon-lists">
          <div>
          <span className="mr-2">10</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagFive} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
         
          <td className="icon-lists">
          <div>
          <span className="mr-2">11</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagTwo} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
        
          <td className="icon-lists">
          <div>
          <span className="mr-2">12</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimagThree} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}> ETH</p></div><i class="fab fa-ethereum fa-3x"></i>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"red"}}>121.47%</spane></div>
          </td>
        </tr>
        <tr>
    
          <td className="icon-lists">
          <div>
          <span className="mr-2">13</span>
              <img style={{width:"40px",marginRight: "10px"}} src={tableimag} alt="" />
            </div>
            <div >
            <div>
              <p style={{marginBottom:"0"}} ><span style={{backgroundColor:"#ffb201",color:"white",marginRight:"0.5rem"}}>New</span>MekaVerse</p>
            </div>
            <div>
              <div><p style={{fontSize:"12px", marginBottom: "0"}}>ETH</p></div>
            </div>
            </div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
          <td>
            <div><spane style={{fontSize:"12px"}}>17.2M</spane></div>
            <div><spane style={{fontSize:"12px",color:"green"}}>121.47%</spane></div>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Example;