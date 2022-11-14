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

const DangerList = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [emergency, setEmergency] = useState(props.title);
    const update = ()=>{
        onOpen();
        setEmergency(props.title);
    }
    return(
        <div>
            <li onClick={update}>
                <div>
                    <img src={props.image} alt={props.title}/>
                    <h3>{props.title}</h3>
                </div>
            </li>
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
export default DangerList;