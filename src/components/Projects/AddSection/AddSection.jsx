import { BTNTemplates } from "../../../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "../../../hooks/AddTemplate";
import templates from "../../../mocks/introductionMock.json";
import SectionDone from "./views/SectionDone";

import SubSectionEdite from "./views/SectionEdite";

const AddSection = ({ id, addSubSection, setAddSubSection }) => {
  const [addTemplate, setAddTemplate] = useState(false);
  const [subSectionEditable, setSubSectionEditable] = useState(false);

  const [title, setTitle] = useState(addSubSection.title || "");
  const [content, setContent] = useState(addSubSection.content || "");

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
              content={content}
              id={id}
              title={title}
              subSectionEditable={subSectionEditable}
              setSubSectionEditable={setSubSectionEditable}
            />
          ) : (
            <SubSectionEdite
              content={content}
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              id={id}
              addTemplate={addTemplate}
              setAddTemplate={setAddTemplate}
              setAddSubSection={setAddSubSection}
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
