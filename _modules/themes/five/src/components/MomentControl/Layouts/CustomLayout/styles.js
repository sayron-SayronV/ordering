"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeListWrapper = exports.TimeItem = exports.LayoutContainer = exports.ClosedBusinessMsg = exports.CalendarWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LayoutContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    > div {\n      width: calc(50% - 10px);\n    }\n  }\n"])));

exports.LayoutContainer = LayoutContainer;

var CalendarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 17px 15px 3px 15px;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n\n  input {\n    padding: 10px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    outline: none;\n  }\n\n  .react-calendar {\n    border: none;\n    width: 100%;\n\n    .react-calendar__tile--active,\n    .react-calendar__tile:enabled:focus {\n      /* background: ", "; */\n      background: transparent;\n\n      abbr {\n        background: #E9F2FE;\n        color: #344050;\n      }\n    }\n\n    .react-calendar__tile:enabled:hover {\n      background: transparent;\n\n      abbr {\n        background: #EFEFEF;\n        color: #344050;\n      }\n    }\n\n    .react-calendar__tile--now {\n      background: transparent;\n    }\n\n    .react-calendar__month-view__weekdays {\n      font-size: 12px;\n      color: #909BA9;\n      font-weight: normal;\n      text-transform: capitalize;\n      abbr {\n        text-decoration: none;\n      }\n    }\n\n    .react-calendar__month-view__days__day {\n      font-size: 12px;\n      color: #344050;\n      abbr {\n        width: 20px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n\n        @media (min-width: 350px) {\n          width: 34px;\n          height: 32px;\n        }\n      }\n    }\n\n    .react-calendar__tile:disabled {\n      background-color: transparent;\n      color: ", ";\n      cursor: not-allowed;\n    }\n\n    .react-calendar__navigation {\n      button {\n        background: transparent!important;\n        color: #748194;\n\n        svg {\n          font-size: 24px;\n\n          ", "\n        }\n\n        &:disabled {\n          cursor: not-allowed;\n        }\n\n        span {\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          width: 100%;\n          display: inline-block;\n\n          @media (min-width: 768px) {\n            width: auto;\n            display: initial;\n          }\n        }\n      }\n\n      .react-calendar__navigation__prev2-button,\n      .react-calendar__navigation__next2-button {\n        display: none;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.primaryContrast;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.disabled;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            transform: rotateZ(180deg);\n          "])));
});

exports.CalendarWrapper = CalendarWrapper;

var TimeListWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  max-height: 425px;\n  overflow: auto;\n  padding: 17px 15px 3px 15px;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n  margin-top: 20px;\n\n  @media (min-width: 768px) {\n    margin-top: 0;\n  }\n"])));

exports.TimeListWrapper = TimeListWrapper;

var TimeItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #E9ECEF;\n  border-radius: 7.6px;\n  padding: 5px 15px;\n  margin: 12px;\n  width: calc(50% - 24px);\n  min-width: calc(50% - 24px);\n  box-sizing: border-box;\n  user-select: none;\n\n  ", "\n\n  span {\n    font-size: 14px;\n    white-space: nowrap;\n  }\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: #F5F9FF;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.TimeItem = TimeItem;

var ClosedBusinessMsg = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 16px;\n  width: 100%;\n"])));

exports.ClosedBusinessMsg = ClosedBusinessMsg;