import { useState } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";

export const Summary = ({
  setTitle,
  title,
  setSub_title,
  sub_title,
  setAddress,
  adrress,
  main_img_url,
  setMain_img_url,
}) => {
  const [fileName, setFileName] = useState(null);

  return (
    <div
      style={{
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
        <input
          type="file"
          accept="image/*"
          hidden
          className="form-control-file"
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              const reader = new FileReader();
              reader.onload = (e) => {
                setMain_img_url(e.target.result);
              };
              reader.readAsDataURL(files[0]);
            }
          }}
        />

        {main_img_url ? (
          <img src={main_img_url} width={60} height={60} alt={fileName} />
        ) : (
          <MdCloudUpload
            color="#717171"
            size={60}
            onClick={() =>
              document.getElementsByClassName("form-control-file")[0].click()
            }
          />
        )}
      </div>
    </div>
  );
};
