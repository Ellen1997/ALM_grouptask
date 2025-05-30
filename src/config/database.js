const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");


dotenv.config();  

let sequelize;

if (process.env.NODE_ENV !== "test") {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "postgres",
      logging: false, 
    }


  );
} else {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
}

module.exports = sequelize;



require('../models/Associations');
