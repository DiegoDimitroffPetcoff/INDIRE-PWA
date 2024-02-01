import { SideBar } from "../components/Common/SideBar";
import { AddPDF } from "../components/Projects/AddProject/AddPDF";

import { MicrosoftGraphFiles } from "../components/Projects/MicrosoftGraphFiles/MicrosoftGraphFiles";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import projectListMocks from "../mocks/projectListMocks.json";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Document, Link, Page, Text } from "@react-pdf/renderer";

import "../styles/global.css";

import { FetchNode } from "../components/Projects/AddProject/FetchNode";
export const Home = () => {
  return (
    <>
      <SideBar />
      <FetchNode />
    </>
  );
};
