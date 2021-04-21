'use strict'

const validator = (req, res, next) => {
  if(req.query.name){
    res.status(200).send(req.query)
  } 
  else{
    res.status(500).send('something went wrong')
  }
  next()
}

module.exports = validator;