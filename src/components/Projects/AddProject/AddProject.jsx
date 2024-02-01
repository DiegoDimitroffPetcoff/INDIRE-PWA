import { useEffect, useRef, useState } from "react";

import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";
import { PDFMaker } from "../../../utils/pdfMaker";
import { PDFMakerFILE } from "../../../utils/pdfMakerFILE";
import { Summary } from "./Summary/summary";
import gral_descriptionTemplate from "../Templates/Gral_description.json";
import { AddInput } from "./AddInput";

export const AddProject = ({ setData, setShowPreview, showPreview }) => {
  const [title, setTitle] = useState("");
  const [sub_title, setSub_title] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [gral_description, setGral_description] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [building_technical_inspection, setBuilding_technical_inspection] =
    useState("");
  const [base_element, setBase_element] = useState("");

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
      // PDFMakerHTML(document.getElementById("crearpdf"));

      /*       const newPDF = {
        title,
        sub_title,
        address,
        description,
        introduction,
      }; */
      const newPDF = {
        project_id: 1,
        user: 1,
        title,
        sub_title,
        main_img_url:
          "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        address,
        date: new Date(),
        project_number: "Ref.ª 19.11.12_RELATÓRIO_INSPEÇÃO_v1.0",
        description,
        introduction,
        gral_description,
        building_technical_inspection,
        base_element,
      };
      setData(newPDF);
      setShowPreview(!showPreview);
      /*       //CREATE PDF + CONVERT TO OUTPUT - TWO IN ONE
      let pdf = await PDFMaker(newPDF).output("datauristring");

      //SPLINT THE LINK UP TO DECODE
      var url = pdf.split(",");
      var base64Data = url[1];

      //CONVERT TO BASE64
      var decodedData = window.atob(base64Data);

      //CONVERT TO A BLOB OBJECT
      const blob = new Blob([decodedData], {
        type: "application/pdf,  charset=utf-8",
      });

      //CONVERT AND SAVE
      FetchPostMicrosoftGraph(blob); */
    } catch (error) {
      console.log(error);
      setErrorMessage("Hubo un problema al crear el PDF.");
    }
  };

  const handleFileChange = async (event) => {
    console.log(event.target.files);
    setFile(event.target.files[0]);
  };

  const SaveFile = async () => {
    if (file) {
      try {
        await PDFMakerFILE(file);
        fileInputRef.current.value = null;
      } catch (error) {
        setErrorMessage(
          "Hubo un problema al subir el archivo. Por favor, inténtelo de nuevo más tarde."
        );
      }
    }
  };

  return (
    <div id="projectPDF" style={{ width: "100%" }}>
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

        <AddInput
          Prop={introduction}
          setProp={setIntroduction}
          title="INTRODUÇÃO"
          placeholder="INTRODUÇÃO"
          templates={gral_descriptionTemplate}
        />

        <AddInput
          Prop={gral_description}
          setProp={setGral_description}
          title="DESCRIÇÃO GERAL"
          placeholder="DESCRIÇÃO GERAL"
          templates={gral_descriptionTemplate}
        />

        <AddInput
          Prop={building_technical_inspection}
          setProp={setBuilding_technical_inspection}
          title="INSPEÇÃO TÉCNICA AO EDIFÍCIO"
          placeholder="INSPEÇÃO TÉCNICA AO EDIFÍCIO"
          templates={gral_descriptionTemplate}
        />

        <AddInput
          Prop={base_element}
          setProp={setBase_element}
          title="ELEMENTOS BASE"
          placeholder="ELEMENTOS BASE"
          templates={gral_descriptionTemplate}
        />

        <br></br>
        {/*         <button style={{ background: "blue" }}>
          CREAR PDF CON FORM CONTENT{" "}
        </button> */}
        <button style={{ background: "green" }}> PREVIEW</button>
      </form>

      <button
        style={{ background: "pink" }}
        onClick={SaveFile}
        ref={fileInputRef}
      >
        SUBIR FILE
      </button>
      <input
        style={{ background: "pink" }}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};
