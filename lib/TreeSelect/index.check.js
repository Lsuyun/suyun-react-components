'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _index = require('../index');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * @Author: liusuyun
 * @Date: 2022-01-27 19:32:37
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-28 12:12:06
 * @Description:
 */
var TreeSelectDemo = function TreeSelectDemo() {
  var fieldNames = {
    key: 'id',
    title: 'deptName',
  };
  var treeData = [
    {
      deptName: '父级节点',
      id: '1',
      isEnd: 0,
      parentId: '0',
      children: [
        {
          deptName: '一级菜单',
          id: '2',
          isEnd: 0,
          parentId: '1',
          children: [],
        },
        {
          deptName: '二级菜单',
          id: '5',
          isEnd: 0,
          parentId: '1',
          children: [],
        },
      ],
    },
  ];
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(_index.TreeSearch, {
      treeData: treeData,
      fieldNames: fieldNames,
      parentId: 0,
      checkable: true,
      checkedKeysExt: ['2'],
    }),
  );
};

var _default = TreeSelectDemo;
exports.default = _default;
