import { BTNTemplates } from "../../../../hooks/BTNtemplates";
import Button from "react-bootstrap/Button";

import templates from "../../../../mocks/introductionMock.json";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import TemplateButtons from "../../AddProject/TemplateButtons/templateButtons";
import AddSection from "../AddSection";
import { useState } from "react";

const SubSectionEdite = ({
  content,
  setContent,
  title,
  setTitle,
  id,
  addTemplate,
  setAddTemplate,
  subSection,
  setSubSections,
  subSectionEditable,
  setSubSectionEditable,
}) => {
  const [additionalSections, setAdditionalSections] = useState([]);


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
        <h1>
          {id + 1}. {id + 1}
        </h1>
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
      <Button
        onClick={() =>
          setAdditionalSections([
            ...additionalSections,
            <AddSection
              key={additionalSections.length}
              id={id}
              subSection={subSection}
              setSubSections={setSubSections}
            />,
          ])
        }
      >
        +
      </Button>
    </fieldset>
  );
};
export default SubSectionEdite;
