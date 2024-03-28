import Image from "next/image";
import LogoImage from "../../assets/INDIRE_LOGO.png";
import Spinner from "react-bootstrap/Spinner";

const SpinnerComponent = () => {
  return (
    <figure
      style={{
        display: "flex",
        flexDirection: "column",
        position: " fixed",
        top: " 50%",
        left: " 50%",
        transform: "translate(-50%, -50%)",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image src={LogoImage} alt="Indire Logo" width={100} height={100} />
      <Spinner animation="border" size="sm" />
    </figure>
  );
};
export default SpinnerComponent;
