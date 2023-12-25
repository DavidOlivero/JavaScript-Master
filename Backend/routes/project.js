import { Router } from "express";
import { controller } from "../controllers/project.js";
import multiparty from "connect-multiparty";


const multipartyMiddleware = multiparty({ uploadDir: './uploads' })

const { test, saveProject, getProject, getProjects, updateProject, deleteProject, uploadImage, getImageFile } = controller

export const router = Router()

router.get('/home', controller.home)
router.post('/test/:lastname', test)
router.post('/saveproject', saveProject)
router.get('/getproject/:id?', getProject)
router.get('/getprojects', getProjects)
router.patch('/updateproject/:id', updateProject)
router.delete('/deleteprojects/:id', deleteProject)
router.post('/uploadimage/:id', multipartyMiddleware, uploadImage)
router.get('/getimagepath/:file', getImageFile)