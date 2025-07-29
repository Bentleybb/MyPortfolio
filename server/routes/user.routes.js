import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

// Param middleware
router.param('userId', userCtrl.userByID);

/** 
 * Admin-only routes 
 */

// Admin can list all users
router.route("/api/users")
  .post(userCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.list);

// Admin or self can read/update profile
router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.remove); // Only admin can delete users

export default router;
