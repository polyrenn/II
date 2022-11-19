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
  import Modal2 from './Modal2';

function Modal1(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div className="modal1">
        <div className="relative">
        <img onClick={props.close} className="cancel" src="../static/x.svg"/>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/health-care-and-first-responders-with-masks/64/doctor-white-male-coronavirus-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/68-woman-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/male_glasses_hacker_people_man_programmer_avatar-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/boy_people_avatar_man_male_teenager_hood-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_occupation_career_people_male_engineer-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-02/64/police-officer-2-black-male-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/professions-bzzricon-filled-lines/512/05_Soldier-64.png" alt="icon" /></div>
            <div className="iconDiv"><img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/old_glasses_people_man_grandfather_avatar_beard-64.png" alt="icon" /></div>
            <div onClick={onOpen} className="button">
                <p>Add Someone</p>
            </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <Modal2 close={onClose}/>
                </ModalContent>
            </Modal>
        </div>
    )
}
export default Modal1;