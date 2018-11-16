'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _data = require('../Data/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParcelControllers = function () {
    function ParcelControllers() {
        _classCallCheck(this, ParcelControllers);
    }

    _createClass(ParcelControllers, null, [{
        key: 'parcelsGetAll',
        value: function parcelsGetAll(req, res) {
            res.json({ success: true, message: 'parcels retrieved successfully', parcels: _data2.default });
        }
    }, {
        key: 'parcelsGetById',
        value: function parcelsGetById(req, res) {
            var parcel = _data2.default.find(function (c) {
                return c.parcelId === parseInt(req.params.parcelId);
            });
            if (!parcel) res.status(404).json({ success: false, error: 'The parcel with the given ID was not found' });
            res.status(200).json({ success: true, message: 'parcel retrieved successfully', parcel: parcel });
        }
    }, {
        key: 'parcelsPost',
        value: function parcelsPost(req, res) {
            if (!req.body.name || !req.body.email || !req.body.local || !req.body.category || !req.body.destination) {
                res.status(400).json({ success: false, error: 'All fields are required' });
            }
            var parcel = {
                parcelId: _data2.default.length + 1,
                name: req.body.name,
                email: req.body.email,
                local: req.body.local,
                category: req.body.category,
                destination: req.body.destination,
                status: "pending"
            };
            _data2.default.push(parcel);
            res.status(201).json({ success: true, message: 'parcel created successfully', parcel: parcel });
        }
    }, {
        key: 'parcelsPut',
        value: function parcelsPut(req, res) {
            var parcel = _data2.default.find(function (c) {
                return c.parcelId === parseInt(req.params.parcelId);
            });
            if (!parcel) res.status(404).json({ success: false, error: 'The parcel with the given ID was not found' });
            parcel.status = 'cancelled';
            res.status(200).json({ success: false, message: 'updated succesfully', parcel: parcel });
        }
    }]);

    return ParcelControllers;
}();

exports.default = ParcelControllers;