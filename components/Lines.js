import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
  import Report from "./Report";

  function Lines(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [emergency, setEmergency] = useState(props.title);
    const update = ()=>{
        onOpen();
        setEmergency(props.title);
    }
    return(
       <div onClick={update}>
            <div className="line">
                <img className="icon" src={props.icon} alt={props.title} />
                <p>{props.title}</p>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <Report
                    close={onClose}
                    display={emergency}
                />
                </ModalContent>
            </Modal>
       </div>
    )
}
export default Lines;