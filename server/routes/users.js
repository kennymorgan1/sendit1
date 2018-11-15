import express from 'express';
import UsersController from '../controllers/users';

const app = express();
const router = express.Router();

router.get('/:userId/parcels', UsersController.usersGetAll);

module.exports = router;