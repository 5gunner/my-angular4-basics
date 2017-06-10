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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_guard_service__ = __webpack_require__("./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scientists_edit_scientist_edit_scientist_component__ = __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'new-scientist', component: __WEBPACK_IMPORTED_MODULE_4__scientists_new_scientist_new_scientist_component__["a" /* NewScientistComponent */] },
    { path: 'edit-scientist/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_services_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_2__scientists_edit_scientist_edit_scientist_component__["a" /* EditScientistComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__ = __webpack_require__("./src/app/shared/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__ = __webpack_require__("./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_new_component_my_new_component_component__ = __webpack_require__("./src/app/my-new-component/my-new-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__firebase_environment__ = __webpack_require__("./src/app/firebase-environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__scientists_scientists_list_scientists_list_component__ = __webpack_require__("./src/app/scientists/scientists-list/scientists-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__scientists_scientists_details_scientists_details_component__ = __webpack_require__("./src/app/scientists/scientists-details/scientists-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_paint_directive__ = __webpack_require__("./src/app/directives/paint.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scientists_new_scientist_new_scientist_component__ = __webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scientists_edit_scientist_edit_scientist_component__ = __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_login_login_component__ = __webpack_require__("./src/app/login/login/login.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__scientists_scientists_list_scientists_list_component__["a" /* ScientistsListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__scientists_scientists_details_scientists_details_component__["a" /* ScientistsDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__directives_paint_directive__["a" /* PaintDirective */],
            __WEBPACK_IMPORTED_MODULE_20__scientists_new_scientist_new_scientist_component__["a" /* NewScientistComponent */],
            __WEBPACK_IMPORTED_MODULE_21__scientists_edit_scientist_edit_scientist_component__["a" /* EditScientistComponent */],
            __WEBPACK_IMPORTED_MODULE_22__login_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__firebase_environment__["a" /* environment */].firebase, 'my-app'),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MdDialogModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__shared_services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_scientist_display_service__["a" /* ScientistDisplayService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__["a" /* AuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_22__login_login_login_component__["a" /* LoginComponent */]]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appPaint]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object])
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

