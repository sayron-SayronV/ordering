"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelperContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HelperContent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    color: ", ";\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 600;\n    ", "\n  }\n  p {\n    flex: 1;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n\n    span {\n      font-weight: 600;\n    }\n  }\n\n  > svg {\n    color: #FFC700;\n    font-size: 30px;\n    margin-right: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 13px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 13px;\n    "])));
});
exports.HelperContent = HelperContent;