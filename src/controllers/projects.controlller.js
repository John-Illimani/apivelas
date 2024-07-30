import { Project } from "../models/Projects.js";

export const getProjects = async (req, res) => {
  try {
    const projects =
      await Project.findAll(); /* este findAll() es un metodo que devuelve unarreglo donde estan listadas todos los datos */

    /* console.log(projects); */
    res.json(projects); /* esto es para enviar al cliente */
    /* el res.send("hola") esto envia directamente un mensaje  al cliente */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    /* console.log(req.body); */

    const { name, priority, description } = req.body;

    /* esto es una consulta de creacion */
    const newProject = await Project.create({
      name,
      description,
      priority,
    });
    /* console.log(newProject); */

    res.json(newProject);
    /* aqui de igual manera funsiona el req.send("hola") que esto es para enviar los datos al cliente */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    

    const { id } = req.params;

    await Project.destroy({
      where: {
        id
      },
    });
    console.log(req.params.id); /* esto es para recupera el id de la URL */
   /*  res.send("delete projet"); */
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};


export const updateProject =async(req,res)=>{
    try {
        /* console.log(req.params.id); */

        const {id}=req.params;
        const {name, priority, description} = req.body;

        const ProjectOne = await Project.findByPk(id);
        ProjectOne.name=name;
        ProjectOne.priority=priority;
        ProjectOne.description=description;

        await ProjectOne.save();  /* esto es para guardar el actulizado , ensi se actualiza usando el objeto creado, en este caso el de ProjectOne */


        /* console.log(ProjectOne); */

        /* res.send("update project"); */
        res.json(ProjectOne)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
};

export const getProject = async(req,res)=>{

    try {
        const {id} =req.params;
        /* aqui con el findOne se puede buscar por mas campos, es decir yano solo por el id */
        const ProjectOne2 = await Project.findOne({
            where:{
                id
            }
        });
    
        if(!ProjectOne2)
            return res.status(400).json({ message: "this project no exits"})
        res.json(ProjectOne2) 
    } catch (error) {
        return res.status(500).json({ message:error.message});
    }
}
