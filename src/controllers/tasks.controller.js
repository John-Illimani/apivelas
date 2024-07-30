import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const Tasks =
      await Task.findAll(); /* este findAll() es un metodo que devuelve unarreglo donde estan listadas todos los datos */

    /* console.log(Tasks); */
    res.json(Tasks); /* esto es para enviar al cliente */
    /* el res.send("hola") esto envia directamente un mensaje  al cliente */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    /* console.log(req.body); */

    const { name, done, projectId } = req.body;

    /* esto es una consulta de creacion */
    const newTasks = await Task.create({
      name,
      done,
      projectId,
    });
    /* console.log(newTasks); */

    res.json(newTasks);
    /* aqui de igual manera funsiona el req.send("hola") que esto es para enviar los datos al cliente */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    

    const { id } = req.params;

    await Task.destroy({
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


export const updateTasks =async(req,res)=>{
    try {
        /* console.log(req.params.id); */

        const {id}=req.params;
        const {name, done, projectId} = req.body;

        const TasksOne = await Task.findByPk(id);
        /* TasksOne.name=name;
        TasksOne.done=done;
        TasksOne.projectId=projectId; */

        TasksOne.set(req.body);  /* esta es otra manera de actualizar lso datos, y es mas mejor */

        await TasksOne.save();  /* esto es para guardar el actulizado , ensi se actualiza usando el objeto creado, en este caso el de TasksOne */


        /* console.log(TasksOne); */

        /* res.send("update Tasks"); */
        res.json(TasksOne)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
};

export const getTask = async(req,res)=>{

    try {
        const {id} =req.params;
        /* aqui con el findOne se puede buscar por mas campos, es decir yano solo por el id */
        const TaskOne2 = await Task.findOne({
            where:{
                id
            }
        });
    
        if(!TaskOne2)
            return res.status(400).json({ message: "this Task no exits"})
        res.json(TaskOne2) 
    } catch (error) {
        return res.status(500).json({ message:error.message});
    }
}
