import { SideBar } from "../components/Common/SideBar";
import { ProjectList } from "../components/Projects/ProjectList/ProjectList";

import "../styles/global.css";
export const ProjectListPage = () => {
  return (
    <>
      <SideBar />
      <div className="container" style={{ width: "100%", height: "100vh" }}>
        <ProjectList />
      </div>
    </>
  );
};
