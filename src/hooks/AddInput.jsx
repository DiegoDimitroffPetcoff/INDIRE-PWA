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
  const [addSubSection, setAddSubSection] = useState(false);

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
        {addSubSection ? (
          <AddSection
            id={id}
            addSubSection={subSection}
            setAddSubSection={setSubSections}
          />
        ) : (
          <Button onClick={() => setAddSubSection(!addSubSection)}>+</Button>
        )}
      </div>
    </>
  );
};
