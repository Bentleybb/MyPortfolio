import Project from '../models/project.model.js'
import extend from './lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => { 
const project = new Project(req.body) 
try {
await project.save()
return res.status(200).json({ 
message: "Successfully Created!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const list = async (req, res) => { 
try {
let projects = await Project.find().select('title firstname lastname email completion description') 
res.json(projects)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const projectByID = async (req, res, next, id) => { 
try {
let project = await project.findById(id) 
if (!project)
return res.status('400').json({ 
error: "project not found"
})
req.profile = project 
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve project"
}) 
}
}
const read = (req, res) => {
req.profile.hashed_password = undefined 
req.profile.salt = undefined
return res.json(req.profile) 
}
const update = async (req, res) => { 
try {
let project = req.profile
project = extend(project, req.body) 
project.updated = Date.now() 
await project.save()
project.hashed_password = undefined 
project.salt = undefined
res.json(project) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const remove = async (req, res) => { 
try {
let project = req.profile
let deletedproject = await project.deleteOne() 
deletedproject.hashed_password = undefined 
deletedproject.salt = undefined
res.json(deletedproject) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
export default { create, projectByID, read, list, remove, update }


