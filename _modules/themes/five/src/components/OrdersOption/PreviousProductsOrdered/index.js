"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousProductsOrdered = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _AutoScroll = require("../../AutoScroll");

var _SingleProductCard = require("../../SingleProductCard");

var _Modal = require("../../Modal");

var _ProductForm = require("../../ProductForm");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PreviousProductsOrdered = function PreviousProductsOrdered(props) {
  var _curProduct$business;

  var products = props.products,
      handleUpdateProducts = props.handleUpdateProducts,
      onBusinessClick = props.onBusinessClick;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      curProduct = _useState2[0],
      setCurProduct = _useState2[1];

  var closeModalProductForm = function closeModalProductForm() {
    setCurProduct(null);
  };

  var handleRedirectToCart = function handleRedirectToCart() {
    onBusinessClick(curProduct === null || curProduct === void 0 ? void 0 : curProduct.business);
    setCurProduct(null);
  };

  var _onProductClick = function onProductClick(product) {
    setCurProduct(product);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ProductsListContainer, {
    isLoading: (products === null || products === void 0 ? void 0 : products.length) < 1
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, products === null || products === void 0 ? void 0 : products.map(function (product) {
    var _product$business;

    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: product === null || product === void 0 ? void 0 : product.id,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      businessId: product === null || product === void 0 ? void 0 : (_product$business = product.business) === null || _product$business === void 0 ? void 0 : _product$business.id,
      handleUpdateProducts: handleUpdateProducts,
      onProductClick: function onProductClick(product) {
        return _onProductClick(product);
      },
      isProductId: true
    });
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: props !== null && props !== void 0 && props.useKioskApp ? '80%' : '760px',
    open: !!curProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true,
    disableOverflowX: true
  }, !!curProduct && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: curProduct === null || curProduct === void 0 ? void 0 : (_curProduct$business = curProduct.business) === null || _curProduct$business === void 0 ? void 0 : _curProduct$business.slug,
    useKioskApp: props === null || props === void 0 ? void 0 : props.useKioskApp,
    businessId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.businessId,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.product_id,
    onSave: handleRedirectToCart
  })));
};

exports.PreviousProductsOrdered = PreviousProductsOrdered;