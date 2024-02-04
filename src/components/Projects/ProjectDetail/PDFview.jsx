import LogoImage from "../../../assets/INDIRE_LOGO.png";

import { DateMaker } from "../../../utils/dateMaker";

import {
  Page,
  Text,
  View,
  Document,
  //StyleSheet,
  //PDFViewer,
  Image,
  //PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles

export const PDFview = ({ data, styles }) => {
  return (
    <Document style={styles.viewer}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.logo} src={LogoImage} />
          <Text style={styles.mainTitle}>{data.title}</Text>
          <Text style={styles.adress}>{data.address}</Text>
          {/*    <Image style={styles.mainImg} src={data?.main_img_url} /> */}
          <Text style={styles.date}>{DateMaker()}</Text>
          <Text style={styles.subTitle}>{data.sub_title}</Text>
          <Text style={styles.title}>{data.project_number}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>INTRODUÇÃO</Text>
          <Text>{data.introduction}</Text>
          <Text style={styles.title}>DESCRIÇÃO GERAL</Text>
          <Text>{data.gral_description}</Text>
          <Text style={styles.title}>INSPEÇÃO TÉCNICA AO EDIFÍCIO</Text>
          <Text>{data.building_technical_inspection}</Text>
          <Text style={styles.title}>ELEMENTO BASE</Text>
          <Text>{data.base_element}</Text>
        </View>
      </Page>
    </Document>
  );
};
