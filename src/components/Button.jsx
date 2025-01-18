import React from "react";

function Button({ type, children }) {
  const styles = {
    primary: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    secondary: {
      backgroundColor: "#17A2B8",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
      error: {
        backgroundColor: "#DC3545",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
      success: {
        backgroundColor: "#28A745",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
  };

  return <button style={styles[type]}>{children}</button>;
}

export default Button;

