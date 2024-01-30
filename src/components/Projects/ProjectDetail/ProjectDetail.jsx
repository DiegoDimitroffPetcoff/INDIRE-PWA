import LogoImage from "../../../assets/INDIRE_LOGO.png";
import "./ProjectDetail.css";

export const ProjectDetail = ({ data, setShowPreview, showPreview }) => {
  var fechaActual = new Date();
  var año = fechaActual.getFullYear();
  var mes = fechaActual.getMonth();
  var dia = fechaActual.getDate();
  let date = `d${dia}-m${mes + 1}-a${año}`;

  return (
    <>
      <article id="projectPDF" style={{ width: "100%" }}>
        <figure>
          <img className="logo" src={LogoImage} alt="INDIRE LOGO" />
        </figure>
        <h1>{data.title}</h1>
        <address>{data.address}</address>
        <img className="main_img_url" src={data.main_img_url} alt="imagen" />
        <span>{date}</span>
        <p>{data.project_number}</p>
        Introduction
        <p>{data.introduction}</p>
        Gral Description
        <p>{data.gral_description}</p>
      </article>
      <button
        style={{ background: "green" }}
        onClick={() => {
          setShowPreview(!showPreview);
        }}
      >
      BACK
      </button>
    </>
  );
};
