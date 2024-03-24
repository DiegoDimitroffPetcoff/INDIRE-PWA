import { MdOutlinePictureAsPdf } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const ShowDetailsButtons = ({handleSubmite}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="secondary"
        onClick={handleSubmite}
        style={{ width: "40%", margin: "5px" }}
      >
        {" "}
        <MdOutlinePictureAsPdf />
      </Button>
      <Button
        variant="secondary"
        onClick={handleSubmite}
        style={{ width: "40%", margin: "5px" }}
      >
        {" "}
        <FaRegFileWord />
      </Button>
    </div>
  );
};
export default ShowDetailsButtons;
