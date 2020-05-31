webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar> </app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_transactions_transactions_component__ = __webpack_require__("./src/app/components/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_accounts_accounts_component__ = __webpack_require__("./src/app/components/accounts/accounts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_16__components_transactions_transactions_component__["a" /* TransactionsComponent */] },
    { path: 'accounts', component: __WEBPACK_IMPORTED_MODULE_17__components_accounts_accounts_component__["a" /* AccountsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_accounts_accounts_component__["a" /* AccountsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/app.module.js.map

/***/ }),

/***/ "./src/app/components/accounts/accounts.component.css":
/***/ (function(module, exports) {

module.exports = ".form-control\n{\n  width:40%;\n  height:20px;\n}\n#disp\n{\n  width:50%;\n}\n.row\n{\n  margin-top: -300px;\n  margin-left: 450px;\n}\n.col-md-2\n{\n  width:110px;\n}\n.form-display\n{\n  display: block;\n}\n#update_button\n{\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/components/accounts/accounts.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-display\">\n  <div  *ngIf=\"user\" id=\"disp\">\n    <h2 class=\"page-header\">Account Details</h2>\n    <form (submit)=\"addAccount(user)\">\n      <div class=\"form-group\">\n        <label> First Name: </label>\n        <input type=\"text\" ng-model=\"first_name\" name=\"first_name\" class=\"form-control\" value={{user.first_name}} disabled>\n      </div>\n      <div class=\"form-group\">\n        <label> Last Name:</label>\n        <input type=\"text\" ng-model=\"last_name\" name=\"last_name\" class=\"form-control\" value={{user.last_name}} disabled >\n      </div>\n      <div class=\"form-group\">\n        <label> Account Number:</label>\n        <input type=\"number\" [(ngModel)]=\"acc_no\" name=\"acc_no\" class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label> Account Type:</label>\n        <input type=\"text\" [(ngModel)]=\"acc_type\" name=\"acc_type\" class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label> Balance:</label>\n        <input type=\"text\" [(ngModel)]=\"balance\" name=\"balance\" class=\"form-control\" >\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\"  id=\"submit_button\" value=\"Submit\">\n    </form>\n  </div>\n</div>\n\n<hr>\n<div class=\"row\">\n  <div class=\"container\">\n    <div *ngFor=\"let t of accounts\">\n      <div class = \"col-md-2\">\n        {{t.acc_no}}\n      </div>\n      <div class = \"col-md-2\">\n        {{t.acc_type}}\n      </div>\n      <div class = \"col-md-2\">\n        {{t.balance}}\n      </div>\n      <div class =\"col-md-2\">\n        <input type= \"button\"  value=\"Delete\" (click) = \"deleteAccount(t._id)\" value=\"Delete\" class=\"btn btn-danger\">\n      </div>\n\n      <br><br>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountsComponent = (function () {
    function AccountsComponent(validateService, flashMessage, authService, route2, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.route2 = route2;
        this.router = router;
        this.accountInfo = {
            _id: String,
            first_name: String,
            last_name: String,
            acc_no: Number,
            acc_type: String,
            balance: Number
        };
    }
    AccountsComponent.prototype.refresh = function () {
        this._id = null;
        this.first_name = this.last_name = this.acc_no = this.acc_type = this.balance = null;
        // document.getElementById('update_button').style.display = 'none';
    };
    AccountsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getAccounts().subscribe(function (account) {
            _this.accounts = account;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AccountsComponent.prototype.deleteAccount = function (id) {
        var _this = this;
        var accounts1 = this.accounts;
        this.authService.deleteAccountss(id).subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < accounts1.length; i++) {
                    if (accounts1[i]._id === id) {
                        accounts1.splice(i, 1);
                        _this.flashMessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                    }
                }
            }
        });
    };
    AccountsComponent.prototype.addAccount = function (user) {
        var _this = this;
        var account = {
            first_name: user.first_name,
            last_name: user.last_name,
            acc_no: this.acc_no,
            acc_type: this.acc_type,
            balance: this.balance
        };
        /*if (!this.validateService.validateRegister(transact)) {
         this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
         return false;
         }*/
        this.authService.registerAccount(account).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Account Added', { cssClass: 'alert-success', timeout: 3000 });
                _this.refresh();
                window.location.reload();
            }
            else {
                _this.flashMessage.show('Something GOING Wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    AccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__("./src/app/components/accounts/accounts.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/accounts.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], AccountsComponent);
    return AccountsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/accounts.component.js.map

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<div *ngIf=\"user\">\n<p>Welcome to your dashboard <i> <b>{{user.username}}</b> </i></p>\n\n  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/transactions']\">Transactions</a></li>\n  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/accounts']\">Accounts</a></li>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h1>Expense Manager Using MEAN Stack</h1>\n<p class=\"lead\"> Welcome to The Expense Manager WebApp developed Using MEAN Stack. It is Currently in Development Stage.</p>\n<div>\n<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n<a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>MongoDB</h3>\n    <p>Using the Famous MongoDB databse to keep track of all the data.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Express and Node Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/home.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/login.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Expense Manager</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are Logged Out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Welcome <i> <b>{{user.username}}</b> </i></h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">First Name: {{user.first_name}}</li>\n    <li class=\"list-group-item\">Last Name: {{user.last_name}}</li>\n    <li class=\"list-group-item\">Date Of Birth: {{user.dob}}</li>\n    <li class=\"list-group-item\">Gender: {{user.gender}}</li>\n    <li class=\"list-group-item\">Phone Number: {{user.phone}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/profile.component.js.map

/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" enctype=\"multipart/form-data\">\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input type=\"text\" [(ngModel)]=\"first_name\" name=\"first_name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Last Name</label>\n    <input type=\"text\" [(ngModel)]=\"last_name\" name=\"last_name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Date Of Birth</label>\n    <input type=\"date\" [(ngModel)]=\"dob\" name=\"dob\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Gender</label><br>\n    <input type=\"radio\" [(ngModel)]=\"gender\" name=\"gender\" value=\"Male\" checked  >Male &nbsp;&nbsp;\n    <input type=\"radio\" [(ngModel)]=\"gender\" name=\"gender\" value=\"Female\" checked  >Female &nbsp;&nbsp;\n    <input type=\"radio\" [(ngModel)]=\"gender\" name=\"gender\" value=\"Other\" checked  >Other\n  </div>\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" >\n  </div>\n\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" value=\"\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            dob: this.dob,
            gender: this.gender,
            phone: this.phone,
            username: this.username,
            password: this.password
        };
        if (this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please fill correct email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now Registerd and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something Wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/register.component.js.map

/***/ }),

