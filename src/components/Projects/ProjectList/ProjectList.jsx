
import Alert from "react-bootstrap/Alert";
import { LuHardDriveDownload } from "react-icons/lu";
import { ImOnedrive } from "react-icons/im";

import { useNavigate } from "react-router-dom";

import Table from "react-bootstrap/Table";
export const ProjectList = ({ setDataToEdite }) => {
  console.log(setDataToEdite);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("ProjectList"));

  return (
    <>
      <h1>Pesquisar</h1>
      {data && data.length > 0 ? (
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
            {data.map((project, index) => (
              <tr key={index}>
                <td>{project.project_id}</td>
                <td>{project.title}</td>
                <td>{project.address}</td>
                <td>{project.date}</td>
                <td>{project.project_number}</td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDataToEdite(project);
                    console.log(project);
                    navigate("/EditeProject");
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
