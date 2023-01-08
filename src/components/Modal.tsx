import React, { useContext } from 'react';
import {Modal} from '@mui/material'
import { ContextPags } from '../context/CreateContext';

import '../styles/components/modal.sass'



const ModalPage =  ({children}: any) => {
    const {open, setOpen} = useContext(ContextPags);
    return (
        <Modal
   
            open={open}
            onClose={ ()=> setOpen(false)}
            >
            <div className='modal'>
                {children}
            </div>
        </Modal>
    );
};

export default ModalPage ;