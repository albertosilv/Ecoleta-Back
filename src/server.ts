import express from 'express'
import routes from './routes'
import path from 'path'
const app = express()

app.use(express.json())
app.use(routes)
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))

const port = process.env.port || 4000

app.listen(port,()=>{
    console.log(port)
})