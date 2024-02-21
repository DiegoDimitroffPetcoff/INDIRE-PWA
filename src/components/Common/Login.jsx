import { Login } from "@microsoft/mgt-react";
import { Logo } from "./Logo";

export const Log = () => {
  return (
    <div>
      <Logo />
      <Login />
    </div>
  );
};

/* 
display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    flex-direction: column; */
