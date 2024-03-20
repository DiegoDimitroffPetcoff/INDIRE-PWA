import Button from "react-bootstrap/Button";
import { MdOutlineStart } from "react-icons/md";


import templates from "../../../../mocks/introductionMock.json";

import { MdOutlineClear } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import TemplateButtons from "../../AddProject/TemplateButtons/templateButtons";
import AddSection from "../AddSection";
import { useState } from "react";

const SectionEdite = ({
  content,
  setContent,
  title,
  setTitle,
  id,

  subProjectCounts,
  setSubProjectCounts,
  addTemplate,
  setAddTemplate,
  subSection,
  setSubSections,

  subSectionEditable,
  setSubSectionEditable,
}) => {
  const [additionalSections, setAdditionalSections] = useState([]);
  const [sectionCount, setSectionCount] = useState(1);

  function handleAddSubSection() {
    let subSection = {
      id: id,
      content,
      title,
      subSection: [],
      template: "",
    };

    setSubSections(subSection);
  }
  const handleCounter = () => {
    console.log("proyect");
    console.log(subProjectCounts);
    console.log("count");
    console.log(sectionCount);
    let test = `${subProjectCounts}` + `${sectionCount}.`;
    console.log("test");
    console.log(test);

    const subProjectCountsNumber = parseFloat(subProjectCounts);

    // Calcular la suma de subProjectCounts y sectionCount
    const newCount = subProjectCountsNumber + sectionCount;

    // Construir el nuevo contador en el formato deseado (por ejemplo, "1.1.1")
    const newCounter = `${newCount}`;

    // Actualizar el estado de subProjectCounts y sectionCount
    setSubProjectCounts(newCounter);
    setSectionCount(sectionCount + 1);

    return test;
  };

  const addSubSection = async () => {
    let result = await handleCounter(id + 1);
    setAdditionalSections([
      ...additionalSections,
      <AddSection
        key={additionalSections.length}
        id={id}
        setSubProjectCounts={setSubProjectCounts}
        subSection={subSection}
        setSubSections={setSubSections}
        subProjectCounts={result}
      />,
    ]);
  };
  return (
    <fieldset
      id="subSection"
      className="mb-3"
      style={{
        padding: "10px",
      }}
    >
      <div>
        <MdArrowBackIosNew />
        <h1>{subProjectCounts}</h1>
        {title ? (
          <MdOutlineClear
            onClick={() => setTitle("")}
            style={{
              position: "absolute",
              right: "35px",
              transform: "traslate(-50)",
              cursor: " pointer",
            }}
          />
        ) : null}
        <input
          type="text"
          style={{
            backgroundColor: title ? "rgb(13 110 253 / 15%)" : "",
          }}
          rows={5}
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        {" "}
        {content ? (
          <MdOutlineClear
            onClick={() => setContent("")}
            style={{
              position: "absolute",
              right: "35px",
              transform: "traslate(-50)",
              cursor: " pointer",
            }}
          />
        ) : null}
        <textarea
          type="text"
          style={{
            backgroundColor: content ? "rgb(13 110 253 / 15%)" : "",
          }}
          rows={5}
          className="form-control"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        {additionalSections
          ? additionalSections.map((section, index) => (
              <section
                style={{ paddingLeft: "10px", border: "solid" }}
                key={index}
              >
                {section}
              </section>
            ))
          : null}
      </div>

      <TemplateButtons
        templates={templates}
        Content={content}
        setContent={setContent}
      />
      <Button
        onClick={() => {
          handleAddSubSection();
          setSubSectionEditable(!subSectionEditable);
        }}
        style={{
          boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
          margin: "5px",
        }}
      >
        Manter
      </Button>
      <Button onClick={addSubSection}>
        {subProjectCounts} <MdOutlineStart />
      </Button>
    </fieldset>
  );
};
export default SectionEdite;
