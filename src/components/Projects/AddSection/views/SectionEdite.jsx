import { BTNTemplates } from "../../../../hooks/BTNtemplates";
import Button from "react-bootstrap/Button";

import templates from "../../../../mocks/introductionMock.json";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";


const SubSectionEdite = ({
  content,
  setContent,
  title,
  setTitle,
  id,
  addTemplate,
  setAddTemplate,
  setAddSubSection,
  subSectionEditable,
  setSubSectionEditable,
}) => {
  function cleatInput() {
    setContent("");
    setTitle("");
  }
  function handleAddSubSection() {
    let subSection = {
      id: id,
      content,
      title,
      subSection: [],
      template: "",
    };

    setAddSubSection(subSection);
  }
  return (
    <fieldset
      id="subSection"
      className="mb-3"
      style={{
        padding: "10px",
      }}
    >
      <div>
        <MdArrowBackIosNew/>
        <h1>{id+1}.</h1>
        {title ? (
          <MdOutlineClear
            onClick={() => setTitle("")}
            style={{
              position: "absolute",
              right: "35px",
              transform: "traslate(-50)",
              cursor: " pointer",
            }}
          />
        ) : null}
        <input
          type="text"
          style={{
            backgroundColor: title ? "rgb(13 110 253 / 15%)" : "",
          }}
          rows={5}
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        {" "}
        {content ? (
          <MdOutlineClear
            onClick={() => setContent("")}
            style={{
              position: "absolute",
              right: "35px",
              transform: "traslate(-50)",
              cursor: " pointer",
            }}
          />
        ) : null}
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
      </div>

      <div style={{ margin: "10px" }}>
        <BTNTemplates templates={templates} setState={setContent} />
        <Button
          variant="success"
          style={{
            boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
            margin: "5px",
          }}
          onClick={() => setAddTemplate(!addTemplate)}
        >
          {" "}
          <IoMdAdd />
        </Button>

        <Button
          onClick={() => {
            handleAddSubSection();
            setSubSectionEditable(!subSectionEditable);
          }}
          style={{
            boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
            margin: "5px",
          }}
        >
          Manter
        </Button>

        {content || title ? (
          <Button
            variant="danger"
            style={{
              boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
              margin: "5px",
            }}
            onClick={() => cleatInput()}
          >
            {" "}
            <MdOutlineClear />
          </Button>
        ) : null}
      </div>
    </fieldset>
  );
};
export default SubSectionEdite;