module.exports = "<header>\n  <div class=\"container\">\n    <md-toolbar class=\"toolbar\">\n      <a href=\"\" class=\"logo text-uppercase\">{{logoName}}</a>\n      <span class=\"spacer\"></span>\n      <ul class=\"list-unstyled hidden-xs hidden-sm list-inline\">\n        <li><button class=\"text-uppercase\" md-button [routerLink]=\"['/']\"> Our Scientists </button></li>\n        <li *ngIf=\"!authentication\"><button class=\"text-uppercase join\" md-raised-button [routerLink]=\"['/new-scientist']\"> join troop </button></li>\n        <li *ngIf=\"authentication\"><button class=\"text-uppercase\" appPaint md-button (click)=\"logout()\"> Logout </button></li>\n      </ul>\n      <div class=\"navigation visible-xs visible-sm\">\n        <md-menu #appMenu=\"mdMenu\">\n          <button md-menu-item> Our Scientists </button>\n          <button *ngIf=\"!authentication\" appPaint md-menu-item [routerLink]=\"['/new-scientist']\">\n            join troop\n          </button>\n          <button *ngIf=\"authentication\" class=\"text-uppercase\" appPaint md-button (click)=\"logout()\">\n            Logout\n          </button>\n        </md-menu>\n        <button md-icon-button [mdMenuTriggerFor]=\"appMenu\">\n         <md-icon>more_vert</md-icon>\n        </button>\n      </div>\n    </md-toolbar>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover, a:focus {\n  text-decoration: none; }\n\na.logo {\n  font-size: 2em !important;\n  font-family: 'bebas', sans-serif;\n  letter-spacing: 1px;\n  font-weight: bold;\n  color: #fff;\n  background: #e23636;\n  height: 100%;\n  padding: 5px 10px 0; }\n  @media screen and (min-width: 600) {\n    a.logo {\n      padding: 0 10px; } }\n\n.toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .toolbar span.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .toolbar ul {\n    padding: 25px 0;\n    margin: 0; }\n    .toolbar ul li {\n      margin: 0;\n      padding: 0; }\n    .toolbar ul button {\n      font-size: .707em; }\n      .toolbar ul button.join {\n        color: #e23636; }\n\nheader {\n  background-color: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__ = __webpack_require__("./src/app/shared/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    function HeaderComponent(authService) {
        var _this = this;
        this.authService = authService;
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
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__ = __webpack_require__("./src/app/shared/services/auth-service.service.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login/login.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n  <input mdInput placeholder=\"Name\" #inputMarker (keyup.enter)=\"addNameToList(inputMarker.value)\">\n</md-input-container>\n<br>\n<button md-raised-button (click)=\"addNameToList(inputMarker.value)\">PUSH</button>\n\n<md-list>\n <md-list-item *ngFor=\"let item of list; let i = index\"> {{item}} {{i}} </md-list-item>\n</md-list>\n"

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNewComponentComponent = (function () {
    function MyNewComponentComponent() {
        this.list = [];
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
    };
    MyNewComponentComponent.prototype.addNameToList = function (par) {
        this.list.push(par);
    };
    return MyNewComponentComponent;
}());
MyNewComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-my-new-component',
        template: __webpack_require__("./src/app/my-new-component/my-new-component.component.html"),
        styles: [__webpack_require__("./src/app/my-new-component/my-new-component.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], MyNewComponentComponent);

//# sourceMappingURL=my-new-component.component.js.map

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row home-container\">\n  <div class=\"container\">\n    <div class=\"col-sm-4 list\">\n      <app-scientists-list></app-scientists-list>\n      <button md-raised-button class=\"text-uppercase join\" (click)=\"openDialog()\" appPaint>join troop</button>\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"col-sm-8 details\">\n      <app-scientists-details></app-scientists-details>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n  padding: 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_login_component__ = __webpack_require__("./src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(fbData, scientistDisplayService, dialog) {
        var _this = this;
        this.fbData = fbData;
        this.scientistDisplayService = scientistDisplayService;
        this.dialog = dialog;
        this.passMsg = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["s" /* EventEmitter */]();
        this.fbData.listData().subscribe(function (scientists) {
            _this.scientists = scientists;
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.setDisplayScientist = function (num) {
        this.scientistDisplayService.setNumber(num);
        this.displayNumber = num;
    };
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__login_login_login_component__["a" /* LoginComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])('clickButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], HomeComponent.prototype, "clickButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], HomeComponent.prototype, "passMsg", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_12" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("./src/app/pages/home/home.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_scientist_display_service__["a" /* ScientistDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_scientist_display_service__["a" /* ScientistDisplayService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/scientists/edit-scientist/edit-scientist.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!isAllowed\">\n  Sorry you are not allowed to edit.\n</p>\n<p *ngIf=\"isAllowed\">\n  {{param}}\n</p>\n"

/***/ }),

/***/ "./src/app/scientists/edit-scientist/edit-scientist.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scientists/edit-scientist/edit-scientist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    function EditScientistComponent(routeParam) {
        this.routeParam = routeParam;
        this.isAllowed = false;
    }
    EditScientistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParam.params.subscribe(function (param) {
            _this.param = param['id'];
        });
        this.routeParam.queryParams.subscribe(function (queryParam) {
            _this.isAllowed = queryParam['allowedEdit'] === '1' ? true : false;
        });
    };
    return EditScientistComponent;
}());
EditScientistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-edit-scientist',
        template: __webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.html"),
        styles: [__webpack_require__("./src/app/scientists/edit-scientist/edit-scientist.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], EditScientistComponent);

var _a;
//# sourceMappingURL=edit-scientist.component.js.map

/***/ }),

/***/ "./src/app/scientists/new-scientist/new-scientist.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  new-scientist works!\n</p>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    function NewScientistComponent() {
    }
    NewScientistComponent.prototype.ngOnInit = function () {
    };
    return NewScientistComponent;
}());
NewScientistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-new-scientist',
        template: __webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.html"),
        styles: [__webpack_require__("./src/app/scientists/new-scientist/new-scientist.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], NewScientistComponent);

//# sourceMappingURL=new-scientist.component.js.map

/***/ }),

