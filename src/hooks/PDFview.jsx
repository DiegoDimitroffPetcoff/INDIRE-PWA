import LogoImage from "../assets/INDIRE_LOGO.png";
import { DateMaker } from "../utils/dateMaker";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

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
    textAlign: "justify",
  },
  viewer: {
    width: "100%",
    height: "100vh",
  },
  logo: {
    width: "10%",
  },
  mainImg: {
    width: "50%",
    display: "flex",
    alignSelf: "center",
    margin: 50,
  },
  mainTitle: {
    display: "flex",
    fontSize: 50,
    textAlign: "center",
  },
  adress: {
    display: "flex",
    fontSize: 15,
    textAlign: "center",
  },
  date: {
    display: "flex",
    fontSize: 12,
    textAlign: "center",
  },
  subTitle: {
    display: "flex",
    fontSize: 18,
    textAlign: "center",
  },
  title: {
    display: "flex",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
});

export const PDFView = ({ data }) => (
  <Document style={styles.viewer}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.logo} src={LogoImage} />
        <Text style={styles.mainTitle}>{data.title}</Text>
        <Text style={styles.adress}>{data.address}</Text>
        {data.main_img_url && (
          <Image style={styles.mainImg} src={data.main_img_url} />
        )}
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
        <Text style={styles.title}>HISTÓRICO DE INTERVENÇÕES</Text>
        <Text>{data.history}</Text>
        <Text style={styles.title}>
          {" "}
          ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS
        </Text>
        <Text>{data.elemento}</Text>
        <Text style={styles.title}>RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO</Text>
        <Text>{data.recommendations}</Text>
        <Text style={styles.title}>CONCLUSÕES</Text>
        <Text>{data.conclusions}</Text>
      </View>
    </Page>
  </Document>
);