/***/ "./src/app/components/transactions/transactions.component.css":
/***/ (function(module, exports) {

module.exports = ".form-control\n{\n  width:40%;\n  height:20px;\n}\n#disp\n{\n  width:50%;\n}\n.row\n{\n  margin-top: -500px;\n  margin-left: 350px;\n}\n.col-md-2\n{\n  width:110px;\n}\n.form-display\n{\n  display: block;\n}\n#update_button\n{\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/components/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-display\">\n  <div  *ngIf=\"user\" id=\"disp\">\n<h2 class=\"page-header\">Transaction Details</h2>\n<form (submit)=\"addTransaction(user)\">\n   <div class=\"form-group\">\n     <label> First Name: </label>\n     <input type=\"text\" ng-model=\"first_name\" name=\"first_name\" class=\"form-control\" value={{user.first_name}} disabled>\n   </div>\n  <div class=\"form-group\">\n    <label> Last Name:</label>\n    <input type=\"text\" ng-model=\"last_name\" name=\"last_name\" class=\"form-control\" value={{user.last_name}} disabled >\n  </div>\n  <div class=\"form-group\">\n    <label> Amount:</label>\n    <input type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label> Nature:</label>\n    <input type=\"text\" [(ngModel)]=\"nature\" name=\"nature\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label> Category:</label>\n    <input type=\"text\" [(ngModel)]=\"category\" name=\"category\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label> Date:</label>\n    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label> Account Number:</label>\n    <input type=\"number\" [(ngModel)]=\"acc_no\" name=\"note\" class=\"form-control\" >\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\"  id=\"submit_button\" value=\"Submit\">\n  <input type=\"button\" class=\"btn btn-info\" id=\"update_button\" (click)=\"update(user)\" value=\"Update\" >\n</form>\n</div>\n<hr>\n<div class=\"row\">\n <div class=\"container\">\n   <div *ngFor=\"let t of transactions\">\n     <div class = \"col-md-2\">\n       &#8377;{{t.amount}}\n     </div>\n     <div class = \"col-md-2\">\n       {{t.nature}}\n     </div>\n     <div class = \"col-md-2\">\n       {{t.category}}\n     </div>\n     <div class = \"col-md-2\">\n       {{t.date}}\n     </div>\n     <div class = \"col-md-2\">\n       {{t.acc_no}}\n     </div>\n     <div class =\"col-md-2\">\n       <input type= \"button\"  value=\"Delete\" (click) = \"deleteTransaction(t._id)\" value=\"Delete\" class=\"btn btn-danger\">\n     </div>\n     <div class=\"col-md-2\">\n       <button class=\"btn btn-warning\" (click) = \"editTransaction(t._id)\" >Edit</button>\n     </div>\n     <br><br>\n   </div>\n\n </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var old_bal = 0;
var TransactionsComponent = (function () {
    function TransactionsComponent(validateService, flashMessage, authService, route2, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.route2 = route2;
        this.router = router;
        this.transactInfo = {
            _id: String,
            first_name: String,
            last_name: String,
            amount: Number,
            nature: String,
            category: String,
            acc_no: Number,
            date: String
        };
        this.refresh();
    }
    TransactionsComponent.prototype.refresh = function () {
        this._id = null;
        this.first_name = this.last_name = this.amount = this.nature = this.category = this.acc_no = this.date = null;
        // document.getElementById('update_button').style.display = 'none';
        console.log('Hiii');
    };
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getTransactions().subscribe(function (transact) {
            _this.transactions = transact;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getAccounts().subscribe(function (transacts) {
            _this.accounts = transacts;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TransactionsComponent.prototype.deleteTransaction = function (id) {
        var _this = this;
        var transactions1 = this.transactions;
        var maps = this.accounts;
        this.authService.deleteTransact(id).subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < transactions1.length; i++) {
                    if (transactions1[i]._id === id) {
                        var _loop_1 = function(j) {
                            if (maps[j].acc_no == transactions1[i].acc_no) {
                                var x = transactions1[i].amount;
                                var y = maps[j].balance;
                                var z = y;
                                for (var m = 0; m < x; m++) {
                                    z++;
                                }
                                console.log(z);
                                maps[j].balance = z;
                                console.log(maps[j].balance);
                                var accounts1_1 = _this.accounts;
                                _this.authService.deleteAccountss(maps[j]._id).subscribe(function (datas) {
                                    if (datas.n === 1) {
                                        for (var k = 0; k < accounts1_1.length; k++) {
                                            if (accounts1_1[k]._id == maps[k]._id) {
                                                accounts1_1.splice(k, 1);
                                                _this.flashMessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                                            }
                                        }
                                    }
                                });
                                var a = {
                                    first_name: transactions1[i].first_name,
                                    last_name: transactions1[i].last_name,
                                    acc_no: maps[j].acc_no,
                                    acc_type: maps[j].acc_type,
                                    balance: maps[j].balance,
                                };
                                _this.authService.registerAccount(a).subscribe(function (datax) {
                                    if (datax.success) {
                                        _this.flashMessage.show('Account Added', { cssClass: 'alert-success', timeout: 3000 });
                                        _this.refresh();
                                        window.location.reload();
                                    }
                                    else {
                                        _this.flashMessage.show('Something GOING Wrong', { cssClass: 'alert-danger', timeout: 3000 });
                                    }
                                });
                                return "break";
                            }
                        };
                        for (var j = 0; j < maps.length; j++) {
                            var state_1 = _loop_1(j);
                            if (state_1 === "break") break;
                        }
                        transactions1.splice(i, 1);
                        _this.flashMessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                    }
                }
            }
        });
    };
    TransactionsComponent.prototype.update = function (user) {
        console.log("hello");
        console.log(this.transactInfo._id);
        var transactions1 = this.transactions;
        var maps = this.accounts;
        var transacts = {
            first_name: this.first_name,
            last_name: this.last_name,
            amount: this.amount,
            nature: this.nature,
            category: this.category,
            date: this.date,
            acc_no: this.acc_no
        };
        this.upd(user);
    };
    TransactionsComponent.prototype.editTransaction = function (id) {
        var _this = this;
        console.log(id);
        var transactions1 = this.transactions;
        var maps = this.accounts;
        for (var i = 0; i < transactions1.length; i++) {
            if (transactions1[i]._id === id) {
                old_bal = transactions1[i].amount;
            }
        }
        console.log(old_bal);
        this.authService.editTransact(id).subscribe(function (res) {
            console.log('data to be edited is' + res.first_name);
            _this.flashMessage.show('Edit Success', { cssClass: 'alert-success', timeout: 3000 });
            _this.transactInfo = res;
            _this.amount = res.amount;
            _this.nature = res.nature;
            _this.date = res.date;
            _this.category = res.category;
            _this.acc_no = res.acc_no;
            _this._id = res._id;
        });
        document.getElementById('update_button').style.display = 'inline';
        document.getElementById('submit_button').style.display = 'none';
        this.authService.deleteTransact(id).subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < transactions1.length; i++) {
                    if (transactions1[i]._id === id) {
                        transactions1.splice(i, 1);
                        _this.flashMessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                    }
                }
            }
        });
    };
    TransactionsComponent.prototype.addTransaction = function (user) {
        var _this = this;
        var transact = {
            first_name: user.first_name,
            last_name: user.last_name,
            amount: this.amount,
            nature: this.nature,
            category: this.category,
            date: this.date,
            acc_no: this.acc_no
        };
        /*if (!this.validateService.validateRegister(transact)) {
          this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }*/
        this.authService.registerTransact(transact).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Transaction Added', { cssClass: 'alert-success', timeout: 3000 });
                // this.refresh();
                // window.location.reload();
                _this.addx(user);
            }
            else {
                _this.flashMessage.show('Something GOING Wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    TransactionsComponent.prototype.addx = function (user) {
        /* const map = new Map<number, number>();
         const transacd = this.transactions;
         for (let i = 0; i < transacd.length; i++) {
           map.set(transacd[i].acc_no, transacd[i].amount);
         }
         console.log('HIIIIIIIIIIIIIIIIIIIII');
         map.forEach((value: number, key: number) => {
           console.log(key, value);
         });
        */
        var _this = this;
        var maps = this.accounts;
        console.log(this.acc_no);
        var _loop_2 = function(i) {
            console.log(maps[i].acc_no);
            if (maps[i].acc_no == this_1.acc_no) {
                console.log('HIIIIIIIX');
                var x = this_1.amount;
                maps[i].balance = maps[i].balance - x;
                var accounts1_2 = this_1.accounts;
                this_1.authService.deleteAccountss(maps[i]._id).subscribe(function (data) {
                    if (data.n === 1) {
                        for (var i_1 = 0; i_1 < accounts1_2.length; i_1++) {
                            if (accounts1_2[i_1]._id == maps[i_1]._id) {
                                accounts1_2.splice(i_1, 1);
                                _this.flashMessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                            }
                        }
                    }
                });
                console.log(maps[i].acc_no);
                var a = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    acc_no: maps[i].acc_no,
                    acc_type: maps[i].acc_type,
                    balance: maps[i].balance,
                };
                this_1.authService.registerAccount(a).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('Account Added', { cssClass: 'alert-success', timeout: 3000 });
                        _this.refresh();
                        window.location.reload();
                    }
                    else {
                        _this.flashMessage.show('Something GOING Wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
                return "break";
            }
        };
        var this_1 = this;
        for (var i = 0; i < maps.length; i++) {
            var state_2 = _loop_2(i);
            if (state_2 === "break") break;
        }
        for (var i = 0; i < maps.length; i++) {
            console.log(maps[i].balance);
        }
    };
    TransactionsComponent.prototype.upd = function (user) {
        var _this = this;
        var transact = {
            first_name: user.first_name,
            last_name: user.last_name,
            amount: this.amount,
            nature: this.nature,
            category: this.category,
            date: this.date,
            acc_no: this.acc_no
        };
        this.authService.registerTransact(transact).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Transaction Added', { cssClass: 'alert-success', timeout: 3000 });
                // this.refresh();
                // window.location.reload();
                _this.upd_ac(user);
            }
            else {
                _this.flashMessage.show('Something GOING Wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    TransactionsComponent.prototype.upd_ac = function (user) {
        var _this = this;
        var maps = this.accounts;
        console.log(this.acc_no);
        var _loop_3 = function(i) {
            console.log(maps[i].acc_no);
            if (maps[i].acc_no == this_2.acc_no) {
                console.log('HIIIIIIIX');
                var x = this_2.amount;
                console.log(old_bal + '   ' + maps[i].balance + '   ' + x);
                if (x > old_bal) {
                    maps[i].balance = maps[i].balance - (x - old_bal);
                }
                else if (x < old_bal) {
                    maps[i].balance = maps[i].balance + (old_bal - x);
                }
                var accounts1_3 = this_2.accounts;
                this_2.authService.deleteAccountss(maps[i]._id).subscribe(function (data) {
                    if (data.n === 1) {
                        for (var i_2 = 0; i_2 < accounts1_3.length; i_2++) {
                            if (accounts1_3[i_2]._id == maps[i_2]._id) {
                                accounts1_3.splice(i_2, 1);
                                _this.flashMessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                            }
                        }
                    }
                });
                console.log(maps[i].acc_no);
                var a = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    acc_no: maps[i].acc_no,
                    acc_type: maps[i].acc_type,
                    balance: maps[i].balance,
                };
                this_2.authService.registerAccount(a).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('Account Added', { cssClass: 'alert-success', timeout: 3000 });
                        _this.refresh();
                        window.location.reload();
                    }
                    else {
                        _this.flashMessage.show('Something GOING Wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
                return "break";
            }
        };
        var this_2 = this;
        for (var i = 0; i < maps.length; i++) {
            var state_3 = _loop_3(i);
            if (state_3 === "break") break;
        }
        for (var i = 0; i < maps.length; i++) {
            console.log(maps[i].balance);
        }
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__("./src/app/components/transactions/transactions.component.html"),
            styles: [__webpack_require__("./src/app/components/transactions/transactions.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], TransactionsComponent);
    return TransactionsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/transactions.component.js.map

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
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
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerTransact = function (transact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/transact', transact, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerAccount = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/account', account, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTransactions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/transact1', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAccounts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/account1', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteTransact = function (id) {
        return this.http.delete('/users/transact/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteAccountss = function (id) {
        return this.http.delete('/users/account/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editTransact = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/transact/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.update = function (id, upDatedContact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        console.log('in update' + id);
        return this.http.put('/users/transact/' + id, upDatedContact, headers).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/auth.service.js.map

/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/validate.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/workspace/Daily-Expense-Manager/ExpenseManager/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map