import { characthers } from "../model/model.js";

const findAllCharacthers = async (req,res) => {
    try {
      const getChacarcters =  await characthers.findAll()
      res.status(200).send(getChacarcters)
      console.log("personagem enviado com sucesso!")
    } catch (error) {
        console.log("erro ao enviar personagens", error)
    }
}
export{findAllCharacthers}