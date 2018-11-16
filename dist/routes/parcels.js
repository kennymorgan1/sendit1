'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelsControllers = require('../controllers/parcelsControllers');

var _parcelsControllers2 = _interopRequireDefault(_parcelsControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _parcelsControllers2.default.parcelsGetAll);

router.get('/:parcelId', _parcelsControllers2.default.parcelsGetById);

router.post('/', _parcelsControllers2.default.parcelsPost);

router.put('/:parcelId/cancel', _parcelsControllers2.default.parcelsPut);

exports.default = router;