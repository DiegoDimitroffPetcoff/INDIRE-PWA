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
  const [fileName, setFileName] = useState(null)
  const handleFileChange = (event) => {
    event.preventDefault();
    console.log("SUMMARY");
  };
  return (
    <>
      {" "}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Qualificação
        </label>
        <input
          type="text"
          className="form-control"
          value={title}
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
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Imagen
        </label>
        <input
          type="file"
          hidden
          className="form-control-file"
          onChange={({ target: { files } }) => {
            console.log(files);
            files[0] && setFileName(files[0].name);
            if (files) {
              setMain_img_url(URL.createObjectURL(files[0]));
            }
          }}
        />
        {main_img_url ? (
          <img src={main_img_url} width={60} height={60} alt={fileName} />
        ) : (
          <MdCloudUpload color="red" size={60} onClick={document.querySelector("form-control-file").click()} />
        )}
      </div>
    </>
  );
};
