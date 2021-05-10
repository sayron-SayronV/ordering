"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteContent = exports.BusinessSearch = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessSearch = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1200;\n  top: 12px;\n  right: 4.5%;\n  margin-right: 70px;\n\n  ", "\n  ", "\n  \n  input {\n    width: 100%;\n    background-position: right 10px center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n    box-sizing: border-box;\n    padding: 7px 15px;\n    border: none;\n    border-bottom: 1px solid #DBDCDB;\n    background: #F6F6F6;\n\n    ", "\n\n    ", "\n\n    @media (min-width: 681px) {\n      ", "\n    }\n\n    @media (max-width: 576px) {\n      width: 42vw;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-right: initial;\n    left: 4.5%;\n    margin-left: 70px;\n  "])));
}, function (_ref) {
  var auth = _ref.auth;
  return !auth && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    ", "\n  "])), function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: initial;\n      margin-left: 0px;\n    "])));
  });
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding-right: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-left: 40px;\n    "])));
}, function (_ref2) {
  var externalBusinessMap = _ref2.externalBusinessMap;
  return !externalBusinessMap && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      justify-content: center;\n      input {\n        -webkit-transition: width 0.4s ease-in-out;\n        transition: width 0.4s ease-in-out; \n      }\n    "])));
}, function (_ref3) {
  var externalBusinessMap = _ref3.externalBusinessMap;
  return !externalBusinessMap && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        width: 240px;\n      "])));
});

exports.BusinessSearch = BusinessSearch;

var DeleteContent = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 14px;\n  left: 10px;\n  top: 10px;\n  ", "\n  span{\n    cursor: pointer;\n  }\n  svg{\n   font-size: 20px;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    left: initial;\n    right: 20px;\n  "])));
});

exports.DeleteContent = DeleteContent;