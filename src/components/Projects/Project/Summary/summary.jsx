import { useState } from "react";

import { MdCloudUpload } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

export const Summary = ({
  setTitle,
  title,
  setSub_title,
  sub_title,
  setAddress,
  adrress,
  main_img_url,
  setMain_img_url,
  project_number,
  setProject_number,
  date,
  setDate,
  version,
  setVersion,
}) => {
  const [fileName, setFileName] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        justifyContent:"center",      
        backgroundColor: "#dee2e6",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          
          backgroundColor: "#dee2e6",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        {" "}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Qualificação
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            required={true}
            placeholder="Exemplo: Intervenção de reabilitação..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Morada
          </label>
          <input
            type="text"
            className="form-control"
            value={adrress}
            placeholder="Exemplo: Av do uruguai 32B..."
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#dee2e6",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        {" "}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Sub Qualificação
          </label>
          <input
            type="text"
            className="form-control"
            value={sub_title}
            placeholder="Exemplo: Relatório de inspeção e proposta de intervenção..."
            onChange={(e) => {
              setSub_title(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ref
          </label>
          <input
            type="text"
            className="form-control"
            value={project_number}
            placeholder="Exemplo: Ref.ª 19.11.12_RELATÓRIO_INSPEÇÃO_v1.0"
            onChange={(e) => {
              setProject_number(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Version
          </label>
          <input
            type="number"
            className="form-control"
            value={version}
            placeholder="v1.0"
            onChange={(e) => {
              setVersion(e.target.value);
            }}
          />
        </div>
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "end",
            aligItems: "flex-end",
          }}
        >
          <input
            style={{
              cursor: "pointer",
              padding: "20px",
            }}
            type="file"
            accept="image/*"
            hidden
            className="form-control-file"
            onChange={({ target: { files } }) => {
              if (files) {
                files[0] && setFileName(files[0].name);
                const reader = new FileReader();
                reader.onload = (e) => {
                  setMain_img_url(e.target.result);
                };
                if (files[0] !== undefined) {
                  reader.readAsDataURL(files[0]);
                }
              }
            }}
          />

          {main_img_url ? (
            <>
              <img
                src={main_img_url}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
                width={100}
                height={100}
                onClick={() =>
                  document
                    .getElementsByClassName("form-control-file")[0]
                    .click()
                }
                alt={fileName}
              />
              <CiCircleCheck />
            </>
          ) : (
            <MdCloudUpload
              color="#717171"
              style={{
                cursor: "pointer",
              }}
              size={60}
              onClick={() =>
                document.getElementsByClassName("form-control-file")[0].click()
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};
