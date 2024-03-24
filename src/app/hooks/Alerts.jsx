import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

import { MdOutlineClear } from "react-icons/md";

export const Alerts = ({ message, type, closeOn }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    visible && (
      <>
        <Alert variant={type}>
          {message}{" "}
          <MdOutlineClear
            style={{ cursor: "pointer" }}
            onClick={() => closeOn()}
          />
        </Alert>
      </>
    )
  );
};