/***/ "./src/app/scientists/scientists-details/scientists-details.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <img src=\"{{displayScientist?.imgUrl}}\" class=\"md-card-image img-responsive\" alt=\"image caption\">\n  <md-card-content>\n    <h2>{{displayScientist?.name}}</h2>\n    <p>{{displayScientist?.dialogue}}</p>\n    <p>{{displayScientist?.about}}</p>\n  </md-card-content>\n  <md-card-actions layout=\"row\" layout-align=\"end center\">\n    <button md-button class=\"text-uppercase\" [routerLink]=\"['/edit-scientist', number]\" [queryParams]=\"{allowedEdit: number === 0? '1' : '0'}\">edit</button>\n    <button md-button color=\"warn\" class=\"text-uppercase\">delete</button>\n  </md-card-actions>\n</md-card>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__ = __webpack_require__("./src/app/shared/services/scientist-display.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__ = __webpack_require__("./src/app/shared/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    function ScientistsDetailsComponent(fbService, scientistDisplayService) {
        var _this = this;
        this.fbService = fbService;
        this.scientistDisplayService = scientistDisplayService;
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
    return ScientistsDetailsComponent;
}());
ScientistsDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-scientists-details',
        template: __webpack_require__("./src/app/scientists/scientists-details/scientists-details.component.html"),
        styles: [__webpack_require__("./src/app/scientists/scientists-details/scientists-details.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__["a" /* ScientistDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__["a" /* ScientistDisplayService */]) === "function" && _b || Object])
], ScientistsDetailsComponent);

var _a, _b;
//# sourceMappingURL=scientists-details.component.js.map

/***/ }),

/***/ "./src/app/scientists/scientists-list/scientists-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list>\n  <a class=\"list-item\" *ngFor=\"let scientist of scientists; let i = index\" (click)=\"setDisplayNumber(i)\">\n    <md-list-item>\n      <md-icon md-list-icon>account_box</md-icon>\n      <h4 md-line>{{scientist.name}}</h4>\n      <p md-line> {{scientist.dialogue}} </p>\n    </md-list-item>\n    <md-divider></md-divider>\n  </a>\n</md-list>\n"

/***/ }),

/***/ "./src/app/scientists/scientists-list/scientists-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-button, .mat-icon-button, .mat-raised-button {\n  color: #e23636 !important; }\n\na.list-item {\n  text-decoration: none;\n  cursor: pointer;\n  display: block;\n  transition: all .2s ease; }\n  a.list-item:hover {\n    background-color: rgba(128, 128, 128, 0.1); }\n", ""]);

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
        var _this = this;
        this.fbService = fbService;
        this.displayService = displayService;
        this.fbService.listData().subscribe(function (scientists) {
            _this.scientists = scientists;
        });
    }
    ScientistsListComponent.prototype.ngOnInit = function () { };
    ScientistsListComponent.prototype.setDisplayNumber = function (num) {
        this.displayService.setNumber(num);
    };
    return ScientistsListComponent;
}());
ScientistsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-scientists-list',
        template: __webpack_require__("./src/app/scientists/scientists-list/scientists-list.component.html"),
        styles: [__webpack_require__("./src/app/scientists/scientists-list/scientists-list.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__["a" /* ScientistDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_scientist_display_service__["a" /* ScientistDisplayService */]) === "function" && _b || Object])
], ScientistsListComponent);

var _a, _b;
//# sourceMappingURL=scientists-list.component.js.map

/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service_service__ = __webpack_require__("./src/app/shared/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return;
        // return this.authService.user.subscribe((state) => {
        //   if(state.)
        // });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/shared/services/auth-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.user !== null;
    };
    AuthService.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInAnonymously().then(function () {
            console.log(_this.user);
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth-service.service.js.map

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
        this.items = this.db.list('/scientists');
        return this.items;
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
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
        this.setNumberEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
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