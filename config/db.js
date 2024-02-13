const {Sequelize} = require('sequelize')
const {userModel} = require ('../models/userModel')
require('dotenv').config()

let user = null;

const connectDB = async() => {

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.USER_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST_NAME,
  port: process.env.PORT_NUMBER_2,
  database: process.env.DB_NAME
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established!!');
  user = userModel(sequelize)

  await sequelize.sync();
  console.log('Table has been created.')

} catch (error) {
  console.error('Unable to connect to database: ', error);
}

}

module.exports = {connectDB, user};