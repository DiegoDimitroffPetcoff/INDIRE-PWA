import { useState } from "react";
import { BlobConversor } from "../../../services/blobConversor";

import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";

import jsPDF from "jspdf";

export const AddProject = ({ GralInfoMock }) => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [documentContent, setDocumentContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("Subir Projecto");

  const [list, setList] = useState(GralInfoMock);

  function handleSubmite(e) {
    e.preventDefault();

    const newObject = {
      title,
      address,
      description,
    };

/*     let NewList = [...list, newObject];
    setList(NewList); */
   
    const pdf = new jsPDF();
    pdf.text(title  , 10, 10);
    // Agrega más contenido según sea necesario

    // Guarda el PDF en localStorage
    localStorage.setItem("PDFprueba", pdf.output("datauristring"));



    setTitle("");
    setAddress("");
    setDescription("");
    setDocumentContent("");
  }

  const readAndConvertPDF = async (file) => {
    try {
      const pdfBlob = await BlobConversor(file);

      setDocumentContent(pdfBlob);
      FetchPostMicrosoftGraph(pdfBlob);
    } catch (error) {
      setErrorMessage(
        "Hubo un problema al subir el archivo. Por favor, inténtelo de nuevo más tarde."
      );
      // console.error("Error converting PDF to Blob:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      readAndConvertPDF(file);
    }
  };

  const generarPDF = () => {
    console.log("generarPDF");
    const pdf = new jsPDF();
    pdf.text("Hola, este es mi PDF", 10, 10);
    // Agrega más contenido según sea necesario

    // Guarda el PDF en localStorage
    localStorage.setItem("PDFprueba", pdf.output("datauristring"));
  };

  const subir = async () => {
    //recupero el pdf del local storage
    let pdf = localStorage.getItem("PDFprueba");
    //quito la primera parte del pdf, dejando solo el codigo base64
    var url = pdf.split(",");
    var base64Data = url[1];
    //decodifico el pdf pasandolo a base64 desde
    var decodedData = window.atob(base64Data);
    //convierto el codifo en un objeto PDF
    const blob = new Blob([decodedData], { type: "application/pdf" });
    readAndConvertPDF(blob);
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
        <button>Crear PD y Cookie </button>
        <input type="file" onChange={handleFileChange} />
      </form>
     
      <button onClick={subir}>SUBIR</button>
      {/*TEMPLANTES:*/}
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
