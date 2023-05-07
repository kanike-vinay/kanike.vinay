import { Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

type Props = {
  type: string;
  message: string;
  openAlert: boolean;
  callback: Function;
};

const AlertToast = (props: Props) => {
  const handleClose = () => {
    props.callback();
  };

  return (
    <Fragment>
      {props.openAlert && props.type === "info" && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="info"
          variant="filled"
        >
          {props.message}
        </Alert>
      )}
      {props.openAlert && props.type === "error" && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="error"
          variant="filled"
        >
          {props.message}
        </Alert>
      )}
      {props.openAlert && props.type === "warning" && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="warning"
          variant="filled"
        >
          {props.message}
        </Alert>
      )}
      {props.openAlert && props.type === "success" && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="success"
          variant="filled"
        >
          {props.message}
        </Alert>
      )}
    </Fragment>
  );
};

export default AlertToast;
