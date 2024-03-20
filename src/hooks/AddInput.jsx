import Button from "react-bootstrap/Button";
import { useState } from "react";
import AddSection from "../components/Projects/AddSection/AddSection";
import TemplateButtons from "../components/Projects/AddProject/TemplateButtons/templateButtons";
import { LuArrowDownToDot } from "react-icons/lu";

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

  const [subProjectCounts, setSubProjectCounts] = useState({}); // Estado para el número de subproyectos

  const handleCounter = (parentId) => {
    const parentCount = subProjectCounts[parentId] || 0;
    const subProjectName = `${parentId}.${parentCount + 1}.`;
    setSubProjectCounts({
      ...subProjectCounts,
      [parentId]: parentCount + 1, // Incrementa el contador de subproyectos para el proyecto padre
    });

    return subProjectName;
  };

  const addSubSection = async () => {
    let result = await handleCounter(id + 1);
    setAdditionalSections([
      ...additionalSections,
      <AddSection
        key={additionalSections.length}
        id={id}
        subSection={subSection}
        setSubSections={setSubSections}
        subProjectCounts={result}
        setSubProjectCounts={setSubProjectCounts}
      />,
    ]);
  };
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
        {additionalSections.length > 0 && (
          <>
            {additionalSections.map((section, index) => (
              <section
                style={{ paddingLeft: "10px", border: "solid" }}
                key={index}
              >
                {section}
              </section>
            ))}
          </>
        )}

        <Button onClick={addSubSection}>
          {id + 1} <LuArrowDownToDot />
        </Button>
      </div>
    </>
  );
};
