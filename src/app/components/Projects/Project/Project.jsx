import { useState } from "react";

import { Summary } from "./Summary/summary";
import ShowDetailsButtons from "../ProjectDetail/showDetailsButtons";
import Section from "./Section/Section";

const Project = ({
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
  const [project_number, setProject_number] = useState(
    data.project_number || ""
  );
  const [date, setDate] = useState(data.date || "");
  const [version, setVersion] = useState(data.version || "");

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
        project_number,
        sections,
        date,
        version,
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

      <form onSubmit={handleSubmite} className="formAddProject">
        <Summary
          setTitle={setTitle}
          title={title}
          setSub_title={setSub_title}
          sub_title={sub_title}
          setAddress={setAddress}
          adrress={address}
          setMain_img_url={setMain_img_url}
          main_img_url={main_img_url}
          setProject_number={setProject_number}
          project_number={project_number}
          date={date}
          setDate={setDate}
          version={version}
          setVersion={setVersion}
        />

        {sections
          ? sections.map((section, index) => (
              <section key={index}>
                <h3>
                  {index + 1}. {section.title}
                </h3>
                <Section
                  Content={section.content}
                  subSection={section.subSection}
                  id={index}
                  setSubSections={(value) => {
                    //Copy the State Section to update
                    const updatedSection = [...sections];
                    console.log(sections);
                    updatedSection[index].subSection.push(value);
                    setSections(updatedSection);
                  }}
                  setContent={(value) => {
                    const updatedSection = [...sections];
                    updatedSection[index].content = value;
                    setSections(updatedSection);
                  }}
                  title={section.title}
                  templates={section.template}
                  key={index}
                />
              </section>
            ))
          : null}

        <ShowDetailsButtons handleSubmite={handleSubmite} />
      </form>
    </div>
  );
};
export default Project;
