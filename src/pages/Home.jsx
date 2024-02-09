import { SideBar } from "../components/Common/SideBar";
import { UpploadFile } from "../components/Projects/UpploadFile/UpploadFile";

import "../styles/global.css";

export const Home = () => {
  return (
    <>
      <SideBar />
      <UpploadFile />
    </>
  );
};
