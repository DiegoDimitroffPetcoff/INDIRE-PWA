import { SideBar } from "../components/Common/SideBar";
import { ProjectComponent } from "../components/Projects/projectViews";

import "../styles/global.css";
export const ProjectPage = () => {
  return (
    <>
      <SideBar />
      <div className="container" style={{ width: "100%", height: "100vh" }}>
        <ProjectComponent />
      </div>
    </>
  );
};
