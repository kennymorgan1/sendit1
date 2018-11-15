import express from 'express';
import parcelsController from '../controllers/parcels';

const router = express.Router();



router.get('/', parcelsController.parcelsGetAll);

router.get('/:parcelId', parcelsController.parcelsGetById);

router.post('/', parcelsController.parcelsPost);

router.put('/:parcelId/cancel', parcelsController.parcelsPut);


module.exports = router;