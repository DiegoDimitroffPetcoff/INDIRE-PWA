import { TbError404 } from "react-icons/tb";
import { Logo } from "./Logo";

export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.5) -1px -1px 20px 0px inset",
          borderRadius: "10px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Logo />
        Not Found
        <TbError404 />
      </div>
    </div>
  );
};
