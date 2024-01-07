import { SideBar } from "../components/Common/SideBar";
import { GralInfoComponent } from "../components/Projects/ProjectDetail/GralInfoComponent";
import { IntroductionComponent } from "../components/Projects/ProjectDetail/introductionComponent";
import GralInfoMock from "../mocks/GralInfoMock.json";
import IntroductionMocks from "../mocks/introductionMock.json";
export const ProjectDitailPage = () => {
  return (
    <>
      {" "}
      <SideBar />
      <div className="container">
        <GralInfoComponent  GralInfoMock={GralInfoMock} />
        <IntroductionComponent IntroductionMocks={IntroductionMocks} />
      </div>
    </>
  );
};
