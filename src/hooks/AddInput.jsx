import Button from "react-bootstrap/Button";
import { BTNTemplates } from "../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "./AddTemplate";

import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import AddSection from "../components/Projects/AddSection/AddSection";

export const AddInput = ({
  Content,
  setContent,
  title,
  templates,
  id,
  subSection,
  setSubSections
}) => {
  const [addTemplate, setAddTemplate] = useState(false);
  const [addSubSection, setAddSubSection] = useState(false);

  function cleatInput() {
    setContent("");
  }

  return (
    <>
      {addTemplate ? (
        <>
          <AddTemplate
            templates={templates}
            Content={Content}
            setState={setContent}
            setAddTemplate={setAddTemplate}
            addTemplate={addTemplate}
          />
          <BTNTemplates templates={templates} setState={setContent} />
        </>
      ) : (
        <>
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
          {Content ? (
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
              <Button onClick={() => setAddSubSection(!addSubSection)}>
                +
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
};
