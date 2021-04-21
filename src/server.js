'use strict'

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errors = require('./error-handlers/500')
const notFound = require('./error-handlers/404')

app.use(express.json())

app.get('/', logger, (req, res) => {
  res.status(200).send('Hello world!')
})
app.get('/person', validator, logger, (req,res) =>{
  console.log(req.query);
})
//catch all route handlers routes that aren't found 
app.use('*', notFound);

app.use(errors)

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server is up on port: ${port}`)
    })
  }
}