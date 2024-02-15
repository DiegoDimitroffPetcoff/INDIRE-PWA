import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";
import { StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { PDFView } from "../../../hooks/PDFview";

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },
});

export const ProjectDetail = ({ data }) => {
  return (
    <>
      {" "}
      <PDFViewer style={styles.viewer}>
        <PDFView data={data} />
      </PDFViewer>
      <PDFDownloadLink
        document={<PDFView data={data} />}
        fileName={data.title + ".pdf"}
      >
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loaging Document..</button>
          ) : error ? (
            "hunbo un error"
          ) : (
            <button onClick={() => FetchPostMicrosoftGraph(blob)}>
              Download now
            </button>
          )
        }
      </PDFDownloadLink>
    </>
  );
};
