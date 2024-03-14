import { Button } from "react-bootstrap";
import { AddInput } from "../../../../hooks/AddInput";

const SubSectionEdite = ({
  content,
  setContent,
  title,
  id,
  setAddSubSection,
  viewSectionEdit,
  setViewSectionEdit,
}) => {
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
      <Button
        onClick={() => {
          handleAddSubSection(content, title);
          setViewSectionEdit(false);
        }}
      >
        Manter
      </Button>
    </div>
  );
};
export default SubSectionEdite;
