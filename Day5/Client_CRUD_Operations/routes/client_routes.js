const ClientController = require('../controllers/client_controller')

module.exports = (app)=>{

    app.get('/api/clients', ClientController.all)

    app.post('/api/clients', ClientController.create_client)

    app.put('/api/clients/:id', ClientController.edit)
    
    app.delete('/api/clients/:id',  ClientController.delete)
  
    app.get('/api/clients/:id', ClientController.details)
}
