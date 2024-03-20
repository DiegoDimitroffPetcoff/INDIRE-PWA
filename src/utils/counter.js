/* const Counter = (id)=>{
    let subProjectCounts = {}
    let setSubProjectCounts = {id}
    const parentCount = subProjectCounts[id] || 0;
    const subProjectName = `${id}.${parentCount + 1}`;
    setSubProjectCounts = subProjectCounts,
      [id]: parentCount + 1, // Incrementa el contador de subproyectos para el proyecto padre
    });
    console.log("subProjectName");
    console.log(subProjectName);
    return subProjectName;
}
export default Counter */