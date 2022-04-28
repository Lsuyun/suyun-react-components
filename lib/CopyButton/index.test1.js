'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _syReactComponents = require('sy-react-components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CopyButtonTest = function CopyButtonTest() {
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(_syReactComponents.CopyButton, {
      copyText: '1231234',
    }),
  );
};

var _default = /*#__PURE__*/ _react.default.memo(CopyButtonTest);

exports.default = _default;
