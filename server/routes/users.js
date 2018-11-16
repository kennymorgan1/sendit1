import express from 'express';
import UsersController from '../controllers/usersControllers';


const router = express.Router();

router.get('/:userId/parcels', UsersController.usersGetAll);

export default router;