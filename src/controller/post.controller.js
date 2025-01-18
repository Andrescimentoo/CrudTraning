import { characthers } from "../model/model.js";

const postController = async (req,res) => {
    try {
        const createCharacther = await characthers.create(req.body) // atualiza pelo corpo da requisiçao 
        
        if (!createCharacther) {
            res.status(404).send({message:"personagem nao encontrado!"})
        } else {
            res.status(201).send(createCharacther)
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao criar personagem!",error)
    }  

}
export{postController}




























/*import { characthers } from "../model/model.js";

const postController = async (req,res) => {
    try {
        const createCharacther = await characthers.create(req.body)
       
        res.status(201).send(createCharacther)
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao criar personagem!",error)
    }
}

export{postController}
