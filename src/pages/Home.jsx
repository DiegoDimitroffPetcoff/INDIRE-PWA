import { SideBar } from "../components/Common/SideBar";
import { MicrosoftGraphFiles } from "../components/Projects/MicrosoftGraphFiles/MicrosoftGraphFiles";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import projectListMocks from "../mocks/projectListMocks.json";



import "../styles/global.css";
export const Home = () => {
  //  Providers.globalProvider = new Msal2Provider({
  //    clientId: '6bea9cf6-3ef9-4fac-a943-d8c049ca308b'
  //  });

  return (
    <>

      <SideBar />
      <ProjectListByDate projectList={projectListMocks} />
      <MicrosoftGraphFiles/>
    </>
  );
};

