import React, {forwardRef} from 'react'
import {Modal as MaterialModal} from '@mui/material'
import {ModalProps} from './modal.props'
import {styled} from '@mui/material/styles'

const StyledModal = styled(MaterialModal)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  backdrop-filter: blur(10px);
`;

const Modal = forwardRef<any, ModalProps>(function Modal(props, ref) {
  const {open, children, onClose, closeAfterTransition, className, ...rest} = props;

  return (
      <StyledModal className={className} closeAfterTransition={closeAfterTransition} onClose={onClose} open={open} {...rest} ref={ref}>
        {children}
      </StyledModal>
  )
});

export default Modal;
