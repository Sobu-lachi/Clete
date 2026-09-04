import express from "express";

const PORT = process.env.PORT||3000;

const app = express()
app.use(express.json())

app.get('/', (req,res)=>{
    res.json({message: "HomePage"})
})

app.listen(PORT, ()=>{
    console.log(`I am running on ${PORT}. We're active`);
    
})