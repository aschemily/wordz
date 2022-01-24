require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getWords: (req, res) =>{
        sequelize.query(`SELECT * FROM words`)
        .then(dbRes=> res.status(200).send(dbRes))
        .catch(err => console.log("this is the error", err))

    }
}