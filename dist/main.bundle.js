webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scientists_scientist_home_scientist_home_component__ = __webpack_require__("./src/app/scientists/scientist-home/scientist-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__ = __webpack_require__("./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scientists_edit_scientist_edit_scientist_component__ = __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scientists_new_scientist_new_scientist_component__ = __webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__scientists_scientist_home_scientist_home_component__["a" /* ScientistHomeComponent */], pathMatch: 'full' },
    { path: 'new-scientist', canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_4__scientists_new_scientist_new_scientist_component__["a" /* NewScientistComponent */] },
    { path: 'edit-scientist/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_3__scientists_edit_scientist_edit_scientist_component__["a" /* EditScientistComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.recieveMsg = function (event) {
        console.log(event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.sass")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scientists_forms_Siteforms_module__ = __webpack_require__("./src/app/scientists/forms/Siteforms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_server_server_module__ = __webpack_require__("./src/app/server/server/server.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_dialog_service__ = __webpack_require__("./src/app/shared/services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_auth_guard_service__ = __webpack_require__("./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scientists_scientists_list_scientists_list_component__ = __webpack_require__("./src/app/scientists/scientists-list/scientists-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scientists_scientists_details_scientists_details_component__ = __webpack_require__("./src/app/scientists/scientists-details/scientists-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_paint_directive__ = __webpack_require__("./src/app/directives/paint.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_login_component__ = __webpack_require__("./src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scientists_scientist_home_scientist_home_component__ = __webpack_require__("./src/app/scientists/scientist-home/scientist-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_pipes_shorten_pipe__ = __webpack_require__("./src/app/shared/pipes/shorten.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__scientists_scientists_list_scientists_list_component__["a" /* ScientistsListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__scientists_scientists_details_scientists_details_component__["a" /* ScientistsDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__directives_paint_directive__["a" /* PaintDirective */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__shared_pipes_shorten_pipe__["a" /* ShortenPipe */],
            __WEBPACK_IMPORTED_MODULE_18__scientists_scientist_home_scientist_home_component__["a" /* ScientistHomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__server_server_server_module__["a" /* ServerModule */],
            __WEBPACK_IMPORTED_MODULE_0__scientists_forms_Siteforms_module__["a" /* SiteFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared_services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_scientist_display_service__["a" /* ScientistDisplayService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_dialog_service__["a" /* DialogService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_17__login_login_login_component__["a" /* LoginComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/directives/paint.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaintDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaintDirective = (function () {
    function PaintDirective(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
    }
    PaintDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', '#e23636');
    };
    return PaintDirective;
}());
PaintDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: '[appPaint]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === "function" && _b || Object])
], PaintDirective);

var _a, _b;
//# sourceMappingURL=paint.directive.js.map

/***/ }),

/***/ "./src/app/firebase-environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA__Wt_egAoD7k5Np-Q-y7pozlAXvP2Sl0',
        authDomain: 'angular4-e3e02.firebaseapp.com',
        databaseURL: 'https://angular4-e3e02.firebaseio.com',
        projectId: 'angular4-e3e02',
        storageBucket: 'angular4-e3e02',
        messagingSenderId: '2037532242'
    }
};
//# sourceMappingURL=firebase-environment.js.map

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"col-md-8 col-md-offset-2\">\n    <md-toolbar class=\"toolbar\">\n      <a href=\"\" class=\"logo text-uppercase\">{{logoName}}</a>\n      <span class=\"spacer\"></span>\n      <ul class=\"list-unstyled hidden-xs list-inline\">\n        <li>\n          <button class=\"text-uppercase\" md-button [routerLink]=\"['/']\"> Our Scientists </button>\n        </li>\n        <li *ngIf=\"!authentication\">\n          <button class=\"text-uppercase join\" appPaint md-raised-button [routerLink]=\"['new-scientist']\" (click)=\"setRouterParam('new-scientist')\"> join troop </button>\n        </li>\n        <li *ngIf=\"authentication\">\n          <button class=\"text-uppercase\" appPaint md-button (click)=\"logout()\"> Logout </button>\n        </li>\n      </ul>\n      <div class=\"navigation visible-xs\">\n        <md-menu #appMenu=\"mdMenu\">\n          <button md-menu-item> Our Scientists </button>\n          <button *ngIf=\"!authentication\" appPaint md-menu-item [routerLink]=\"['/new-scientist']\">\n            join troop\n          </button>\n          <button *ngIf=\"authentication\" class=\"text-uppercase\" appPaint md-button (click)=\"logout()\">\n            Logout\n          </button>\n        </md-menu>\n        <button md-icon-button [mdMenuTriggerFor]=\"appMenu\">\n         <md-icon>more_vert</md-icon>\n        </button>\n      </div>\n    </md-toolbar>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover, a:focus {\n  text-decoration: none; }\n\na.logo {\n  font-size: 2em !important;\n  font-family: 'bebas', sans-serif;\n  letter-spacing: 1px;\n  font-weight: bold;\n  color: #fff;\n  background: #e23636;\n  height: 100%;\n  padding: 5px 10px 0; }\n  @media screen and (min-width: 600) {\n    a.logo {\n      padding: 0 10px; } }\n\n.toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .toolbar span.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .toolbar ul {\n    padding: 25px 0;\n    margin: 0; }\n    .toolbar ul li {\n      margin: 0;\n      padding: 0; }\n    .toolbar ul button {\n      font-size: .707em; }\n\nheader {\n  background-color: #f5f5f5;\n  width: 100%;\n  display: block;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_dialog_service__ = __webpack_require__("./src/app/shared/services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, dialog) {
        var _this = this;
        this.authService = authService;
        this.dialog = dialog;
        this.logoName = 'mad labs';
        this.authentication = false;
        this.authService.user.subscribe(function (auth) {
            if (auth) {
                _this.authentication = true;
            }
            else {
                _this.authentication = false;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setRouterParam = function (location) {
        this.authService.setRouterParam(location);
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-uppercase\" md-dialog-title>Login to make changes</h2>\n<md-dialog-actions layout=\"row\" layout-align=\"end center\">\n  <button md-raised-button appPaint (click)=\"login()\">Login</button>\n  <button md-button md-dialog-close>Cancel</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "./src/app/login/login/login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.authService.login();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login/login.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSnackBarModule */],
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSnackBarModule */],
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "./src/app/scientists/edit-scientist/edit-scientist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8 col-sm-offset-2 edit-Scientist\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <p appPaint class=\"text-uppercase\"><b><small>edit scientist</small></b></p>\n    <h1>{{scientist?.name}}</h1>\n    <form [formGroup]=\"editForm\">\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input mdInput placeholder=\"Name\" formControlName=\"name\">\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input mdInput placeholder=\"Dialog\" formControlName=\"dialog\">\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input mdInput placeholder=\"Power\" formControlName=\"power\">\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <textarea mdInput placeholder=\"About\" formControlName=\"about\"></textarea>\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input mdInput placeholder=\"Image URL\" formControlName=\"imgUrl\">\n        </md-input-container>\n      </div>\n      <button class=\"submit text-uppercase\" appPaint md-raised-button>update</button>\n    </form>\n    <button class=\"submit text-uppercase\" md-raised-button (click)=\"removeScientist()\">delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/scientists/edit-scientist/edit-scientist.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin: 0 0 2rem; }\n\ninput, md-input-container {\n  width: 100%; }\n\n.edit-Scientist {\n  padding: 2rem 0; }\n\np {\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scientists/edit-scientist/edit-scientist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScientistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditScientistComponent = (function () {
    function EditScientistComponent(routeParam, fbService, snackbar, router) {
        this.routeParam = routeParam;
        this.fbService = fbService;
        this.snackbar = snackbar;
        this.router = router;
        this.scientist = {};
    }
    EditScientistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            'dialog': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */](null),
            'power': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */](null),
            'about': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */](null),
            'imgUrl': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */](null),
        });
        this.routeParam.params.subscribe(function (param) {
            _this.fbService.listData().subscribe(function (scientist) {
                _this.scientist = scientist[param['id']];
                _this.scientistName = _this.scientist['name'];
                _this.id = _this.scientist['$key'];
            });
        });
    };
    // formForbiddenScientist(control: FormControl): Promise<any> | Observable<any> {
    //   const promise = new Promise((resolve, reject) => {
    //     this.fbData.list('/scientists').map((scientists) => {
    //       scientists.array.forEach(element => {
    //         if (element.name.indexOf(control.value)) {
    //           resolve({ 'forbiddenName': true });
    //         } else {
    //           resolve(null);
    //         }
    //       });
    //     });
    //   });
    //   return promise;
    // }
    EditScientistComponent.prototype.removeScientist = function () {
        var _this = this;
        this.fbService.removeScientist(this.id).then(function () {
            _this.snackbar.snackBarMsg(_this.scientistName + " deleted");
            _this.router.navigate(['/']);
        });
    };
    return EditScientistComponent;
}());
EditScientistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Component */])({
        selector: 'app-edit-scientist',
        template: __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.html"),
        styles: [__webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], EditScientistComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-scientist.component.js.map

/***/ }),

