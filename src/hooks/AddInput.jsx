import Button from "react-bootstrap/Button";
import { useState } from "react";
import AddSection from "../components/Projects/AddSection/AddSection";
import TemplateButtons from "../components/Projects/AddProject/TemplateButtons/templateButtons";

export const AddInput = ({
  Content,
  setContent,
  title,
  templates,
  id,
  subSection,
  setSubSections,
}) => {
  const [additionalSections, setAdditionalSections] = useState([]);

  return (
    <>
      <TemplateButtons
        templates={templates}
        Content={Content}
        setContent={setContent}
      />
      <div
        id="Add-input"
        className="mb-3"
        style={{
          padding: "0px 0px 10px",
          borderRadius: "50%",
        }}
      >
        <textarea
          type="text"
          style={{
            backgroundColor: Content ? "rgb(13 110 253 / 15%)" : "",
          }}
          rows={5}
          className="form-control"
          value={Content}
          placeholder={title}
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

        <Button
          onClick={() =>
            setAdditionalSections([
              ...additionalSections,
              <AddSection
                key={additionalSections.length}
                id={id}
                subSection={subSection}
                setSubSections={setSubSections}
                
                additionalSections={additionalSections}
                setAdditionalSections={setAdditionalSections}
              />,
            ])
          }
        >
          +
        </Button>
      </div>
    </>
  );
};
