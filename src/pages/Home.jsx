import { SideBar } from "../components/Common/SideBar";
import { AddPDF } from "../components/Projects/AddProject/AddPDF";
import { AddPDF2 } from "../components/Projects/AddProject/AddPDF2";
import { FetchAddProjectTest } from "../components/Projects/AddProject/FetchAddProjectTest";
import { MicrosoftGraphFiles } from "../components/Projects/MicrosoftGraphFiles/MicrosoftGraphFiles";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import projectListMocks from "../mocks/projectListMocks.json";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Document, Link, Page, Text } from '@react-pdf/renderer'


import "../styles/global.css";
import { ConvertToBinare } from "../components/Projects/AddProject/ConvertToBinare";
import { FetchNode } from "../components/Projects/AddProject/FetchNode";
export const Home = () => {
 

  return (
    <>
      <SideBar />
      <FetchNode/>
      {/* <ProjectListByDate projectList={projectListMocks} /> */}
      {/* <div><FetchAddProjectTest/></div>  */}
      {/*    <div><AddPDF/></div>  */}
      {/*   <MicrosoftGraphFiles/> */}
{/*       <div>
      <PDFDownloadLink document={<AddPDF />} fileName="myfirstpdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (
            <button>Download now!</button>
          )
        }
      </PDFDownloadLink></div>
      <div>
      <PDFViewer>
        <AddPDF />
      </PDFViewer>
      </div>
      <div>
      <ConvertToBinare/>
      </div> */}

      <AddPDF2/>
    </>
  );
};
