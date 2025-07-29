import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/contacts/')
  .post(contactCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.list);

export default router
