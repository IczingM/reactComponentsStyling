import React from "react";
import SuccessIcon from "../assets/icons/success.svg";
import ErrorIcon from "../assets/icons/error.svg";
import WarningIcon from "../assets/icons/warning.svg";
import InfoIcon from "../assets/icons/info.svg";

const icons = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
  };

function Alert({ type, message }) {
  const styles = {
    success: {
      backgroundColor: "#D4EDDA",
      color: "#155724",
      padding: "10px",
      border: "1px solid #C3E6CB",
      borderRadius: "5px",
    },
    error: {
      backgroundColor: "#F8D7DA",
      color: "#721C24",
      padding: "10px",
      border: "1px solid #F5C6CB",
      borderRadius: "5px",
    },
    warning: {
      backgroundColor: "#FFF3CD",
      color: "#856404",
      padding: "10px",
      border: "1px solid #FFEEBA",
      borderRadius: "5px",
    },
    info: {
      backgroundColor: "#D1ECF1",
      color: "#0C5460",
      padding: "10px",
      border: "1px solid #BEE5EB",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles[type]}>
      <img
        src={icons[type]}
        alt={`${type} icon`}
        style={{ width: "24px", height: "24px" }}
      />
      <span className="alert-message">{message}</span>
    </div>
  );
}

export default Alert;
