const Pet = require("../models/pet.model")


const controller ={ 
showAll: (req, res) => {
  Pet.find()
    .sort('type')
    .then(resp => res.json( resp ))
    .catch(err => res.status(400).json(err))
},
getOne: (req , res) =>{
    Pet.findOne({_id:req.params.id})
    .then(resp => res.json( resp ))
    .catch(err => res.status(400).json(err))
},
addOne: (req, res) => {
  Pet.create(req.body)
     .then(resp => res.json(resp))
    .catch(err => {
        if(err.code===11000){
            res.status(400).json({err:{message:"duplicate name"}})
        }
        res.status(400).json(err)

    })
},
updateOne: (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true,runValidators: true})
    .then(resp => res.json(resp))
    .catch(err => res.status(400).json(err))
},
removeOne: (req,res)=>{
        Pet.deleteOne({_id:req.params.id})
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json(err))
},
updateLikes: (req,res)=>{
        Pet.findOneAndUpdate({_id:req.params.id},{$inc:{'likes':1}},{new:true})
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json(err))
}
}

module.exports = controller
