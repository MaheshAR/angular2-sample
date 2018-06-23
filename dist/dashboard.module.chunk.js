webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\">\r\n    <div class=\"header row\">\r\n        <div class=\"col-xs-3 col-sm-3 col-md-3\">\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 title\">\r\n            <h4>Expense Manager</h4>\r\n        </div>\r\n        <div class=\"col-xs-3 col-sm-3 col-md-3 userName\">\r\n            <p>Hello, {{userName | uppercase}}</p>\r\n        </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-container {\n  overflow-y: auto;\n  height: calc(100% - 50px);\n  margin-top: 50px; }\n  .dashboard-container .header {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 50px;\n    margin: 0;\n    background-image: linear-gradient(to bottom, rgba(0, 207, 187, 0.98), #0E6560); }\n    .dashboard-container .header .title {\n      text-align: center; }\n      .dashboard-container .header .title h4 {\n        font-size: 18px;\n        color: #ffffff;\n        padding-top: 12px; }\n    .dashboard-container .header .userName {\n      color: #ffffff;\n      padding-top: 12px;\n      text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var utilityService_1 = __webpack_require__("../../../../../src/app/services/utilityService.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(utilityService) {
        this.utilityService = utilityService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userName = this.utilityService.getLoggedInUser().username;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [utilityService_1.UtilityService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var dashboard_routing_module_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.routing.module.ts");
var expenseList_module_1 = __webpack_require__("../../../../../src/app/components/expenseList/expenseList.module.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [dashboard_component_1.DashboardComponent],
            imports: [common_1.CommonModule, expenseList_module_1.ExpenseListModule, dashboard_routing_module_1.DashboardRoutingModule, shared_module_1.SharedModule],
            exports: [expenseList_module_1.ExpenseListModule, dashboard_routing_module_1.DashboardRoutingModule, shared_module_1.SharedModule]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
;


/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var expenseList_component_1 = __webpack_require__("../../../../../src/app/components/expenseList/expenseList.component.ts");
var childRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'expenseList', pathMatch: 'full' },
            { path: 'expenseList', component: expenseList_component_1.ExpenseListComponent }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(childRoutes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;


/***/ }),

/***/ "../../../../../src/app/components/expenseList/counter.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var count = 0;
var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.id = ++count;
    }
    CounterComponent.prototype.ngOnInit = function () {
        console.log('counter initialization');
    };
    CounterComponent.prototype.ngOnDestroy = function () {
        console.log('counter destroy');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CounterComponent.prototype, "name", void 0);
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'counter',
            template: "<div>{{id}}{{name}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;


/***/ }),

/***/ "../../../../../src/app/components/expenseList/dummy.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
//let count = 0;
var DummyComponent = /** @class */ (function () {
    function DummyComponent() {
        this.show = true;
    }
    DummyComponent.prototype.ngOnInit = function () {
        console.log('on init');
    };
    DummyComponent.prototype.ngAfterViewInit = function () {
        console.log("el2: " + this.element2);
        console.log("el3: " + this.element3);
    };
    DummyComponent.prototype.ngAfterContentInit = function () {
        console.log("el1: " + this.element1);
    };
    DummyComponent.prototype.ngAfterViewChecked = function () {
        console.log('view on/off');
    };
    DummyComponent.prototype.btnClick = function () {
        this.show = !this.show;
    };
    __decorate([
        core_1.ContentChild(core_1.TemplateRef),
        __metadata("design:type", core_1.TemplateRef)
    ], DummyComponent.prototype, "template", void 0);
    __decorate([
        core_1.ContentChild('viewChild1'),
        __metadata("design:type", core_1.ElementRef)
    ], DummyComponent.prototype, "element1", void 0);
    __decorate([
        core_1.ViewChild('viewChild2'),
        __metadata("design:type", core_1.ElementRef)
    ], DummyComponent.prototype, "element2", void 0);
    __decorate([
        core_1.ViewChild('viewChild3'),
        __metadata("design:type", core_1.TemplateRef)
    ], DummyComponent.prototype, "element3", void 0);
    DummyComponent = __decorate([
        core_1.Component({
            selector: 'dummy',
            template: "\n                <ng-content select=\"header\"></ng-content>\n                <div #viewChild2>hai</div>\n                <div *ngIf=\"show\" #viewChild3>\n                    <ng-container *ngTemplateOutlet=\"template;context:{$implicit:'hai12'}\">\n                    </ng-container>\n                </div>\n                <button (click)=\"btnClick()\">Show Counter</button>\n                <ng-content select=\"[footer]\"></ng-content>\n            "
        })
    ], DummyComponent);
    return DummyComponent;
}());
exports.DummyComponent = DummyComponent;


