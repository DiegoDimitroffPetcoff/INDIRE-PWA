import { BTNTemplates } from "../../../../hooks/BTNtemplates";
import Button from "react-bootstrap/Button";

import templates from "../../../../mocks/introductionMock.json";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";

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
        padding: "0px 0px 10px",
        borderRadius: "50%",
      }}
    >
      <div>
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
      </div>
      <label>Titulo</label>
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
      <Button
        onClick={() => {
          handleAddSubSection();
          setSubSectionEditable(!subSectionEditable);
        }}
      >
        Manter
      </Button>
    </fieldset>
  );
};
export default SubSectionEdite;
