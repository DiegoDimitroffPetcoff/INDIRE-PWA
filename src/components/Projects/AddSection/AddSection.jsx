import Button from "react-bootstrap/Button";
import { BTNTemplates } from "../../../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "../../../hooks/AddTemplate";
import templates from "../../../mocks/introductionMock.json";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import SectionDone from "./views/SectionDone";

import SubSectionEdite from "./views/SectionEdite";

const AddSection = ({ id, addSubSection, setAddSubSection }) => {
  const [addTemplate, setAddTemplate] = useState(false);
  const [viewSectionEdit, setViewSectionEdit] = useState(false);

  const [title, setTitle] = useState(addSubSection.title || "");
  const [content, setContent] = useState(addSubSection.content || "");

  function cleatInput() {
    setContent("");
  }

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
        <div style={{ padding: "10px" }}>
          <BTNTemplates templates={templates} setState={setContent} />
          <Button
            variant="success"
            style={{
              boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
            }}
            onClick={() => setAddTemplate(!addTemplate)}
          >
            {" "}
            <IoMdAdd />
          </Button>
          {content ? (
            <Button
              variant="danger"
              style={{
                boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
              }}
              onClick={() => cleatInput()}
            >
              {" "}
              <MdOutlineClear />
            </Button>
          ) : null}

          {viewSectionEdit ? (
            <SectionDone
              content={content}
              /*    title={title}
              setAddSubSection={setAddSubSection}
              
              viewSectionEdit={viewSectionEdit}
              setViewSectionEdit={setViewSectionEdit}*/
              id={id} 
            />
          ) : (
            <SubSectionEdite
              content={content}
              setContent={setContent}
              title={title}
              setAddSubSection={setAddSubSection}
              viewSectionEdit={viewSectionEdit}
              setViewSectionEdit={setViewSectionEdit}
            />
          )}
        </div>
      )}
    </>
  );
};
export default AddSection;
