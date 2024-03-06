const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");

mongoose.set('strictQuery', true);


mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');


})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)





const app = express();

app.use(cors());
app.use(express.json());


app.post("/signup", async (req, res) => {


        console.log("hitted the signup endpoint");

        const data = {
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        const checking = await LogInCollection.findOne({ email: req.body.email })

        console.log(checking);

        try{
         if (checking  && checking.password === req.body.password) {
             res.send("user details already exists")
         }
         else{
             await LogInCollection.insertMany([data])
         }
        }
        catch(error) {
         res.send(error.message)
        }

})

app.post("/login", async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.email })

        if (check.password === req.body.password) {
            res.send("user is logged in");
        }

        else {
            res.status(403).send("Invalid input");
        }
    } 
    
    catch (e) {

        res.send("wrong details");
    }

})


app.listen(5000, () => {
    console.log("The auth server is listening to the port 5000");
})