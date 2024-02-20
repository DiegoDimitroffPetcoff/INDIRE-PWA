import { useState } from "react";

import { Summary } from "./Summary/summary";
import { AddInput } from "../../../hooks/AddInput";

import Button from "react-bootstrap/Button";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const EditeProject = ({ dataToEdite }) => {
  const sections = dataToEdite.sections;
  const [title, setTitle] = useState(dataToEdite.title || "");
  const [sub_title, setSub_title] = useState(dataToEdite.sub_title || "");
  const [address, setAddress] = useState(dataToEdite.address || "");
  const [main_img_url, setMain_img_url] = useState(
    dataToEdite.main_img_url || ""
  );

  const [errorMessage, setErrorMessage] = useState("Editar");

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
        sections: dataToEdite.sections,
      };
      /*
      setData(newPDF);
      setShowPreview(!showPreview);*/
    } catch (error) {
      console.log(error);
      setErrorMessage("Hubo un problema al crear el PDF.");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {errorMessage && <h1>{errorMessage}</h1>}

      <form
        onSubmit={handleSubmite}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
        <div
          style={{
            padding: "5px",
            margin: "5px",
          }}
        >
          {sections
            ? sections.map((section, index) => (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <AddInput
                    Prop={section.content}
                    setProp={(value) => {
                      const updatedSection = [...sections];
                      updatedSection[index].content = value;
                      /* setSections(updatedSection); */
                    }}
                    title={section.title}
                    templates={section.template}
                    key={index}
                  />
                </div>
              ))
            : null}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="secondary"
            onClick={handleSubmite}
            style={{ width: "40%", margin: "5px" }}
          >
            {" "}
            <MdOutlinePictureAsPdf />
          </Button>
          <Button
            variant="secondary"
            onClick={handleSubmite}
            style={{ width: "40%", margin: "5px" }}
          >
            {" "}
            <FaRegFileWord />
          </Button>
        </div>
      </form>
    </div>
  );
};
