//como eu deletaria um dado? primeiro de tudo eu vou ter que!
//*capturar o corpo e o id
//*proteger com uma verificaçao de requisçao
//depois eu aplicaria o method
//depois so estruturar as respostas de erro ou sucesso!
import { characthers } from "../model/model.js";

const deleteController = async (req,res) => {
    try {
       const getbyId = await characthers.findByPk(req.params.id) 
       
       if (!getbyId) {
        res.status(404).send({message:"personagem nao encontrado"})
       } else {
        const deleteCharacther = await getbyId.delete()
        res.status(200).send(deleteCharacther)
       }
    } catch {
        res.status(500).send({message:"erro ao deletar personagem"})
    }
}   

export{deleteController} 