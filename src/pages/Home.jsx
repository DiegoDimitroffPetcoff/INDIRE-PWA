import { SideBar } from "../components/Common/SideBar";
import { AddPDF } from "../components/Projects/AddProject/AddPDF";
import { FetchAddProjectTest } from "../components/Projects/AddProject/FetchAddProjectTest";
import { MicrosoftGraphFiles } from "../components/Projects/MicrosoftGraphFiles/MicrosoftGraphFiles";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import projectListMocks from "../mocks/projectListMocks.json";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import "../styles/global.css";
export const Home = () => {
  //  Providers.globalProvider = new Msal2Provider({
  //    clientId: '6bea9cf6-3ef9-4fac-a943-d8c049ca308b'
  //  });

  return (
    <>
      <SideBar />
      {/* <ProjectListByDate projectList={projectListMocks} /> */}
      {/*  <div><FetchAddProjectTest/></div>  */}
      {/*    <div><AddPDF/></div>  */}
      {/*   <MicrosoftGraphFiles/> */}
      <PDFDownloadLink
        document={<AddPDF />}
        fileName="myfirstpdf.pdf"
      >
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (
            <button>Download now!</button>
          )
        }
      </PDFDownloadLink>

      <PDFViewer>
        <AddPDF />
      </PDFViewer>
    </>
  );
};
