
const {Pool} = require('pg')

exports.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'email_account',
    password: '12345676',
    port: 5432,
})
