import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import Table from "react-bootstrap/Table";
import { IdMaker } from "../../../utils/idMaker";

import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";

const ProjectList = ({ setData }) => {
/*   const navigate = useNavigate(); */
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
                <td>
                  {project.date +
                    "_" +
                    project.title +
                    "_" +
                    project.project_number}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setData(project);
                   /*  navigate("/AddProjectPage"); */
                  }}
                >
                  <CiEdit />
                </td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => IdMaker(index + 1)}
                >
                  <TiDeleteOutline />
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
export default ProjectList;
