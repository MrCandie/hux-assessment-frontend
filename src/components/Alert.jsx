import PropTypes from "prop-types";
import { Snackbar, Alert, Slide } from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function AlertComponent({
  message,
  open,
  onClose,
  duration = 6000,
  type,
}) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      autoHideDuration={duration}>
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

AlertComponent.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
  type: PropTypes.string,
  open: PropTypes.bool,
  duration: PropTypes.number,
};
