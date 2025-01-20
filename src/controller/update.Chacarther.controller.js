import { characthers } from "../model/model.js";

const updateChacarther = async (req,res) => {
    try {
        const getById = await characthers.findByPk(req.params.id)//você vai encontrar o personagem pelo ID passado na requisição
        
        if(!getById){
           res.status(404).send({message:"personagem nao encontrado!"}) //esse if deixa o codigo mais descritivo, por que sem essa linha o codigo poderia querer executar uma atualizaçao em um personagem inexistente assim nao enviando nada para o cliente 
        }else{
            const updateCharacther = await getById.update(req.body)//caso de certo, aí sim executa a atualizaçao do personagem!
            res.status(200).send(updateCharacther)
            console.log("personagem atualizado com sucesso!")
        }
    } catch (error) {
        res.status(404).send({message:"erro ao atualizar personagem!"})
       
    }
}
    

export {updateChacarther}