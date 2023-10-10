import mongoose from "mongoose";
import { app } from "./app.js";
// const mongoose = require('mongoose')
// const app = require('./app')


const port = 3700

// mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/Portfolio')
    .then(() => {
        console.log('La base de datos ha sido cargada correctamente')
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en http://localhost:3700")
        })
    })
    .catch((err) => {
        console.log('Ha ocurrido un error: ' + err)
    })