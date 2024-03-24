export const IdMaker = (index) => {
  const ProjectList = JSON.parse(localStorage.getItem("ProjectList"));

  ProjectList.filter((id) => {
    if (id.project_id === index) {
      
      console.log("Existe");
      console.log("se crea el ID " + (index + 1));
      return (index + 1);
    } else {
      console.log("no existe");
      return index
    }
  });
};
