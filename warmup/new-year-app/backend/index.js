const express = require("express");
const bodyparser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.json()); //to parse body


app.post("/todo",function(req,res){

})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));