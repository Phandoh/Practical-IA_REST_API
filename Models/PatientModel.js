const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        Patient_ID: {
            type: Number,
            required: true
        },
        Surname: {
            type: String,
            required: true
        },
        Othernames: {
            type: String,
            required: true
        },
        Gender: {
            type: String,
            required: true
        },
        PhoneNumber: {
            type: Number,
            required: true
        },
        ResidentialAddress: {
            type: String,
            required: true
        },
        EmergencyName: {
            type: String,
            required: true
        },
        Contact: {
            type: Number,
            required: true
        },
        RelationshipWithPatient: {
            type: String,
            required: true
        },
        DateAndTime:{
            type: String
        },
        TypeOfEncounter:{
            type: String
        },
        BloodPressure:{
            type:Number
        },
        Temperature:{
            type:Number
        },
        Pulse:{
            type:Number
        },
        SPo2:{
            type:Number
        },
    },{
        timestamps: true
    }
);

const Patient = mongoose.model("Patient",patientSchema)
module.exports = Patient;