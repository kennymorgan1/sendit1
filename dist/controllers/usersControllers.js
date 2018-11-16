'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _data = require('../Data/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersControllers = function () {
    function UsersControllers() {
        _classCallCheck(this, UsersControllers);
    }

    _createClass(UsersControllers, null, [{
        key: 'usersGetAll',
        value: function usersGetAll(req, res) {
            var user = _data2.default.filter(function (parcel) {
                return parcel.userId === parseInt(req.params.userId);
            });
            if (!user) res.status(404).send('The user has no parcel');
            res.send(user);
        }
    }]);

    return UsersControllers;
}();

exports.default = UsersControllers;