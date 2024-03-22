import Button from "react-bootstrap/Button";
import { PDFMakerFILE } from "../../utils/pdfMakerFILE";

import "../../styles/global.css";
import { useState, useRef } from "react";

import { ErrorHandler } from "../../utils/errorHandler";

const UpploadFile = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [error, setError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");

  const handleFileChange1 = async (event) => {
    setFile(event.target.files[0]);
  };
  const SaveFile = async () => {
    if (file) {
      try {
        await PDFMakerFILE(file);
        fileInputRef.current.value = null;
      } catch (error) {
        setErrorDescription(error.message);
        setError(true);
      }
    }
  };
  return (
    <>
      {error ? <ErrorHandler errorDescription={errorDescription} /> : ""}

      <div
        style={{
          backgroundColor: "#dee2e6",
          borderRadius: "15px",
          padding: "15px",
          margin: "5px",
        }}
      >
        <input type="file" onChange={handleFileChange1} />
        <Button variant="secondary" onClick={SaveFile} ref={fileInputRef}>
          SUBIR FILE
        </Button>
      </div>
    </>
  );
};
export default UpploadFile;
