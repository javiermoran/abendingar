'use strict'

const advices = require('../json/advices.json')

function getAdviceById(id) {
  return advices.find(item => item.id == id)
}

exports.getAdvices = () => advices
exports.getAdviceById = id => getAdviceById(id)

exports.getRandomAdvice = () => {
  let count = advices.length + 1
  let randomNumber = Math.floor(Math.random() * count) + 1
  return getAdviceById(randomNumber)
}