/***/ }),

/***/ "../../../../../src/app/components/expenseList/expenseList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"expenseList-container\">\r\n    <div class=\"row add-expense-header\">\r\n        <div>\r\n            <button class=\"btn btn-secondary\" (click) = \"addExpense()\">ADD EXPENSE</button>\r\n        </div>\r\n        \r\n    </div>\r\n    <!-- <div *ngIf=\"expenseList.length > 0; then expenseWidget; else addExpenseMsg\"></div>\r\n\r\n    <ng-template #expenseWidget>\r\n        <ul class=\"expense-widgets-container row\">\r\n            <li *ngFor = \"let expense of expenseList\" class=\"expense-widget\">\r\n                <expense-widget [expense] = \"expense\"></expense-widget>\r\n            </li>\r\n        </ul>\r\n    </ng-template> -->\r\n\r\n    <ng-template #addExpenseMsg>\r\n        <p class=\"add-expense-msg\">There are no expenses to show. Please add expense</p>\r\n    </ng-template>\r\n\r\n    <modal-window *ngIf=\"showModalWindow\" [showModalWindow]=\"showModalWindow\" (closeModalWindow)=\"closeModalWindow()\">\r\n        <div>hai</div>\r\n    </modal-window>\r\n\r\n    <dummy>\r\n        <header #viewChild1>header</header>\r\n        <ng-template let-name>\r\n            <counter [name]=\"name\"></counter>\r\n        </ng-template>\r\n        <div footer>footer</div>\r\n    </dummy>\r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/expenseList/expenseList.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-expense-header {\n  padding: 10px;\n  border-bottom: 1px solid #d5d6d9;\n  margin: 0; }\n  .add-expense-header div {\n    width: 100%;\n    text-align: right; }\n  .add-expense-header button {\n    cursor: pointer; }\n    .add-expense-header button:focus {\n      outline: none;\n      box-shadow: none; }\n\n.expense-widgets-container {\n  list-style-type: none;\n  margin: 0;\n  padding: 15px; }\n  .expense-widgets-container .expense-widget {\n    float: left;\n    width: 200px;\n    border: 1px solid #d5d6d9;\n    height: 150px;\n    margin: 0 20px 20px 0;\n    padding: 10px;\n    border-radius: 4px;\n    background-color: #66ffcc; }\n\n.add-expense-msg {\n  text-align: center;\n  padding-top: 25px;\n  font-size: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/expenseList/expenseList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var ExpenseListComponent = /** @class */ (function () {
    function ExpenseListComponent(store) {
        this.store = store;
        this.expenseList = [];
        this.showModalWindow = false;
        this.text1 = "hai";
        this.text2 = {
            aaa: "hai"
        };
        this.contentText = "content text";
    }
    ExpenseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('Expense').subscribe(function (res) {
            if (Object.keys(res).length) {
                _this.expenseList = res;
            }
        });
        this.store.dispatch({ type: 'LOADEXPENSES', payload: {} });
    };
    ExpenseListComponent.prototype.addExpense = function () {
        this.showModalWindow = true;
    };
    ExpenseListComponent.prototype.closeModalWindow = function () {
        this.showModalWindow = false;
    };
    ExpenseListComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/components/expenseList/expenseList.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/expenseList/expenseList.component.scss")],
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], ExpenseListComponent);
    return ExpenseListComponent;
}());
exports.ExpenseListComponent = ExpenseListComponent;


/***/ }),

