const express = require('express')
const app = express()
// const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index_routes')
const clientRoutes = require('./routes/client_routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Uber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

indexRoutes(app)
clientRoutes(app)

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})
module.exports = app;
