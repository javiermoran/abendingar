'use strict'
var AdvicesService = require('../services/advices.service')

exports.getAll = (req, res) => {
  res.json(AdvicesService.getAdvices())
}

exports.getById = (req, res) => {
  let advice = AdvicesService.getAdviceById(req.params.id)

  if(advice)
    res.json(advice)
  else
    res.status(404).json({status: 404, description: "Not found"})
}

exports.random = (req, res) => {
  res.json(AdvicesService.getRandomAdvice())
}