/***/ "./src/app/scientists/forms/Siteforms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_scientist_new_scientist_component__ = __webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_scientist_edit_scientist_component__ = __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFormsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SiteFormsModule = (function () {
    function SiteFormsModule() {
    }
    return SiteFormsModule;
}());
SiteFormsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__new_scientist_new_scientist_component__["a" /* NewScientistComponent */],
            __WEBPACK_IMPORTED_MODULE_5__edit_scientist_edit_scientist_component__["a" /* EditScientistComponent */]
        ]
    })
], SiteFormsModule);

//# sourceMappingURL=Siteforms.module.js.map

/***/ }),

/***/ "./src/app/scientists/new-scientist/new-scientist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8 col-sm-offset-2 edit-Scientist\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <p appPaint class=\"text-uppercase\"><b><small>add new</small></b></p>\n    <h1>Scientist</h1>\n    <form #formNew=\"ngForm\">\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input\n            name=\"name\"\n            [(ngModel)]=\"newMadScientist.name\"\n            mdInput\n            placeholder=\"Name\" required>\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input\n            name=\"Dialog\"\n            [(ngModel)]=\"newMadScientist.Dialogue\"\n            #dialog=\"ngModel\"\n            mdInput\n            placeholder=\"Dialog\"\n            required>\n        </md-input-container>\n        <p *ngIf=\"dialog.invalid && dialog.touched\" > Please type a dialog! </p>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input\n            name=\"power\"\n            [(ngModel)]=\"newMadScientist.power\"\n            mdInput\n            placeholder=\"Power\" required>\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <textarea\n            name=\"about\"\n            [(ngModel)]=\"newMadScientist.about\"\n            mdInput\n            placeholder=\"About\" required></textarea>\n        </md-input-container>\n      </div>\n      <div class=\"form-group\">\n        <md-input-container class=\"example-full-width\">\n          <input\n            name=\"img\"\n            [(ngModel)]=\"newMadScientist.imgUrl\"\n            mdInput\n            placeholder=\"Image URL\" required>\n        </md-input-container>\n      </div>\n    <button [disabled]=\"formNew.invalid\" (click)=\"addNewScientist()\" class=\"submit text-uppercase\" appPaint md-raised-button>submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/scientists/new-scientist/new-scientist.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scientists/new-scientist/new-scientist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewScientistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewScientistComponent = (function () {
    function NewScientistComponent(fbase) {
        this.fbase = fbase;
        this.newMadScientist = {};
    }
    NewScientistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbase.listData().subscribe(function (scientists) {
            console.log(scientists);
            _this.scientists = scientists;
        });
    };
    NewScientistComponent.prototype.addNewScientist = function () {
        this.fbase.addScientist(this.newMadScientist);
    };
    return NewScientistComponent;
}());
NewScientistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Component */])({
        selector: 'app-new-scientist',
        template: __webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.html"),
        styles: [__webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.sass"), __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], NewScientistComponent);

var _a;
//# sourceMappingURL=new-scientist.component.js.map

/***/ }),

/***/ "./src/app/scientists/scientist-home/scientist-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row home-container\">\n  <div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"col-sm-4 list\">\n      <app-scientists-list></app-scientists-list>\n      <button\n        md-raised-button\n        class=\"text-uppercase join\"\n        [routerLink]=\"['new-scientist']\"\n        appPaint\n        (click)=\"setRouterParam('new-scientist')\">join troop</button>\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"col-sm-8 details\">\n      <app-scientists-details></app-scientists-details>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/scientists/scientist-home/scientist-home.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n  padding: 32px; }\n\nbutton {\n  margin-left: 20px; }\n  @media screen and (min-width: 768px) {\n    button.join {\n      margin-top: 2rem; } }\n\n@media screen and (max-width: 768px) {\n  div.list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 2rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scientists/scientist-home/scientist-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dialog_service__ = __webpack_require__("./src/app/shared/services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScientistHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScientistHomeComponent = (function () {
    function ScientistHomeComponent(fbData, scientistDisplayService, dialog, authService) {
        var _this = this;
        this.fbData = fbData;
        this.scientistDisplayService = scientistDisplayService;
        this.dialog = dialog;
        this.authService = authService;
        this.passMsg = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* EventEmitter */]();
        this.fbData.listData().subscribe(function (scientists) {
            _this.scientists = scientists;
        });
    }
    ScientistHomeComponent.prototype.ngOnInit = function () { };
    ScientistHomeComponent.prototype.setRouterParam = function (location) {
        this.authService.setRouterParam(location);
    };
    ScientistHomeComponent.prototype.setDisplayScientist = function (num) {
        this.scientistDisplayService.setNumber(num);
        this.displayNumber = num;
    };
    return ScientistHomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["z" /* ViewChild */])('clickButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["h" /* ElementRef */]) === "function" && _a || Object)
], ScientistHomeComponent.prototype, "clickButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["l" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* EventEmitter */]) === "function" && _b || Object)
], ScientistHomeComponent.prototype, "passMsg", void 0);
ScientistHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["q" /* Component */])({
        selector: 'app-scientist-home',
        template: __webpack_require__("./src/app/scientists/scientist-home/scientist-home.component.html"),
        styles: [__webpack_require__("./src/app/scientists/scientist-home/scientist-home.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_scientist_display_service__["a" /* ScientistDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_scientist_display_service__["a" /* ScientistDisplayService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_dialog_service__["a" /* DialogService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], ScientistHomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=scientist-home.component.js.map

/***/ }),

/***/ "./src/app/scientists/scientists-details/scientists-details.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <img src=\"{{displayScientist?.imgUrl}}\" class=\"md-card-image img-responsive\" alt=\"image caption\">\n  <md-card-content>\n    <h2>{{displayScientist?.name}}</h2>\n    <p>{{displayScientist?.dialogue}}</p>\n    <p>{{displayScientist?.about}}</p>\n  </md-card-content>\n  <md-card-actions layout=\"row\" layout-align=\"end center\">\n    <button md-button class=\"text-uppercase\" (click)=\"setRouterParam('edit-scientist', number)\" [routerLink]=\"['/edit-scientist', number]\">edit</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "./src/app/scientists/scientists-details/scientists-details.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scientists/scientists-details/scientists-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScientistsDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScientistsDetailsComponent = (function () {
    function ScientistsDetailsComponent(fbService, scientistDisplayService, authService) {
        var _this = this;
        this.fbService = fbService;
        this.scientistDisplayService = scientistDisplayService;
        this.authService = authService;
        this.fbService.listData().subscribe(function (scientists) {
            _this.scientists = scientists;
            _this.displayScientist = scientists[0];
        });
    }
    ScientistsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.number = 0;
        this.scientistDisplayService.setNumberEmitter.subscribe(function (num) {
            _this.number = num;
            _this.displayScientist = _this.scientists[num];
        });
    };
    ScientistsDetailsComponent.prototype.setRouterParam = function (location, num) {
        this.authService.setRouterParam(location, num);
    };
    return ScientistsDetailsComponent;
}());
ScientistsDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["q" /* Component */])({
        selector: 'app-scientists-details',
        template: __webpack_require__("./src/app/scientists/scientists-details/scientists-details.component.html"),
        styles: [__webpack_require__("./src/app/scientists/scientists-details/scientists-details.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_scientist_display_service__["a" /* ScientistDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_scientist_display_service__["a" /* ScientistDisplayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ScientistsDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=scientists-details.component.js.map

/***/ }),

/***/ "./src/app/scientists/scientists-list/scientists-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list class=\"visible-sm visible-md visible-lg\">\n  <h3 md-subheader>All SCIENTISTS</h3>\n  <a class=\"list-item\"\n    *ngFor=\"let scientist of scientists; let i = index\"\n    (click)=\"setDisplayNumber(i)\">\n    <md-list-item>\n      <md-icon md-list-icon>account_box</md-icon>\n      <h4 md-line>{{scientist.name}}</h4>\n      <p md-line> {{scientist.dialogue}} </p>\n    </md-list-item>\n  </a>\n</md-list>\n\n<button md-button [mdMenuTriggerFor]=\"appMenu\" class=\"visible-xs\">\n  <md-icon>list</md-icon> <span>ALL SCIENTISTS</span>\n</button>\n<md-menu #appMenu=\"mdMenu\">\n  <button\n    md-menu-item\n    *ngFor=\"let scientist of scientists; let i = index\"\n    (click)=\"setDisplayNumber(i)\">\n    <span> <md-icon>account_box</md-icon> {{scientist.name}} </span>\n  </button>\n</md-menu>\n"

/***/ }),

