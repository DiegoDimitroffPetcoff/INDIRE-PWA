import { useEffect, useRef, useState } from "react";

import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";

import Templates from "../Templates/Introduction.json";

import { PDFMaker } from "../../../utils/pdfMaker";
import { BlobConversor } from "../../../utils/blobConversor";
import { IntroductionInput } from "./ProjectSections/introduction/introductionInput";
import { Summary } from "./Summary/summary";
import { Gral_description } from "./ProjectSections/gral_description/gral_description";

import { jsPDF } from "jspdf";
import { PDFMakerHTML } from "../../../utils/pdfMakerHTML";

export const AddProject = () => {
  const [title, setTitle] = useState("");
  const [sub_title, setSub_title] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [gral_description, setGral_description] = useState("");
  const [introduction, setIntroduction] = useState("");

  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); //
  const [errorMessage, setErrorMessage] = useState("Subir Projecto");

  /* REDUCE UPLOAD FILE FUNCTION
DELETE BLOB FUNCTION AND CREATE A NEW ONE
TRY BETTER THE CALL MICROSOFHT GRAPH 
maybe I can add the loading
*/

  const handleSubmite = async (e) => {
    //I TOOK AWAY THE COOKIE SAVER - I DONT SAVE THE PDF ON THE LOCAL STORAGE
    //I CREATED PDF WITH HTML
    e.preventDefault();

    try {
      PDFMakerHTML(document.getElementById("crearpdf"));
      /*
      const newPDF = {
        title,
        sub_title,
        address,
        description,
        introduction,
      };

      //CREATE PDF + CONVERT TO OUTPUT - TWO IN ONE
      let pdf = await PDFMaker(newPDF).output("datauristring");
      
      //SPLINT THE LINK UP TO DECODE
      var url = pdf.split(",");
      var base64Data = url[1];

      //CONVERT TO BASE64
      var decodedData = window.atob(base64Data);

      //CONVERT TO A BLOB OBJECT
      const blob = new Blob([decodedData], { type: "application/pdf" });

      //CONVERT AND SAVE
      //FetchPostMicrosoftGraph(blob); */

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
    <div id="projectPDF" style={{width:"100%"}} >
      {errorMessage && <h1>{errorMessage}</h1>}

      <form onSubmit={handleSubmite}>
        <Summary
          setTitle={setTitle}
          title={title}
          setSub_title={setSub_title}
          sub_title={sub_title}
          setAddress={setAddress}
          adrress={address}
        />

        <IntroductionInput
          introduction={introduction}
          setIntroduction={setIntroduction}
        />
        <Gral_description
          gral_description={gral_description}
          setGral_description={setGral_description}
          
        />

        <button>CREAR PDF CON HTML </button>
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
      <br></br>
    </div>
  );
};
