import { useRef, useState } from "react";

import { PDFMakerFILE } from "../../../utils/pdfMakerFILE";

import { Summary } from "./Summary/summary";
import { AddInput } from "../../../hooks/AddInput";

import gral_descriptionTemplate from "../Templates/Gral_description.json";

export const AddProject = ({ setData, setShowPreview, showPreview, data }) => {
  //Summary States:
  const [title, setTitle] = useState(data.title || "");
  const [sub_title, setSub_title] = useState(data.sub_title || "");
  const [address, setAddress] = useState(data.address || "");
  //const [description, setDescription] = useState(data.description || "");
  const [main_img_url, setMain_img_url] = useState(data.main_img_url || "");

  //Sections Statnes

  const [introduction, setIntroduction] = useState(data.introduction || "");
  const [gral_description, setGral_description] = useState(
    data.gral_description || ""
  );
  const [building_technical_inspection, setBuilding_technical_inspection] =
    useState(data.building_technical_inspection || "");
  const [base_element, setBase_element] = useState(data.base_element || "");

  const [history, setHistory] = useState(data.base_element || "");
  const [elemento, setElemento] = useState(data.base_element || "");
  const [recommendations, setRecommendations] = useState(
    data.base_element || ""
  );
  const [conclusions, setConclusions] = useState(data.base_element || "");

  //File States
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); //
  const [errorMessage, setErrorMessage] = useState("Subir Projecto");

  const handleSubmite = async (e) => {
    e.preventDefault();

    try {
      const newPDF = {
        project_id: 1,
        user: 1,
        title,
        sub_title,
        main_img_url,
        address,
        project_number: "Ref.ª 19.11.12_RELATÓRIO_INSPEÇÃO_v1.0",
        introduction,
        gral_description,
        building_technical_inspection,
        base_element,
        history,
        elemento,
        recommendations,
        conclusions,
        
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

  const handleFileChange1 = async (event) => {
    console.log("ADD PROJECT");
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
    <div style={{ width: "100%" }}>
      {errorMessage && <h1>{errorMessage}</h1>}

      <form onSubmit={handleSubmite}>
        <Summary
          setTitle={setTitle}
          title={title}
          setSub_title={setSub_title}
          sub_title={sub_title}
          setAddress={setAddress}
          adrress={address}
          setMain_img_url={setMain_img_url}
          main_img_url={main_img_url}
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

        <AddInput
          Prop={history}
          setProp={setHistory}
          title="HISTÓRICO DE INTERVENÇÕES"
          placeholder="HISTÓRICO DE INTERVENÇÕES"
          templates={gral_descriptionTemplate}
        />
        <AddInput
          Prop={elemento}
          setProp={setElemento}
          title=" ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS"
          placeholder=" ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS"
          templates={gral_descriptionTemplate}
        />
        <AddInput
          Prop={recommendations}
          setProp={setRecommendations}
          title=" RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO"
          placeholder=" RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO"
          templates={gral_descriptionTemplate}
        />
        <AddInput
          Prop={conclusions}
          setProp={setConclusions}
          title="CONCLUSÕES"
          placeholder="CONCLUSÕES"
          templates={gral_descriptionTemplate}
        />

        <br></br>

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
        onChange={handleFileChange1}
      />
    </div>
  );
};