/***/ "./src/app/scientists/scientists-list/scientists-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.list-item {\n  text-decoration: none;\n  cursor: pointer;\n  display: block;\n  transition: all .2s ease; }\n  a.list-item:hover {\n    background-color: rgba(128, 128, 128, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scientists/scientists-list/scientists-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScientistsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScientistsListComponent = (function () {
    function ScientistsListComponent(fbService, displayService) {
        this.fbService = fbService;
        this.displayService = displayService;
    }
    ScientistsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.listData().subscribe(function (scientists) {
            _this.scientists = scientists;
        });
    };
    ScientistsListComponent.prototype.setDisplayNumber = function (num) {
        this.displayService.setNumber(num);
    };
    return ScientistsListComponent;
}());
ScientistsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Component */])({
        selector: 'app-scientists-list',
        template: __webpack_require__("./src/app/scientists/scientists-list/scientists-list.component.html"),
        styles: [__webpack_require__("./src/app/scientists/scientists-list/scientists-list.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__["a" /* ScientistDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__["a" /* ScientistDisplayService */]) === "function" && _b || Object])
], ScientistsListComponent);

var _a, _b;
//# sourceMappingURL=scientists-list.component.js.map

/***/ }),

/***/ "./src/app/server/server/server.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_environment__ = __webpack_require__("./src/app/firebase-environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ServerModule = (function () {
    function ServerModule() {
    }
    return ServerModule;
}());
ServerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__firebase_environment__["a" /* environment */].firebase, 'my-app'),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ]
    })
], ServerModule);

