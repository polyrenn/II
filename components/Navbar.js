import Link from 'next/link';

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
import Modal1 from "../components/Modal1";

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div className="navbar">
            <div onClick={onOpen}>
                <img src="https://cdn2.iconfinder.com/data/icons/essential-web-1-1/50/group-customers-team-contacts-family-64.png" alt="contact" />
                <p>Network</p>
            </div>
            <Link href="/Feeds" legacyBehavior>
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/dates-and-times-1/16/05_bell-ring-alarm-notification-64.png" alt="location" />
                    <p>Feeds</p>
                </div>
            </Link>
            <Link href="/Main" legacyBehavior>
                <div>
                    <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-outline-64.png" alt="home" />
                    <p>Home</p>
                </div>
            </Link>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <Modal1 close={onClose}/>
                </ModalContent>
            </Modal>
        </div>
    )
}
export default Navbar;