import { useState } from "react";

import SubSection from "../Section/SubSection/SubSection";

import TemplateButtons from "../TemplateButtons/templateButtons"
import Button from "react-bootstrap/Button";
import { LuArrowDownToDot } from "react-icons/lu";

const Section = ({
  Content,
  setContent,
  title,
  templates,
  id,
  subSection,
  setSubSections,
}) => {
  const [additionalSections, setAdditionalSections] = useState([]);

  const [subProjectCounts, setSubProjectCounts] = useState({});
  const [projectCount, setProjectCount] = useState({});

  const handleCounter = (parentId) => {
    const parentCount = projectCount[parentId] || 0;
    const subProjectName = `${parentId}.${parentCount + 1}.`;
    setProjectCount({
      ...projectCount,
      [parentId]: parentCount + 1,
    });

    return subProjectName;
  };

  const addSubSection = async () => {
    let result = await handleCounter(id + 1);
    setAdditionalSections([
      ...additionalSections,
      <SubSection
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
    <div className="sectionContainer">
      <TemplateButtons
        templates={templates}
        Content={Content}
        setContent={setContent}
      />
      <div
        id="Add-input"
       className="textTareaSection"
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
              <section className="section" key={index}>
                {section}
              </section>
            ))}
          </>
        )}

        <Button onClick={addSubSection}>
          {id + 1} <LuArrowDownToDot />
        </Button>
      </div>
    </div>
  );
};
export default Section