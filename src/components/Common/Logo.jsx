import LogoImage from "../../assets/INDIRE_LOGO.png";

 const Logo = () => {
  return (
    <figure
      style={{
        margin: "5px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={LogoImage} alt="Indire Logo" style={{ width: "50px" }} />
    </figure>
  );
};
export default Logo