//# sourceMappingURL=server.module.js.map

/***/ }),

/***/ "./src/app/shared/pipes/shorten.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenPipe = (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (value, args) {
        return value.substr(0, args);
    };
    return ShortenPipe;
}());
ShortenPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Pipe */])({
        name: 'shorten'
    })
], ShortenPipe);

//# sourceMappingURL=shorten.pipe.js.map

/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_service__ = __webpack_require__("./src/app/shared/services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(afAuth, router, dialog) {
        this.afAuth = afAuth;
        this.router = router;
        this.dialog = dialog;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (!auth) {
                _this.dialog.openDialog();
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
], AuthGuardService);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/shared/services/auth-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth, router, dialog, snackBar) {
        this.afAuth = afAuth;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.user = afAuth.authState;
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.user !== null;
    };
    AuthService.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInAnonymously().then(function () {
            _this.snackBarMsg('LOGGED IN');
        }).then(function () {
            _this.dialog.closeAll();
        }).then(function () {
            if (_this.location === 'edit-scientist') {
                _this.router.navigate([_this.location, _this.param]);
            }
            else {
                _this.router.navigate([_this.location]);
            }
        });
    };
    AuthService.prototype.snackBarMsg = function (msg) {
        this.snackBar.open('STATUS: ', msg, {
            duration: 2000
        });
    };
    AuthService.prototype.setRouterParam = function (location, param) {
        if (param === void 0) { param = false; }
        this.location = location;
        this.param = param;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.snackBarMsg('LOGGED OUT');
        }).then(function () {
            _this.router.navigate(['/']);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ "./src/app/shared/services/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_login_component__ = __webpack_require__("./src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__login_login_login_component__["a" /* LoginComponent */]);
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "./src/app/shared/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.listData = function () {
        this.scientists = this.db.list('/scientists').catch(function (err) {
            console.log(err);
            return err;
        });
        return this.scientists;
    };
    FirebaseService.prototype.addScientist = function (newScientist) {
        return this.db.list('/scientists').push(newScientist);
    };
    FirebaseService.prototype.removeScientist = function (id) {
        return this.scientists.remove(id);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "./src/app/shared/services/scientist-display.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScientistDisplayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScientistDisplayService = (function () {
    function ScientistDisplayService() {
        this.setNumberEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */]();
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    // setNumber(num: number): void {
    //   this.num = num;
    //   this.subject.next(num);
    // }
    // getNumber(): Observable<number> {
    //   return this.subject.asObservable();
    // }
    ScientistDisplayService.prototype.setNumber = function (num) {
        this.setNumberEmitter.emit(num);
    };
    return ScientistDisplayService;
}());
ScientistDisplayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ScientistDisplayService);

//# sourceMappingURL=scientist-display.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map