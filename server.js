var express = require('express');
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.route('/').get((req, res) => {
  let response = {
    api:'Gurdjieff advices API', 
    version: "1.0.0",
    endpoints: [
      '/advices',
      '/advices/rand',
      '/advices/{id}'
    ]
  }

  res.json(response)
})

var routes = require('./api/routes/list.routes')
routes(app)

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' does not exist'})
})

app.listen(port)

console.log('Gurdjieff API server started on: ' + port)