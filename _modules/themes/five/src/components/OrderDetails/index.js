"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));

var _Buttons = require("../../styles/Buttons");

var _NotFoundSource = require("../NotFoundSource");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _Modal = require("../Modal");

var _Messages = require("../Messages");

var _ReviewOrder = require("../../../../../components/ReviewOrder");

var _ProductShare = require("../../../../../components/ProductShare");

var _OrderBillSection = require("./OrderBillSection");

var _ActionsSection = require("./ActionsSection");

var _OrderPreferencesSections = require("./OrderPreferencesSections");

var _PlaceSpot = require("../PlaceSpot");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

var _ReviewProduct = require("../../../../../components/ReviewProduct");

var _ReviewDriver = require("../../../../../components/ReviewDriver");

var _TaxInformation = require("../TaxInformation");

var _utils = require("../../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderDetailsUI = function OrderDetailsUI(props) {
  var _configs$google_maps_, _theme$layouts, _theme$layouts$confir, _theme$layouts$confir2, _theme$layouts$confir3, _theme$layouts2, _theme$layouts2$confi, _theme$layouts2$confi2, _theme$layouts2$confi3, _theme$layouts3, _theme$layouts3$confi, _theme$layouts3$confi2, _theme$layouts3$confi3, _theme$layouts4, _theme$layouts4$confi, _theme$layouts4$confi2, _theme$layouts4$confi3, _theme$layouts5, _theme$layouts5$confi, _theme$layouts5$confi2, _theme$layouts5$confi3, _theme$layouts5$confi4, _theme$layouts5$confi5, _theme$layouts6, _theme$layouts6$confi, _theme$layouts6$confi2, _theme$layouts6$confi3, _theme$layouts6$confi4, _theme$layouts6$confi5, _theme$layouts7, _theme$layouts7$confi, _theme$layouts7$confi2, _theme$layouts7$confi3, _theme$layouts7$confi4, _theme$layouts7$confi5, _theme$layouts8, _theme$layouts8$confi, _theme$layouts8$confi2, _theme$layouts8$confi3, _theme$layouts8$confi4, _theme$layouts8$confi5, _theme$layouts9, _theme$layouts9$confi, _theme$layouts9$confi2, _theme$layouts9$confi3, _theme$layouts9$confi4, _theme$layouts9$confi5, _theme$layouts10, _theme$layouts10$conf, _theme$layouts10$conf2, _theme$layouts10$conf3, _theme$layouts10$conf4, _theme$layouts10$conf5, _theme$layouts11, _theme$layouts11$conf, _theme$layouts11$conf2, _theme$layouts11$conf3, _theme$layouts11$conf4, _theme$layouts11$conf5, _theme$layouts12, _theme$layouts12$conf, _theme$layouts12$conf2, _theme$layouts12$conf3, _theme$layouts12$conf4, _theme$layouts12$conf5, _theme$layouts13, _theme$layouts13$conf, _theme$layouts13$conf2, _theme$layouts13$conf3, _theme$layouts13$conf4, _theme$layouts13$conf5, _theme$layouts14, _theme$layouts14$conf, _theme$layouts14$conf2, _theme$layouts14$conf3, _theme$layouts14$conf4, _theme$layouts14$conf5, _theme$layouts15, _theme$layouts15$conf, _theme$layouts15$conf2, _theme$layouts15$conf3, _theme$layouts15$conf4, _theme$layouts15$conf5, _theme$layouts16, _theme$layouts16$conf, _theme$layouts16$conf2, _theme$layouts16$conf3, _theme$layouts16$conf4, _theme$layouts16$conf5, _theme$layouts17, _theme$layouts17$conf, _theme$layouts17$conf2, _theme$layouts17$conf3, _theme$layouts17$conf4, _theme$layouts17$conf5, _theme$layouts18, _theme$layouts18$conf, _theme$layouts18$conf2, _theme$layouts18$conf3, _theme$layouts18$conf4, _order$driver, _order$driver2, _theme$images, _theme$images$dummies, _order$business, _order$business2, _theme$images2, _theme$images2$dummie, _order$customer, _order$customer2, _theme$images3, _theme$images3$dummie, _theme$defaultLanguag28, _configs$guest_uuid_a, _orderTypes$find, _getOrderStatus, _getOrderStatus2, _theme$defaultLanguag29, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$place, _order$place2, _getOrderStatus3, _getOrderStatus4, _order$business8, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _theme$defaultLanguag30, _order$driver4, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _order$driver9, _order$driver10, _order$products, _theme$defaultLanguag31, _theme$defaultLanguag32, _theme$defaultLanguag33, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data4, _openTaxModal$data$fi, _openTaxModal$data5, _openTaxModal$data6;

  var userCustomerId = props.userCustomerId,
      handleChangeOrderStatus = props.handleChangeOrderStatus,
      handleBusinessRedirect = props.handleBusinessRedirect,
      handleOrderRedirect = props.handleOrderRedirect,
      googleMapsControls = props.googleMapsControls,
      driverLocation = props.driverLocation,
      urlToShare = props.urlToShare,
      messages = props.messages,
      setMessages = props.setMessages,
      readMessages = props.readMessages,
      messagesReadList = props.messagesReadList,
      reorderState = props.reorderState,
      handleReorder = props.handleReorder,
      orderTypes = props.orderTypes;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate;

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      carts = _useOrder2[0].carts,
      refreshOrderOptions = _useOrder2[1].refreshOrderOptions;

  var _useState = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      openMessages = _useState2[0],
      setOpenMessages = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOrderReviewed = _useState4[0],
      setIsOrderReviewed = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isProductReviewed = _useState6[0],
      setIsProductReviewed = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isDriverReviewed = _useState8[0],
      setIsDriverReviewed = _useState8[1];

  var _useState9 = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      unreadAlert = _useState10[0],
      setUnreadAlert = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isReviewOpen = _useState12[0],
      setIsReviewOpen = _useState12[1];

  var _useState13 = (0, _react.useState)({
    order: false,
    product: false,
    driver: false
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      reviewStatus = _useState14[0],
      setReviewStatus = _useState14[1];

  var _useState15 = (0, _react.useState)({
    open: false,
    tax: null
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      openTaxModal = _useState16[0],
      setOpenTaxModal = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isService = _useState18[0],
      setIsService = _useState18[1];

  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      businessData = _props$order.businessData,
      error = _props$order.error;
  var yourSpotString = (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number');
  var acceptedStatus = [1, 2, 5, 6, 10, 11, 12];
  var placeSpotTypes = [3, 4, 5];
  var googleMapsApiKey = configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var showOrderActions = (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1;
  var isOriginalLayout = (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$confir = _theme$layouts.confirmation) === null || _theme$layouts$confir === void 0 ? void 0 : (_theme$layouts$confir2 = _theme$layouts$confir.components) === null || _theme$layouts$confir2 === void 0 ? void 0 : (_theme$layouts$confir3 = _theme$layouts$confir2.layout) === null || _theme$layouts$confir3 === void 0 ? void 0 : _theme$layouts$confir3.type) === 'original';
  var showDeliveryType = !(theme !== null && theme !== void 0 && (_theme$layouts2 = theme.layouts) !== null && _theme$layouts2 !== void 0 && (_theme$layouts2$confi = _theme$layouts2.confirmation) !== null && _theme$layouts2$confi !== void 0 && (_theme$layouts2$confi2 = _theme$layouts2$confi.components) !== null && _theme$layouts2$confi2 !== void 0 && (_theme$layouts2$confi3 = _theme$layouts2$confi2.delivery_type) !== null && _theme$layouts2$confi3 !== void 0 && _theme$layouts2$confi3.hidden);
  var showDeliveryDate = !(theme !== null && theme !== void 0 && (_theme$layouts3 = theme.layouts) !== null && _theme$layouts3 !== void 0 && (_theme$layouts3$confi = _theme$layouts3.confirmation) !== null && _theme$layouts3$confi !== void 0 && (_theme$layouts3$confi2 = _theme$layouts3$confi.components) !== null && _theme$layouts3$confi2 !== void 0 && (_theme$layouts3$confi3 = _theme$layouts3$confi2.delivery_date) !== null && _theme$layouts3$confi3 !== void 0 && _theme$layouts3$confi3.hidden);
  var showDeliveryProgress = !(theme !== null && theme !== void 0 && (_theme$layouts4 = theme.layouts) !== null && _theme$layouts4 !== void 0 && (_theme$layouts4$confi = _theme$layouts4.confirmation) !== null && _theme$layouts4$confi !== void 0 && (_theme$layouts4$confi2 = _theme$layouts4$confi.components) !== null && _theme$layouts4$confi2 !== void 0 && (_theme$layouts4$confi3 = _theme$layouts4$confi2.delivery_progress) !== null && _theme$layouts4$confi3 !== void 0 && _theme$layouts4$confi3.hidden);
  var showBusinessPhone = !(theme !== null && theme !== void 0 && (_theme$layouts5 = theme.layouts) !== null && _theme$layouts5 !== void 0 && (_theme$layouts5$confi = _theme$layouts5.confirmation) !== null && _theme$layouts5$confi !== void 0 && (_theme$layouts5$confi2 = _theme$layouts5$confi.components) !== null && _theme$layouts5$confi2 !== void 0 && (_theme$layouts5$confi3 = _theme$layouts5$confi2.business_information) !== null && _theme$layouts5$confi3 !== void 0 && (_theme$layouts5$confi4 = _theme$layouts5$confi3.components) !== null && _theme$layouts5$confi4 !== void 0 && (_theme$layouts5$confi5 = _theme$layouts5$confi4.phone) !== null && _theme$layouts5$confi5 !== void 0 && _theme$layouts5$confi5.hidden);
  var showBusinessMessages = !(theme !== null && theme !== void 0 && (_theme$layouts6 = theme.layouts) !== null && _theme$layouts6 !== void 0 && (_theme$layouts6$confi = _theme$layouts6.confirmation) !== null && _theme$layouts6$confi !== void 0 && (_theme$layouts6$confi2 = _theme$layouts6$confi.components) !== null && _theme$layouts6$confi2 !== void 0 && (_theme$layouts6$confi3 = _theme$layouts6$confi2.business_information) !== null && _theme$layouts6$confi3 !== void 0 && (_theme$layouts6$confi4 = _theme$layouts6$confi3.components) !== null && _theme$layouts6$confi4 !== void 0 && (_theme$layouts6$confi5 = _theme$layouts6$confi4.messages) !== null && _theme$layouts6$confi5 !== void 0 && _theme$layouts6$confi5.hidden);
  var showBusinessEmail = !(theme !== null && theme !== void 0 && (_theme$layouts7 = theme.layouts) !== null && _theme$layouts7 !== void 0 && (_theme$layouts7$confi = _theme$layouts7.confirmation) !== null && _theme$layouts7$confi !== void 0 && (_theme$layouts7$confi2 = _theme$layouts7$confi.components) !== null && _theme$layouts7$confi2 !== void 0 && (_theme$layouts7$confi3 = _theme$layouts7$confi2.business_information) !== null && _theme$layouts7$confi3 !== void 0 && (_theme$layouts7$confi4 = _theme$layouts7$confi3.components) !== null && _theme$layouts7$confi4 !== void 0 && (_theme$layouts7$confi5 = _theme$layouts7$confi4.email) !== null && _theme$layouts7$confi5 !== void 0 && _theme$layouts7$confi5.hidden);
  var showBusinessAddress = !(theme !== null && theme !== void 0 && (_theme$layouts8 = theme.layouts) !== null && _theme$layouts8 !== void 0 && (_theme$layouts8$confi = _theme$layouts8.confirmation) !== null && _theme$layouts8$confi !== void 0 && (_theme$layouts8$confi2 = _theme$layouts8$confi.components) !== null && _theme$layouts8$confi2 !== void 0 && (_theme$layouts8$confi3 = _theme$layouts8$confi2.business_information) !== null && _theme$layouts8$confi3 !== void 0 && (_theme$layouts8$confi4 = _theme$layouts8$confi3.components) !== null && _theme$layouts8$confi4 !== void 0 && (_theme$layouts8$confi5 = _theme$layouts8$confi4.address) !== null && _theme$layouts8$confi5 !== void 0 && _theme$layouts8$confi5.hidden);
  var showBusinessMap = !(theme !== null && theme !== void 0 && (_theme$layouts9 = theme.layouts) !== null && _theme$layouts9 !== void 0 && (_theme$layouts9$confi = _theme$layouts9.confirmation) !== null && _theme$layouts9$confi !== void 0 && (_theme$layouts9$confi2 = _theme$layouts9$confi.components) !== null && _theme$layouts9$confi2 !== void 0 && (_theme$layouts9$confi3 = _theme$layouts9$confi2.business_information) !== null && _theme$layouts9$confi3 !== void 0 && (_theme$layouts9$confi4 = _theme$layouts9$confi3.components) !== null && _theme$layouts9$confi4 !== void 0 && (_theme$layouts9$confi5 = _theme$layouts9$confi4.map) !== null && _theme$layouts9$confi5 !== void 0 && _theme$layouts9$confi5.hidden);
  var showDriverName = !(theme !== null && theme !== void 0 && (_theme$layouts10 = theme.layouts) !== null && _theme$layouts10 !== void 0 && (_theme$layouts10$conf = _theme$layouts10.confirmation) !== null && _theme$layouts10$conf !== void 0 && (_theme$layouts10$conf2 = _theme$layouts10$conf.components) !== null && _theme$layouts10$conf2 !== void 0 && (_theme$layouts10$conf3 = _theme$layouts10$conf2.driver_information) !== null && _theme$layouts10$conf3 !== void 0 && (_theme$layouts10$conf4 = _theme$layouts10$conf3.components) !== null && _theme$layouts10$conf4 !== void 0 && (_theme$layouts10$conf5 = _theme$layouts10$conf4.name) !== null && _theme$layouts10$conf5 !== void 0 && _theme$layouts10$conf5.hidden);
  var showDriverPhone = !(theme !== null && theme !== void 0 && (_theme$layouts11 = theme.layouts) !== null && _theme$layouts11 !== void 0 && (_theme$layouts11$conf = _theme$layouts11.confirmation) !== null && _theme$layouts11$conf !== void 0 && (_theme$layouts11$conf2 = _theme$layouts11$conf.components) !== null && _theme$layouts11$conf2 !== void 0 && (_theme$layouts11$conf3 = _theme$layouts11$conf2.driver_information) !== null && _theme$layouts11$conf3 !== void 0 && (_theme$layouts11$conf4 = _theme$layouts11$conf3.components) !== null && _theme$layouts11$conf4 !== void 0 && (_theme$layouts11$conf5 = _theme$layouts11$conf4.phone) !== null && _theme$layouts11$conf5 !== void 0 && _theme$layouts11$conf5.hidden);
  var showDriverMessages = !(theme !== null && theme !== void 0 && (_theme$layouts12 = theme.layouts) !== null && _theme$layouts12 !== void 0 && (_theme$layouts12$conf = _theme$layouts12.confirmation) !== null && _theme$layouts12$conf !== void 0 && (_theme$layouts12$conf2 = _theme$layouts12$conf.components) !== null && _theme$layouts12$conf2 !== void 0 && (_theme$layouts12$conf3 = _theme$layouts12$conf2.driver_information) !== null && _theme$layouts12$conf3 !== void 0 && (_theme$layouts12$conf4 = _theme$layouts12$conf3.components) !== null && _theme$layouts12$conf4 !== void 0 && (_theme$layouts12$conf5 = _theme$layouts12$conf4.messages) !== null && _theme$layouts12$conf5 !== void 0 && _theme$layouts12$conf5.hidden);
  var showDriverEmail = !(theme !== null && theme !== void 0 && (_theme$layouts13 = theme.layouts) !== null && _theme$layouts13 !== void 0 && (_theme$layouts13$conf = _theme$layouts13.confirmation) !== null && _theme$layouts13$conf !== void 0 && (_theme$layouts13$conf2 = _theme$layouts13$conf.components) !== null && _theme$layouts13$conf2 !== void 0 && (_theme$layouts13$conf3 = _theme$layouts13$conf2.driver_information) !== null && _theme$layouts13$conf3 !== void 0 && (_theme$layouts13$conf4 = _theme$layouts13$conf3.components) !== null && _theme$layouts13$conf4 !== void 0 && (_theme$layouts13$conf5 = _theme$layouts13$conf4.email) !== null && _theme$layouts13$conf5 !== void 0 && _theme$layouts13$conf5.hidden);
  var showDriverPhoto = !(theme !== null && theme !== void 0 && (_theme$layouts14 = theme.layouts) !== null && _theme$layouts14 !== void 0 && (_theme$layouts14$conf = _theme$layouts14.confirmation) !== null && _theme$layouts14$conf !== void 0 && (_theme$layouts14$conf2 = _theme$layouts14$conf.components) !== null && _theme$layouts14$conf2 !== void 0 && (_theme$layouts14$conf3 = _theme$layouts14$conf2.driver_information) !== null && _theme$layouts14$conf3 !== void 0 && (_theme$layouts14$conf4 = _theme$layouts14$conf3.components) !== null && _theme$layouts14$conf4 !== void 0 && (_theme$layouts14$conf5 = _theme$layouts14$conf4.photo) !== null && _theme$layouts14$conf5 !== void 0 && _theme$layouts14$conf5.hidden);
  var showCustomerPhone = !(theme !== null && theme !== void 0 && (_theme$layouts15 = theme.layouts) !== null && _theme$layouts15 !== void 0 && (_theme$layouts15$conf = _theme$layouts15.confirmation) !== null && _theme$layouts15$conf !== void 0 && (_theme$layouts15$conf2 = _theme$layouts15$conf.components) !== null && _theme$layouts15$conf2 !== void 0 && (_theme$layouts15$conf3 = _theme$layouts15$conf2.customer_information) !== null && _theme$layouts15$conf3 !== void 0 && (_theme$layouts15$conf4 = _theme$layouts15$conf3.components) !== null && _theme$layouts15$conf4 !== void 0 && (_theme$layouts15$conf5 = _theme$layouts15$conf4.phone) !== null && _theme$layouts15$conf5 !== void 0 && _theme$layouts15$conf5.hidden);
  var showCustomerAddress = !(theme !== null && theme !== void 0 && (_theme$layouts16 = theme.layouts) !== null && _theme$layouts16 !== void 0 && (_theme$layouts16$conf = _theme$layouts16.confirmation) !== null && _theme$layouts16$conf !== void 0 && (_theme$layouts16$conf2 = _theme$layouts16$conf.components) !== null && _theme$layouts16$conf2 !== void 0 && (_theme$layouts16$conf3 = _theme$layouts16$conf2.customer_information) !== null && _theme$layouts16$conf3 !== void 0 && (_theme$layouts16$conf4 = _theme$layouts16$conf3.components) !== null && _theme$layouts16$conf4 !== void 0 && (_theme$layouts16$conf5 = _theme$layouts16$conf4.address) !== null && _theme$layouts16$conf5 !== void 0 && _theme$layouts16$conf5.hidden);
  var showCustomerEmail = !(theme !== null && theme !== void 0 && (_theme$layouts17 = theme.layouts) !== null && _theme$layouts17 !== void 0 && (_theme$layouts17$conf = _theme$layouts17.confirmation) !== null && _theme$layouts17$conf !== void 0 && (_theme$layouts17$conf2 = _theme$layouts17$conf.components) !== null && _theme$layouts17$conf2 !== void 0 && (_theme$layouts17$conf3 = _theme$layouts17$conf2.customer_information) !== null && _theme$layouts17$conf3 !== void 0 && (_theme$layouts17$conf4 = _theme$layouts17$conf3.components) !== null && _theme$layouts17$conf4 !== void 0 && (_theme$layouts17$conf5 = _theme$layouts17$conf4.email) !== null && _theme$layouts17$conf5 !== void 0 && _theme$layouts17$conf5.hidden);
  var showDeliveryTypes = !(theme !== null && theme !== void 0 && (_theme$layouts18 = theme.layouts) !== null && _theme$layouts18 !== void 0 && (_theme$layouts18$conf = _theme$layouts18.confirmation) !== null && _theme$layouts18$conf !== void 0 && (_theme$layouts18$conf2 = _theme$layouts18$conf.components) !== null && _theme$layouts18$conf2 !== void 0 && (_theme$layouts18$conf3 = _theme$layouts18$conf2.delivery_types) !== null && _theme$layouts18$conf3 !== void 0 && (_theme$layouts18$conf4 = _theme$layouts18$conf3.components) !== null && _theme$layouts18$conf4 !== void 0 && _theme$layouts18$conf4.hidden);

  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22, _theme$defaultLanguag23, _theme$defaultLanguag24;

    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending'),
      slug: 'PENDING',
      percentage: 25
    }, {
      key: 1,
      value: t('COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver in business'),
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed'),
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business'),
      slug: 'REJECTED_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver'),
      slug: 'REJECTED_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business'),
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver'),
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver'),
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver'),
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver'),
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder'),
      slug: 'PREORDER',
      percentage: 0
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready'),
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer'),
      slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer'),
      slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer'),
      slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
      percentage: 55
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business'),
      slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
      percentage: 90
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business'),
      slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
      percentage: 95
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag23 = theme.defaultLanguages) === null || _theme$defaultLanguag23 === void 0 ? void 0 : _theme$defaultLanguag23.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver'),
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag24 = theme.defaultLanguages) === null || _theme$defaultLanguag24 === void 0 ? void 0 : _theme$defaultLanguag24.ORDER_DRIVER_ON_WAY) || 'Driver on way'),
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var unreadMessages = function unreadMessages() {
    var length = messages === null || messages === void 0 ? void 0 : messages.messages.length;
    var unreadLength = order === null || order === void 0 ? void 0 : order.unread_count;
    var unreadedMessages = messages.messages.slice(length - unreadLength, length);
    var business = unreadedMessages.some(function (message) {
      var _message$can_see;

      return message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(2);
    });
    var driver = unreadedMessages.some(function (message) {
      var _message$can_see2;

      return message === null || message === void 0 ? void 0 : (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes(4);
    });
    setUnreadAlert({
      business: business,
      driver: driver
    });
  };

  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.customerPhoto)
  })];

  var handleOpenReview = function handleOpenReview() {
    if (!(order !== null && order !== void 0 && order.review) && !isOrderReviewed) setReviewStatus({
      order: true,
      product: false,
      driver: false
    });else if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsReviewOpen(false);
      return;
    }
    setIsReviewOpen(true);
  };

  var handleCloseReivew = function handleCloseReivew() {
    setReviewStatus({
      order: false,
      product: false,
      driver: false
    });
    setIsReviewOpen(false);
  };

  var closeReviewOrder = function closeReviewOrder() {
    if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else handleCloseReivew();
  };

  var closeReviewProduct = function closeReviewProduct() {
    if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsDriverReviewed(true);
      handleCloseReivew();
    }
  };

  var closeOrderModal = function closeOrderModal(e) {
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);

    if (outsideModal) {
      var _businessId = 'businessId:' + (businessData === null || businessData === void 0 ? void 0 : businessData.id);

      sessionStorage.setItem('adjust-cart-products', _businessId);
      handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  };

  var handleStartNewOrder = function handleStartNewOrder(orderId) {
    if (isOriginalLayout) {
      handleReorder(orderId);
      return;
    }

    deleteUserCustomer(true);
    refreshOrderOptions();
    handleGoToPage({
      page: 'home'
    });
  };

  var ActionsSectionProps = {
    order: order,
    handleBusinessRedirect: handleBusinessRedirect,
    businessData: businessData,
    unreadAlert: unreadAlert,
    setOpenMessages: setOpenMessages,
    readMessages: readMessages,
    setUnreadAlert: setUnreadAlert
  };
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  (0, _react.useEffect)(function () {
    if (messagesReadList !== null && messagesReadList !== void 0 && messagesReadList.length) {
      openMessages.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  }, [messagesReadList]);
  (0, _react.useEffect)(function () {
    if (reorderState !== null && reorderState !== void 0 && reorderState.error) {
      window.addEventListener('click', closeOrderModal);
      return function () {
        window.removeEventListener('click', closeOrderModal);
      };
    }

    if (!(reorderState !== null && reorderState !== void 0 && reorderState.error) && reorderState.loading === false && businessData !== null && businessData !== void 0 && businessData.id) {
      var _carts$_businessId, _reorderState$result;

      var _businessId = 'businessId:' + (businessData === null || businessData === void 0 ? void 0 : businessData.id);

      var products = carts === null || carts === void 0 ? void 0 : (_carts$_businessId = carts[_businessId]) === null || _carts$_businessId === void 0 ? void 0 : _carts$_businessId.products;
      var available = products.every(function (product) {
        return product.valid === true;
      });

      if (available && reorderState !== null && reorderState !== void 0 && (_reorderState$result = reorderState.result) !== null && _reorderState$result !== void 0 && _reorderState$result.uuid && (products === null || products === void 0 ? void 0 : products.length) === (order === null || order === void 0 ? void 0 : order.products.length)) {
        handleGoToPage({
          page: 'checkout',
          params: {
            cartUuid: reorderState === null || reorderState === void 0 ? void 0 : reorderState.result.uuid
          }
        });
      } else {
        sessionStorage.setItem('adjust-cart-products', _businessId);
        (products === null || products === void 0 ? void 0 : products.length) !== (order === null || order === void 0 ? void 0 : order.products.length) && sessionStorage.setItem('already-removed', 'removed');
        handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
      }
    }
  }, [reorderState]);
  (0, _react.useEffect)(function () {
    if (!order) return;

    var _isService = order.products.some(function (product) {
      return product.type === 'service';
    });

    setIsService(_isService);
  }, [order]);

  var OrderMapSection = function OrderMapSection(props) {
    var _props$validStatuses, _props$location, _order$driver3, _configs$google_maps_2;

    var validStatuses = (_props$validStatuses = props.validStatuses) !== null && _props$validStatuses !== void 0 ? _props$validStatuses : [9, 19, 23];
    var location = (_props$location = props.location) !== null && _props$location !== void 0 ? _props$location : order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location;
    var mapConfigs = {
      zoom: 15
    };
    return showBusinessMap ? props.isMapImg ? /*#__PURE__*/_react.default.createElement(_styles.Map, {
      style: props.mapStyle
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (0, _utils.getGoogleMapImage)(location, googleMapsApiKey, mapConfigs),
      id: "google-maps-image",
      alt: "google-maps-location",
      width: "100%",
      height: "100%",
      loading: "lazy"
    })) : location !== null && location !== void 0 && location.lat && location !== null && location !== void 0 && location.lng && validStatuses.includes(parseInt(order === null || order === void 0 ? void 0 : order.status)) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Map, {
      style: props.mapStyle
    }, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
      apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value,
      location: location,
      locations: !props.location && locations,
      mapControls: googleMapsControls
    }))) : null : null;
  };

  var OrderHeaderInfoSection = function OrderHeaderInfoSection() {
    var _theme$defaultLanguag25, _theme$defaultLanguag26;

    return /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, isService ? t('SERVICES', 'Services') : t('ORDER_MESSAGE_RECEIVED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag25 = theme.defaultLanguages) === null || _theme$defaultLanguag25 === void 0 ? void 0 : _theme$defaultLanguag25.ORDER_MESSAGE_RECEIVED) || 'Your order has been received')), /*#__PURE__*/_react.default.createElement("p", null, !isService && t('ORDER_MESSAGE_HEADER_TEXT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag26 = theme.defaultLanguages) === null || _theme$defaultLanguag26 === void 0 ? void 0 : _theme$defaultLanguag26.ORDER_MESSAGE_HEADER_TEXT) || 'Once business accepts your order, we will send you an email, thank you!')));
  };

  var OrderActionsSection = function OrderActionsSection() {
    var _theme$defaultLanguag27;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !userCustomerId && /*#__PURE__*/_react.default.createElement(_styles.MyOrderActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      outline: true,
      onClick: function onClick() {
        return handleGoToPage({
          page: 'orders'
        });
      }
    }, isService ? t('YOUR_APPOINTMENTS', 'Your appointments') : t('YOUR_ORDERS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag27 = theme.defaultLanguages) === null || _theme$defaultLanguag27 === void 0 ? void 0 : _theme$defaultLanguag27.YOUR_ORDERS) || 'Your Orders'))));
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !loading && order && Object.keys(order).length > 0 && !(openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, isService ? t('APPOINTMENT', 'Appointment') : t('ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag28 = theme.defaultLanguages) === null || _theme$defaultLanguag28 === void 0 ? void 0 : _theme$defaultLanguag28.ORDER) || 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), parseInt(configs === null || configs === void 0 ? void 0 : (_configs$guest_uuid_a = configs.guest_uuid_access) === null || _configs$guest_uuid_a === void 0 ? void 0 : _configs$guest_uuid_a.value, 10) && (order === null || order === void 0 ? void 0 : order.hash_key) && /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.ShareOrder, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    defaultUrl: urlToShare(order === null || order === void 0 ? void 0 : order.hash_key)
  })))), (order === null || order === void 0 ? void 0 : order.status) !== 0 && (order === null || order === void 0 ? void 0 : order.integration_id) && /*#__PURE__*/_react.default.createElement("h1", null, t('TICKET', 'Ticket'), ": ", order === null || order === void 0 ? void 0 : order.integration_id), showDeliveryType && /*#__PURE__*/_react.default.createElement("p", {
    className: "types"
  }, isService ? t('SERVICE_AT_HOME', 'Service at home') : orderTypes === null || orderTypes === void 0 ? void 0 : (_orderTypes$find = orderTypes.find(function (type) {
    return (order === null || order === void 0 ? void 0 : order.delivery_type) === (type === null || type === void 0 ? void 0 : type.value);
  })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.text), showDeliveryDate && /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })), (acceptedStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) || !isOriginalLayout) && /*#__PURE__*/_react.default.createElement(_styles.ReOrder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return handleStartNewOrder(order.id);
    },
    disabled: reorderState === null || reorderState === void 0 ? void 0 : reorderState.loading
  }, reorderState !== null && reorderState !== void 0 && reorderState.loading ? t('LOADING', 'Loading...') : t('ORDER_AGAIN', 'Order Again')))), showDeliveryProgress && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value), /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderLink, {
    className: "Review-order",
    active: acceptedStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && (!isOrderReviewed || !isProductReviewed || !isDriverReviewed)
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleOpenReview
  }, t('REVIEW_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag29 = theme.defaultLanguages) === null || _theme$defaultLanguag29 === void 0 ? void 0 : _theme$defaultLanguag29.REVIEW_ORDER) || 'Review your Order')))))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, {
    w: "calc(100% - 20px)" // borderBottom={showOrderActions}

  }, /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "business",
    showPhone: showBusinessPhone,
    showMessages: showBusinessMessages
  })), showBusinessEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.email), showBusinessPhone && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.cellphone), showBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.address), (order === null || order === void 0 ? void 0 : (_order$place = order.place) === null || _order$place === void 0 ? void 0 : _order$place.name) && /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotSection, null, /*#__PURE__*/_react.default.createElement("p", null, yourSpotString, ": ", order === null || order === void 0 ? void 0 : (_order$place2 = order.place) === null || _order$place2 === void 0 ? void 0 : _order$place2.name)))), showDeliveryTypes && placeSpotTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, {
    w: "calc(100% - 20px)",
    borderTop: true
  }, /*#__PURE__*/_react.default.createElement(_PlaceSpot.PlaceSpot, {
    isInputMode: true,
    cart: order,
    containerStyle: {
      width: 'calc(100% - 20px)'
    },
    spotNumberDefault: order === null || order === void 0 ? void 0 : order.spot_number,
    vehicleDefault: order === null || order === void 0 ? void 0 : order.vehicle
  })), showOrderActions && /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, {
    w: "calc(100% - 20px)",
    borderTop: true
  }, /*#__PURE__*/_react.default.createElement(_styles.BtsOrderStatus, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    style: {
      fontSize: 14
    },
    color: "primary",
    onClick: function onClick() {
      return handleChangeOrderStatus(20);
    },
    disabled: (order === null || order === void 0 ? void 0 : order.status) === 20
  }, (_getOrderStatus3 = getOrderStatus(20)) === null || _getOrderStatus3 === void 0 ? void 0 : _getOrderStatus3.value)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    style: {
      fontSize: 14
    },
    color: "secundary",
    disabled: (order === null || order === void 0 ? void 0 : order.status) === 21,
    onClick: function onClick() {
      return handleChangeOrderStatus(21);
    }
  }, (_getOrderStatus4 = getOrderStatus(21)) === null || _getOrderStatus4 === void 0 ? void 0 : _getOrderStatus4.value))))), googleMapsApiKey && /*#__PURE__*/_react.default.createElement(OrderMapSection, {
    isMapImg: true,
    validStatuses: [order === null || order === void 0 ? void 0 : order.status],
    location: order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.location,
    mapStyle: {
      width: '50%'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, null, (order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.name, " ", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lastname), showCustomerEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.email), showCustomerPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.cellphone) || (order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.phone)), showCustomerAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.address)))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag30 = theme.defaultLanguages) === null || _theme$defaultLanguag30 === void 0 ? void 0 : _theme$defaultLanguag30.DRIVER) || 'Driver')), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "driver",
    showPhone: showDriverPhone,
    showMessages: showDriverMessages
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, showDriverPhoto && /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$driver4 = order.driver) !== null && _order$driver4 !== void 0 && _order$driver4.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.photo
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement("div", null, showDriverName && /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.name, " ", order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.lastname), showDriverEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.email), showDriverPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.cellphone) || (order === null || order === void 0 ? void 0 : (_order$driver10 = order.driver) === null || _order$driver10 === void 0 ? void 0 : _order$driver10.phone))))), !isOriginalLayout && /*#__PURE__*/_react.default.createElement(OrderMapSection, null)), ((order === null || order === void 0 ? void 0 : order.delivery_type) === 1 || (order === null || order === void 0 ? void 0 : order.comment)) && /*#__PURE__*/_react.default.createElement(_styles.OrderPreferences, null, /*#__PURE__*/_react.default.createElement(_OrderPreferencesSections.OrderPreferencesSection, {
    order: order,
    placeSpotTypes: placeSpotTypes
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, /*#__PURE__*/_react.default.createElement(OrderHeaderInfoSection, null), /*#__PURE__*/_react.default.createElement(OrderActionsSection, null)), (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  })), /*#__PURE__*/_react.default.createElement(_OrderBillSection.OrderBillSection, {
    order: order,
    setOpenTaxModal: setOpenTaxModal
  })))), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages,
    onMessages: setOpenMessages,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    }
  }), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 90
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    width: 300
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 120
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900,
    style: {
      marginBottom: '50px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 60,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900,
    style: {
      marginBottom: '50px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900,
    style: {
      marginBottom: '50px'
    }
  }))))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag31 = theme.defaultLanguages) === null || _theme$defaultLanguag31 === void 0 ? void 0 : _theme$defaultLanguag31.NOT_FOUND_ORDER) || 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag32 = theme.defaultLanguages) === null || _theme$defaultLanguag32 === void 0 ? void 0 : _theme$defaultLanguag32.ORDERS_REDIRECT) || 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag33 = theme.defaultLanguages) === null || _theme$defaultLanguag33 === void 0 ? void 0 : _theme$defaultLanguag33.LOADING) || 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: closeReviewOrder,
    setIsReviewed: setIsOrderReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? /*#__PURE__*/_react.default.createElement(_ReviewProduct.ReviewProduct, {
    order: order,
    closeReviewProduct: closeReviewProduct,
    setIsProductReviewed: setIsProductReviewed
  }) : /*#__PURE__*/_react.default.createElement(_ReviewDriver.ReviewDriver, {
    order: order,
    closeReviewDriver: handleCloseReivew,
    setIsDriverReviewed: setIsDriverReviewed
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openTaxModal.open,
    padding: "20px",
    closeOnBackdrop: true,
    title: "".concat(((_openTaxModal$data = openTaxModal.data) === null || _openTaxModal$data === void 0 ? void 0 : _openTaxModal$data.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " ").concat(((_openTaxModal$data2 = openTaxModal.data) === null || _openTaxModal$data2 === void 0 ? void 0 : _openTaxModal$data2.rate_type) !== 2 ? "(".concat(typeof ((_openTaxModal$data3 = openTaxModal.data) === null || _openTaxModal$data3 === void 0 ? void 0 : _openTaxModal$data3.rate) === 'number' ? "".concat((_openTaxModal$data4 = openTaxModal.data) === null || _openTaxModal$data4 === void 0 ? void 0 : _openTaxModal$data4.rate, "%") : "".concat(parsePrice((_openTaxModal$data$fi = (_openTaxModal$data5 = openTaxModal.data) === null || _openTaxModal$data5 === void 0 ? void 0 : _openTaxModal$data5.fixed) !== null && _openTaxModal$data$fi !== void 0 ? _openTaxModal$data$fi : 0), " + ").concat((_openTaxModal$data6 = openTaxModal.data) === null || _openTaxModal$data6 === void 0 ? void 0 : _openTaxModal$data6.percentage, "%"), ")") : '', "\n          "),
    onClose: function onClose() {
      return setOpenTaxModal({
        open: false,
        tax: null,
        type: ''
      });
    },
    modalTitleStyle: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TaxInformation.TaxInformation, {
    type: openTaxModal.type,
    data: openTaxModal.data,
    products: order === null || order === void 0 ? void 0 : order.products
  })));
};

var OrderDetails = function OrderDetails(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));

  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    orderTypes: props.orderTypes || [{
      value: 1,
      text: t('DELIVERY', 'Delivery')
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup')
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside')
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru')
    }],
    UIComponent: OrderDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderDetails, orderDetailsProps);
};

exports.OrderDetails = OrderDetails;