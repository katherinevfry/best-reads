import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader
} from 'reactstrap';

export default function ModalPop({
  showModal, setShowModal, title, component,
}) {
  const toggle = () => setShowModal(!showModal);
  return (
    <div>
      {showModal && <Modal id='modal' isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {component}
        </ModalBody>
      </Modal>
      }
    </div>
  );
}

ModalPop.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  title: PropTypes.string,
  component: PropTypes.any
};
