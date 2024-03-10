const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require("./models/Users")
const router = require('./Route/user')
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud")
app.use('/auth', router)

app.post("/createUser", (req, res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/", (req, res) => {
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id
    userModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req,res) => {
    const id = req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})