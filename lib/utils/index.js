'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getTreeData = exports.getFlatArr = exports.getAllParentN = exports.arrNotequal = void 0;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/*
 * @Author: liusuyun
 * @Date: 2022-01-24 18:47:51
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-01-27 18:22:18
 * @Description:
 */
// 数组去重
var arrNotequal = function arrNotequal(arr, key) {
  var obj = {};
  var peno = arr.reduce(function (cur, next) {
    // eslint-disable-next-line no-unused-expressions
    obj[next[key]] ? '' : (obj[next[key]] = true && cur.push(next));
    return cur;
  }, []);
  return peno;
};
/**
 * @description: 获取全部父级
 * @param {*} arr:遍历的数组 key:和id比对的key  id:当前唯一值 parentId:最高级父节点id
 * @return {*}  返回全部的父级 []
 */

exports.arrNotequal = arrNotequal;

var getAllParentN = function getAllParentN(arr, id, key) {
  var parentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
  var res = [];
  arr.forEach(function (item) {
    if (+item[key] === +id) {
      res.push(item);

      if (+item.parentId !== +parentId) {
        res = res.concat(getAllParentN(arr, item.parentId, key, parentId));
      }
    }
  });
  return res;
};
/**
 * @description: 将平级数组转为tree
 * @param {*}  arr:数组 必须包含parentId parentId:最顶层父节点的parentId
 * @return {*}
 */

exports.getAllParentN = getAllParentN;

var getTreeData = function getTreeData(arr) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  var parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  arr.forEach(function (item) {
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('parentId')) {
      item.parentN = item.parentId;
    }
  });
  var tree = arr.filter(function (father) {
    var arrN = arr.filter(function (child) {
      return +father[key] === +child.parentN;
    });

    if (arrN.length > 0) {
      father.children = arrN;
    }

    return +father.parentN === +parentId;
  });
  return tree;
}; // 扁平化数组

exports.getTreeData = getTreeData;

var getFlatArr = function getFlatArr(treeArr) {
  var res = []; // eslint-disable-next-line array-callback-return

  treeArr.map(function (item) {
    var data = {};
    data = {
      children: [],
      child: item.children,
    };

    var finItem = _objectSpread(_objectSpread({}, item), data);

    res.push(finItem);

    if (item.children && Array.isArray(item.children)) {
      res = res.concat(getFlatArr(item.children));
    }
  });
  return res;
};

exports.getFlatArr = getFlatArr;
