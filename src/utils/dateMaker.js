export const DateMaker = () => {
  var fechaActual = new Date();
  var año = fechaActual.getFullYear();
  var mes = fechaActual.getMonth();
  var dia = fechaActual.getDate();
  let date = `${dia}-${mes + 1}-${año}`;
  return date;
};
