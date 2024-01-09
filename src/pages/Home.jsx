import { SideBar } from "../components/Common/SideBar";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import projectListMocks from "../mocks/projectListMocks.json";

import { Login } from '@microsoft/mgt-react';


import "../styles/global.css";
export const Home = () => {
  //  Providers.globalProvider = new Msal2Provider({
  //    clientId: '6bea9cf6-3ef9-4fac-a943-d8c049ca308b'
  //  });

  return (
    <>
      <header>
        <Login />
      </header>
      <SideBar />
      <ProjectListByDate projectList={projectListMocks} />
    </>
  );
};

