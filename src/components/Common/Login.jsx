import { Login } from "@microsoft/mgt-react";
import Logo from "./Logo";

const Log = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100vh",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.5) -1px -1px 20px 0px inset",
      }}
    >
      <Logo />
      <Login />
    </div>
  );
};
export default Log;
