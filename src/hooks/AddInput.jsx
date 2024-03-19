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
  const [projectCount, setProjectCount] = useState(0); // Estado para el número de proyectos
  const [subProjectCounts, setSubProjectCounts] = useState({}); // Estado para el número de subproyectos

  function handleCounter(id) {
    const projectName = projectCount + 1;
    setProjectCount(projectCount + 1); // Incrementa el contador de proyectos
    console.log("projectName");
    console.log(projectName);
    return projectName;
  }

  const createSubProject = (parentProjectName) => {
    const parentCount = subProjectCounts[parentProjectName] || 0;
    const subProjectName = `${parentProjectName}.${parentCount + 1}`;
    setSubProjectCounts({
      ...subProjectCounts,
      [parentProjectName]: parentCount + 1, // Incrementa el contador de subproyectos para el proyecto padre
    });
    console.log("subProjectName");
    console.log(subProjectName);
    return subProjectName;
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
          onClick={() => {
            handleCounter(id + 1);
            createSubProject(id + 1);

            setAdditionalSections([
              ...additionalSections,
              <AddSection
                key={additionalSections.length}
                id={id}
                counter={projectCount}
                subProjectCounts={subProjectCounts}
                subSection={subSection}
                setSubSections={setSubSections}
                additionalSections={additionalSections}
                setAdditionalSections={setAdditionalSections}
              />,
            ]);
          }}
        >
          {id + 1} <LuArrowDownToDot />
        </Button>
      </div>
    </>
  );
};
