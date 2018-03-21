'use strict';

let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');
const { Users } = require('./user.json');

let makeDB = queryInterface => {
  const app = require('../app.js');
  const models = app.get('models');
  return models.sequelize
    .sync({ force: true })
    .then(queryInterface => {
      return models.User.bulkCreate(Users);
    })
    .catch(err => {
      console.log('ERRRR', err);
    });
};
makeDB(queryInterface);
module.exports = makeDB;
