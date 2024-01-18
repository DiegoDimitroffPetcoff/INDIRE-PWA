import { useEffect, useRef, useState } from "react";
import { BlobConversor } from "../../../utils/blobConversor";

import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";

import jsPDF from "jspdf";
import { PDFMaker } from "../../../utils/pdfMaker";

export const AddProject = ({ GralInfoMock }) => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); //
  const [errorMessage, setErrorMessage] = useState("Subir Projecto");
  const [loading, setLoading] = useState(false);

  const handleSubmite = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      console.log(loading);
      const newPDF = {
        title,
        address,
        description,
      };
      //Create PDF
      const pdf = PDFMaker(newPDF);
      //Save the PFD on LocalStorage with "PDF"
      localStorage.setItem("PDF", pdf.output("datauristring"));
      //The PDF is gonna be download automatly
      pdf.save("pdfPrueba");

      setTitle("");
      setAddress("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  const SaveOnOneDrive = async () => {
    //recupero el pdf del local storage
    let pdf = localStorage.getItem("PDF");
    //quito la primera parte del pdf, dejando solo el codigo base64
    var url = pdf.split(",");
    var base64Data = url[1];
    //decodifico el pdf pasandolo a base64 desde
    var decodedData = window.atob(base64Data);
    //convierto el codifo en un objeto PDF
    const blob = new Blob([decodedData], { type: "application/pdf" });
    readAndConvertPDF(blob);
  };

  const readAndConvertPDF = async (file) => {
    try {
      const pdfBlob = await BlobConversor(file);
      FetchPostMicrosoftGraph(pdfBlob);
    } catch (error) {
      setErrorMessage(
        "Hubo un problema al subir el archivo. Por favor, inténtelo de nuevo más tarde."
      );
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
        <div className="mb-3">
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
        {loading ? "Cargando" : <button>CREAR PDF </button>}
        {loading ? " " : <input type="file" onChange={handleFileChange} />}
      </form>

      <button onClick={SaveOnOneDrive}>SUBIR PDF</button>
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
