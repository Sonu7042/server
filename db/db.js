const sql=require('mysql')
const dotenv=require('dotenv')
dotenv.config()

const connection=sql.createConnection({
    host:process.env.host,
    user:process.env.user,
    database:process.env.database,
    password:process.env.password
})

connection.connect(function(err){
    if(err){throw err }

    console.log("db is connected")
})


module.exports=connection


