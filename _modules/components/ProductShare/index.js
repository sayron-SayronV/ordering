"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductShare = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FiShare = _interopRequireDefault(require("@meronex/icons/fi/FiShare2"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductShareUI = function ProductShareUI(props) {
  var updateShowValue = props.updateShowValue,
      showShareButton = props.showShareButton,
      urlToShare = props.urlToShare;
  var iconElement = (0, _react.useRef)();
  var contentElement = (0, _react.useRef)();

  var handleClickOutside = function handleClickOutside(e) {
    var _iconElement$current, _contentElement$curre;

    var outsideIcon = !((_iconElement$current = iconElement.current) !== null && _iconElement$current !== void 0 && _iconElement$current.contains(e.target));
    var outsideButtonsShare = !((_contentElement$curre = contentElement.current) !== null && _contentElement$curre !== void 0 && _contentElement$curre.contains(e.target));

    if (outsideIcon && outsideButtonsShare) {
      updateShowValue && updateShowValue(false);
    }
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  var handleClickShare = function handleClickShare() {
    updateShowValue(!showShareButton);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.IconShare, {
    ref: iconElement,
    name: "icon-share"
  }, /*#__PURE__*/_react.default.createElement(_FiShare.default, {
    onClick: handleClickShare
  }), /*#__PURE__*/_react.default.createElement(_styles.ShareButtons, {
    ref: contentElement,
    className: "a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style",
    "data-a2a-url": urlToShare,
    showShareButton: showShareButton
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_facebook"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_whatsapp"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_twitter"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_email"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_dd",
    href: "https://www.addtoany.com/share"
  }))));
};

var ProductShare = function ProductShare(props) {
  var productShareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductShareUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductShare, productShareProps);
};

exports.ProductShare = ProductShare;