import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {AlertActions} from "@store/alert/alert-action";
import {ReducerTypes} from "@store/reducer";
import {Text} from '@elements'


const MaterialAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarAlert() {
  const alert = useSelector((state: ReducerTypes) => state.alert);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(AlertActions.hideAlert());
  }

  if (!alert) {
    return null
  }

  return (
    <Snackbar
      anchorOrigin={{vertical: 'top', horizontal: 'left'}}
      open={alert.isShow}
      onClose={handleClose}
      autoHideDuration={6000}>
      <MaterialAlert
        onClose={handleClose}
        severity={alert.severity}>
        <Text align={'right'} type={'medium'} typography={'tiny'} color={'common.white'}>
          {alert.text}
        </Text>
      </MaterialAlert>
    </Snackbar>
  );
}

export default SnackbarAlert;
