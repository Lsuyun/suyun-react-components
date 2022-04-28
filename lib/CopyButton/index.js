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

require('antd/es/tooltip/style');

var _tooltip = _interopRequireDefault(require('antd/es/tooltip'));

var _react = _interopRequireWildcard(require('react'));

var _copyToClipboard = _interopRequireDefault(require('copy-to-clipboard'));

var _icons = require('@ant-design/icons');

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
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

// const { Paragraph } = Typography;
var CopyButton = function CopyButton(props) {
  var _props$copyText = props.copyText,
    copyText = _props$copyText === void 0 ? '' : _props$copyText,
    _props$request = props.request,
    request = _props$request === void 0 ? null : _props$request,
    _props$successTips = props.successTips,
    successTips = _props$successTips === void 0 ? '复制成功' : _props$successTips,
    _props$failTips = props.failTips,
    failTips = _props$failTips === void 0 ? '复制失败' : _props$failTips,
    _props$tips = props.tips,
    tips = _props$tips === void 0 ? '复制' : _props$tips,
    _props$loadingRender = props.loadingRender,
    loadingRender = _props$loadingRender === void 0 ? null : _props$loadingRender,
    _props$successRender = props.successRender,
    successRender = _props$successRender === void 0 ? null : _props$successRender,
    _props$failRender = props.failRender,
    failRender = _props$failRender === void 0 ? null : _props$failRender,
    _props$render = props.render,
    render = _props$render === void 0 ? null : _props$render,
    _props$addonAfter = props.addonAfter,
    addonAfter = _props$addonAfter === void 0 ? null : _props$addonAfter,
    _props$addonBefore = props.addonBefore,
    addonBefore = _props$addonBefore === void 0 ? null : _props$addonBefore; // const filterProps = lodash.omit(props, [
  //   'copyText',
  //   'request',
  //   'loadingRender',
  //   'successRender',
  //   'failRender',
  //   'render',
  // ]);
  // const dispatch = useDispatch();

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(2),
    _useState4 = _slicedToArray(_useState3, 2),
    isSuccess = _useState4[0],
    setIsSuccess = _useState4[1]; //0-失败  1-成功  2-普通

  var copyId = undefined;

  var handleCopy = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var _yield$request, data, success;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                console.log('23124');

                if (!copyText) {
                  _context.next = 6;
                  break;
                }

                (0, _copyToClipboard.default)(copyText);
                setIsSuccess(1);
                copyId = setTimeout(function () {
                  setIsSuccess(2);
                }, 2000);
                return _context.abrupt('return', false);

              case 6:
                if (!request) {
                  _context.next = 14;
                  break;
                }

                setIsLoading(true);
                _context.next = 10;
                return request();

              case 10:
                _yield$request = _context.sent;
                data = _yield$request.data;
                success = _yield$request.success;

                if (success) {
                  (0, _copyToClipboard.default)(data);
                  setIsSuccess(1);
                  setIsLoading(false);
                  copyId = setTimeout(function () {
                    setIsSuccess(2);
                  }, 2000);
                } else {
                  setIsSuccess(0);
                  setIsLoading(false);
                  copyId = setTimeout(function () {
                    setIsSuccess(2);
                  }, 2000);
                }

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function handleCopy() {
      return _ref.apply(this, arguments);
    };
  })();

  (0, _react.useEffect)(function () {
    return function () {
      copyId && clearTimeout(copyId);
    };
  }, []);

  var renderCopyBtn = function renderCopyBtn() {
    var comStyle = {
      color: '#2d98ff',
      marginLeft: '4px',
    };

    if (isLoading) {
      // return <LoadingOutlined style={comStyle} />;
      return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        loadingRender ||
          /*#__PURE__*/ _react.default.createElement(_icons.LoadingOutlined, {
            style: comStyle,
          }),
      );
    }

    if (isSuccess === 1) {
      return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        successRender ||
          /*#__PURE__*/ _react.default.createElement(_icons.CheckOutlined, {
            style: _objectSpread(
              _objectSpread({}, comStyle),
              {},
              {
                color: '#73D13D',
              },
            ),
          }),
      );
    } else if (isSuccess === 0) {
      return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        failRender ||
          /*#__PURE__*/ _react.default.createElement(_icons.ExclamationCircleOutlined, {
            style: _objectSpread(
              _objectSpread({}, comStyle),
              {},
              {
                color: 'red',
              },
            ),
          }),
      );
    }

    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      addonBefore,
      render
        ? /*#__PURE__*/ _react.default.createElement(
            'span',
            {
              style: {
                display: 'inline-block',
                cursor: 'pointer',
              },
              onClick: handleCopy,
            },
            render,
          )
        : /*#__PURE__*/ _react.default.createElement(_icons.CopyOutlined, {
            style: comStyle,
            onClick: handleCopy,
          }),
      addonAfter,
    );
  };

  return /*#__PURE__*/ _react.default.createElement(
    _tooltip.default,
    {
      title:
        isSuccess === 0
          ? failTips || '复制失败'
          : isSuccess === 1
          ? successTips || '复制成功'
          : tips || '复制',
    },
    /*#__PURE__*/ _react.default.createElement('span', null, renderCopyBtn()),
  );
};

var _default = CopyButton;
exports.default = _default;
