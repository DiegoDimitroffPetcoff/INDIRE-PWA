import { FetchPostMicrosoftGraph } from "../../../services/fetchPostMicrosoftGraph";
import { StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { PDFView } from "../../../hooks/PDFview";
import { Alerts } from "../../../hooks/Alerts";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import { LuHardDriveDownload } from "react-icons/lu";
import { ImOnedrive } from "react-icons/im";
import Spinner from "react-bootstrap/Spinner";

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
      //TENGO QUE VER COMO MANEJAR CUANDO NO HAYA AUN INFORMACION EN EL LOCAL STORAGE
      let allData = JSON.parse(localStorage.getItem("ProjectList"));
      allData.push(data);
      console.log("se agrega nuevo objeto");
      console.log(allData);
      const result = localStorage.setItem(
        "ProjectList",
        JSON.stringify(allData)
      );
      //const result = await FetchPostMicrosoftGraph(blob);
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
      <PDFDownloadLink
        document={<PDFView data={data} />}
        fileName={data.title + ".pdf"}
      >
        {({ loading, url, error, blob }) =>
          loading ? (
            <Spinner />
          ) : error ? (
            "hunbo un error"
          ) : (
            <>
              <Button
                style={{ margin: "3px" }}
                onClick={() => handleFectch(blob)}
              >
                <ImOnedrive />
              </Button>
              <Button>
                <LuHardDriveDownload />
              </Button>
            </>
          )
        }
      </PDFDownloadLink>
      {/* Alert for success and error cases */}

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
