import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";
import { StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { PDFView } from "../../../hooks/PDFview";
import { Alerts } from "../../../hooks/Alerts";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import { LuHardDriveDownload } from "react-icons/lu";
import { ImOnedrive } from "react-icons/im";

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },
});

export const ProjectDetail = ({ data }) => {
  //Status to show the alert
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [type, setType] = useState("success");

  async function handleFectch(blob) {
    //do the fetch - error case: Change the alert to danger with the message
    try {
      const result = await FetchPostMicrosoftGraph(blob);
      setShowAlert(true);
      setMessageAlert(result);
    } catch (error) {
      setShowAlert(true);
      setType("danger");
      setMessageAlert(error.message);
    }
  }

  return (
    <>
      {/* Alert for success and error cases */}

      <PDFDownloadLink
        document={<PDFView data={data} />}
        fileName={data.title + ".pdf"}
      >
        {({ loading, url, error, blob }) =>
          loading ? (
            <Button>Loaging Document..</Button>
          ) : error ? (
            "hunbo un error"
          ) : (
            <>
              <Button onClick={() => handleFectch(blob)}>
                <ImOnedrive />
              </Button>
              <Button>
                <LuHardDriveDownload />
              </Button>
            </>
          )
        }
      </PDFDownloadLink>
      {showAlert && (
        <Alerts
          message={messageAlert}
          type={type}
          closeOn={() => setShowAlert(false)}
        />
      )}
      <PDFViewer style={styles.viewer}>
        <PDFView data={data} />
      </PDFViewer>
    </>
  );
};
