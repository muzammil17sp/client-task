import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../nftCollection/NftCollection.css'
import SideImage from './assest/image1.jpg'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Tableform from '../nftCollection/TableForm'
import BarImage from '../nftCollection/assest/bar1.jpg'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Content from '../content/Content'
import {useHistory} from 'react-router-dom'
import Tabless from '../content/Table'
import MainHeader from '../../dappradarComp/header/MainHeader'
import MainFooter from '../../dappradarComp/footer/MainFooter'



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const NftCollection = () => {

    const [value, setValue] = React.useState(0);
    const history =useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push("/")
        }
        
    }, [history])
    
    return (
        <>
             <MainHeader/>

        <div style={{ backgroundColor: '#041941' }}>
            <div className="container"> 
                <div className="row" style={{marginLeft:'-25px',marginRight:'-25px'}}>
                    <div className="col mt-4 border-green-hover">
                        {/* <nav style={{ backgroundColor: '#01112f', marginTop: '2rem', borderRadius: "20px" }} class="navbar navbar-light">
                            <a style={{ color: "black", backgroundColor: 'white', padding: " 10px 30px", position: 'absolute', borderRadius: "20px", left: '4px' }} class="navbar-brand" href="#">NFTs</a>
                            <a className="hover-bars" style={{ color: "white" }} class="navbar-brand" href="#">DeFi</a>
                            <a className="hover-bars" style={{ color: "white" }} class="navbar-brand" href="#">Games</a>
                            <a className="hover-bars" style={{ color: "white" }} class="navbar-brand" href="#">Gambling</a>
                            <a className="hover-bars" style={{ color: "white" }} class="navbar-brand" href="#">Exchange</a>

                        </nav> */}
                        <Box sx={{ width: '100%' }}>
                            <Box style={{ backgroundColor: '#01112f' }} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab className="tab-menu "  label="DeFi" {...a11yProps(0)} />
                                    <Tab className="tab-menu" label="NFTs" {...a11yProps(2)} />
                                    <Tab className="tab-menu" label="Dex" {...a11yProps(3)} />

                                </Tabs>
                            </Box >
                            <TabPanel value={value} index={0}>
                                <div className="row ml-0 mr-0">
                                    <div className="col-sm">
                                        <div>
                                            <h1 className="hover-bars" style={{ color: "white" }}>NFT Collections</h1>
                                        </div>
                                        <div>
                                            <p className="hover-bars" style={{ color: "white" }}>Ranking and analysis for NFT collections, discover the top NFT collections across multiple protocols including Ethereum,BSC,WIX and Flow.</p>
                                        </div>
                                        <div style={{ paddingTop: '4rem' }}>
                                            <hr style={{ backgroundColor: "#023179" }} />
                                        </div>

                                    </div>
                                    <div className="col-sm">

                                        <img style={{ width: '100%' }} src={SideImage} alt="" />

                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Stack sx={{ width: '100%' }} spacing={2}>
                                            <Alert style={{ backgroundColor: "#023179", color: "white", marginTop: '1rem' }} severity="error">NEW! Discover Loot NFT collections and projects - <a href="#">Explore Now</a></Alert>

                                        </Stack>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm mt-5 time-margin">
                                        <div>
                                            <button style={{ outline: "none", borderRadius: "5px", border: "none  " }}>New</button>
                                        </div>
                                        <div>
                                            <button className="btn-hover" style={{ outline: "none", borderRadius: "5px", border: "none  ", backgroundColor: "#041941", margin: "0 15px", color: "#506488" }}>1H</button>
                                            <button style={{ outline: "none", borderRadius: "5px", border: "none  " }}>24H</button>
                                            <button className="btn-hover" style={{ outline: "none", borderRadius: "5px", border: "none  ", backgroundColor: "#041941", color: "#506488", margin: "0 15px" }}>7D</button>
                                            <button className="btn-hover" style={{ outline: "none", borderRadius: "5px", border: "none  ", backgroundColor: "#041941", color: "#506488" }}>30D</button>
                                            <button className="btn-hover" style={{ outline: "none", borderRadius: "5px", border: "none  ", backgroundColor: "#041941", color: "#506488", margin: "0 15px" }}>All</button>



                                        </div>


                                    </div>



                                </div>
                                <div className="row header-bg mt-5 ml-0 mr-0">
                                    <div className="col-12 pl-0 pr-0 ">
                                        {/* <Tableform  /> */}
                                        <Tabless />
                                    </div>



                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div style={{ paddingTop: '4rem' }}>
                                            <hr style={{ backgroundColor: "#023179" }} />
                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm">
                                        <img style={{ width: "100%", position: "relative" }} src={BarImage} alt="" />
                                        <p style={{ color: "white", marginTop: '1rem', position: 'absolute', top: "4px", right: "3px", width: "80%", }}>Rise of the planets of the CiberKongs</p>

                                        <p style={{ color: "white", fontSize: '14px', marginTop: '1rem' }}>Rise of the planets of the CiberKongs</p>
                                    </div>
                                    <div className="col-sm">
                                        <img style={{ width: "100%", position: "relative" }} src={BarImage} alt="" />
                                        <p style={{ color: "white", marginTop: '1rem', position: 'absolute', top: "4px", right: "3px", width: "80%", }}>Eponym by Art AI stroms the charts</p>

                                        <p style={{ color: "white", fontSize: '14px', marginTop: '1rem' }}>Eponym by Art AI stroms the charts</p>


                                    </div>
                                    <div className="col-sm">
                                        <img style={{ width: "100%", position: "relative" }} src={BarImage} alt="" />
                                        <p style={{ color: "white", marginTop: '1rem', position: 'absolute', top: "4px", right: "3px", width: "80%", }}>Value, showcase and flip NFTs with DappRadar Portfolio</p>

                                        <p style={{ color: "white", fontSize: '14px', marginTop: '1rem' }}>Value, showcase and flip NFTs with DappRadar Portfolio </p>


                                    </div>
                                    <div className="col-sm">
                                        <img style={{ width: "100%", position: "relative" }} src={BarImage} alt="" />
                                        <p style={{ color: "white", marginTop: '1rem', position: 'absolute', top: "4px", right: "3px", width: "80%", }}>Fantasy Footbal and NFT Collection with FEVR</p>
                                        <p style={{ color: "white", fontSize: '14px', marginTop: '1rem' }}>Football NFT moments with Reallfevr and their their FEVR token</p>



                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div style={{ paddingTop: '4rem' }}>
                                            <hr style={{ backgroundColor: "#023179" }} />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <nav style={{ backgroundColor: '#01112f', marginTop: '2rem', borderRadius: "20px" }} class="navbar navbar-light">
                                            <a style={{ color: "black", backgroundColor: 'white', padding: " 10px 30px", position: 'absolute', borderRadius: "20px", left: '4px', cursor: "pointer" }} >NFTs</a>
                                            {/* <a className="hover-bars" style={{ color: "white" }} class="navbar-brand" href="#">DeFi</a> */}
                                            <a className="hover-bars" style={{ color: "white" }} href="#">Exchange</a>
                                            <a className="hover-bars" style={{ color: "white" }} >DeFi</a>
                                            <a className="hover-bars" style={{ color: "white" }}>Exchange</a>

                                        </nav>
                                    </div>
                                </div>

                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Content />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Content />

                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                Item Three
                            </TabPanel>
                        </Box>


                    </div>

                </div>

            </div>


        </div>
        <MainFooter/>

        </>
    )
}

export default NftCollection;
