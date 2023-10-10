import { Router } from "express";
import { controller } from "../controllers/project.js";


const { test, saveProject, getProject, getProjects, updateProject, deleteProject } = controller

export const router = Router()

router.get('/home', controller.home)
router.post('/test/:lastname', test)
router.post('/saveproject', saveProject)
router.get('/getproject/:id?', getProject)
router.get('/getprojects', getProjects)
router.patch('/updateproject/:id', updateProject)
router.delete('/deleteprojects/:id', deleteProject)