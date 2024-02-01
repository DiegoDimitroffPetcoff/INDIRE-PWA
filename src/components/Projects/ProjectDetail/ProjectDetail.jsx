import LogoImage from "../../../assets/INDIRE_LOGO.png";
import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";
import { DateMaker } from "../../../utils/dateMaker";

import "./ProjectDetail.css";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

export const ProjectDetail = ({ data }) => {
  return (
    <>
      <PDFViewer style={styles.viewer}>
        <MyDocument data={data} />
      </PDFViewer>
      <br></br>
      <PDFDownloadLink
        document={<MyDocument data={data} />}
        fileName="myfirstpdf.pdf"
      >
        {({ loading, url, error, blob }) => {
          //FetchPostMicrosoftGraph(blob)
          loading ? (
            <button>Loaging Document..</button>
          ) : (
            <button>Download now</button>
          );
        }}
      </PDFDownloadLink>
    </>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  viewer: {
    width: "100%",
    height: "100vh",
  },
  logo: {
    width: "10%",
  },
  mainImg: {
    height: " 50%",
    width: "50%",
  },
});

const MyDocument = ({ data }) => (
  <Document style={styles.viewer}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.logo} src={LogoImage} />
        <Text>{data.title}</Text>
        <Text>{data.address}</Text>
        <Image style={styles.mainImg} src={data.main_img_url} />
        <Text>{DateMaker()}</Text> {/* Asumo que DateMaker es una función */}
        <Text>{data.project_number}</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>INTRODUÇÃO</Text>
        <Text>{data.introduction}</Text>
        <Text>DESCRIÇÃO GERAL</Text>
        <Text>{data.gral_description}</Text>
        <Text>INSPEÇÃO TÉCNICA AO EDIFÍCIO</Text>
        <Text>{data.building_technical_inspection}</Text>
      </View>
    </Page>
  </Document>
);
