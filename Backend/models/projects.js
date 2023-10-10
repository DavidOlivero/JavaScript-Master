import { Schema, model } from "mongoose";
// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

const projectSchema = Schema({
    name: String,
    description: String,
    category: String,
    languages: String,
    year: Number,
    image: String
})

export const mongooseModel =  model('Project', projectSchema)