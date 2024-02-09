import { useRef, useState } from "react";

import { PDFMakerFILE } from "../../../utils/pdfMakerFILE";

import { Summary } from "./Summary/summary";
import { AddInput } from "../../../hooks/AddInput";

import gral_descriptionTemplate from "../Templates/Gral_description.json";
import Button from "react-bootstrap/Button";

export const AddProject = ({
  data,
  setData,
  sections,
  setSections,
  setShowPreview,
  showPreview,
}) => {
  //Summary States------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------

  const [title, setTitle] = useState(data.title || "");
  const [sub_title, setSub_title] = useState(data.sub_title || "");
  const [address, setAddress] = useState(data.address || "");
  const [main_img_url, setMain_img_url] = useState(data.main_img_url || "");

  const [errorMessage, setErrorMessage] = useState("Redigir novo projeto");

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
        <Button variant="secondary"> PREVIEW</Button>
      </form>
    </div>
  );
};
