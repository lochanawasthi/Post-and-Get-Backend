const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user, password} = req.query;

res.send(`GEt Response ${user}`);
})

app.post("register", (req, res)=>{
    let {user, password} = re.body;
    res.send("Standard Post req");

})

app.listen(port,()=>{
console.log(`Listening ${port}`);
});