import LogoImage from "../assets/INDIRE_LOGO.png";

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
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
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
  header: {
    fontSize: 12,
    textAlign: "right",
    color: "grey",
  },
  logo: {
    width: "10%",
  },
  logoHeader:{
    width: "50px"
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
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export const PDFView = ({ data }) => {
  let counter = 0;

  return (
    <Document style={styles.viewer}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.logoHeader} src={LogoImage} />
          <Text style={styles.mainTitle}>{data.title}</Text>
          <Text style={styles.adress}>{data.address}</Text>
          {data.main_img_url && (
            <Image style={styles.mainImg} src={data.main_img_url} />
          )}
          <Text style={styles.date}>{data.date}</Text>
          <Text style={styles.subTitle}>{data.sub_title}</Text>
          <Text style={styles.title}>
            {data.project_number + "-" + data.title + "-V" + data.version}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View fixed>
          <Text style={styles.header}>
            {data.project_number + "-" + data.title + "-V" + data.version}
          </Text>
          <Image style={styles.logo} src={LogoImage} />
          <Text style={styles.header}>{data.title}</Text>
          <Text style={styles.header}>{data.address}</Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.header}>
            ------------------------------------------------------------------------------------------------------------------
          </Text>
        </View>
        <View style={styles.section}>
          {data.sections ? (
            data.sections.map((item, index) => (
              <View key={index}>
                {" "}
                {item.content !== "" ? (
                  <>
                    <Text style={styles.title}>
                      {++counter}-{item.title}
                    </Text>
                    <Text>{item.content}</Text>
                  </>
                ) : (
                  ""
                )}
              </View>
            ))
          ) : (
            <Text>"No content Added"</Text>
          )}
        </View>
      </Page>
    </Document>
  );
};
