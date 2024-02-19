import dataMock from "../../../mocks/projectListMocks.json";
import Alert from "react-bootstrap/Alert";
import { LuHardDriveDownload } from "react-icons/lu";
import { ImOnedrive } from "react-icons/im";

import Table from "react-bootstrap/Table";
export const ProjectList = () => {
  const data = JSON.parse(localStorage.getItem("ProjectList"));
  return (
    <>
      <h1>Pesquisar</h1>
      {data ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Address</th>
              <th>Fecha</th>
              <th>Relatorio</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index} onClick={() => console.log({ data })}>
                <td>{data.project_id}</td>
                <td>{data.title}</td>
                <td>{data.address}</td>
                <td>{data.date}</td>
                <td>{data.project_number}</td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <ImOnedrive />
                </td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <LuHardDriveDownload />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert key="secondary " variant="secondary">
          No se han encontrado files en el local del dispositivo
        </Alert>
      )}
    </>
  );
};
