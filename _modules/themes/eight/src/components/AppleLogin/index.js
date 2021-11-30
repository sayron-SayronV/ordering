"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppleLogin = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponents = require("ordering-components");

var _FaApple = _interopRequireDefault(require("@meronex/icons/fa/FaApple"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AppleLoginUI = function AppleLoginUI(props) {
  var isSignup = props.isSignup,
      initLoginApple = props.initLoginApple,
      handleAppleLoginClick = props.handleAppleLoginClick;
  var location = (0, _reactRouterDom.useLocation)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  (0, _react.useEffect)(function () {
    var result = location.hash;

    if (result) {
      var _divisions$, _divisions$$split, _divisions$2, _divisions$2$split, _divisions$3, _divisions$3$split;

      var divisions = result === null || result === void 0 ? void 0 : result.split('&', 4);
      var state = divisions === null || divisions === void 0 ? void 0 : (_divisions$ = divisions[0]) === null || _divisions$ === void 0 ? void 0 : (_divisions$$split = _divisions$.split('state=', 2)) === null || _divisions$$split === void 0 ? void 0 : _divisions$$split[1];
      var code = divisions === null || divisions === void 0 ? void 0 : (_divisions$2 = divisions[1]) === null || _divisions$2 === void 0 ? void 0 : (_divisions$2$split = _divisions$2.split('code=', 2)) === null || _divisions$2$split === void 0 ? void 0 : _divisions$2$split[1];
      var idToken = divisions === null || divisions === void 0 ? void 0 : (_divisions$3 = divisions[2]) === null || _divisions$3 === void 0 ? void 0 : (_divisions$3$split = _divisions$3.split('id_token=', 2)) === null || _divisions$3$split === void 0 ? void 0 : _divisions$3$split[1];

      if (code) {
        handleAppleLoginClick({
          state: state,
          code: code,
          idToken: idToken
        });
      }
    }
  }, [Object.keys(configs).length]);
  return /*#__PURE__*/_react.default.createElement(_styles.AppleButton, {
    onClick: function onClick() {
      return initLoginApple();
    },
    isSignup: isSignup
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    isSignup: isSignup
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_FaApple.default, null)), /*#__PURE__*/_react.default.createElement("div", null, t('LOGIN_WITH_APPLE', 'Login with Apple'))));
};

var AppleLogin = function AppleLogin(props) {
  var propss = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AppleLoginUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AppleLogin, propss);
};

exports.AppleLogin = AppleLogin;