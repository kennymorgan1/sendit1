import express from 'express';
import usersController from '../controllers/users';

const app = express();
const router = express.Router();

router.get('/:userId/parcels', usersController.users_get_all);

module.exports = router;