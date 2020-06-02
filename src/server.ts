import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('Ola')
})

const port = process.env.port || 4000

app.listen(port,()=>{
    console.log(port)
})