"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeElementsForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _pure = require("@stripe/stripe-js/pure");
var _reactStripeJs = require("@stripe/react-stripe-js");
var _StripeMethodForm = require("../StripeMethodForm");
var _styles = require("./styles");
var _CardForm = require("../CardForm");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StripeElementsFormUI = function StripeElementsFormUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var publicKey = props.publicKey,
    handleSource = props.handleSource,
    businessId = props.businessId,
    requirements = props.requirements,
    onNewCard = props.onNewCard,
    toSave = props.toSave,
    onCancel = props.onCancel,
    paymethod = props.paymethod,
    cart = props.cart,
    handlePlaceOrder = props.handlePlaceOrder,
    methodsPay = props.methodsPay;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), publicKey ? /*#__PURE__*/_react.default.createElement(_reactStripeJs.Elements, {
    stripe: (0, _pure.loadStripe)(publicKey)
  }, methodsPay !== null && methodsPay !== void 0 && methodsPay.includes(paymethod) ? /*#__PURE__*/_react.default.createElement(_StripeMethodForm.StripeMethodForm, {
    cart: cart,
    handleSource: handleSource,
    onNewCard: onNewCard,
    toSave: toSave,
    requirements: requirements,
    businessId: businessId,
    handleCancel: onCancel,
    paymethod: paymethod,
    handlePlaceOrder: handlePlaceOrder
  }) : /*#__PURE__*/_react.default.createElement(_CardForm.CardForm, {
    handleSource: handleSource,
    onNewCard: onNewCard,
    toSave: toSave,
    requirements: requirements,
    businessId: businessId,
    handleCancel: onCancel
  })) : /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('SOMETHING_WRONG', 'Something is wrong!')), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var StripeElementsForm = function StripeElementsForm(props) {
  var stripeElementsFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: StripeElementsFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.StripeElementsForm, stripeElementsFormProps);
};
exports.StripeElementsForm = StripeElementsForm;