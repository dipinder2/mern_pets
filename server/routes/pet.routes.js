const petController = require('../controllers/pet.controllers')

module.exports = app =>{
  app.post('/api/pets',petController.addOne)
  app.get('/api/pets',petController.showAll)
  app.get('/api/pets/:id',petController.getOne)
  app.delete('/api/pets/:id',petController.removeOne)
  app.put('/api/pets/:id',petController.updateOne)
  app.put('/api/pets/likes/:id',petController.updateLikes)
}