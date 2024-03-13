import Button from "react-bootstrap/Button";
import { BTNTemplates } from "../../../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "../../../hooks/AddTemplate";
import templates from "../../../mocks/introductionMock.json";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";

const AddSection = ({ id, addSubSection, setAddSubSection }) => {
  const [addTemplate, setAddTemplate] = useState(false);

  const [title, setTitle] = useState(addSubSection.title || "");
  const [content, setContent] = useState(addSubSection.content || "");

  function cleatInput() {
    setContent("");
  }

  function handleAddSubSection(params) {
    let subSection = {
      id: id,
      content,
      title,
      subSection: [],
      template: "",
    };
    console.log(subSection);
    setAddSubSection(subSection)
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
          <div
            id="prueba"
            className="mb-3"
            style={{
              padding: "0px 0px 10px",
              borderRadius: "50%",
            }}
          >
            <textarea
              type="text"
              style={{
                backgroundColor: content ? "rgb(13 110 253 / 15%)" : "",
              }}
              rows={5}
              className="form-control"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Button onClick={handleAddSubSection}>Manter</Button>
          </div>
        </>
      )}
    </>
  );
};
export default AddSection;
