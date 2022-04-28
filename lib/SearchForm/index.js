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

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/switch/style');

var _switch = _interopRequireDefault(require('antd/es/switch'));

require('antd/es/radio/style');

var _radio = _interopRequireDefault(require('antd/es/radio'));

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/date-picker/style');

var _datePicker = _interopRequireDefault(require('antd/es/date-picker'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = _interopRequireDefault(require('lodash'));

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

var defaultFormConfig = {
  autoComplete: 'off',
};
var Option = _select.default.Option;
var FormItem = _form.default.Item;
var RangePicker = _datePicker.default.RangePicker;
var inputPlaceholder = '请输入';
var selectPlaceholder = '请选择';

var SearchForm = function SearchForm(props) {
  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    formR = _Form$useForm2[0];

  var _useState = (0, _react.useState)(24),
    _useState2 = _slicedToArray(_useState, 2),
    buttonSpan = _useState2[0],
    setButtonSpan = _useState2[1];

  var _props$form = props.form,
    form = _props$form === void 0 ? formR : _props$form,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? [16, 16] : _props$gutter,
    _props$colSpan = props.colSpan,
    colSpan = _props$colSpan === void 0 ? 6 : _props$colSpan,
    _props$resetText = props.resetText,
    resetText = _props$resetText === void 0 ? '重置' : _props$resetText,
    _props$searchText = props.searchText,
    searchText = _props$searchText === void 0 ? '查询' : _props$searchText,
    _props$searchColumns = props.searchColumns,
    searchColumns =
      _props$searchColumns === void 0
        ? [
            {
              label: '选择框',
              dataIndex: 'select',
              formItemProps: {},
              itemProps: {},
              type: 'select',
            },
            {
              label: '输入框',
              dataIndex: 'input',
              formItemProps: {},
              itemProps: {},
            },
            {
              label: '数字输入框',
              dataIndex: 'inputNumber',
              formItemProps: {},
              itemProps: {},
              type: 'inputNumber',
            },
            {
              label: '单选框',
              dataIndex: 'radio',
              formItemProps: {},
              itemProps: {
                options: [
                  {
                    label: '1234',
                    value: 1,
                  },
                  {
                    label: '122',
                    value: 2,
                  },
                  {
                    label: '123',
                    value: 3,
                  },
                  {
                    label: '124',
                    value: 4,
                  },
                  {
                    label: '125',
                    value: 5,
                  },
                  {
                    label: '126',
                    value: 6,
                  },
                  {
                    label: '127',
                    value: 7,
                  },
                ],
              },
              type: 'radio',
            },
            {
              label: '复选框',
              dataIndex: 'checkbox',
              formItemProps: {},
              itemProps: {
                options: [
                  {
                    label: '1234',
                    value: 1,
                  },
                  {
                    label: '122',
                    value: 2,
                  },
                  {
                    label: '123',
                    value: 3,
                  },
                  {
                    label: '124',
                    value: 4,
                  },
                  {
                    label: '125',
                    value: 5,
                  },
                  {
                    label: '126',
                    value: 6,
                  },
                  {
                    label: '127',
                    value: 7,
                  },
                ],
              },
              type: 'checkbox',
            },
            {
              label: '时间选择框',
              dataIndex: 'datePicker',
              formItemProps: {},
              itemProps: {},
              type: 'datePicker',
            },
            {
              label: '时间区间选择框',
              dataIndex: 'rangePicker',
              formItemProps: {},
              itemProps: {},
              type: 'rangePicker',
            },
            {
              label: '时间区间选择框',
              dataIndex: 'rangePicker1',
              formItemProps: {},
              itemProps: {},
              type: 'rangePicker',
            },
          ]
        : _props$searchColumns,
    _props$onReset = props.onReset,
    onReset =
      _props$onReset === void 0
        ? function (value) {
            console.log('reset', value);
          }
        : _props$onReset,
    _props$onFinish = props.onFinish,
    onFinish =
      _props$onFinish === void 0
        ? function (value) {
            console.log('value111', value);
          }
        : _props$onFinish;

  var renderFormItems = function renderFormItems(data) {
    var contentRender = null;
    var options = [];
    var fieldNames = {
      label: '',
      value: '',
    };
    var labelF = 'label';
    var valueF = 'value';

    if (data.type === 'radio' || data.type === 'checkbox') {
      var _data$itemProps, _data$itemProps2, _fieldNames, _fieldNames2;

      options =
        (data === null || data === void 0
          ? void 0
          : (_data$itemProps = data.itemProps) === null || _data$itemProps === void 0
          ? void 0
          : _data$itemProps.options) || [];
      fieldNames = (data === null || data === void 0
        ? void 0
        : (_data$itemProps2 = data.itemProps) === null || _data$itemProps2 === void 0
        ? void 0
        : _data$itemProps2.fieldNames) || {
        label: 'label',
        value: 'value',
      };
      labelF =
        ((_fieldNames = fieldNames) === null || _fieldNames === void 0
          ? void 0
          : _fieldNames.label) || 'label';
      valueF =
        ((_fieldNames2 = fieldNames) === null || _fieldNames2 === void 0
          ? void 0
          : _fieldNames2.value) || 'value';
    }

    switch (data.type) {
      case 'select':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _select.default,
          _objectSpread(
            {
              placeholder: selectPlaceholder,
            },
            data.itemProps,
          ),
          options.map(function (data) {
            return /*#__PURE__*/ _react.default.createElement(
              Option,
              _objectSpread(
                _objectSpread({}, data),
                {},
                {
                  value: data[valueF],
                  key: data[valueF],
                },
              ),
              data[labelF],
            );
          }),
        );
        break;

      case 'inputNumber':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _inputNumber.default,
          _objectSpread(
            {
              placeholder: inputPlaceholder,
            },
            data.itemProps,
          ),
        );
        break;

      case 'radio':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _radio.default.Group,
          _objectSpread({}, data.itemProps),
          options.map(function (data) {
            return /*#__PURE__*/ _react.default.createElement(
              _radio.default,
              _objectSpread(
                _objectSpread({}, data),
                {},
                {
                  value: data[valueF],
                  key: data[valueF],
                },
              ),
              data[labelF],
            );
          }),
        );
        break;

      case 'switch':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _switch.default,
          _objectSpread({}, data.itemProps),
        );
        break;

      case 'checkbox':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _checkbox.default.Group,
          _objectSpread({}, data.itemProps),
          options.map(function (data) {
            return /*#__PURE__*/ _react.default.createElement(
              _checkbox.default,
              _objectSpread(
                _objectSpread({}, data),
                {},
                {
                  value: data[valueF],
                  key: data[valueF],
                },
              ),
              data[labelF],
            );
          }),
        );
        break;

      case 'datePicker':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _datePicker.default,
          _objectSpread(
            {
              placeholder: selectPlaceholder,
            },
            data.itemProps,
          ),
        );
        break;

      case 'rangePicker':
        contentRender = /*#__PURE__*/ _react.default.createElement(
          RangePicker,
          _objectSpread({}, data.itemProps),
        );
        break;

      default:
        contentRender = /*#__PURE__*/ _react.default.createElement(
          _input.default,
          _objectSpread(
            {
              placeholder: inputPlaceholder,
            },
            data.itemProps,
          ),
        );
        break;
    }

    return contentRender;
  };

  var onFinishR = function onFinishR(values) {
    var finishValue = values;
    searchColumns.forEach(function (ele) {
      if (ele.type === 'rangePicker' && ele.transform) {
        var _ele$itemProps, _ele$itemProps2;

        var valueFormat = (
          ele === null || ele === void 0
            ? void 0
            : (_ele$itemProps = ele.itemProps) === null || _ele$itemProps === void 0
            ? void 0
            : _ele$itemProps.showTime
        )
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD';

        if (
          ele === null || ele === void 0
            ? void 0
            : (_ele$itemProps2 = ele.itemProps) === null || _ele$itemProps2 === void 0
            ? void 0
            : _ele$itemProps2.valueFormat
        ) {
          var _ele$itemProps3;

          valueFormat =
            ele === null || ele === void 0
              ? void 0
              : (_ele$itemProps3 = ele.itemProps) === null || _ele$itemProps3 === void 0
              ? void 0
              : _ele$itemProps3.valueFormat;
        }

        var newValues = [
          values[ele.dataIndex][0].format(valueFormat),
          values[ele.dataIndex][1].format(valueFormat),
        ];
        var dataIndexObj = ele.transform(newValues);

        for (var key in dataIndexObj) {
          finishValue[key] = dataIndexObj[key];
        }

        finishValue = _lodash.default.omit(finishValue, [ele.dataIndex]);
      }
    });
    onFinish === null || onFinish === void 0 ? void 0 : onFinish(finishValue);
  };

  (0, _react.useEffect)(function () {
    var allColSpan = 0;
    var columnsColNum = 0;
    var resetColSpan = 0;
    searchColumns.forEach(function (data) {
      if (data.colSpan) {
        allColSpan = allColSpan + data.colSpan;
        columnsColNum = columnsColNum + 1;
      }
    });
    allColSpan = allColSpan + (searchColumns.length - columnsColNum) * colSpan;
    resetColSpan = 24 - (allColSpan % 24);

    if (resetColSpan >= 6) {
      setButtonSpan(resetColSpan);
    } else {
      setButtonSpan(24);
    }
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _form.default,
      _objectSpread(
        _objectSpread({}, defaultFormConfig),
        {},
        {
          labelAlign: 'left',
          layout: 'inline',
          form: form,
          onFinish: onFinishR,
        },
      ),
      /*#__PURE__*/ _react.default.createElement(
        _row.default,
        {
          gutter: gutter || [16, 16],
        },
        searchColumns
          ? searchColumns.map(function (data, index) {
              return /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                data.hide
                  ? null
                  : /*#__PURE__*/ _react.default.createElement(
                      _col.default,
                      {
                        span:
                          (data === null || data === void 0
                            ? void 0
                            : data.formItemProps.colSpan) || colSpan,
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        FormItem,
                        _objectSpread(
                          _objectSpread({}, data.formItemProps),
                          {},
                          {
                            name: data.dataIndex,
                            label: data.label,
                            key: data.dataIndex,
                          },
                        ),
                        data.render ? data.render() : renderFormItems(data),
                      ),
                    ),
              );
            })
          : null,
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: buttonSpan,
            style: {
              textAlign: 'right',
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            _button.default,
            {
              style: {
                marginRight: '16px',
              },
              onClick: function onClick() {
                form.resetFields();
                onReset === null || onReset === void 0 ? void 0 : onReset();
              },
            },
            resetText || '重置',
          ),
          /*#__PURE__*/ _react.default.createElement(
            _button.default,
            {
              type: 'primary',
              htmlType: 'submit',
            },
            searchText || '查询',
          ),
        ),
      ),
    ),
  );
};

var _default = SearchForm;
exports.default = _default;
