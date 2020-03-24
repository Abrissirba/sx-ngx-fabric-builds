(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('sx-ngx-fabric', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/cdk/portal', '@angular/cdk/overlay', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['sx-ngx-fabric'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng.cdk.portal, global.ng.cdk.overlay, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, forms, portal, overlay, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SxNgxFabricService = /** @class */ (function () {
        function SxNgxFabricService() {
        }
        SxNgxFabricService.ɵfac = function SxNgxFabricService_Factory(t) { return new (t || SxNgxFabricService)(); };
        SxNgxFabricService.ɵprov = core["ɵɵdefineInjectable"]({ token: SxNgxFabricService, factory: SxNgxFabricService.ɵfac, providedIn: 'root' });
        return SxNgxFabricService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var SxNgxFabricComponent = /** @class */ (function () {
        function SxNgxFabricComponent() {
        }
        SxNgxFabricComponent.prototype.ngOnInit = function () {
        };
        SxNgxFabricComponent.ɵfac = function SxNgxFabricComponent_Factory(t) { return new (t || SxNgxFabricComponent)(); };
        SxNgxFabricComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SxNgxFabricComponent, selectors: [["sx-sx-ngx-fabric"]], decls: 2, vars: 0, template: function SxNgxFabricComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " sx-ngx-fabric works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return SxNgxFabricComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-sx-ngx-fabric',
                    template: "\n    <p>\n      sx-ngx-fabric works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    function BreadcrumbComponent_li_7_Template(rf, ctx) { if (rf & 1) {
        var _r21 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "li", 8);
        core["ɵɵelementStart"](1, "a", 9);
        core["ɵɵlistener"]("click", function BreadcrumbComponent_li_7_Template_a_click_1_listener() { core["ɵɵrestoreView"](_r21); var item_r19 = ctx.$implicit; var ctx_r20 = core["ɵɵnextContext"](); return ctx_r20.onClick(item_r19); });
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](3, "i", 3);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r19 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("title", item_r19.text);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](item_r19.text);
    } }
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent() {
            this.itemClick = new core.EventEmitter();
        }
        BreadcrumbComponent.prototype.onClick = function (item) {
            this.itemClick.next(item);
        };
        BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
        BreadcrumbComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["sx-ngx-fabric-breadcrumb"]], inputs: { items: "items" }, outputs: { itemClick: "itemClick" }, decls: 8, vars: 1, consts: [[1, "ms-Breadcrumb"], [1, "ms-Breadcrumb-overflow"], ["tabindex", "1", 1, "ms-Breadcrumb-overflowButton", "ms-Icon", "ms-Icon--ellipsis"], [1, "ms-Breadcrumb-chevron", "ms-Icon", "ms-Icon--ChevronRight"], [1, "ms-Breadcrumb-overflowMenu"], [1, "ms-ContextualMenu", "is-open"], [1, "ms-Breadcrumb-list"], ["class", "ms-Breadcrumb-listItem", 4, "ngFor", "ngForOf"], [1, "ms-Breadcrumb-listItem"], ["tabindex", "2", 1, "ms-Breadcrumb-itemLink", 3, "click"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "div", 1);
                core["ɵɵelement"](2, "div", 2);
                core["ɵɵelement"](3, "i", 3);
                core["ɵɵelementStart"](4, "div", 4);
                core["ɵɵelement"](5, "ul", 5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "ul", 6);
                core["ɵɵtemplate"](7, BreadcrumbComponent_li_7_Template, 4, 2, "li", 7);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](7);
                core["ɵɵproperty"]("ngForOf", ctx.items);
            } }, directives: [common.NgForOf], styles: [".ms-Breadcrumb[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow[_ngcontent-%COMP%]{display:none;position:relative}.ms-Breadcrumb-list[_ngcontent-%COMP%]{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list[_ngcontent-%COMP%]   .ms-Breadcrumb-listItem[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%]{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%], .ms-Breadcrumb-overflowButton[_ngcontent-%COMP%]{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron[_ngcontent-%COMP%]{font-size:12px;color:#666}.ms-Icon--ChevronRight[_ngcontent-%COMP%]:before{content:'\\E76C'}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%]:hover, .ms-Breadcrumb-overflowButton[_ngcontent-%COMP%]:hover{background-color:#f8f8f8;cursor:pointer}"] });
        return BreadcrumbComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BreadcrumbComponent, [{
            type: core.Component,
            args: [{
                    selector: "sx-ngx-fabric-breadcrumb",
                    templateUrl: "./breadcrumb.component.html",
                    styleUrls: ["./breadcrumb.component.scss"]
                }]
        }], function () { return []; }, { items: [{
                type: core.Input
            }], itemClick: [{
                type: core.Output
            }] }); })();

    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule.ɵmod = core["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
        BreadcrumbModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return BreadcrumbModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [BreadcrumbComponent], imports: [common.CommonModule], exports: [BreadcrumbComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BreadcrumbModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        BreadcrumbComponent
                    ],
                    exports: [
                        BreadcrumbComponent
                    ]
                }]
        }], null, null); })();

    var Guid = /** @class */ (function () {
        function Guid() {
        }
        Guid.uniqueid = function () {
            // always start with a letter (for DOM friendlyness)
            var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
            do {
                // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
                var ascicode = Math.floor((Math.random() * 42) + 48);
                if (ascicode < 58 || ascicode > 64) {
                    // exclude all chars between : (58) and @ (64)
                    idstr += String.fromCharCode(ascicode);
                }
            } while (idstr.length < 32);
            return (idstr);
        };
        return Guid;
    }());

    var _c0 = ["*"];
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent(changeDetectorRef) {
            this.changeDetectorRef = changeDetectorRef;
            this._checked = false;
            this.disabled = false;
            this.inputId = Guid.uniqueid();
            this._onChange = function (_) { };
            this._onTouched = function () { };
        }
        Object.defineProperty(CheckboxComponent.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (checked) {
                if (checked !== this.checked) {
                    this._checked = checked;
                    this.changeDetectorRef.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        CheckboxComponent.prototype.onInputClick = function (evt) {
            evt.stopPropagation();
            this.toggle();
        };
        CheckboxComponent.prototype.toggle = function () {
            this.checked = !this.checked;
            this._onChange(this.checked);
        };
        // ControlValueAccessor implementation
        CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.changeDetectorRef.markForCheck();
        };
        CheckboxComponent.prototype.writeValue = function (val) {
            this.checked = val;
        };
        CheckboxComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
        CheckboxComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
        CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        CheckboxComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["sx-ngx-fabric-checkbox"]], inputs: { checked: "checked", disabled: "disabled" }, features: [core["ɵɵProvidersFeature"]([{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }])], ngContentSelectors: _c0, decls: 4, vars: 8, consts: [["type", "checkbox", 3, "checked", "disabled", "click"], ["role", "checkbox"], [1, "ms-label"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "input", 0);
                core["ɵɵlistener"]("click", function CheckboxComponent_Template_input_click_0_listener($event) { return ctx.onInputClick($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](1, "label", 1);
                core["ɵɵelementStart"](2, "span", 2);
                core["ɵɵprojection"](3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
                core["ɵɵattribute"]("id", ctx.inputId);
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("is-checked", ctx.checked)("disabled", ctx.disabled);
                core["ɵɵattribute"]("for", ctx.inputId);
            } }, styles: ["[_nghost-%COMP%]{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}input[_ngcontent-%COMP%]{position:absolute;opacity:0}label[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}label[_ngcontent-%COMP%]:hover{color:#000}label[_ngcontent-%COMP%]:before{content:'';display:inline-block;border:1px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}label[_ngcontent-%COMP%]:hover:before{border:1px solid #333}label.disabled[_ngcontent-%COMP%]{color:#c8c8c8}label.disabled[_ngcontent-%COMP%]:before, label.disabled[_ngcontent-%COMP%]:hover:before{border:1px solid #c8c8c8}label.is-checked[_ngcontent-%COMP%]:before{border:10px solid #0078d4;background-color:#0078d4}label.is-checked[_ngcontent-%COMP%]:hover:before{border:10px solid #106ebe;background-color:#106ebe}label.disabled.is-checked[_ngcontent-%COMP%]:before, label.disabled.is-checked[_ngcontent-%COMP%]:hover:before{border:10px solid #c8c8c8;background-color:#c8c8c8}label[_ngcontent-%COMP%]:after{content:'\\E73E';font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}label.is-checked[_ngcontent-%COMP%]:after{display:block}.ms-label[_ngcontent-%COMP%]{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}"], changeDetection: 0 });
        return CheckboxComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CheckboxComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-ngx-fabric-checkbox',
                    templateUrl: './checkbox.component.html',
                    styleUrls: ['./checkbox.component.scss'],
                    providers: [{
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return CheckboxComponent; }),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { checked: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }] }); })();

    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        CheckboxModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CheckboxModule });
        CheckboxModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return CheckboxModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CheckboxModule, { declarations: [CheckboxComponent], imports: [common.CommonModule], exports: [CheckboxComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CheckboxModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        CheckboxComponent
                    ],
                    exports: [
                        CheckboxComponent
                    ]
                }]
        }], null, null); })();

    var _c0$1 = ["sx-ngx-fabric-button", ""];
    var _c1 = ["*"];
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.primary = false;
            this.classes = true;
        }
        Object.defineProperty(ButtonComponent.prototype, "classPrimary", {
            get: function () { return this.primary; },
            enumerable: true,
            configurable: true
        });
        ButtonComponent.prototype.ngOnInit = function () {
        };
        ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
        ButtonComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["button", "sx-ngx-fabric-button", ""], ["a", "sx-ngx-fabric-button", ""]], hostVars: 4, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("ms-Button", ctx.classes)("ms-Button--primary", ctx.classPrimary);
            } }, inputs: { primary: "primary" }, attrs: _c0$1, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "ms-Button-label"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵprojection"](1);
                core["ɵɵelementEnd"]();
            } }, styles: ["[_nghost-%COMP%]:hover{background-color:#eaeaea;border:1px solid #eaeaea}[_nghost-%COMP%], [_nghost-%COMP%]:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label[_ngcontent-%COMP%]{color:#333;font-weight:600;font-size:14px}.ms-Button--primary[_nghost-%COMP%]:hover{background-color:#005a9e;border-color:#005a9e}.ms-Button--primary[_nghost-%COMP%], .ms-Button--primary[_nghost-%COMP%]:active{background-color:#0078d4;border-color:#0078d4}.ms-Button--primary[_nghost-%COMP%]   .ms-Button-label[_ngcontent-%COMP%]{color:#fff}[disabled][_nghost-%COMP%], [disabled][_nghost-%COMP%]:active, [disabled][_nghost-%COMP%]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}[disabled][_nghost-%COMP%]   .ms-Button-label[_ngcontent-%COMP%]{color:#a6a6a6}"] });
        return ButtonComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ButtonComponent, [{
            type: core.Component,
            args: [{
                    selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                    styleUrls: ['./button.component.scss'],
                    templateUrl: './button.component.html',
                }]
        }], function () { return []; }, { primary: [{
                type: core.Input
            }], classes: [{
                type: core.HostBinding,
                args: ['class.ms-Button']
            }], classPrimary: [{
                type: core.HostBinding,
                args: ['class.ms-Button--primary']
            }] }); })();

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.ɵmod = core["ɵɵdefineNgModule"]({ type: ButtonModule });
        ButtonModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return ButtonModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [ButtonComponent], imports: [common.CommonModule], exports: [ButtonComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ButtonModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        ButtonComponent
                    ],
                    exports: [
                        ButtonComponent
                    ]
                }]
        }], null, null); })();

    function TextFieldComponent_input_2_Template(rf, ctx) { if (rf & 1) {
        var _r25 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input", 2);
        core["ɵɵlistener"]("blur", function TextFieldComponent_input_2_Template_input_blur_0_listener($event) { core["ɵɵrestoreView"](_r25); var ctx_r24 = core["ɵɵnextContext"](); return ctx_r24.onTouched($event); })("change", function TextFieldComponent_input_2_Template_input_change_0_listener($event) { core["ɵɵrestoreView"](_r25); var ctx_r26 = core["ɵɵnextContext"](); return ctx_r26.onChange($event); })("keyup", function TextFieldComponent_input_2_Template_input_keyup_0_listener($event) { core["ɵɵrestoreView"](_r25); var ctx_r27 = core["ɵɵnextContext"](); return ctx_r27.onChange($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r22 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("value", ctx_r22.value)("disabled", ctx_r22.disabled);
        core["ɵɵattribute"]("type", ctx_r22.type)("placeholder", ctx_r22.placeholder);
    } }
    function TextFieldComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
        var _r29 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "textarea", 2);
        core["ɵɵlistener"]("blur", function TextFieldComponent_textarea_3_Template_textarea_blur_0_listener($event) { core["ɵɵrestoreView"](_r29); var ctx_r28 = core["ɵɵnextContext"](); return ctx_r28.onTouched($event); })("change", function TextFieldComponent_textarea_3_Template_textarea_change_0_listener($event) { core["ɵɵrestoreView"](_r29); var ctx_r30 = core["ɵɵnextContext"](); return ctx_r30.onChange($event); })("keyup", function TextFieldComponent_textarea_3_Template_textarea_keyup_0_listener($event) { core["ɵɵrestoreView"](_r29); var ctx_r31 = core["ɵɵnextContext"](); return ctx_r31.onChange($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r23 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("value", ctx_r23.value)("disabled", ctx_r23.disabled);
        core["ɵɵattribute"]("type", ctx_r23.type)("placeholder", ctx_r23.placeholder)("rows", ctx_r23.rows);
    } }
    var TextFieldComponent = /** @class */ (function () {
        function TextFieldComponent(changeDetectorRef) {
            this.changeDetectorRef = changeDetectorRef;
            this.multiline = false;
            this.rows = 3;
            this.type = 'text';
            this.disabled = false;
            this.required = false;
            this.value = null;
            this.classes = 'ms-TextField';
            this._onChange = function (_) { };
            this._onTouched = function () { };
        }
        Object.defineProperty(TextFieldComponent.prototype, "classMultiline", {
            get: function () { return this.multiline; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextFieldComponent.prototype, "classIsDisabled", {
            get: function () { return this.disabled; },
            enumerable: true,
            configurable: true
        });
        TextFieldComponent.prototype.onChange = function (evt) {
            evt.stopPropagation();
            this.value = evt.target.value;
            this._onChange(this.value);
        };
        TextFieldComponent.prototype.onTouched = function (evt) {
            this._onTouched();
        };
        // ControlValueAccessor implementation
        TextFieldComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.changeDetectorRef.markForCheck();
        };
        TextFieldComponent.prototype.writeValue = function (val) {
            this.value = val;
            this.changeDetectorRef.markForCheck();
        };
        TextFieldComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
        TextFieldComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
        TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        TextFieldComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["sx-ngx-fabric-text-field"]], hostVars: 6, hostBindings: function TextFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassMap"](ctx.classes);
                core["ɵɵclassProp"]("ms-TextField--multiline", ctx.classMultiline)("is-disabled", ctx.classIsDisabled);
            } }, inputs: { label: "label", multiline: "multiline", rows: "rows", type: "type", placeholder: "placeholder", disabled: "disabled", required: "required" }, features: [core["ɵɵProvidersFeature"]([{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TextFieldComponent; }),
                        multi: true
                    }])], decls: 4, vars: 5, consts: [[1, "ms-Label"], ["class", "ms-TextField-field", 3, "value", "disabled", "blur", "change", "keyup", 4, "ngIf"], [1, "ms-TextField-field", 3, "value", "disabled", "blur", "change", "keyup"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "label", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](2, TextFieldComponent_input_2_Template, 1, 4, "input", 1);
                core["ɵɵtemplate"](3, TextFieldComponent_textarea_3_Template, 1, 5, "textarea", 1);
            } if (rf & 2) {
                core["ɵɵclassProp"]("is-required", ctx.required);
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate"](ctx.label);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", !ctx.multiline);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.multiline);
            } }, directives: [common.NgIf], styles: [".ms-TextField[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;width:100%}.ms-Label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.ms-TextField-field[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:6px 12px 7px;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}.ms-TextField.ms-TextField--multiline[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{color:#333;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}.ms-TextField.is-disabled[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field[_ngcontent-%COMP%]:hover{border-color:#333}.ms-TextField-field[_ngcontent-%COMP%]:active, .ms-TextField-field[_ngcontent-%COMP%]:focus{border-color:#0078d4}.ms-TextField.ng-invalid.ng-touched[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{border-color:#a80000}"], changeDetection: 0 });
        return TextFieldComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextFieldComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-ngx-fabric-text-field',
                    templateUrl: './text-field.component.html',
                    styleUrls: ['./text-field.component.scss'],
                    providers: [{
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return TextFieldComponent; }),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { label: [{
                type: core.Input
            }], multiline: [{
                type: core.Input
            }], rows: [{
                type: core.Input
            }], type: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], required: [{
                type: core.Input
            }], classes: [{
                type: core.HostBinding,
                args: ['class']
            }], classMultiline: [{
                type: core.HostBinding,
                args: ['class.ms-TextField--multiline']
            }], classIsDisabled: [{
                type: core.HostBinding,
                args: ['class.is-disabled']
            }] }); })();

    var TextFieldModule = /** @class */ (function () {
        function TextFieldModule() {
        }
        TextFieldModule.ɵmod = core["ɵɵdefineNgModule"]({ type: TextFieldModule });
        TextFieldModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function TextFieldModule_Factory(t) { return new (t || TextFieldModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return TextFieldModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](TextFieldModule, { declarations: [TextFieldComponent], imports: [common.CommonModule], exports: [TextFieldComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextFieldModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        TextFieldComponent
                    ],
                    exports: [
                        TextFieldComponent
                    ]
                }]
        }], null, null); })();

    var _c0$2 = ["portalOutlet"];
    function SxNgxDialogContainerComponent_ng_template_0_Template(rf, ctx) { }
    var SxNgxDialogContainerComponent = /** @class */ (function (_super) {
        __extends(SxNgxDialogContainerComponent, _super);
        function SxNgxDialogContainerComponent(_elementRef, 
        // private _focusTrapFactory: FocusTrapFactory,
        _changeDetectorRef, _document) {
            var _this = _super.call(this) || this;
            _this._elementRef = _elementRef;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._document = _document;
            return _this;
        }
        SxNgxDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
            // if (this._portalOutlet.hasAttached()) {
            //   throw new Error('Has already attached')
            // }
            return this._portalOutlet.attachComponentPortal(portal);
        };
        SxNgxDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
            throw new Error('Method not implemented.');
        };
        SxNgxDialogContainerComponent.ɵfac = function SxNgxDialogContainerComponent_Factory(t) { return new (t || SxNgxDialogContainerComponent)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](common.DOCUMENT, 8)); };
        SxNgxDialogContainerComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SxNgxDialogContainerComponent, selectors: [["sx-ngx-fabric-dialog-container"]], viewQuery: function SxNgxDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$2, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
            } }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["cdkPortalOutlet", ""], ["portalOutlet", "cdkPortalOutlet"]], template: function SxNgxDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SxNgxDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0, 1, core["ɵɵtemplateRefExtractor"]);
            } }, directives: [portal.CdkPortalOutlet], encapsulation: 2 });
        return SxNgxDialogContainerComponent;
    }(portal.BasePortalOutlet));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxDialogContainerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-ngx-fabric-dialog-container',
                    templateUrl: './dialog-container.component.html'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, { _portalOutlet: [{
                type: core.ViewChild,
                args: ['portalOutlet', { static: true }]
            }] }); })();

    var SxNgxFabricDialogRef = /** @class */ (function () {
        function SxNgxFabricDialogRef(overlayRef) {
            this.overlayRef = overlayRef;
            this._beforeClose = new rxjs.Subject();
            this._afterClosed = new rxjs.Subject();
        }
        SxNgxFabricDialogRef.prototype.close = function (value) {
            this.overlayRef.dispose();
            this._afterClosed.next(value);
            this._afterClosed.complete();
            this.componentInstance = null;
            // this.componentInstance.animationStateChanged
            //   .filter(event => event.phaseName === 'start')
            //   .take(1)
            //   .subscribe(() => {
            //     this._beforeClose.next();
            //     this._beforeClose.complete();
            //     this.overlayRef.detachBackdrop();
            //   });
            // this.componentInstance.animationStateChanged
            //   .filter(event => event.phaseName === 'done' && event.toState === 'leave')
            //   .take(1)
            //   .subscribe(() => {
            //     this.overlayRef.dispose();
            //     this._afterClosed.next();
            //     this._afterClosed.complete();
            //     this.componentInstance = null;
            //   });
            // this.componentInstance.startExitAnimation();
        };
        SxNgxFabricDialogRef.prototype.afterClosed = function () {
            return this._afterClosed.asObservable();
        };
        SxNgxFabricDialogRef.prototype.beforeClose = function () {
            return this._beforeClose.asObservable();
        };
        return SxNgxFabricDialogRef;
    }());

    var SX_NGX_FABRIC_DIALOG_DATA = new core.InjectionToken('SX_NGX_FABRIC_DIALOG_DATA');

    var DEFAULT_CONFIG = {
        hasBackdrop: true,
        backdropClass: 'ms-Overlay--dark',
        panelClass: 'tm-file-preview-dialog-panel',
        minWidth: '250px',
        maxWidth: '80vw',
        minHeight: '100px',
        maxHeight: '80vh'
    };
    var SxNgxFabricDialogService = /** @class */ (function () {
        function SxNgxFabricDialogService(injector, overlay) {
            this.injector = injector;
            this.overlay = overlay;
        }
        SxNgxFabricDialogService.prototype.open = function (component, config) {
            if (config === void 0) { config = {}; }
            // Override default configuration
            var dialogConfig = __assign(__assign({}, DEFAULT_CONFIG), config);
            // Returns an OverlayRef which is a PortalHost
            var overlayRef = this.createOverlay(dialogConfig);
            var dialogContainer = this._attachDialogContainer(overlayRef, config);
            // Instantiate remote control
            var dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
            overlayRef.backdropClick().subscribe(function (_) { return dialogRef.close(); });
            return dialogRef;
        };
        SxNgxFabricDialogService.prototype.createOverlay = function (config) {
            var overlayConfig = this.getOverlayConfig(config);
            return this.overlay.create(overlayConfig);
        };
        SxNgxFabricDialogService.prototype.getOverlayConfig = function (config) {
            var positionStrategy = this.overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically();
            var overlayConfig = new overlay.OverlayConfig({
                hasBackdrop: config.hasBackdrop,
                backdropClass: config.backdropClass,
                panelClass: config.panelClass,
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: positionStrategy,
                minWidth: config.minWidth,
                maxWidth: config.maxWidth,
                minHeight: config.minHeight,
                maxHeight: config.maxHeight
            });
            return overlayConfig;
        };
        SxNgxFabricDialogService.prototype.attachDialogContainer = function (component, overlayRef, config, dialogRef) {
            var injector = this.createInjector(config, dialogRef);
            var containerPortal = new portal.ComponentPortal(component, null, injector);
            var containerRef = overlayRef.attach(containerPortal);
            return containerRef.instance;
        };
        SxNgxFabricDialogService.prototype._attachDialogContainer = function (overlay, config) {
            var containerPortal = new portal.ComponentPortal(SxNgxDialogContainerComponent, null);
            var containerRef = overlay.attach(containerPortal);
            containerRef.instance._config = config;
            return containerRef.instance;
        };
        SxNgxFabricDialogService.prototype._attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = new SxNgxFabricDialogRef(overlayRef);
            // When the dialog backdrop is clicked, we want to close it.
            if (config.hasBackdrop) {
                overlayRef.backdropClick().subscribe(function () {
                    // if (!dialogRef.disableClose) {
                    dialogRef.close();
                    // }
                });
            }
            // Close when escape keydown event occurs
            // overlayRef.keydownEvents().pipe(
            //   filter(event => event.keyCode === ESCAPE && !dialogRef.disableClose)
            // ).subscribe(() => dialogRef.close());
            if (componentOrTemplateRef instanceof core.TemplateRef) {
                dialogContainer.attachTemplatePortal(new portal.TemplatePortal(componentOrTemplateRef, null, { $implicit: config.data, dialogRef: dialogRef }));
            }
            else {
                var injector = this.createInjector(config, dialogRef);
                var contentRef = dialogContainer.attachComponentPortal(new portal.ComponentPortal(componentOrTemplateRef, undefined, injector));
                dialogRef.componentInstance = contentRef.instance;
            }
            // dialogRef
            //   .updateSize(config.width, config.height)
            //   .updatePosition(config.position);
            return dialogRef;
        };
        SxNgxFabricDialogService.prototype.createInjector = function (config, dialogRef) {
            var injectionTokens = new WeakMap();
            injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
            injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);
            return new portal.PortalInjector(this.injector, injectionTokens);
        };
        SxNgxFabricDialogService.ɵfac = function SxNgxFabricDialogService_Factory(t) { return new (t || SxNgxFabricDialogService)(core["ɵɵinject"](core.Injector), core["ɵɵinject"](overlay.Overlay)); };
        SxNgxFabricDialogService.ɵprov = core["ɵɵdefineInjectable"]({ token: SxNgxFabricDialogService, factory: SxNgxFabricDialogService.ɵfac });
        return SxNgxFabricDialogService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricDialogService, [{
            type: core.Injectable
        }], function () { return [{ type: core.Injector }, { type: overlay.Overlay }]; }, null); })();

    /** Counter used to generate unique IDs for dialog elements. */
    var dialogElementUid = 0;
    /**
     * Button that will close the current dialog.
     */
    var SxNgxFabricDialogClose = /** @class */ (function () {
        function SxNgxFabricDialogClose(dialogRef) {
            this.dialogRef = dialogRef;
            /** Screenreader label for the button. */
            this.ariaLabel = 'Close dialog';
        }
        SxNgxFabricDialogClose.prototype.ngOnChanges = function (changes) {
            var proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
            if (proxiedChange) {
                this.dialogResult = proxiedChange.currentValue;
            }
        };
        SxNgxFabricDialogClose.ɵfac = function SxNgxFabricDialogClose_Factory(t) { return new (t || SxNgxFabricDialogClose)(core["ɵɵdirectiveInject"](SxNgxFabricDialogRef)); };
        SxNgxFabricDialogClose.ɵdir = core["ɵɵdefineDirective"]({ type: SxNgxFabricDialogClose, selectors: [["button", "sx-ngx-fabric-dialog-close", ""], ["button", "sxNgxFabricDialogClose", ""]], hostAttrs: ["type", "button"], hostVars: 1, hostBindings: function SxNgxFabricDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SxNgxFabricDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
            } if (rf & 2) {
                core["ɵɵattribute"]("aria-label", ctx.ariaLabel);
            } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], dialogResult: ["sx-ngx-fabric-dialog-close", "dialogResult"], dialogClose: ["sxNgxFabricDialogClose", "dialogClose"] }, exportAs: ["sxNgxFabricDialogClose"], features: [core["ɵɵNgOnChangesFeature"]] });
        return SxNgxFabricDialogClose;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricDialogClose, [{
            type: core.Directive,
            args: [{
                    selector: "button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]",
                    exportAs: 'sxNgxFabricDialogClose',
                    host: {
                        '(click)': 'dialogRef.close(dialogResult)',
                        '[attr.aria-label]': 'ariaLabel',
                        'type': 'button',
                    }
                }]
        }], function () { return [{ type: SxNgxFabricDialogRef }]; }, { ariaLabel: [{
                type: core.Input,
                args: ['aria-label']
            }], dialogResult: [{
                type: core.Input,
                args: ['sx-ngx-fabric-dialog-close']
            }], dialogClose: [{
                type: core.Input,
                args: ['sxNgxFabricDialogClose']
            }] }); })();
    /**
     * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
     */
    var SxNgxFabricDialogTitle = /** @class */ (function () {
        function SxNgxFabricDialogTitle(_container) {
            this._container = _container;
            this.id = "sx-ngx-fabric-dialog-title-" + dialogElementUid++;
        }
        SxNgxFabricDialogTitle.ɵfac = function SxNgxFabricDialogTitle_Factory(t) { return new (t || SxNgxFabricDialogTitle)(core["ɵɵdirectiveInject"](SxNgxDialogContainerComponent, 8)); };
        SxNgxFabricDialogTitle.ɵdir = core["ɵɵdefineDirective"]({ type: SxNgxFabricDialogTitle, selectors: [["", "sx-ngx-fabric-dialog-title", ""], ["", "sxNgxFabricDialogTitle", ""]], hostAttrs: [1, "ms-Dialog-title"], hostVars: 1, hostBindings: function SxNgxFabricDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵhostProperty"]("id", ctx.id);
            } }, inputs: { id: "id" }, exportAs: ["sxNgxFabricDialogTitle"] });
        return SxNgxFabricDialogTitle;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricDialogTitle, [{
            type: core.Directive,
            args: [{
                    selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
                    exportAs: 'sxNgxFabricDialogTitle',
                    host: {
                        'class': 'ms-Dialog-title',
                        '[id]': 'id',
                    },
                }]
        }], function () { return [{ type: SxNgxDialogContainerComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { id: [{
                type: core.Input
            }] }); })();
    /**
     * Scrollable content container of a dialog.
     */
    var SxNgxFabricDialogContent = /** @class */ (function () {
        function SxNgxFabricDialogContent() {
        }
        SxNgxFabricDialogContent.ɵfac = function SxNgxFabricDialogContent_Factory(t) { return new (t || SxNgxFabricDialogContent)(); };
        SxNgxFabricDialogContent.ɵdir = core["ɵɵdefineDirective"]({ type: SxNgxFabricDialogContent, selectors: [["", "sx-ngx-fabric-dialog-content", ""], ["sx-ngx-fabric-dialog-content"], ["", "sxNgxFabricDialogContent", ""]], hostAttrs: [1, "ms-Dialog-content"] });
        return SxNgxFabricDialogContent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricDialogContent, [{
            type: core.Directive,
            args: [{
                    selector: "[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]",
                    host: { 'class': 'ms-Dialog-content' }
                }]
        }], null, null); })();
    /**
     * Container for the bottom action buttons in a dialog.
     * Stays fixed to the bottom when scrolling.
     */
    var SxNgxFabricDialogActions = /** @class */ (function () {
        function SxNgxFabricDialogActions() {
        }
        SxNgxFabricDialogActions.ɵfac = function SxNgxFabricDialogActions_Factory(t) { return new (t || SxNgxFabricDialogActions)(); };
        SxNgxFabricDialogActions.ɵdir = core["ɵɵdefineDirective"]({ type: SxNgxFabricDialogActions, selectors: [["", "sx-ngx-fabric-dialog-actions", ""], ["sx-ngx-fabric-dialog-actions"], ["", "sxNgxFabricDialogActions", ""]], hostAttrs: [1, "ms-Dialog-actions"] });
        return SxNgxFabricDialogActions;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricDialogActions, [{
            type: core.Directive,
            args: [{
                    selector: "[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]",
                    host: { 'class': 'ms-Dialog-actions' }
                }]
        }], null, null); })();

    var DialogModule = /** @class */ (function () {
        function DialogModule() {
        }
        DialogModule.forRoot = function () {
            return {
                ngModule: DialogModule,
                providers: [SxNgxFabricDialogService]
            };
        };
        DialogModule.ɵmod = core["ɵɵdefineNgModule"]({ type: DialogModule });
        DialogModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, providers: [SxNgxFabricDialogService], imports: [[common.CommonModule, overlay.OverlayModule, portal.PortalModule]] });
        return DialogModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](DialogModule, { declarations: [SxNgxDialogContainerComponent,
            SxNgxFabricDialogClose,
            SxNgxFabricDialogTitle,
            SxNgxFabricDialogContent,
            SxNgxFabricDialogActions], imports: [common.CommonModule, overlay.OverlayModule, portal.PortalModule], exports: [SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent, SxNgxFabricDialogActions] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DialogModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, overlay.OverlayModule, portal.PortalModule],
                    declarations: [
                        SxNgxDialogContainerComponent,
                        SxNgxFabricDialogClose,
                        SxNgxFabricDialogTitle,
                        SxNgxFabricDialogContent,
                        SxNgxFabricDialogActions
                    ],
                    entryComponents: [SxNgxDialogContainerComponent],
                    exports: [SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent, SxNgxFabricDialogActions],
                    providers: [SxNgxFabricDialogService]
                }]
        }], null, null); })();

    var _c0$3 = ["*"];
    var ToggleComponent = /** @class */ (function () {
        function ToggleComponent(changeDetectorRef) {
            this.changeDetectorRef = changeDetectorRef;
            this._checked = false;
            this.disabled = false;
            this.offText = 'Off';
            this.onText = 'On';
            this.textLeft = false;
            this.inputId = Guid.uniqueid();
            this._onChange = function (_) { };
            this._onTouched = function () { };
        }
        Object.defineProperty(ToggleComponent.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (checked) {
                if (checked !== this.checked) {
                    this._checked = checked;
                    this.changeDetectorRef.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ToggleComponent.prototype, "classIsDisabled", {
            get: function () { return this.disabled; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ToggleComponent.prototype, "classTextLeft", {
            get: function () { return this.textLeft; },
            enumerable: true,
            configurable: true
        });
        ToggleComponent.prototype.onInputClick = function (evt) {
            evt.stopPropagation();
            this.toggle();
        };
        ToggleComponent.prototype.toggle = function () {
            this.checked = !this.checked;
            this._onChange(this.checked);
        };
        // ControlValueAccessor implementation
        ToggleComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.changeDetectorRef.markForCheck();
        };
        ToggleComponent.prototype.writeValue = function (val) {
            this.checked = val;
        };
        ToggleComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
        ToggleComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
        ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        ToggleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["sx-ngx-fabric-toggle"]], hostAttrs: [1, "ms-Toggle"], hostVars: 4, hostBindings: function ToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("is-disabled", ctx.classIsDisabled)("ms-Toggle--textLeft", ctx.classTextLeft);
            } }, inputs: { checked: "checked", disabled: "disabled", offText: "offText", onText: "onText", textLeft: "textLeft" }, features: [core["ɵɵProvidersFeature"]([{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return ToggleComponent; }),
                        multi: true
                    }])], ngContentSelectors: _c0$3, decls: 8, vars: 8, consts: [[1, "ms-Toggle-description"], ["type", "checkbox", 1, "ms-Toggle-input", 3, "checked", "disabled", "click"], [1, "ms-Toggle-field"], [1, "ms-Label", "ms-Label--off"], [1, "ms-Label", "ms-Label--on"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵprojection"](1);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "input", 1);
                core["ɵɵlistener"]("click", function ToggleComponent_Template_input_click_2_listener($event) { return ctx.onInputClick($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](3, "label", 2);
                core["ɵɵelementStart"](4, "span", 3);
                core["ɵɵtext"](5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "span", 4);
                core["ɵɵtext"](7);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
                core["ɵɵattribute"]("id", ctx.inputId);
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("is-selected", ctx.checked);
                core["ɵɵattribute"]("for", ctx.inputId);
                core["ɵɵadvance"](2);
                core["ɵɵtextInterpolate"](ctx.offText);
                core["ɵɵadvance"](2);
                core["ɵɵtextInterpolate"](ctx.onText);
            } }, styles: [".ms-Toggle[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;position:relative;display:block}.ms-Toggle-description[_ngcontent-%COMP%]{color:#333;box-sizing:border-box;box-shadow:none;display:block;word-wrap:break-word;overflow-wrap:break-word;margin:0;padding:5px 0}.ms-Toggle-input[_ngcontent-%COMP%]{display:none}.ms-Toggle-field[_ngcontent-%COMP%]{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:1px solid #a6a6a6;border-radius:20px;cursor:pointer;-webkit-transition:.1s;transition:.1s;outline:0}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{position:absolute;top:4px;width:10px;height:10px;border-radius:10px;content:'';left:4px;background-color:#333;outline:transparent solid 1px;-webkit-transition:.1s;transition:.1s}.ms-Toggle[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{position:relative;padding:0 0 0 50px}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#0078d4;border-color:#0078d4}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:focus, .ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:hover{background-color:#106ebe;border-color:#106ebe}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:before{background-color:#fff;left:28px}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#c8c8c8}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{background-color:#fff}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#a6a6a6}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{margin-right:24px}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-description[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}"], changeDetection: 0 });
        return ToggleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ToggleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-ngx-fabric-toggle',
                    templateUrl: './toggle.component.html',
                    styleUrls: ['./toggle.component.scss'],
                    providers: [{
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return ToggleComponent; }),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'ms-Toggle'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { checked: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], offText: [{
                type: core.Input
            }], onText: [{
                type: core.Input
            }], textLeft: [{
                type: core.Input
            }], classIsDisabled: [{
                type: core.HostBinding,
                args: ['class.is-disabled']
            }], classTextLeft: [{
                type: core.HostBinding,
                args: ['class.ms-Toggle--textLeft']
            }] }); })();

    var ToggleModule = /** @class */ (function () {
        function ToggleModule() {
        }
        ToggleModule.ɵmod = core["ɵɵdefineNgModule"]({ type: ToggleModule });
        ToggleModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function ToggleModule_Factory(t) { return new (t || ToggleModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return ToggleModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](ToggleModule, { declarations: [ToggleComponent], imports: [common.CommonModule], exports: [ToggleComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ToggleModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        ToggleComponent
                    ],
                    exports: [
                        ToggleComponent
                    ]
                }]
        }], null, null); })();

    var _c0$4 = ["beak"];
    function CalloutComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "div", 1);
        core["ɵɵelementStart"](2, "div", 2);
        core["ɵɵelementStart"](3, "div", 3);
        core["ɵɵelementStart"](4, "div", 4);
        core["ɵɵelementStart"](5, "p", 5);
        core["ɵɵprojection"](6);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](7, "div", 6);
        core["ɵɵelementStart"](8, "div", 7);
        core["ɵɵelementStart"](9, "p", 8);
        core["ɵɵprojection"](10, 1);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](11, "div", 9);
        core["ɵɵprojection"](12, 2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵprojection"](13, 3);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](14, "div", 10, 11);
        core["ɵɵelementEnd"]();
    } }
    var _c1$1 = [[["", "sxNgxFabricCalloutHeader", ""]], [["", "sxNgxFabricCalloutContent", ""]], [["", "sxNgxFabricCalloutActions", ""]], "*"];
    var _c2 = ["[sxNgxFabricCalloutHeader]", "[sxNgxFabricCalloutContent]", "[sxNgxFabricCalloutActions]", "*"];
    var CalloutComponent = /** @class */ (function () {
        function CalloutComponent(elementRef) {
            this.elementRef = elementRef;
            this.closed = new core.EventEmitter();
        }
        Object.defineProperty(CalloutComponent.prototype, "beakPosition", {
            get: function () { return this._beakPosition; },
            set: function (val) {
                this._beakPosition = val;
                this.updateBeakPosition();
            },
            enumerable: true,
            configurable: true
        });
        CalloutComponent.prototype.updateBeakPosition = function () {
            if (this.beakPosition) {
                this.beak.nativeElement.style.top = this.beakPosition.top;
                this.beak.nativeElement.style.left = this.beakPosition.left;
                this.beak.nativeElement.style.right = this.beakPosition.right;
                this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
            }
        };
        CalloutComponent.ɵfac = function CalloutComponent_Factory(t) { return new (t || CalloutComponent)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        CalloutComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CalloutComponent, selectors: [["sx-ngx-fabric-callout"]], viewQuery: function CalloutComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](core.TemplateRef, true);
                core["ɵɵviewQuery"](_c0$4, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.beak = _t.first);
            } }, inputs: { xPosition: "xPosition", yPosition: "yPosition" }, outputs: { closed: "closed" }, ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ms-ContextualHost", "is-positioned", "ms-ContextualHost--arrowLeft"], [1, "ms-ContextualHost-main"], [1, "ms-Callout"], [1, "ms-Callout-main"], [1, "ms-Callout-header"], [1, "ms-Callout-title"], [1, "ms-Callout-inner"], [1, "ms-Callout-content"], [1, "ms-Callout-subText"], [1, "ms-Callout-actions"], [1, "ms-ContextualHost-beak"], ["beak", ""]], template: function CalloutComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"](_c1$1);
                core["ɵɵtemplate"](0, CalloutComponent_ng_template_0_Template, 16, 0, "ng-template");
            } }, styles: [".ms-ContextualHost[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main[_ngcontent-%COMP%]{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header[_ngcontent-%COMP%]{z-index:105;padding:24px 28px 12px}.ms-Callout-title[_ngcontent-%COMP%]{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner[_ngcontent-%COMP%]{height:100%;padding:0 28px 12px}.ms-Callout-subText[_ngcontent-%COMP%]{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions[_ngcontent-%COMP%]{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak[_ngcontent-%COMP%]{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"] });
        return CalloutComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CalloutComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-ngx-fabric-callout',
                    templateUrl: './callout.component.html',
                    styleUrls: ['./callout.component.scss']
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { xPosition: [{
                type: core.Input
            }], yPosition: [{
                type: core.Input
            }], templateRef: [{
                type: core.ViewChild,
                args: [core.TemplateRef, { static: true }]
            }], beak: [{
                type: core.ViewChild,
                args: ['beak']
            }], closed: [{
                type: core.Output
            }] }); })();

    var CalloutTriggerDirective = /** @class */ (function () {
        function CalloutTriggerDirective(_overlay, _element, _viewContainerRef) {
            this._overlay = _overlay;
            this._element = _element;
            this._viewContainerRef = _viewContainerRef;
            this._overlayRef = null;
            this._calloutOpen = false;
            this._closeSubscription = rxjs.Subscription.EMPTY;
            this._positionSubscription = rxjs.Subscription.EMPTY;
        }
        Object.defineProperty(CalloutTriggerDirective.prototype, "sxNgxFabricCalloutTrigger", {
            get: function () {
                return this.callout;
            },
            set: function (val) {
                this.callout = val;
            },
            enumerable: true,
            configurable: true
        });
        CalloutTriggerDirective.prototype.ngOnDestroy = function () {
            this._closeSubscription.unsubscribe();
            this._positionSubscription.unsubscribe();
        };
        CalloutTriggerDirective.prototype.openCallout = function () {
            var _this = this;
            if (!this._calloutOpen) {
                this._createOverlay().attach(this._portal);
                setTimeout(function () {
                    _this.callout.updateBeakPosition();
                });
            }
        };
        CalloutTriggerDirective.prototype.closeMenu = function () {
            this.callout.closed.emit();
        };
        CalloutTriggerDirective.prototype._handleClick = function () {
            this.openCallout();
        };
        CalloutTriggerDirective.prototype._createOverlay = function () {
            var _this = this;
            if (!this._overlayRef) {
                this._portal = new portal.TemplatePortal(this.callout.templateRef, this._viewContainerRef);
                var config = this._getOverlayConfig();
                this._overlayRef = this._overlay.create(config);
                this._closeSubscription = this._overlayRef.backdropClick().subscribe(function (_) {
                    _this._overlayRef.detach();
                });
            }
            return this._overlayRef;
        };
        CalloutTriggerDirective.prototype._getOverlayConfig = function () {
            var position = this._getPosition();
            this._subscribeToPositions(position);
            return new overlay.OverlayConfig({
                hasBackdrop: true,
                positionStrategy: position,
                scrollStrategy: this._overlay.scrollStrategies.reposition()
            });
        };
        CalloutTriggerDirective.prototype._getPosition = function () {
            var _a = __read(this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], originFallbackX = _a[1];
            var _b = __read(this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], 2), overlayY = _b[0], overlayFallbackY = _b[1];
            var _c = __read([overlayY, overlayFallbackY], 2), originY = _c[0], originFallbackY = _c[1];
            var _d = __read([originX, originFallbackX], 2), overlayX = _d[0], overlayFallbackX = _d[1];
            var offsetY = 0;
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
            return this._overlay
                .position()
                .connectedTo(this._element, { originX: originX, originY: originY }, { overlayX: overlayX, overlayY: overlayY })
                .withOffsetY(offsetY)
                .withFallbackPosition({ originX: originFallbackX, originY: originY }, { overlayX: overlayFallbackX, overlayY: overlayY })
                .withFallbackPosition({ originX: originX, originY: originFallbackY }, { overlayX: overlayX, overlayY: overlayFallbackY }, undefined, -offsetY)
                .withFallbackPosition({ originX: originFallbackX, originY: originFallbackY }, { overlayX: overlayFallbackX, overlayY: overlayFallbackY }, undefined, -offsetY);
        };
        CalloutTriggerDirective.prototype._subscribeToPositions = function (position) {
            var _this = this;
            this._positionSubscription = position.onPositionChange.pipe(operators.distinctUntilChanged(null, function (x) { return x.connectionPair; })).subscribe(function (pos) {
                var isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
                var isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
                var triggerMiddle = _this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;
                _this.callout.beakPosition = {
                    top: isCalloutUnderTrigger ? '-6px' : null,
                    bottom: !isCalloutUnderTrigger ? '-6px' : null,
                    left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
                    right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
                };
            });
        };
        CalloutTriggerDirective.ɵfac = function CalloutTriggerDirective_Factory(t) { return new (t || CalloutTriggerDirective)(core["ɵɵdirectiveInject"](overlay.Overlay), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ViewContainerRef)); };
        CalloutTriggerDirective.ɵdir = core["ɵɵdefineDirective"]({ type: CalloutTriggerDirective, selectors: [["", "sxNgxFabricCalloutTrigger", ""]], hostAttrs: ["aria-haspopup", "true"], hostBindings: function CalloutTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function CalloutTriggerDirective_click_HostBindingHandler($event) { return ctx._handleClick($event); });
            } }, inputs: { sxNgxFabricCalloutTrigger: "sxNgxFabricCalloutTrigger" }, exportAs: ["sxNgxFabricCalloutTrigger"] });
        return CalloutTriggerDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CalloutTriggerDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[sxNgxFabricCalloutTrigger]',
                    host: {
                        'aria-haspopup': 'true',
                        '(click)': '_handleClick($event)'
                    },
                    exportAs: 'sxNgxFabricCalloutTrigger'
                }]
        }], function () { return [{ type: overlay.Overlay }, { type: core.ElementRef }, { type: core.ViewContainerRef }]; }, { sxNgxFabricCalloutTrigger: [{
                type: core.Input
            }] }); })();

    var CalloutModule = /** @class */ (function () {
        function CalloutModule() {
        }
        CalloutModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CalloutModule });
        CalloutModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CalloutModule_Factory(t) { return new (t || CalloutModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return CalloutModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CalloutModule, { declarations: [CalloutComponent,
            CalloutTriggerDirective], imports: [common.CommonModule], exports: [CalloutComponent,
            CalloutTriggerDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CalloutModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        CalloutComponent,
                        CalloutTriggerDirective
                    ],
                    exports: [
                        CalloutComponent,
                        CalloutTriggerDirective
                    ]
                }]
        }], null, null); })();

    var NavComponent = /** @class */ (function () {
        function NavComponent() {
        }
        NavComponent.prototype.ngOnInit = function () {
        };
        NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
        NavComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["sx-ngx-fabric-nav"]], decls: 30, vars: 0, consts: [[1, "ms-Nav-group", "group", "is-expanded", "groupIsExpanded"], [1, "ms-Nav-groupContent", "groupContent"], ["role", "list", 1, "navItems"], ["role", "listitem", 1, "navItem"], ["name", "Home", 1, "ms-Nav-compositeLink", "compositeLink", "is-expanded", "compositeLinkIsExpanded"], ["aria-expanded", "true", "tabindex", "0", 1, "ms-Nav-chevronButton", "ms-Nav-chevronButton--link", "chevronButton", "chevronButtonLink"], ["role", "presentation", "aria-hidden", "true", "data-icon-name", "ChevronDown", 1, "ms-Icon", "ms-Nav-chevron", "chevronIcon"], ["href", "http://example.com", "title", "Home", "tabindex", "-1", 1, "ms-Nav-linkButton", "link", "isOnExpanded", "ms-Button", "ms-Button--action", "ms-Button--command"], [1, "ms-Button-flexContainer"], ["role", "presentation", "aria-hidden", "true", 1, "ms-Icon", "ms-Icon-placeHolder", "ms-Button-icon"], [1, "ms-Button-textContainer"], [1, "ms-Nav-linkText", "linkText"], ["name", "Activity", 1, "ms-Nav-compositeLink", "compositeLink"], ["href", "http://msn.com", "title", "Activity", "data-is-focusable", "true", "tabindex", "-1", 1, "ms-Nav-linkButton", "link", "isOnExpanded", "ms-Button", "ms-Button--action", "ms-Button--command"], ["name", "Documents", 1, "ms-Nav-compositeLink", "compositeLink", "is-expanded", "is-selected", "compositeLinkIsExpanded", "compositeLinkIsSelected"], ["href", "http://example.com", "title", "Documents", "data-is-focusable", "true", "tabindex", "-1", 1, "ms-Nav-linkButton", "link", "isOnExpanded", "ms-Button", "ms-Button--action", "ms-Button--command"], [1, "ms-Nav-linkText"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "div", 1);
                core["ɵɵelementStart"](2, "ul", 2);
                core["ɵɵelementStart"](3, "li", 3);
                core["ɵɵelementStart"](4, "div", 4);
                core["ɵɵelementStart"](5, "button", 5);
                core["ɵɵelement"](6, "i", 6);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](7, "a", 7);
                core["ɵɵelementStart"](8, "div", 8);
                core["ɵɵelement"](9, "i", 9);
                core["ɵɵelement"](10, "div", 10);
                core["ɵɵelementStart"](11, "div", 11);
                core["ɵɵtext"](12, "Home");
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](13, "ul", 2);
                core["ɵɵelementStart"](14, "li", 3);
                core["ɵɵelementStart"](15, "div", 12);
                core["ɵɵelementStart"](16, "a", 13);
                core["ɵɵelementStart"](17, "div", 8);
                core["ɵɵelement"](18, "i", 9);
                core["ɵɵelement"](19, "div", 10);
                core["ɵɵelementStart"](20, "div", 11);
                core["ɵɵtext"](21, "Activity");
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](22, "li", 3);
                core["ɵɵelementStart"](23, "div", 14);
                core["ɵɵelementStart"](24, "a", 15);
                core["ɵɵelementStart"](25, "div", 8);
                core["ɵɵelement"](26, "i", 9);
                core["ɵɵelement"](27, "div", 10);
                core["ɵɵelementStart"](28, "div", 16);
                core["ɵɵtext"](29, "Documents");
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } }, styles: [""] });
        return NavComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NavComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sx-ngx-fabric-nav',
                    templateUrl: './nav.component.html',
                    styleUrls: ['./nav.component.scss']
                }]
        }], function () { return []; }, null); })();

    var NavModule = /** @class */ (function () {
        function NavModule() {
        }
        NavModule.ɵmod = core["ɵɵdefineNgModule"]({ type: NavModule });
        NavModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function NavModule_Factory(t) { return new (t || NavModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return NavModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](NavModule, { declarations: [NavComponent], imports: [common.CommonModule], exports: [NavComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NavModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        NavComponent
                    ],
                    exports: [
                        NavComponent
                    ]
                }]
        }], null, null); })();

    var SxNgxFabricModule = /** @class */ (function () {
        function SxNgxFabricModule() {
        }
        SxNgxFabricModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SxNgxFabricModule });
        SxNgxFabricModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SxNgxFabricModule_Factory(t) { return new (t || SxNgxFabricModule)(); }, imports: [[
                    common.CommonModule,
                    CheckboxModule,
                    ButtonModule,
                    TextFieldModule,
                    DialogModule.forRoot(),
                    ToggleModule,
                    BreadcrumbModule,
                    CalloutModule,
                    NavModule
                ],
                CheckboxModule,
                ButtonModule,
                TextFieldModule,
                DialogModule,
                ToggleModule,
                BreadcrumbModule,
                CalloutModule,
                NavModule] });
        return SxNgxFabricModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SxNgxFabricModule, { declarations: [SxNgxFabricComponent], imports: [common.CommonModule,
            CheckboxModule,
            ButtonModule,
            TextFieldModule, DialogModule, ToggleModule,
            BreadcrumbModule,
            CalloutModule,
            NavModule], exports: [SxNgxFabricComponent,
            CheckboxModule,
            ButtonModule,
            TextFieldModule,
            DialogModule,
            ToggleModule,
            BreadcrumbModule,
            CalloutModule,
            NavModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SxNgxFabricModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        CheckboxModule,
                        ButtonModule,
                        TextFieldModule,
                        DialogModule.forRoot(),
                        ToggleModule,
                        BreadcrumbModule,
                        CalloutModule,
                        NavModule
                    ],
                    declarations: [SxNgxFabricComponent],
                    exports: [
                        SxNgxFabricComponent,
                        CheckboxModule,
                        ButtonModule,
                        TextFieldModule,
                        DialogModule,
                        ToggleModule,
                        BreadcrumbModule,
                        CalloutModule,
                        NavModule
                    ]
                }]
        }], null, null); })();

    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.CalloutComponent = CalloutComponent;
    exports.CalloutModule = CalloutModule;
    exports.CalloutTriggerDirective = CalloutTriggerDirective;
    exports.CheckboxComponent = CheckboxComponent;
    exports.CheckboxModule = CheckboxModule;
    exports.DialogModule = DialogModule;
    exports.NavComponent = NavComponent;
    exports.NavModule = NavModule;
    exports.SX_NGX_FABRIC_DIALOG_DATA = SX_NGX_FABRIC_DIALOG_DATA;
    exports.SxNgxFabricComponent = SxNgxFabricComponent;
    exports.SxNgxFabricDialogActions = SxNgxFabricDialogActions;
    exports.SxNgxFabricDialogClose = SxNgxFabricDialogClose;
    exports.SxNgxFabricDialogContent = SxNgxFabricDialogContent;
    exports.SxNgxFabricDialogRef = SxNgxFabricDialogRef;
    exports.SxNgxFabricDialogService = SxNgxFabricDialogService;
    exports.SxNgxFabricDialogTitle = SxNgxFabricDialogTitle;
    exports.SxNgxFabricModule = SxNgxFabricModule;
    exports.SxNgxFabricService = SxNgxFabricService;
    exports.TextFieldComponent = TextFieldComponent;
    exports.TextFieldModule = TextFieldModule;
    exports.ToggleComponent = ToggleComponent;
    exports.ToggleModule = ToggleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sx-ngx-fabric.umd.js.map
