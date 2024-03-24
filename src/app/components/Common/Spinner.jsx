import LogoImage from "../../assets/INDIRE_LOGO.png";
import Spinner from "react-bootstrap/Spinner";

const SpinnerComponent = () => {
  return (
    <figure
      style={{
        display: "flex",
        flexDirection:"column",
        position: " fixed",
        top: " 50%",
        left: " 50%",
        transform: "translate(-50%, -50%)",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <img
        src={LogoImage}
        alt="Indire Logo"
        style={{
          width: "100px",
        }}
      />
      <Spinner animation="border" size="sm" />
    </figure>
  );
};
export default SpinnerComponent;
