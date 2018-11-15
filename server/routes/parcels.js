import express from 'express';
import ParcelsController from '../controllers/parcels';

const router = express.Router();

router.get('/', ParcelsController.parcelsGetAll);

router.get('/:parcelId', ParcelsController.parcelsGetById);

router.post('/', ParcelsController.parcelsPost);

router.put('/:parcelId/cancel', ParcelsController.parcelsPut);


module.exports = router;