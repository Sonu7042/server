const express=require('express')
const connection=require('./db/db')
const cors=require('cors')
const app=express()
// const dotenv=require('dotenv')
// dotenv.config()

app.use(express.json())
app.use(cors())

app.listen(9000,()=>{
    console.log(`server is listening on ${9000}`)
})


app.get('/',(req,res)=>{
    const userdata="select * from employee"
    connection.query(userdata,(err,rows)=>{
        if(err){
            console.error("this is error", err)
        }
        else{
            res.send(rows)
        }
    })
    
})


app.post('/create',(req,res)=>{
    const user=req.body
    const query="insert into employee set ?"
    connection.query(query, user,(err, rows)=>{
        if(err){throw err}
    
        res.status(200).json({
            message:"Data add successfully",
            data:rows
          
        })  
    })
}) 

app.get('/delete/:id',(req,res)=>{
    const id=req.params.id
    const query="delete from employee where id= ?"

    connection.query(query,[id],(err, result)=>{
        if(err){throw err}

        res.status(200).json("data is delete successfully")
    })
    
})


app.post('/update/:id',(req,res)=>{
    const id=req.params.id
    const {name, email, password}=req.body
    // console.log(user, "this is id", id)
    
    const query='update employee set name = ?, email = ?, password = ? where id = ?'

    connection.query(query, [name, email, password, id], (err, result)=>{
        if(err){throw err}
        
        res.status(200).json("user update successfully")
    })

})







