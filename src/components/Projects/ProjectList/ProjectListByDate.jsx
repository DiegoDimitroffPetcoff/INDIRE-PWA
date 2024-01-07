import { useEffect, useState } from "react";
import { Spinner } from "../../Common/spinner";
export const ProjectListByDate = ({ projectList }) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([1]);
   
  useEffect(() => {
    setTimeout(() => {
      setList(projectList);
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container-fluid">
      <h1>VERSION 2</h1>
      {loading ? (
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">DATE</th>
                    <th scope="col">REF NUMBER</th>
                    <th scope="col">TITLE</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((project) => (
                    <tr>
                      <th scope="row"><Spinner/></th>
                      <td><Spinner/></td>
                      <td><Spinner/></td>
                      <td>
                        <Spinner/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
       
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">REF NUMBER</th>
              <th scope="col">TITLE</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {list.map((project) => (
              <tr>
                <th scope="row">{project.date}</th>
                <td>{project.project_number}</td>
                <td>{project.title}</td>
                <td>
                <button type="button" className="btn btn-secondary">Information</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
