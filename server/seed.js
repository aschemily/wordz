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
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists words;

        CREATE TABLE words (
            word varchar(5)   
        );

        INSERT INTO words (word)
        values ('Seize'),
            ('Serve'),
            ('Sharp'),
            ('Shelf'),
            ('Shine'),
            ('Slice'),
            ('Solid'),
            ('Space'),
            ('Stand'),
            ('Stone'),
            ('Eager'),
            ('Earth'),
            ('Ebony'),
            ('Edict'),
            ('Eight'),
            ('Elect'),
            ('Elite'),
            ('Entry'),
            ('Every'),
            ('Extra'),
            ('Adult'),
            ('Abuse'),
            ('Agent'),
            ('Anger'),
            ('Apple'),
            ('Award'),
            ('Basis'),
            ('Beach'),
            ('Birth'),
            ('Block'),
            ('Blood'),
            ('Board'),
            ('Brain'),
            ('Bread'),
            ('Break'),
            ('Brown'),
            ('Buyer'),
            ('Cause'),
            ('Chain'),
            ('Chair'),
            ('Chest'),
            ('Chief'),
            ('Child'),
            ('China'),
            ('Claim'),
            ('Class'),
            ('Clock'),
            ('Coach'),
            ('Coast'),
            ('Court'),
            ('Cover'),
            ('Cream'),
            ('Crime'),
            ('Cross'),
            ('Crowd'),
            ('Crown');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}
