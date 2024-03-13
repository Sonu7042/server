const sql=require('mysql')
// const dotenv=require('dotenv')
// dotenv.config()

const connection=sql.createConnection({
    host:'sql6.freesqldatabase.com',
    user:'sql6691074',
    database:'sql6691074',
    password:'Cazned9AwB'
})

connection.connect(function(err){
    if(err){
        console.error("this is error", err)
        return
    }

    console.log("db is connected")
})


module.exports=connection


