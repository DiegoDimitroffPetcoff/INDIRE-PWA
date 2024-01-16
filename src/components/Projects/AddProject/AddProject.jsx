import { useState } from "react";
import { BlobConversor } from "../../../services/blobConversor";

import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";

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

    let NewList = [...list, newObject];
    setList(NewList);
    console.log(list);
    setTitle("");
    setAddress("");
    setDescription("");
    setDocumentContent("");
  }

  const readAndConvertPDF = async (file) => {
    try {
      const pdfBlob = await BlobConversor(file);
     // setDocumentContent(pdfBlob);
      FetchPostMicrosoftGraph(pdfBlob)
    } catch (error) {
      setErrorMessage(error.message || "Hubo un problema al subir el archivo. Por favor, inténtelo de nuevo más tarde.");
     // console.error("Error converting PDF to Blob:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      readAndConvertPDF(file);
    }
  };

  return (
    <>
      {errorMessage && <h1>{errorMessage}</h1>}

      <form onSubmit={handleSubmite}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
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
          <label for="exampleFormControlInput1" className="form-label">
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
          <label for="exampleFormControlTextarea1" className="form-label">
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
        <button>AGREGAR</button>
        <input type="file" onChange={handleFileChange} />
      </form>

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
          autocomplete="off"
          checked
        />

        <label className="btn btn-outline-danger" for="vbtn-radio1">
          Template 1
        </label>
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autocomplete="off"
        />
        <label className="btn btn-outline-danger" for="vbtn-radio2">
          Template 2
        </label>
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio3"
          autocomplete="off"
        />
        <label className="btn btn-outline-danger" for="vbtn-radio3">
          Template 3
        </label>
      </div>
    </>
  );
};
