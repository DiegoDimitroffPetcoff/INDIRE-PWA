import Image  from "next/image";
const Logo = () => {
  return (
    <figure
      style={{
        margin: "5px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image src="/INDIRE_LOGO.png" alt="Indire Logo" width={50} height={30} />
    </figure>
  );
};
export default Logo;
