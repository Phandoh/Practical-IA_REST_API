const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./Models/PatientModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  app.send("Hello everyone");
});

app.post("/patients", async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/patients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByIdAndUpdate(id, req.body);
    if (!patient) {
      res.status(404).json(`There is no patient with this ${id}`);
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/patients/:id", async (req, res) => {
  const filter = [
    { BloodPressure: req.body.BloodPressure },
    { Temperature: req.body.Temperature },
    { Pulse: req.body.Pulse },
    { SPo2: req.body.SPo2 },
  ];
  try {
    const { id } = req.params;
    const patient = await Patient.findManyAndUpdate(filter, req.body, {
      new: true,
    });
    if (!patient) {
      res.status(404).json(`There is no patient with this ${id}`);
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/patients",async(req,res)=>{
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });  
    }
})

mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("connected to MongoDB");
  app.listen(3000, () => {
    console.log("The server is running on port 3000");
  });
});
