import { useRef, useState } from "react";

import { PDFMakerFILE } from "../../../utils/pdfMakerFILE";

import { Summary } from "./Summary/summary";
import { AddInput } from "../../../hooks/AddInput";

import gral_descriptionTemplate from "../Templates/Gral_description.json";

export const AddProject = ({ data, setData, setShowPreview, showPreview }) => {
  console.log("se renderiza projectView");

  //Summary States------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------

  const [title, setTitle] = useState(data.title || "");
  const [sub_title, setSub_title] = useState(data.sub_title || "");
  const [address, setAddress] = useState(data.address || "");
  const [main_img_url, setMain_img_url] = useState(data.main_img_url || "");


  //File Sections---------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------
  const [sections, setSections] = useState([
    { content: "", title: "INTRODUÇÃO" },
    { content: "", title: "DESCRIÇÃO GERAL" },
    { content: "", title: "INSPEÇÃO TÉCNICA AO EDIFÍCIO" },
    { content: "", title: "ELEMENTOS BASE" },
    { content: "", title: "HISTÓRICO DE INTERVENÇÕES" },
    {
      content: "",
      title: "ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS",
    },
    { content: "", title: "RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO" },
    { content: "", title: "CONCLUSÕES" },
  ]);

  //File States---------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------
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
        sections,
      };

      setData(newPDF);
      setShowPreview(!showPreview);
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
        {sections.map((section, index) => (
          <AddInput
            Prop={section.content}
            setProp={(value) => {
              const updatedSection = [...sections];
              updatedSection[index].content = value;
              setSections(updatedSection);
            }}
            title={section.title}
            templates={gral_descriptionTemplate}
            key={index}
          />
        ))}
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