/***/ "../../../../../src/app/components/expenseList/expenseList.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
var expenseList_component_1 = __webpack_require__("../../../../../src/app/components/expenseList/expenseList.component.ts");
var expenseWidget_component_1 = __webpack_require__("../../../../../src/app/components/expenseList/expenseWidget/expenseWidget.component.ts");
var currencyFormatter_pipe_1 = __webpack_require__("../../../../../src/app/pipes/currencyFormatter.pipe.ts");
var expenseList_service_1 = __webpack_require__("../../../../../src/app/services/expenseList.service.ts");
var dashboard_effect_1 = __webpack_require__("../../../../../src/app/effects/dashboard.effect.ts");
var dummy_component_1 = __webpack_require__("../../../../../src/app/components/expenseList/dummy.component.ts");
var counter_component_1 = __webpack_require__("../../../../../src/app/components/expenseList/counter.component.ts");
var ExpenseListModule = /** @class */ (function () {
    function ExpenseListModule() {
    }
    ExpenseListModule = __decorate([
        core_1.NgModule({
            declarations: [expenseList_component_1.ExpenseListComponent, expenseWidget_component_1.ExpenseWidgetComponent, currencyFormatter_pipe_1.CurrencyFormatterPipe, dummy_component_1.DummyComponent, counter_component_1.CounterComponent],
            imports: [common_1.CommonModule, shared_module_1.SharedModule, effects_1.EffectsModule.forFeature([dashboard_effect_1.DashboardEffects])],
            exports: [],
            providers: [expenseList_service_1.ExpenseListService]
        })
    ], ExpenseListModule);
    return ExpenseListModule;
}());
exports.ExpenseListModule = ExpenseListModule;


/***/ }),

/***/ "../../../../../src/app/components/expenseList/expenseWidget/expenseWidget.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h4>{{expense.name}}</h4>\r\n    <p>Amount: {{expense.amount | currencyFormatter}}</p>\r\n    <p>Remaining Amount: {{expense.remainingAmount | currencyFormatter}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/expenseList/expenseWidget/expenseWidget.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ExpenseWidgetComponent = /** @class */ (function () {
    function ExpenseWidgetComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ExpenseWidgetComponent.prototype, "expense", void 0);
    ExpenseWidgetComponent = __decorate([
        core_1.Component({
            selector: 'expense-widget',
            template: __webpack_require__("../../../../../src/app/components/expenseList/expenseWidget/expenseWidget.component.html")
        })
    ], ExpenseWidgetComponent);
    return ExpenseWidgetComponent;
}());
exports.ExpenseWidgetComponent = ExpenseWidgetComponent;


/***/ }),

/***/ "../../../../../src/app/components/shared/modalWindow/modalWindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" (click)=\"bodyClick()\" [@fadeInOut]=\"showModalWindow\">\r\n</div>\r\n<div class=\"modal-window-container\" [@fadeInOut]=\"showWindow\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/modalWindow/modalWindow.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.modal-window-container {\n  width: 200px;\n  background: white;\n  top: 100px;\n  left: calc(50% - 100px);\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/modalWindow/modalWindow.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var ModalWindowComponent = /** @class */ (function () {
    function ModalWindowComponent() {
        this.showModalWindow = false;
        this.closeModalWindow = new core_1.EventEmitter();
    }
    ModalWindowComponent.prototype.bodyClick = function () {
        this.closeModalWindow.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ModalWindowComponent.prototype, "showModalWindow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ModalWindowComponent.prototype, "closeModalWindow", void 0);
    ModalWindowComponent = __decorate([
        core_1.Component({
            selector: 'modal-window',
            template: __webpack_require__("../../../../../src/app/components/shared/modalWindow/modalWindow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/modalWindow/modalWindow.component.scss")],
            animations: [
                animations_1.trigger('fadeInOut', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate('200ms ease-in-out', animations_1.style({ opacity: 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ opacity: 1 }),
                        animations_1.animate('200ms 100ms ease-in-out', animations_1.style({ opacity: 0 }))
                    ])
                ]),
                animations_1.trigger('fadeInOutWithSlide', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0, transform: 'translate3d(0,0px,0)' }),
                        animations_1.animate('200ms 100ms ease-in-out', animations_1.style({ opacity: 1, transform: 'translate3d(0,100px,0)' }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ opacity: 1, transform: 'translate3d(0,100px,0)' }),
                        animations_1.animate('200ms ease-in-out', animations_1.style({ opacity: 0, transform: 'translate3d(0,0px,0)' }))
                    ])
                ])
            ]
        })
    ], ModalWindowComponent);
    return ModalWindowComponent;
}());
exports.ModalWindowComponent = ModalWindowComponent;


