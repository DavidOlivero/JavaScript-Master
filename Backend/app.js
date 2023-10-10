import express from "express";

// const express = require('express')
// const bodyParser = require('body-parser')


export const app = express()

// Load files routes
import { router } from "./routes/project.js";

// Middlewares
app.use(express.urlencoded({ extended: false })) // Analize with formule format request
app.use(express.json()) // Analize with json format request

// CORS

// Routes
app.use('/api', router)

/* HTTP request
GET -> For request data
POST -> For send data
PUT -> For update data
DELETE -> For delete data
*/

// app.get('/', (_req, res) => {
//     res.status(200).send('Página principal')
// })
//
// app.post('/test/:lastname', (req, res) =>{
//     // Get data from form encode
//     console.log(req.body.name)
//
//     // Get data for url
//     console.log(req.query.secondname)
//
//     // Get data for url params
//     console.log(req.params.lastname)
//
//     res.status(200).send({
//         message: 'Todo correcto'
//     })
// })

// Export modules
// module.exports = app