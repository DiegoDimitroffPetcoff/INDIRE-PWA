import { useEffect, useRef, useState } from "react";
import { BlobConversor } from "../../../utils/blobConversor";

import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";

import { PDFMaker } from "../../../utils/pdfMaker";


export const AddProject = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); //
  const [errorMessage, setErrorMessage] = useState("Subir Projecto");

/* REDUCE UPLOAD FILE FUNCTION
DELETE BLOB FUNCTION AND CREATE A NEW ONE
TRY BETTER THE CALL MICROSOFHT GRAPH 
maybe I can add the loading in FetchPostMicrosoftGraph()
*/


const handleSubmite = async (e) => {
    //I TOOK AWAY THE COOKIE SAVER - I DONT SAVE THE PDF ON THE LOCAL STORAGE
    e.preventDefault();

    try {
      const newPDF = {
        title,
        address,
        description,
      };

      //CREATE PDF + CONVERT TO OUTPUT - TWO IN ONE
      let pdf = await PDFMaker(newPDF).output("datauristring")

      //SPLINT THE LINK UP TO DECODE 
      var url = pdf.split(",");
      var base64Data = url[1];

      //CONVERT TO BASE64
      var decodedData = window.atob(base64Data);

      //CONVERT TO A BLOB OBJECT
      const blob = new Blob([decodedData], { type: "application/pdf" });

      //CONVERT AND SAVE
      FetchPostMicrosoftGraph(blob);
      
      setTitle("");
      setAddress("");
      setDescription("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Hubo un problema al crear el PDF.");
    }
  };

 

  const handleFileChange = async (event) => {
    setFile(event.target.files[0]);
  };

  const SaveFile = async () => {
    if (file) {
      try {
        const pdfBlob = await BlobConversor(file);
        FetchPostMicrosoftGraph(pdfBlob);
        fileInputRef.current.value = null;
      } catch (error) {
        setErrorMessage(
          "Hubo un problema al subir el archivo. Por favor, inténtelo de nuevo más tarde."
        );
      }
    }
  };

  return (
    <>
      {errorMessage && <h1>{errorMessage}</h1>}

      <form onSubmit={handleSubmite}>
        <div id="prueba" className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            placeholder="Example: Description of the project"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            value={address}
            placeholder="Address Building"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Project Description Example
          </label>
          <textarea
            className="form-control"
            value={description}
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button>CREAR PDF </button>
        <input type="file" onChange={handleFileChange} />
      </form>

      <button
        onClick={() => {
          console.log("agregar funcion");
        }}
      >
        SUBIR PDF
      </button>
      <button onClick={SaveFile} ref={fileInputRef}>
        SUBIR FILE
      </button>

      <div
        className="btn-group"
        role="group"
        aria-label="Vertical radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio1"
        />

        <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
          Template 1
        </label>
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
          Template 2
        </label>
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio3"
          autoComplete="off"
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
          Template 3
        </label>
      </div>
    </>
  );
};
