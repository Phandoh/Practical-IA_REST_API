const express = require('express');
const mongoose = require('mongoose');
const Patient = require("./Models/PatientModel");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    app.send("Hello everyone")
});

app.post("/patient",async(req,res)=>{
    try {
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("connected to MongoDB");
    app.listen(3000, ()=>{
        console.log("The server is running on port 3000")
    })
}
)

