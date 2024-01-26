import { SideBar } from "../components/Common/SideBar";
import { ProjectComponent } from "../components/Projects/project";

import "../styles/global.css";
export const ProjectPage = () => {
  return (
    <>
      <SideBar />
      <div className="container">
        <ProjectComponent />
      </div>
    </>
  );
};
