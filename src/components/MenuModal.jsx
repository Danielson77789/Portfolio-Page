import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './css/MenuModal.css'
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi"
import { purple } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";




const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bgcolor: 'var(--background-color)',
  color: 'var(--font-default)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MenuModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  const navigateProjects = () => {
    navigate("/projects")
    setOpen(false)
  }

  const navigateHome = () => {
    navigate("/")
    setOpen(false)
  }


  return (
    <div>
      <Button onClick={handleOpen} color='secondary'><FiMenu size='20'/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modal'>
            <div className='modal-exit-container'>
              <Button onClick={handleClose} color='secondary'><IoClose size='30' /></Button>
            </div>
            <div className='button-container'>
              <div className='button'>
                <Button onClick={navigateHome} color='secondary' size='large' variant='outlined'>
                  <h2 className='button-content'>Home</h2>  
                </Button>
              </div>
              <div className='button'>
                <Button onClick={navigateProjects} color='secondary' size='large' variant='outlined'>
                  <h2 className='button-content'>Projects</h2>  
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default MenuModal