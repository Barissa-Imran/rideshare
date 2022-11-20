import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function TripModal(args) {
    console.log(args.props)
    const [modal, setModal] = useState(args.prop);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalBody>
                    Driver will arrive shortly
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-sm' color="primary" onClick={toggle}>
                        Okay
                    </Button>{' '}
                    <Button className='btn-sm' color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default TripModal;
