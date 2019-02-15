(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/SupportService.ts":
/*!***********************************!*\
  !*** ./src/app/SupportService.ts ***!
  \***********************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
    providedIn: 'root'
});
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
var SupportService = /** @class */ (function () {
    function SupportService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:2007/Mytrip/users';
    }
    SupportService.prototype.createUser = function (userAccount) {
        console.log(userAccount);
        return this.http.post("" + this.baseUrl + "/create", userAccount);
    };
    SupportService.prototype.validateUser = function (loginAccount) {
        console.log(loginAccount);
        return this.http.post("" + this.baseUrl + "/login", loginAccount);
    };
    return SupportService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var src_app_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");






var routes = [
    { path: 'register', component: src_app_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: src_app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body#default{\r\n    background-image:url(\"/assets/image/airplane-flight-sunset.jpg\"); height:660px; \r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpRUFBaUUsQ0FBQyxhQUFhO0VBQ2pGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5I2RlZmF1bHR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2UvYWlycGxhbmUtZmxpZ2h0LXN1bnNldC5qcGdcIik7IGhlaWdodDo2NjBweDsgXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body id=\"default\">\n\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n</body>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'makemytrip';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-show-hide-password */ "./node_modules/ngx-show-hide-password/ngx-show-hide-password.umd.js");
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _SupportService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SupportService */ "./src/app/SupportService.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_5__["ShowHidePasswordModule"].forRoot()
            ],
            providers: [_SupportService__WEBPACK_IMPORTED_MODULE_13__["SupportService"], _user_user_module__WEBPACK_IMPORTED_MODULE_12__["UserModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body#LoginForm{ background-color:goldenrod;  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJvZHkjTG9naW5Gb3JteyBiYWNrZ3JvdW5kLWNvbG9yOmdvbGRlbnJvZDsgIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"LoginForm\">\n  \n<!-- Footer -->\n<footer class=\"page-footer font-small mdb-color pt-4 text-white-50 bg-dark\">\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left\">\n\n    <!-- Footer links -->\n    <div class=\"row text-center text-md-left mt-3 pb-3\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">MakeMyTrip</h6>\n        <p> MakeMyTrip Limited is an Indian online travel company founded in 2019. Headquartered in \n          Banglore the company provides online travel flight bookings  </p>\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Countries</h6>\n        <p>\n          <a href=\"#!\">INDIA</a>\n        </p>\n        <p>\n          <a href=\"#!\">AUSTRALIA</a>\n        </p>\n        <p>\n          <a href=\"#!\">USA</a>\n        </p>\n        <p>\n          <a href=\"#!\">UK</a>\n        </p>\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Follow us</h6>\n        <p>\n          <a href=\"#!\">Facebook</a>\n        </p>\n        <p>\n          <a href=\"#!\">Instagram</a>\n        </p>\n        <p>\n          <a href=\"#!\">twitter</a>\n        </p>\n        <p>\n          <a href=\"#!\">Google+</a>\n        </p>\n      </div>\n\n      <!-- Grid column -->\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Contact</h6>\n        <p>\n          <i class=\"fas fa-home mr-3\"></i>Banglore,INDIA</p>\n        <p>\n          <i class=\"fas fa-envelope mr-3\"></i>mmt@gmail.com</p>\n        <p>\n          <i class=\"fas fa-phone mr-3\"></i> + 91 234 567 8888</p>\n        <p>\n          <i class=\"fas fa-print mr-3\"></i> + 91 234 567 8999</p>\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Footer links -->\n\n    <hr>\n\n    <!-- Grid row -->\n    <div class=\"row d-flex align-items-center\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-7 col-lg-8\">\n\n        <!--Copyright-->\n        <p class=\"text-center text-md-left\">© 2019 Copyright:\n          <a href=\"https://www.makemytrip.com/flights\">\n            <strong> makemytrip.com</strong>\n            </a>\n        </p>\n      \n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-5 col-lg-4 ml-lg-0\">\n\n        <!-- Social buttons -->\n        <div class=\"text-center text-md-right\">\n          <ul class=\"list-unstyled list-inline\">\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                <i class=\"fab fa-facebook-f\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                <i class=\"fab fa-google-plus-g\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                <i class=\"fab fa-linkedin-in\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n</footer>\n<!-- Footer -->\n</body>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.nav-link:hover {\r\n  background-color:tomato;\r\n}\r\n.button {\r\n \r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  font-size: 10px;\r\n  margin: 4px 2px;\r\n  opacity: 0.6;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.button:hover {opacity: 1}\r\n/* .button:hover {background-color: #3e8e41} \r\n\r\n.button:active {\r\n  background-color:darkslategrey;\r\n  /* box-shadow: 0 5px #666; \r\n  transform: translateY(4px);\r\n} */ \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHdCQUF3QjtDQUN6QjtBQUNEOztFQUVFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7QUFDRCxlQUFlLFVBQVUsQ0FBQztBQUN6Qjs7Ozs7O0lBTUciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRvbWF0bztcclxufVxyXG4uYnV0dG9uIHtcclxuIFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b246aG92ZXIge29wYWNpdHk6IDF9XHJcbiAvKiAuYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxfSBcclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtzbGF0ZWdyZXk7XHJcbiAgLyogYm94LXNoYWRvdzogMCA1cHggIzY2NjsgXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbn0gKi8gIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<!-- <nav class=\"navbar navbar-expand-sm bg-info navbar-dark\"> -->\n    <nav class=\"navbar navbar-expand-sm bg-dark text-white\">\n  <!-- <a class=\"navbar-brand\" href=\"#\"> -->\n    <img src=\"assets/image/logo.png\" width=\"120\" height=\"40\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n <!-- <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\"> -->\n      <div class=\"container-fluid\">\n    <ul class=\"nav navbar nav-pills\">\n      <li class=\"active\">\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" >Flights</a>\n      </li> \n      <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" >About Us</a>\n        </li> \n      </ul>\n     \n    <ul class=\"nav justify-content-end nav-pills\">\n        <li class=\"nav-item\">\n            <button class=\"btn\" onclick=\"document.getElementById('id01').style.display='block'\"> <a routerLink=\"register\">Signup</a></button>\n        </li>       \n        <li class=\"nav-item\">\n            <button class=\"btn\" onclick=\"document.getElementById('id01').style.display='block'\"><a routerLink=\"login\">Login</a></button>\n \n        </li>\n       \n    </ul>\n    \n    <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul> -->\n  \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body#homePage{\r\n    background-image:url(\"/assets/image/airplane-flight-sunset.jpg\"); height:660px; \r\n }\r\nh3{\r\n    color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpRUFBaUUsQ0FBQyxhQUFhO0VBQ2pGO0FBQ0Y7SUFDSSxVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkjaG9tZVBhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2UvYWlycGxhbmUtZmxpZ2h0LXN1bnNldC5qcGdcIik7IGhlaWdodDo2NjBweDsgXHJcbiB9XHJcbmgze1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"homePage\">\n\n <h3><marquee>Welcome To MakeMyTrip</marquee></h3>\n\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body#LoginForm{ background-image:url(\"/assets/image/airplane-flight-sunset.jpg\"); height:660px;  }\r\n\r\n  /* form-container{border: 0px solid #fff; padding: 10px 10px;margin-top: 10vh;\r\n    -webkit-box-shadow: -13px -8px 23px 1px rgba(40,127,184,1);\r\n    -moz-box-shadow: -13px -8px 23px 1px rgba(40,127,184,1);\r\n    box-shadow: -13px -8px 23px 1px rgba(40,127,184,1);\r\n\r\n}  */\r\n\r\n  .header {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: black ;\r\n  font-size: 30px;\r\n}\r\n\r\n  /* The Modal (background) */\r\n\r\n  .modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: 10%; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  padding-top: 60px;\r\n}\r\n\r\n  /* Modal Content/Box */\r\n\r\n  .modal-content {\r\n  background-color: #fefefe;\r\n  margin: 10px auto; /* 15% from the top and centered */\r\n  border: 1px solid #888;\r\n  width: 30%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n  /* Add Zoom Animation */\r\n\r\n  .animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s\r\n}\r\n\r\n  @-webkit-keyframes animatezoom {\r\n  from {-webkit-transform: scale(0)} \r\n  to {-webkit-transform: scale(1)}\r\n}\r\n\r\n  @keyframes animatezoom {\r\n  from {-webkit-transform: scale(0);transform: scale(0)} \r\n  to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsaUVBQWlFLENBQUMsYUFBYSxHQUFHOztFQUVoRzs7Ozs7S0FLRzs7RUFDTDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7RUFFRCw0QkFBNEI7O0VBQzVCO0VBQ0UsY0FBYyxDQUFDLHVCQUF1QjtFQUN0QyxnQkFBZ0IsQ0FBQyxtQkFBbUI7RUFDcEMsV0FBVyxDQUFDLGdCQUFnQjtFQUM1QixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVksQ0FBQyxnQkFBZ0I7RUFDN0IsYUFBYSxDQUFDLGlCQUFpQjtFQUMvQixjQUFjLENBQUMsNkJBQTZCO0VBQzVDLDZCQUE2QixDQUFDLG9CQUFvQjtFQUNsRCxrQ0FBa0MsQ0FBQyxzQkFBc0I7RUFDekQsa0JBQWtCO0NBQ25COztFQUNELHVCQUF1Qjs7RUFDdkI7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCLENBQUMsbUNBQW1DO0VBQ3RELHVCQUF1QjtFQUN2QixXQUFXLENBQUMscURBQXFEO0NBQ2xFOztFQUNELHdCQUF3Qjs7RUFDeEI7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0NBQzVCOztFQUVEO0VBQ0UsTUFBTSwyQkFBMkIsQ0FBQztFQUNsQyxJQUFJLDJCQUEyQixDQUFDO0NBQ2pDOztFQUVEO0VBQ0UsTUFBTSw0QkFBbUIsQUFBbkIsbUJBQW1CLENBQUM7RUFDMUIsSUFBSSw0QkFBbUIsQUFBbkIsbUJBQW1CLENBQUM7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSNMb2dpbkZvcm17IGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZS9haXJwbGFuZS1mbGlnaHQtc3Vuc2V0LmpwZ1wiKTsgaGVpZ2h0OjY2MHB4OyAgfVxyXG5cclxuICAvKiBmb3JtLWNvbnRhaW5lcntib3JkZXI6IDBweCBzb2xpZCAjZmZmOyBwYWRkaW5nOiAxMHB4IDEwcHg7bWFyZ2luLXRvcDogMTB2aDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTEzcHggLThweCAyM3B4IDFweCByZ2JhKDQwLDEyNywxODQsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xM3B4IC04cHggMjNweCAxcHggcmdiYSg0MCwxMjcsMTg0LDEpO1xyXG4gICAgYm94LXNoYWRvdzogLTEzcHggLThweCAyM3B4IDFweCByZ2JhKDQwLDEyNywxODQsMSk7XHJcblxyXG59ICAqL1xyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2sgO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiAxMCU7IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDEwcHggYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbi5hbmltYXRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcclxuICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcclxuICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXpvb20ge1xyXG4gIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"LoginForm\">\n   \n<!-- <div class=\"container-fluid\" class=\"align-center\">\n   <div class=\"row\"> \n      <div class=\"col-md-4 col-sm-4 col-xs-8\"></div>\n    <div class=\"col-md-4 col-sm-4 col-xs-8\"> -->\n        <div id=\"id01\" class=\"modal\">\n                    <span onclick=\"document.getElementById('id01').style.display='none'\" \n                  class=\"close\" title=\"Close Modal\">&times;</span>\n        <form novalidate  class=\"modal-content animate\" [formGroup]=\"form\" (ngSubmit)=\"Submit(form)\" action=\"homecomponent.html\">\n                <div class=\"header\">\n                        <h3 > Welcome To MakeMyTrip </h3>\n                      </div>\n         <div class=\"container\">\n            <div class=\"form-group\">\n                <label for=\"email\">Email-Id:</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" formControlName=\"EmailId\" >\n                </div>\n                <div *ngIf=\"form.get('EmailId').invalid && form.get('EmailId').touched\" class=\"alert alert-danger\">\n                    <div *ngIf=\"form.get('EmailId').hasError('required')\"> \n                  email is required\n                    </div>\n                    <div *ngIf=\"form.get('EmailId').hasError('email')\"> \n                        invalid email\n                     </div>\n                 </div>\n\n      <div class=\"form-group\">\n      <label for=\"Password\">Password:</label>\n      <show-hide-password size=\"lg\" icon=\"entypo\"  [btnOutline]=\"false\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" name=\"password\" ngModel \n       #password=\"ngModel\"  required />\n      </show-hide-password>\n      </div>\n      <div *ngIf=\"password?.touched\" class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors?.required\">\n          password is required\n         </div>\n      </div>\n   \n       \n    <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"goHome()\" ><a routerLink=\"home\">Submit</a></button>\n    <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\n         </div>    \n  </form>\n  </div>\n  <!-- [disabled]=\"form.invalid -->\n   \n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            EmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    };
    LoginComponent.prototype.goHome = function () {
        this.router.navigateByUrl('home');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .bg{background-image: url('src/app/assets/images/bg.ico') no-repeat; width: 100%; height: 100vh;} */\r\nbody#RegistrationForm{ background-image:url(\"/assets/image/airplane-flight-sunset.jpg\"); height:660px;  }\r\n/* .form-container{border: 0px solid #fff; padding: 10px 10px;margin-top: 10vh;\r\n    -webkit-box-shadow: -13px -8px 23px 1px rgba(40,127,184,1);\r\n    -moz-box-shadow: -13px -8px 23px 1px rgba(40,127,184,1);\r\n    box-shadow: -13px -8px 23px 1px rgba(40,127,184,1);\r\n\r\n}  */\r\n.container {\r\n    padding: 16px;\r\n  }\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: 10%; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n  }\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 10px auto; /* 15% from the top and centered */\r\n    border: 1px solid #888;\r\n    width: 30%; /* Could be more or less, depending on screen size */\r\n\r\n  }\r\n/* Add Zoom Animation */\r\n.animate {\r\n    -webkit-animation: animatezoom 0.6s;\r\n    animation: animatezoom 0.6s\r\n  }\r\n@-webkit-keyframes animatezoom {\r\n    from {-webkit-transform: scale(0)} \r\n    to {-webkit-transform: scale(1)}\r\n  }\r\n@keyframes animatezoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVHQUF1RztBQUN2Ryx1QkFBdUIsaUVBQWlFLENBQUMsYUFBYSxHQUFHO0FBQ3pHOzs7OztLQUtLO0FBQ0w7SUFDSSxjQUFjO0dBQ2Y7QUFDSCw0QkFBNEI7QUFDNUI7SUFDSSxjQUFjLENBQUMsdUJBQXVCO0lBQ3RDLGdCQUFnQixDQUFDLG1CQUFtQjtJQUNwQyxXQUFXLENBQUMsZ0JBQWdCO0lBQzVCLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWSxDQUFDLGdCQUFnQjtJQUM3QixhQUFhLENBQUMsaUJBQWlCO0lBQy9CLGNBQWMsQ0FBQyw2QkFBNkI7SUFDNUMsNkJBQTZCLENBQUMsb0JBQW9CO0lBQ2xELGtDQUFrQyxDQUFDLHNCQUFzQjtJQUN6RCxrQkFBa0I7R0FDbkI7QUFDRCx1QkFBdUI7QUFDdkI7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCLENBQUMsbUNBQW1DO0lBQ3RELHVCQUF1QjtJQUN2QixXQUFXLENBQUMscURBQXFEOztHQUVsRTtBQUNELHdCQUF3QjtBQUN4QjtJQUNFLG9DQUFvQztJQUNwQywyQkFBMkI7R0FDNUI7QUFFRDtJQUNFLE1BQU0sMkJBQTJCLENBQUM7SUFDbEMsSUFBSSwyQkFBMkIsQ0FBQztHQUNqQztBQUVEO0lBQ0UsTUFBTSw0QkFBbUIsQUFBbkIsbUJBQW1CLENBQUM7SUFDMUIsSUFBSSw0QkFBbUIsQUFBbkIsbUJBQW1CLENBQUM7R0FDekIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYmd7YmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXBwL2Fzc2V0cy9pbWFnZXMvYmcuaWNvJykgbm8tcmVwZWF0OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDB2aDt9ICovXHJcbmJvZHkjUmVnaXN0cmF0aW9uRm9ybXsgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlL2FpcnBsYW5lLWZsaWdodC1zdW5zZXQuanBnXCIpOyBoZWlnaHQ6NjYwcHg7ICB9XHJcbi8qIC5mb3JtLWNvbnRhaW5lcntib3JkZXI6IDBweCBzb2xpZCAjZmZmOyBwYWRkaW5nOiAxMHB4IDEwcHg7bWFyZ2luLXRvcDogMTB2aDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTEzcHggLThweCAyM3B4IDFweCByZ2JhKDQwLDEyNywxODQsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xM3B4IC04cHggMjNweCAxcHggcmdiYSg0MCwxMjcsMTg0LDEpO1xyXG4gICAgYm94LXNoYWRvdzogLTEzcHggLThweCAyM3B4IDFweCByZ2JhKDQwLDEyNywxODQsMSk7XHJcblxyXG59ICAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiAxMCU7IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICB9XHJcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuXHJcbiAgfVxyXG4gIC8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4gIC5hbmltYXRlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzXHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKX1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"RegistrationForm\">\n<!-- <div class=\"container-fluid\">\n   <div class=\"row\"> \n      <div class=\"col-md-4 col-sm-4 col-xs-8\"></div>\n    <div class=\"col-md-4 col-sm-4 col-xs-8\"> -->\n    <div id=\"id01\" class=\"modal\">\n                        <span onclick=\"document.getElementById('id01').style.display='none'\" \n                    class=\"close\" title=\"Close Modal\">&times;</span>\n     <form novalidate  class=\"modal-content animate\" [formGroup]=\"form\" (ngSubmit)=\"Submit(form)\">\n            <div style=\"text-align:center\">\n                    <h2> {{ heading }}</h2>\n                  </div>\n                  <div class=\"container\">\n        <div class=\"form-group\">\n            <label for=\"userName\">userName:</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" formControlName=\"userName\" [(ngModel)]=\"user.userName\"></div>\n            <div *ngIf=\"form.get('userName').invalid && form.get('userName').touched\" class=\"alert alert-danger\">\n                <div *ngIf=\"form.get('userName').hasError('required')\"> \n                    Name is required\n                      </div>\n                      <div *ngIf=\"form.get('userName').hasError('pattern')\"> \n                          Invalid Name\n                            </div>\n                            <div *ngIf=\"form.get('userName').hasError('minlength')\"> \n                               name should be more than 5 letters\n                                  </div>\n\n            </div>\n              \n        \n                     <div class=\"form-group\">\n                        <label for=\"email\">Email-Id:</label>\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" formControlName=\"emailId\" [(ngModel)]=\"user.emailId\">\n                        </div>\n                        <div *ngIf=\"form.get('emailId').invalid && form.get('emailId').touched\" class=\"alert alert-danger\">\n                            <div *ngIf=\"form.get('emailId').hasError('required')\"> \n                          email is required\n                            </div>\n                            <div *ngIf=\"form.get('emailId').hasError('email')\"> \n                                invalid email\n                             </div>\n                         </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"contactNumber\">Contact Number:</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter contact number\" formControlName=\"contactNumber\" [(ngModel)]=\"user.contactNumber\"> \n                            </div>\n                            <div *ngIf=\"form.get('contactNumber').invalid && form.get('contactNumber').touched\" class=\"alert alert-danger\">\n                                <div *ngIf=\"form.get('contactNumber').hasError('required')\"> \n                                    contactNumber is required\n                                      </div>\n                                      <div *ngIf=\"form.get('contactNumber').hasError('minlength')\"> \n                                         less than 10 digit\n                                            </div>\n                                            <div *ngIf=\"form.get('contactNumber').hasError('maxlength')\"> \n                                                more than 10 digit\n                                                   </div>\n                                                   <div *ngIf=\"form.get('contactNumber').hasError('pattern')\"> \n                                                   should be  number format\n                                                         </div>\n\n                                </div>\n\n                         <div class=\"form-group\">\n                                 <label for=\"password\">password:</label>\n                                 <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" formControlName=\"password\" [(ngModel)]=\"user.password\">\n                                 </div>\n                                        <div *ngIf=\"form.get('password').invalid && form.get('password').touched\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"form.get('password').hasError('required')\"> \n                                               password is required\n                                                  </div>\n                                                  <div *ngIf=\"form.get('password').hasError('pattern')\"> \n                                                      need all characters one symbol,uppercase,lowercase,number\n                                                        </div>\n                                                        <div *ngIf=\"form.get('password').hasError('minlength')\"> \n                                                           atleast 8 characters\n                                                              </div>\n                                                \n                                          \n                                            </div>\n                        \n                                        <div class=\"form-group\">\n                                            <label for=\"confirmPassword\">Confirm password:</label>\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"  formControlName=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\">\n                                             </div>\n                                             <div *ngIf=\"form.get('confirmPassword').invalid && form.get('confirmPassword').touched\" class=\"alert alert-danger\">\n                                                <div *ngIf=\"form.get('confirmPassword').hasError('required')\"> \n                                                  confirmPassword is required\n                                                      </div>\n                                                      <div *ngIf=\"form.get('confirmPassword').hasError('pattern')\"> \n                                                          need all characters one symbol,uppercase,lowercase,number\n                                                            </div>\n                                                            <div *ngIf=\"form.get('confirmPassword').hasError('minlength')\"> \n                                                                atleast 8 characters\n                                                                  </div>\n                                                    \n                                                </div>\n                            \n      <div class=\"checkbox\">\n          <label>\n           <input type=\"checkbox\">Remember me\n          </label>\n         </div>\n         <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"form.invalid\">Submit</button>\n                  </div>\n     </form>\n    <div class=\"col-md-4 col-sm-4 col-xs-8\"></div>\n     </div>\n</body>\n<!-- <ul class=\"list-group\">\n  <li *ngFor=\"let user of userlist\" class=\"=list-group-item\">\n   {{user.userName }} \n  </li>\n</ul> -->\n\n  "

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _SupportService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SupportService */ "./src/app/SupportService.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService) {
        this.userService = userService;
        // userList: User[]=[];
        this.heading = 'Registration-Form';
        this.user = new _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"]();
    }
    RegistrationComponent.prototype.Submit = function (form) {
        console.log("in register() method");
        this.userService.createUser(this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.user = new _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"]();
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z][a-zA-Z]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_SupportService__WEBPACK_IMPORTED_MODULE_3__["SupportService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularDemo\makemytrip\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map