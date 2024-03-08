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

export const PDFView = ({ data }) => {
  let counter = 0;

  return (
    <Document style={styles.viewer}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.logo} src={LogoImage} />
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
      <Page size="A4" style={styles.page}>
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
