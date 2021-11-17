import React,{ useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Modal.css'
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import RatingStar from './RatingStar'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {

  const [text,settext]=useState(false)


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
  settext(true)
    
    setOpen(true);}
  const handleClose = () => setOpen(false);


  return (
    <div>
{text?

      <Button style={{ backgroundColor: "#35bf62", color: "white", padding: "5px 1rem", borderRadius: "1rem", fontSize: "12px",border:"none",outline: "none"}} onClick={handleOpen}><CheckIcon style={{width:"17px"}}/> Voted</Button>
      :
      <Button style={{ backgroundColor: "red", color: "white", padding: "6px 1.7rem", borderRadius: "1rem", fontSize: "12px",border:"none",outline: "none"}} onClick={handleOpen}>Vote</Button>
}

<div className="row">
  <div className="col">
  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="model-menu" sx={style}>
            <div>
              <p className="mb-0"><b style={{ color: 'black',opacity:0.8 }}>Rate your recent experience</b></p>
            </div>

            
            <RatingStar/>

            <div>
              <p className="mb-0"><b style={{ color: 'black',opacity:0.8 }}>Tell us about your experience</b></p>
            </div>
            <div>
              <p className="mt-2 mb-2" style={{ color: 'black', marginBottom: "0" }}> <a style={{ color: 'gray',fontSize:'0.875rem',borderBottom:'1px solid',cursor:'pointer'  }} >Read our Guidelines for Reviewers</a> </p>
            </div>
            <div>
              <form>
              <div class="form-group">
                <textarea style={{ fontSize: '1rem',height: '10rem',resize:"none",letterSpacing:"0.5px",padding: "10px 16px"}} class="form-control" placeholder="This is where you write your review. Explain what happened, and leave out offensive words. Keep your feedback honest, helpful, and constructive." id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form></div>
            <div>
              <p style={{ color: 'gray', marginBottom: "0" }}> <a className="mt-1 mb-2" style={{ color: 'gray',fontSize:'14px',borderBottom:'1px solid',cursor:'pointer' }} >How to write a useful review</a> </p>
            </div>
            <div>
              <p className="mb-0"><b style={{ color: '#454554' }}>Give your review a title</b></p>
            </div>
            <div >
            

<div class="input-group mt-2" style={{height:'2rem'}}>
  <input type="text" style={{fontSize:'1rem'}} placeholder="Write the title of your review here." class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <div class="input-group-append">
   
    <span class="input-group-text"><CreateIcon style={{opacity:"0.5"}}/></span>
  </div>
</div>
             
            </div>


          </Box>
        </Fade>
      </Modal>
  </div>
</div>
  
    </div>
  );
}
