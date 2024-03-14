import { Button } from "react-bootstrap";
import { AddInput } from "../../../../hooks/AddInput";

const SectionDone = ({
  content,
  title,
  viewSectionEdit,
  setViewSectionEdit,
}) => {
  console.log(content);
  return (
    <div
      id="prueba"
      className="mb-3"
      style={{
        padding: "0px 0px 10px",
        borderRadius: "50%",
      }}
    >
      <h3>{content}</h3>

      <Button >Edit</Button>
    </div>
  );
};
export default SectionDone;
