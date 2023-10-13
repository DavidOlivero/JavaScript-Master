import { mongooseModel } from "../models/projects.js";
import { unlink } from "fs";

export const controller = {
    home: (req, res) => {
        return res.status(200).send({
            message: 'Este es la home'
        })
    },

    test: (req, res) => {
        // Get data from formule encode
        console.log(req.body.name)

        // Get data for url
        console.log(req.query.secondname)

        // Get data for url params
        console.log(req.params.lastname)
        
        return res.status(200).send({
            message: 'Esta es la ruta test'
        })
    },

    saveProject: (req, res) => {
        const Project = new mongooseModel()
        
        const {
            name, 
            description, 
            category, 
            languages, 
            year,
            image 
        } = req.body

        Project.name = name
        Project.description = description
        Project.category = category
        Project.languages = languages
        Project.year = year
        Project.image = image

        Project.save()
            .then((projectStored) => {
                if (!projectStored) return res.status(500).send({
                    message: 'No se pudo guardar el projecto en la base de datos'
                })
                
                return res.status(200).send({
                    project: projectStored
                })
            })
            .catch((err) => {
                return res.status(500).send({
                    message: 'Ha ocurrido un error al intentar guardar en la base de datos'
                })
            })
    },

    getProject: (req, res) => {
        // const projectId = req.body.id
        const projectId = req.params.id

        if (projectId === null) {
            res.status.send({
                message: 'El elemento no existe'
            })
        }

        mongooseModel.findById(projectId)
            .then((project) => {
                if (!project) return res.status(404).send({
                    message: 'El elemento no existe'
                })
                
                return res.status(200).send({
                    project: project
                })
            })
            .catch((err) => {
                res.status(500).send({
                    message: 'Hubo un problema al tratar de buscar el elemento'
                })
            })
    },

    getProjects: (req, res) => {
        mongooseModel.find({}).sort('-year').exec()
            .then((projects) => {
                if (!projects) return res.status(404).send({
                    message: 'No hay projectos que mostrar'
                })

                return res.status(200).send({ projects })
            })
            .catch((err) => {
                return res.status(500).send({
                    message: 'Ha ocurrido un error al tratar de mostrar los projectos'
                })
            })
    },

    updateProject: (req, res) => {
        const projectId = req.params.id
        const elementUpdated = req.body

        mongooseModel.findByIdAndUpdate(projectId, elementUpdated, { new: true }).exec()
            .then((project) => {
                if (!project) {
                    return res.status(404).send({
                        message: 'No hay ningún elemento a actualizar con ese id'
                    })

                }
                
                return res.status(200).send({
                    project
                })
            })
            .catch((err) => {
                return res.status(500).send({
                    message: 'Ha ocurrido un error al intentar actualizar el elemento'
                })
            })
    },

    deleteProject: (req, res) => {
        const projectId = req.params.id
        
        mongooseModel.findByIdAndDelete(projectId)
            .then((removedProject) => {
                if (!removedProject) return res.status('404').send({
                    message: 'No se a aecontrado el elemento a eliminar'
                })

                return res.status(200).send({
                    removedProject
                })
            })
            .catch((_err) => {
                return res.status(500).send({
                    message: 'Ocurrio un erro r al intentar eliminar el elemento'
                })
            })
    },

    uploadImage: (req, res) => {
        const projectId = req.params.id
        let fileName = 'Vacío...'

        const fileInfo = req.files

        if (fileInfo) {
            const filePath = fileInfo.images.path
            fileName = filePath.split('\\')[1]
            const extention = fileName.split('.')[1]

            if (extention === 'png' || extention === 'jpg' || extention === 'jpeg' || extention === 'gif') {
                mongooseModel.findByIdAndUpdate(projectId, { image: fileName }, { new: true })
                .then((projectUpdate) => {
                    if (!projectUpdate) return res.status(404).send({
                        message: 'No existe el projecto'
                    })
    
                    return res.status(200).send({
                        project: projectUpdate
                    })
                })
                .catch((err) => {
                    res.status(500).send({
                        message: 'Ha ocurrido un errror al intentar guardar la imagem'
                    })
                })
            } else {
                unlink(filePath, (err) => {
                    return res.status(404).send({
                        message: 'La extención del fichero no es válida'
                    })
                })
            }
            
        }

        /*return res.status(500).send({
            message: 'No se ha cargado ninguna imagen'
        })*/
    }
} 