import { useState } from "react";

import { BTNTemplates } from "../../../hooks/BTNtemplates";
import { AddTemplate } from "../../../hooks/AddTemplate";
import templates from "../../../mocks/introductionMock.json";
/* AGREGAR LAZY  */
import SectionDone from "./views/SectionDone";
import SectionEdite from "./views/SectionEdite";

const AddSection = ({ id, subSection, setSubSections, subProjectCounts,setSubProjectCounts }) => {
  const [addTemplate, setAddTemplate] = useState(false);
  const [subSectionEditable, setSubSectionEditable] = useState(false);

  const [title, setTitle] = useState(subSection.title ||  "");
  const [content, setContent] = useState(subSection.content || "");

  return (
    <>
      {addTemplate ? (
        <>
        
          <AddTemplate
            templates={templates}
            Content={content}
            setState={setContent}
            setAddTemplate={setAddTemplate}
            addTemplate={addTemplate}
          />
          <BTNTemplates templates={templates} setState={setContent} />
        </>
      ) : (
        <>
          {subSectionEditable ? (
            <SectionDone
            subSection={subSection}
              content={content}
              id={id}
              title={title}
              subSectionEditable={subSectionEditable}
              setSubSectionEditable={setSubSectionEditable}
              subProjectCounts={subProjectCounts}
            />
          ) : (
            <SectionEdite
              content={content}
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              id={id}
              subProjectCounts={subProjectCounts}
              setSubProjectCounts={setSubProjectCounts}
              addTemplate={addTemplate}
              setAddTemplate={setAddTemplate}
              subSection={subSection}
              setSubSections={setSubSections}
              
              subSectionEditable={subSectionEditable}
              
              setSubSectionEditable={setSubSectionEditable}
            />
          )}
        </>
      )}
    </>
  );
};
export default AddSection;
