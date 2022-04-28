'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/tree/style');

var _tree = _interopRequireDefault(require('antd/es/tree'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = _interopRequireDefault(require('lodash'));

var _hooks = require('@/utils/hooks');

var _index = require('@/utils/index');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var TreeSearch = function TreeSearch(props) {
  var _props$treeData = props.treeData,
    treeData = _props$treeData === void 0 ? [] : _props$treeData,
    _props$checkable = props.checkable,
    checkable = _props$checkable === void 0 ? false : _props$checkable,
    onCheck = props.onCheck,
    _props$fieldNames = props.fieldNames,
    fieldNames =
      _props$fieldNames === void 0
        ? {
            key: 'key',
            title: 'title',
          }
        : _props$fieldNames,
    _props$parentId = props.parentId,
    parentId = _props$parentId === void 0 ? -1 : _props$parentId,
    onSelect = props.onSelect,
    checkedKeysExt = props.checkedKeysExt,
    _props$checkStrictly = props.checkStrictly,
    checkStrictly = _props$checkStrictly === void 0 ? false : _props$checkStrictly,
    _props$isSelfRender = props.isSelfRender,
    isSelfRender = _props$isSelfRender === void 0 ? false : _props$isSelfRender;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(treeData),
    _useState4 = _slicedToArray(_useState3, 2),
    showTreeD = _useState4[0],
    setShowTreeD = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchV = _useState6[0],
    setSearchV = _useState6[1]; // const [debouncedValue, setDebouncedValue] = useState('');

  var debouncedValue = (0, _hooks.useDebounce)(searchV, 500); // 防抖
  // const [defaultExpandAll, setDefaultExpandAll] = useState(true);

  var allCheckedKeys = []; // 获取所有子级

  var getChildNode = function getChildNode(arr, key) {
    var res = [];
    arr.forEach(function (arrD) {
      res.push(arrD[key]);

      if (arrD.children) {
        res = res.concat(getChildNode(arrD.children, key));
      }
    });
    return res;
  };

  var handleCheck = function handleCheck(checkedKeysValue, e) {
    if (checkStrictly) {
      setCheckedKeys(checkedKeysValue.checked);
      return false;
    }

    var flattenTree = (0, _index.getFlatArr)(treeData);
    var doId = [];

    if (e.node.children) {
      (0, _index.getFlatArr)(e.node.children).forEach(function (ele) {
        doId.push(ele[fieldNames.key] || ele.key);
      });
    }

    doId.push(e.node.key);

    if (e.checked) {
      allCheckedKeys = Array.from(
        new Set([].concat(_toConsumableArray(checkedKeys), _toConsumableArray(doId))),
      );
    } else {
      // 当取消选中时需要将上级的父节点清除掉，数据筛选时需要
      var childId = [];
      flattenTree.forEach(function (ft) {
        // eslint-disable-next-line
        if (ft.id == e.node.key) {
          if (ft.child) {
            childId = getChildNode(ft.child, fieldNames.key || 'key');
          }
        }
      });
      doId = [].concat(_toConsumableArray(childId), _toConsumableArray(doId));
      var parentNode = (0, _index.getAllParentN)(
        flattenTree,
        e.node.key,
        fieldNames.key || 'key',
        parentId,
      );
      parentNode.forEach(function (pd) {
        doId.push(pd[fieldNames.key] || pd.key);
      });
      allCheckedKeys = checkedKeys.filter(function (item) {
        return !doId.includes(item);
      });
    }

    setTimeout(function () {
      setCheckedKeys(allCheckedKeys);
    });

    if (onCheck) {
      onCheck(allCheckedKeys);
    }
  };

  var changeTreeD = function changeTreeD(data) {
    data.forEach(function (ele) {
      ele.key = ele[fieldNames.key];
      ele.title = ele[fieldNames.title];

      if (ele.children) {
        changeTreeD(ele.children);
      }
    });
  };

  var filterTreeF = function filterTreeF() {
    var flattenTree = (0, _index.getFlatArr)(treeData);
    var searchArr = [];
    flattenTree.forEach(function (ele) {
      if (ele[fieldNames.title].indexOf(searchV) !== -1) {
        searchArr.push(ele);
      }
    }); // if (fieldNames) {
    //   flattenTree.forEach((ele: any) => {
    //     if (ele[fieldNames.title].indexOf(searchV) !== -1) {
    //       searchArr.push(ele);
    //     }
    //   });
    // } else {
    //   flattenTree.forEach((ele: any) => {
    //     if (ele.title.indexOf(searchV) !== -1) {
    //       searchArr.push(ele);
    //     }
    //   });
    // }

    var parentNode = [];
    searchArr.forEach(function (sA) {
      parentNode = [].concat(
        _toConsumableArray(parentNode),
        _toConsumableArray(
          (0, _index.getAllParentN)(flattenTree, sA.parentId, fieldNames.key || 'key', parentId),
        ),
      );
    });
    var allArr = (0, _index.getTreeData)(
      (0, _index.arrNotequal)(
        [].concat(searchArr, _toConsumableArray(parentNode)),
        fieldNames.key || 'key',
      ),
      fieldNames.key || 'key',
      parentId,
    );
    setShowTreeD(allArr);
    setTimeout(function () {
      setCheckedKeys(checkedKeys);
    });
  }; // 搜索

  var _onChange = function onChange(e) {
    // lodash.debounce(() => {
    setSearchV(e.target.value); // }, 1000);
  };

  var handleSelect = function handleSelect(value, e) {
    if (onSelect) {
      var flattenTree = (0, _index.getFlatArr)(treeData);
      flattenTree.forEach(function (ele) {
        // eslint-disable-next-line
        if (ele[fieldNames.key] == e.node.key) {
          var otherParams = _lodash.default.omit(ele, ['children', 'child', 'key', 'title']);

          var obj = _objectSpread(
            {
              children: ele.child,
            },
            otherParams,
          );

          onSelect(obj);
        }
      }); // if (fieldNames) {
      //   flattenTree.forEach((ele: any) => {
      //     // eslint-disable-next-line
      //     if (ele[fieldNames.key] == e.node.key) {
      //       onSelect(ele);
      //     }
      //   });
      // } else {
      //   flattenTree.forEach((ele: any) => {
      //     // eslint-disable-next-line
      //     if (ele.key == e.node.key) {
      //       onSelect(ele);
      //     }
      //   });
      // }
    }
  };

  (0, _react.useMemo)(
    function () {
      if (!isSelfRender) {
        changeTreeD(treeData);
      }

      setShowTreeD(treeData);
    },
    [treeData, isSelfRender],
  );
  (0, _react.useEffect)(
    function () {
      if (checkedKeysExt) {
        setTimeout(function () {
          setCheckedKeys(checkedKeysExt);
        }, 10);
      }
    },
    [checkedKeysExt],
  );
  (0, _react.useEffect)(
    function () {
      filterTreeF();

      if (checkable) {
        allCheckedKeys = checkedKeys;
      }
    },
    [debouncedValue],
  );
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: {
          background: '#fff',
        },
      },
      /*#__PURE__*/ _react.default.createElement(_input.default, {
        placeholder: '\u641C\u7D22',
        onChange: function onChange(e) {
          return _onChange(e);
        },
        value: searchV,
        style: {
          width: '80%',
          marginBottom: '20px',
        },
      }),
      showTreeD.length
        ? /*#__PURE__*/ _react.default.createElement(_tree.default, {
            onCheck: handleCheck,
            checkedKeys: checkedKeys,
            onSelect: handleSelect,
            checkable: checkable,
            checkStrictly: checkStrictly,
            blockNode: true,
            defaultExpandAll: true,
            treeData: showTreeD,
          })
        : '',
    ),
  );
};

var _default = /*#__PURE__*/ _react.default.memo(TreeSearch);

exports.default = _default;
