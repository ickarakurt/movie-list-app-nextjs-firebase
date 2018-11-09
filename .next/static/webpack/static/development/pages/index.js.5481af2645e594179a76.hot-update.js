webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormExampleForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _helpers_cookie_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/cookie_helper */ "./helpers/cookie_helper.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var FormExampleForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormExampleForm, _React$Component);

  function FormExampleForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormExampleForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormExampleForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitForm", function (event) {
      event.preventDefault();
      var data = new FormData(event.target);
      var email = data.get('email');
      var password = data.get('password');
      var checkbox = data.get('checkbox');

      if (checkbox != null) {
        Object(_helpers_cookie_helper__WEBPACK_IMPORTED_MODULE_3__["setCookie"])("email", email, 1);

        _this.setState({
          remember: 1
        });
      }

      var promise = _firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(email, password);
      promise.then(function (data) {
        alert("basarili");
      }).catch(function (error) {
        console.log(error);
      });
    });

    return _this;
  }

  _createClass(FormExampleForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (Object(_helpers_cookie_helper__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('email') != null) {
        this.setState({
          email: Object(_helpers_cookie_helper__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('email')
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        style: {
          marginTop: '100px'
        },
        onSubmit: this.submitForm.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "UserName"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "email",
        name: "email",
        placeholder: "email",
        defaultValue: this.state.email
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "password"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        id: "checkbox",
        name: "checkbox",
        label: "Remember me"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Login")));
    }
  }]);

  return FormExampleForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.5481af2645e594179a76.hot-update.js.map