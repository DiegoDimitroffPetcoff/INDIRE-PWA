import { useContext } from "react";
import { Context } from "../App";
import { SideBar } from "../components/Common/SideBar";
import { AddProject } from "../components/Projects/AddProject/AddProject";
//import { GralInfoComponent } from "../components/Projects/ProjectDetail/GralInfoComponent";
//import  GralInfoMock  from "../mocks/GralInfoMock.json";
import "../styles/global.css";
export const AddProjectPage = () => {
  const GralInfoMock = useContext(Context)
  return (
    <>
      <SideBar />
      <div className="container">
        <AddProject GralInfoMock={GralInfoMock} />
      </div>
    </>
  );
};
