import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

const FormModal = ({ isOpen, onClose, children, title }) => {

    return (
        <>
        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textTransform='capitalize'>{ title }</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    { children }
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}

export default FormModal;
