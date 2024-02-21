import { Login } from "@microsoft/mgt-react";
import { Logo } from "./Logo";

export const Log = () => {
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
      <Logo />
      <Login />
    </div>
  );
};
