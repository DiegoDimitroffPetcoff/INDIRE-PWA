import { BTNTemplates } from "../../../../hooks/BTNtemplates";
import { useState } from "react";

import Button from "react-bootstrap/Button";

import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { AddTemplate } from "../../../../hooks/AddTemplate";

const TemplateButtons = ({ templates, Content, setContent }) => {
  const [addTemplate, setAddTemplate] = useState(false);
  return (
    <>
      {/* Is therr any template? */}
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
          {/* Does the Input have Conente already? - add button to clean all content */}
          {Content ? (
            <Button
              variant="danger"
              style={{
                boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
              }}
              onClick={() => setContent("")}
            >
              {" "}
              <MdOutlineClear />
            </Button>
          ) : null}
        </>
      )}
    </>
  );
};
export default TemplateButtons;
