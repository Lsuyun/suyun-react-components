'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/space/style');

var _space = _interopRequireDefault(require('antd/es/space'));

var _react = _interopRequireDefault(require('react'));

var _lodash = _interopRequireDefault(require('lodash'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * @Author: liusuyun
 * @Date: 2022-04-25 17:57:30
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-26 16:09:56
 * @Description:基于antd Space进行重新封装
 */
// null || undefined || '' || NaN || {} || [] 时不渲染元素，其它情况均渲染。
var isVoid = function isVoid(val) {
  if (_lodash.default.isFunction(val)) {
    return false;
  }

  return (
    val === null ||
    val === undefined ||
    val === '' ||
    _lodash.default.isNaN(val) ||
    (_lodash.default.isObject(val) && _lodash.default.isEmpty(val))
  );
};

var NoVoidSpace = function NoVoidSpace(props) {
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    _props$split = props.split,
    split = _props$split === void 0 ? ',' : _props$split;
  var cloneItems = items.filter(function (item) {
    return !isVoid(item);
  });

  var renderEmpty = function renderEmpty(empty, key) {
    if (empty === null || empty === undefined) {
      return null;
    }

    if (_lodash.default.isString(empty) || _lodash.default.isNumber(empty)) {
      return /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          key: key,
        },
        empty,
      );
    }

    if (/*#__PURE__*/ _react.default.isValidElement(empty)) {
      return empty;
    }

    return null;
  };

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _space.default,
      {
        split: split,
        size: 'large',
      },
      cloneItems.map(function (data, key) {
        return renderEmpty(data, key);
      }),
    ),
  );
};

var _default = /*#__PURE__*/ _react.default.memo(NoVoidSpace);

exports.default = _default;
