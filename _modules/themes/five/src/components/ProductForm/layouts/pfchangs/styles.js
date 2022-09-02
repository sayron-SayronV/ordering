"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.SkuContent = exports.SkeletonBlock = exports.SectionTitle = exports.Properties = exports.ProductTagsListContainer = exports.ProductTagWrapper = exports.ProductName = exports.ProductMeta = exports.ProductInfo = exports.ProductFormTitle = exports.ProductEdition = exports.ProductDescription = exports.ProductContainer = exports.ProductComment = exports.ProductActions = exports.ModalIcon = exports.EstimatedPersons = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: 100vh;\n  position: relative;\n  padding: 50px 20px 20px;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 769px) {\n    padding: 20px;\n  }\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n    ", "\n    padding-bottom: 0;\n  }\n"])), function (props) {
  return !props.useKioskApp && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      max-height: 70vh;\n    "])));
});

exports.ProductContainer = ProductContainer;

var WrapperImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 320px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }  \n"])));

exports.WrapperImage = WrapperImage;

var ProductInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  margin-top: 300px;\n  /* position: relative; */\n"])));

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n\n  .price-discount {\n    text-decoration: line-through;\n  }\n"])));

exports.ProductFormTitle = ProductFormTitle;

var ProductEdition = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"])));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 7px 0px;\n  margin-bottom: 0px;\n  margin-top: 15px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 130px;\n\n  textarea {\n    margin-top: 8px;\n  }\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n  }\n"])));

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  z-index: 9999997;\n\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n\n  div.price {\n    color: #000;\n    h4 {\n      margin: 0;\n      font-weight: 600;\n      font-size: 20px;\n      line-height: 20px;\n    }\n    span {\n      font-size: 13px;\n      color: #000;\n      margin-right: 10px;\n\n    }\n  }\n\n  div.incdec-control {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n    \n    svg {\n      width: 25px;\n      height: 25px;\n      cursor: pointer;\n    }\n    span{\n      display: flex;\n      margin-right: 15px;\n    }\n    input {\n      max-width: 100px;\n    }\n  }\n\n  div.price-amount-block {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  svg {\n    color: #000;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n    color: #CED4DA;\n  }\n\n  button:disabled,\n  button.disabled {\n    background: #E9ECEF;\n    border: 1px solid #E9ECEF;\n    color: #B1BCCC;\n  }\n\n  button.add {\n    width: 100%;\n    padding: 5px 10px;\n    margin-top: 10px;\n    position: relative;\n\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n  .qty {\n    flex: 1;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    height: 38px;\n    min-width: 60px;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0 10px;\n  }\n\n  @media (min-width: 769px) {\n    position: sticky;\n  }\n\n  @media (min-width: 1200px) {\n    bottom: 0px;\n    justify-content: flex-end;\n    border-top: 1px solid #E9ECEF;\n    width: calc(100% + 40px);\n    transform: translateX(-20px);\n    padding: 10px 20px;\n    box-sizing: border-box;\n\n    \n\n    button.add {\n      width: 100%;\n      margin-top: 0;\n    }\n\n    div.incdec-control {\n      &.show-weight-unit{\n        width: 30%;\n      }\n    }\n  }\n"])));

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var WrapperSubOption = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])));

exports.WrapperSubOption = WrapperSubOption;

var SkuContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.SkuContent = SkuContent;

var WrapperIngredients = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"])), function (_ref2) {
  var isProductSoldout = _ref2.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;

var ProductName = _styledComponents.default.h1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 30px;\n  color: #344050;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  .calories, .qty {\n    font-size: 16px;\n    font-weight: 100;\n    color: #909BA9;\n    white-space: nowrap;\n    display: flex;\n    align-items: flex-end;\n  } \n  @media (min-width: 768px) {\n    font-size: 22px;\n    line-height: 34px;\n  }\n"])));

exports.ProductName = ProductName;

var Properties = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.Properties = Properties;

var ProductDescription = _styledComponents.default.p(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  white-space: pre-wrap;\n"])));

exports.ProductDescription = ProductDescription;

var ProductMeta = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  span {\n    font-size: 16px;\n    line-height: 24px;\n    color: #909BA9;\n    margin-bottom: 10px;\n  }\n"])));

exports.ProductMeta = ProductMeta;

var EstimatedPersons = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.EstimatedPersons = EstimatedPersons;

var ProductTagsListContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n"])));

exports.ProductTagsListContainer = ProductTagsListContainer;

var ProductTagWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin: 0 20px 0 10px;\n    "])));
});

exports.ProductTagWrapper = ProductTagWrapper;

var ModalIcon = _styledComponents.default.span(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  z-index: 10;\n  position: sticky;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  top: 30px;\n  cursor: pointer;\n  svg {\n    width: 30px;\n    height: 30px;\n    position: relative;\n    top: 5px;\n    background: rgba(255,255,255,0.5);\n    border-radius: 50%;\n  }\n"])));

exports.ModalIcon = ModalIcon;