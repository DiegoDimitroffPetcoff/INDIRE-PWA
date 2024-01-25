import Templates from "../../Templates/Summary.json";

export const Summary = ({
  setTitle,
  title,
  setSub_title,
  sub_title,
  setAddress,
  adrress,
}) => {
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
          className="form-control"
          value={""}
          placeholder="Exemplo:Av do uruguai 32B..."
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
    </>
  );
};