/***/ }),

/***/ "../../../../../src/app/components/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var modalWindow_component_1 = __webpack_require__("../../../../../src/app/components/shared/modalWindow/modalWindow.component.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [modalWindow_component_1.ModalWindowComponent],
            imports: [],
            exports: [modalWindow_component_1.ModalWindowComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "../../../../../src/app/effects/dashboard.effect.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toArray.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var expense_action_1 = __webpack_require__("../../../../../src/app/actions/expense.action.ts");
var apiCall_service_1 = __webpack_require__("../../../../../src/app/services/apiCall.service.ts");
var expenseList_service_1 = __webpack_require__("../../../../../src/app/services/expenseList.service.ts");
var DashboardEffects = /** @class */ (function () {
    function DashboardEffects(action$, expenseAction, apiCallService, expenseListService) {
        var _this = this;
        this.action$ = action$;
        this.expenseAction = expenseAction;
        this.apiCallService = apiCallService;
        this.expenseListService = expenseListService;
        this.login$ = this.action$
            .ofType('LOADEXPENSES')
            .switchMap(function (action) { return _this.apiCallService.apicall(_this.expenseListService.getExpenseListUrl(), 'GET', {})
            .map(function (data) {
            var res = _this.expenseListService.transformExpenseListData(_this.apiCallService.extractData(data));
            return _this.expenseAction.onExpenseLoad(res);
        })
            .catch(function (err) { return Observable_1.Observable.of(_this.expenseAction.onExpenseLoad(_this.apiCallService.handleError(err))); }); });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], DashboardEffects.prototype, "login$", void 0);
    DashboardEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            expense_action_1.ExpenseActions,
            apiCall_service_1.ApiCallService,
            expenseList_service_1.ExpenseListService])
    ], DashboardEffects);
    return DashboardEffects;
}());
exports.DashboardEffects = DashboardEffects;


/***/ }),

/***/ "../../../../../src/app/pipes/currencyFormatter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CurrencyFormatterPipe = /** @class */ (function () {
    function CurrencyFormatterPipe() {
    }
    CurrencyFormatterPipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return parseInt(value).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    };
    CurrencyFormatterPipe = __decorate([
        core_1.Pipe({ name: 'currencyFormatter' })
    ], CurrencyFormatterPipe);
    return CurrencyFormatterPipe;
}());
exports.CurrencyFormatterPipe = CurrencyFormatterPipe;


/***/ }),

/***/ "../../../../../src/app/services/expenseList.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var apiCall_service_1 = __webpack_require__("../../../../../src/app/services/apiCall.service.ts");
var url_constants_1 = __webpack_require__("../../../../../src/app/constants/url.constants.ts");
var utilityService_1 = __webpack_require__("../../../../../src/app/services/utilityService.ts");
var ExpenseListService = /** @class */ (function () {
    function ExpenseListService(apiCallService, utilityService) {
        this.apiCallService = apiCallService;
        this.utilityService = utilityService;
    }
    ExpenseListService.prototype.getExpenseListUrl = function () {
        var userId = this.utilityService.getLoggedInUser().id;
        return url_constants_1.UrlConstants.expenseListByUserId + userId;
    };
    ExpenseListService.prototype.transformExpenseListData = function (res) {
        var expenses = res.result;
        expenses.forEach(function (exp) {
            exp.amount = +exp.amount;
            exp.remainingAmount = 0;
            Object.keys(exp.expense).forEach(function (dexp) {
                exp.remainingAmount += +exp.expense[dexp].amount;
            });
        });
        return expenses;
    };
    ExpenseListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [apiCall_service_1.ApiCallService,
            utilityService_1.UtilityService])
    ], ExpenseListService);
    return ExpenseListService;
}());
exports.ExpenseListService = ExpenseListService;


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map