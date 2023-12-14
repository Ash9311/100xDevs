const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
     console.log(req.body);
    res.send('Hello !');
})

// app.get('/',(req,res)=>{

// })

app.get('/route-handler', (req, res) => {
    res.json({ name: "ash", age: 25 });
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
