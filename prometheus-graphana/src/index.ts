import express from "express";

const app = express();  

app.use(express.json());

app.get("/user", (req: any, res: any) => {
    res.send({
        name: "John Doe",
        age: 25,
    });
});

app.post("/user", (req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id: 1,
    });
});

app.listen(3000, () => { console.log("done") });