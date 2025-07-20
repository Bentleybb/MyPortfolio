import express from 'express'
    import contactCtrl from '../controllers/contact.controller.js' 
    const router = express.Router()
    router.route('/api/projects').post(contactCtrl.create)
    router.route('/api/projects').get(contactCtrl.list)
    router.param('contactId', contactCtrl.contactByID)
    router.route('/api/projects/:contactId').get(contactCtrl.read)
    router.route('/api/projects/:contactId').put(contactCtrl.update)
    router.route('/api/projects/:contactId').delete(contactCtrl.remove)

    export default router


