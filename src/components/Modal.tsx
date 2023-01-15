import React, { useContext } from 'react';
import { ContextPags } from '../context/CreateContext';
import Modal from 'react-modal'

import close from '../../public/svg/close_48.svg'
import '../styles/components/modal.sass'

Modal.setAppElement('#root')

const ModalPage =  ({children}: any) => {

    const {open, setOpen} = useContext(ContextPags);
    const closeModal = () =>setOpen(false);
    
    return (  
         <Modal
            isOpen={open}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="overlay"
            >
            <button onClick={closeModal}><img src={close} alt=""/></button>
              
            <section className='modal-text'>
                {children}
            </section>
        </Modal> 
    );
};
export default ModalPage ;