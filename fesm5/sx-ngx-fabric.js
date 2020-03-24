import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵadvance, ɵɵattribute, ɵɵtextInterpolate, EventEmitter, ɵɵtemplate, ɵɵproperty, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵProvidersFeature, forwardRef, ɵɵprojectionDef, ɵɵprojection, ɵɵclassProp, ChangeDetectionStrategy, HostBinding, ɵɵclassMap, ElementRef, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵtemplateRefExtractor, Optional, Inject, ViewChild, InjectionToken, TemplateRef, ɵɵinject, Injector, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, ɵɵhostProperty, ɵɵviewQuery, ViewContainerRef } from '@angular/core';
import { NgForOf, CommonModule, NgIf, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkPortalOutlet, BasePortalOutlet, ComponentPortal, TemplatePortal, PortalInjector, PortalModule } from '@angular/cdk/portal';
import { __extends, __assign, __read } from 'tslib';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

var SxNgxFabricService = /** @class */ (function () {
    function SxNgxFabricService() {
    }
    SxNgxFabricService.ɵfac = function SxNgxFabricService_Factory(t) { return new (t || SxNgxFabricService)(); };
    SxNgxFabricService.ɵprov = ɵɵdefineInjectable({ token: SxNgxFabricService, factory: SxNgxFabricService.ɵfac, providedIn: 'root' });
    return SxNgxFabricService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricService, [{
        type: Injectable,
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
    SxNgxFabricComponent.ɵcmp = ɵɵdefineComponent({ type: SxNgxFabricComponent, selectors: [["sx-sx-ngx-fabric"]], decls: 2, vars: 0, template: function SxNgxFabricComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " sx-ngx-fabric works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return SxNgxFabricComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricComponent, [{
        type: Component,
        args: [{
                selector: 'sx-sx-ngx-fabric',
                template: "\n    <p>\n      sx-ngx-fabric works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

function BreadcrumbComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8);
    ɵɵelementStart(1, "a", 9);
    ɵɵlistener("click", function BreadcrumbComponent_li_7_Template_a_click_1_listener() { ɵɵrestoreView(_r21); var item_r19 = ctx.$implicit; var ctx_r20 = ɵɵnextContext(); return ctx_r20.onClick(item_r19); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "i", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵattribute("title", item_r19.text);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r19.text);
} }
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.itemClick = new EventEmitter();
    }
    BreadcrumbComponent.prototype.onClick = function (item) {
        this.itemClick.next(item);
    };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
    BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["sx-ngx-fabric-breadcrumb"]], inputs: { items: "items" }, outputs: { itemClick: "itemClick" }, decls: 8, vars: 1, consts: [[1, "ms-Breadcrumb"], [1, "ms-Breadcrumb-overflow"], ["tabindex", "1", 1, "ms-Breadcrumb-overflowButton", "ms-Icon", "ms-Icon--ellipsis"], [1, "ms-Breadcrumb-chevron", "ms-Icon", "ms-Icon--ChevronRight"], [1, "ms-Breadcrumb-overflowMenu"], [1, "ms-ContextualMenu", "is-open"], [1, "ms-Breadcrumb-list"], ["class", "ms-Breadcrumb-listItem", 4, "ngFor", "ngForOf"], [1, "ms-Breadcrumb-listItem"], ["tabindex", "2", 1, "ms-Breadcrumb-itemLink", 3, "click"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelement(2, "div", 2);
            ɵɵelement(3, "i", 3);
            ɵɵelementStart(4, "div", 4);
            ɵɵelement(5, "ul", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "ul", 6);
            ɵɵtemplate(7, BreadcrumbComponent_li_7_Template, 4, 2, "li", 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(7);
            ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [NgForOf], styles: [".ms-Breadcrumb[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow[_ngcontent-%COMP%]{display:none;position:relative}.ms-Breadcrumb-list[_ngcontent-%COMP%]{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list[_ngcontent-%COMP%]   .ms-Breadcrumb-listItem[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%]{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%], .ms-Breadcrumb-overflowButton[_ngcontent-%COMP%]{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron[_ngcontent-%COMP%]{font-size:12px;color:#666}.ms-Icon--ChevronRight[_ngcontent-%COMP%]:before{content:'\\E76C'}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%]:hover, .ms-Breadcrumb-overflowButton[_ngcontent-%COMP%]:hover{background-color:#f8f8f8;cursor:pointer}"] });
    return BreadcrumbComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                selector: "sx-ngx-fabric-breadcrumb",
                templateUrl: "./breadcrumb.component.html",
                styleUrls: ["./breadcrumb.component.scss"]
            }]
    }], function () { return []; }, { items: [{
            type: Input
        }], itemClick: [{
            type: Output
        }] }); })();

var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.ɵmod = ɵɵdefineNgModule({ type: BreadcrumbModule });
    BreadcrumbModule.ɵinj = ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[
                CommonModule
            ]] });
    return BreadcrumbModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: [BreadcrumbComponent], imports: [CommonModule], exports: [BreadcrumbComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    CheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["sx-ngx-fabric-checkbox"]], inputs: { checked: "checked", disabled: "disabled" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return CheckboxComponent; }),
                    multi: true
                }])], ngContentSelectors: _c0, decls: 4, vars: 8, consts: [["type", "checkbox", 3, "checked", "disabled", "click"], ["role", "checkbox"], [1, "ms-label"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "input", 0);
            ɵɵlistener("click", function CheckboxComponent_Template_input_click_0_listener($event) { return ctx.onInputClick($event); });
            ɵɵelementEnd();
            ɵɵelementStart(1, "label", 1);
            ɵɵelementStart(2, "span", 2);
            ɵɵprojection(3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
            ɵɵattribute("id", ctx.inputId);
            ɵɵadvance(1);
            ɵɵclassProp("is-checked", ctx.checked)("disabled", ctx.disabled);
            ɵɵattribute("for", ctx.inputId);
        } }, styles: ["[_nghost-%COMP%]{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}input[_ngcontent-%COMP%]{position:absolute;opacity:0}label[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}label[_ngcontent-%COMP%]:hover{color:#000}label[_ngcontent-%COMP%]:before{content:'';display:inline-block;border:1px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}label[_ngcontent-%COMP%]:hover:before{border:1px solid #333}label.disabled[_ngcontent-%COMP%]{color:#c8c8c8}label.disabled[_ngcontent-%COMP%]:before, label.disabled[_ngcontent-%COMP%]:hover:before{border:1px solid #c8c8c8}label.is-checked[_ngcontent-%COMP%]:before{border:10px solid #0078d4;background-color:#0078d4}label.is-checked[_ngcontent-%COMP%]:hover:before{border:10px solid #106ebe;background-color:#106ebe}label.disabled.is-checked[_ngcontent-%COMP%]:before, label.disabled.is-checked[_ngcontent-%COMP%]:hover:before{border:10px solid #c8c8c8;background-color:#c8c8c8}label[_ngcontent-%COMP%]:after{content:'\\E73E';font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}label.is-checked[_ngcontent-%COMP%]:after{display:block}.ms-label[_ngcontent-%COMP%]{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}"], changeDetection: 0 });
    return CheckboxComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.ɵmod = ɵɵdefineNgModule({ type: CheckboxModule });
    CheckboxModule.ɵinj = ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
                CommonModule
            ]] });
    return CheckboxModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CheckboxModule, { declarations: [CheckboxComponent], imports: [CommonModule], exports: [CheckboxComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["button", "sx-ngx-fabric-button", ""], ["a", "sx-ngx-fabric-button", ""]], hostVars: 4, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("ms-Button", ctx.classes)("ms-Button--primary", ctx.classPrimary);
        } }, inputs: { primary: "primary" }, attrs: _c0$1, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "ms-Button-label"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]:hover{background-color:#eaeaea;border:1px solid #eaeaea}[_nghost-%COMP%], [_nghost-%COMP%]:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label[_ngcontent-%COMP%]{color:#333;font-weight:600;font-size:14px}.ms-Button--primary[_nghost-%COMP%]:hover{background-color:#005a9e;border-color:#005a9e}.ms-Button--primary[_nghost-%COMP%], .ms-Button--primary[_nghost-%COMP%]:active{background-color:#0078d4;border-color:#0078d4}.ms-Button--primary[_nghost-%COMP%]   .ms-Button-label[_ngcontent-%COMP%]{color:#fff}[disabled][_nghost-%COMP%], [disabled][_nghost-%COMP%]:active, [disabled][_nghost-%COMP%]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}[disabled][_nghost-%COMP%]   .ms-Button-label[_ngcontent-%COMP%]{color:#a6a6a6}"] });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                styleUrls: ['./button.component.scss'],
                templateUrl: './button.component.html',
            }]
    }], function () { return []; }, { primary: [{
            type: Input
        }], classes: [{
            type: HostBinding,
            args: ['class.ms-Button']
        }], classPrimary: [{
            type: HostBinding,
            args: ['class.ms-Button--primary']
        }] }); })();

var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.ɵmod = ɵɵdefineNgModule({ type: ButtonModule });
    ButtonModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
                CommonModule
            ]] });
    return ButtonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    var _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 2);
    ɵɵlistener("blur", function TextFieldComponent_input_2_Template_input_blur_0_listener($event) { ɵɵrestoreView(_r25); var ctx_r24 = ɵɵnextContext(); return ctx_r24.onTouched($event); })("change", function TextFieldComponent_input_2_Template_input_change_0_listener($event) { ɵɵrestoreView(_r25); var ctx_r26 = ɵɵnextContext(); return ctx_r26.onChange($event); })("keyup", function TextFieldComponent_input_2_Template_input_keyup_0_listener($event) { ɵɵrestoreView(_r25); var ctx_r27 = ɵɵnextContext(); return ctx_r27.onChange($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r22.value)("disabled", ctx_r22.disabled);
    ɵɵattribute("type", ctx_r22.type)("placeholder", ctx_r22.placeholder);
} }
function TextFieldComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    var _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 2);
    ɵɵlistener("blur", function TextFieldComponent_textarea_3_Template_textarea_blur_0_listener($event) { ɵɵrestoreView(_r29); var ctx_r28 = ɵɵnextContext(); return ctx_r28.onTouched($event); })("change", function TextFieldComponent_textarea_3_Template_textarea_change_0_listener($event) { ɵɵrestoreView(_r29); var ctx_r30 = ɵɵnextContext(); return ctx_r30.onChange($event); })("keyup", function TextFieldComponent_textarea_3_Template_textarea_keyup_0_listener($event) { ɵɵrestoreView(_r29); var ctx_r31 = ɵɵnextContext(); return ctx_r31.onChange($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r23.value)("disabled", ctx_r23.disabled);
    ɵɵattribute("type", ctx_r23.type)("placeholder", ctx_r23.placeholder)("rows", ctx_r23.rows);
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
    TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    TextFieldComponent.ɵcmp = ɵɵdefineComponent({ type: TextFieldComponent, selectors: [["sx-ngx-fabric-text-field"]], hostVars: 6, hostBindings: function TextFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassMap(ctx.classes);
            ɵɵclassProp("ms-TextField--multiline", ctx.classMultiline)("is-disabled", ctx.classIsDisabled);
        } }, inputs: { label: "label", multiline: "multiline", rows: "rows", type: "type", placeholder: "placeholder", disabled: "disabled", required: "required" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TextFieldComponent; }),
                    multi: true
                }])], decls: 4, vars: 5, consts: [[1, "ms-Label"], ["class", "ms-TextField-field", 3, "value", "disabled", "blur", "change", "keyup", 4, "ngIf"], [1, "ms-TextField-field", 3, "value", "disabled", "blur", "change", "keyup"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "label", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
            ɵɵtemplate(2, TextFieldComponent_input_2_Template, 1, 4, "input", 1);
            ɵɵtemplate(3, TextFieldComponent_textarea_3_Template, 1, 5, "textarea", 1);
        } if (rf & 2) {
            ɵɵclassProp("is-required", ctx.required);
            ɵɵadvance(1);
            ɵɵtextInterpolate(ctx.label);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.multiline);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.multiline);
        } }, directives: [NgIf], styles: [".ms-TextField[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;width:100%}.ms-Label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.ms-TextField-field[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:6px 12px 7px;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}.ms-TextField.ms-TextField--multiline[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{color:#333;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}.ms-TextField.is-disabled[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field[_ngcontent-%COMP%]:hover{border-color:#333}.ms-TextField-field[_ngcontent-%COMP%]:active, .ms-TextField-field[_ngcontent-%COMP%]:focus{border-color:#0078d4}.ms-TextField.ng-invalid.ng-touched[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{border-color:#a80000}"], changeDetection: 0 });
    return TextFieldComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextFieldComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-text-field',
                templateUrl: './text-field.component.html',
                styleUrls: ['./text-field.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TextFieldComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { label: [{
            type: Input
        }], multiline: [{
            type: Input
        }], rows: [{
            type: Input
        }], type: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], classes: [{
            type: HostBinding,
            args: ['class']
        }], classMultiline: [{
            type: HostBinding,
            args: ['class.ms-TextField--multiline']
        }], classIsDisabled: [{
            type: HostBinding,
            args: ['class.is-disabled']
        }] }); })();

var TextFieldModule = /** @class */ (function () {
    function TextFieldModule() {
    }
    TextFieldModule.ɵmod = ɵɵdefineNgModule({ type: TextFieldModule });
    TextFieldModule.ɵinj = ɵɵdefineInjector({ factory: function TextFieldModule_Factory(t) { return new (t || TextFieldModule)(); }, imports: [[
                CommonModule
            ]] });
    return TextFieldModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TextFieldModule, { declarations: [TextFieldComponent], imports: [CommonModule], exports: [TextFieldComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextFieldModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    SxNgxDialogContainerComponent.ɵfac = function SxNgxDialogContainerComponent_Factory(t) { return new (t || SxNgxDialogContainerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT, 8)); };
    SxNgxDialogContainerComponent.ɵcmp = ɵɵdefineComponent({ type: SxNgxDialogContainerComponent, selectors: [["sx-ngx-fabric-dialog-container"]], viewQuery: function SxNgxDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$2, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
        } }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["cdkPortalOutlet", ""], ["portalOutlet", "cdkPortalOutlet"]], template: function SxNgxDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SxNgxDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0, 1, ɵɵtemplateRefExtractor);
        } }, directives: [CdkPortalOutlet], encapsulation: 2 });
    return SxNgxDialogContainerComponent;
}(BasePortalOutlet));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxDialogContainerComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-dialog-container',
                templateUrl: './dialog-container.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { _portalOutlet: [{
            type: ViewChild,
            args: ['portalOutlet', { static: true }]
        }] }); })();

var SxNgxFabricDialogRef = /** @class */ (function () {
    function SxNgxFabricDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject();
        this._afterClosed = new Subject();
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

var SX_NGX_FABRIC_DIALOG_DATA = new InjectionToken('SX_NGX_FABRIC_DIALOG_DATA');

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
        var overlayConfig = new OverlayConfig({
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
        var containerPortal = new ComponentPortal(component, null, injector);
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    SxNgxFabricDialogService.prototype._attachDialogContainer = function (overlay, config) {
        var containerPortal = new ComponentPortal(SxNgxDialogContainerComponent, null);
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
        if (componentOrTemplateRef instanceof TemplateRef) {
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, { $implicit: config.data, dialogRef: dialogRef }));
        }
        else {
            var injector = this.createInjector(config, dialogRef);
            var contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
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
        return new PortalInjector(this.injector, injectionTokens);
    };
    SxNgxFabricDialogService.ɵfac = function SxNgxFabricDialogService_Factory(t) { return new (t || SxNgxFabricDialogService)(ɵɵinject(Injector), ɵɵinject(Overlay)); };
    SxNgxFabricDialogService.ɵprov = ɵɵdefineInjectable({ token: SxNgxFabricDialogService, factory: SxNgxFabricDialogService.ɵfac });
    return SxNgxFabricDialogService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricDialogService, [{
        type: Injectable
    }], function () { return [{ type: Injector }, { type: Overlay }]; }, null); })();

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
    SxNgxFabricDialogClose.ɵfac = function SxNgxFabricDialogClose_Factory(t) { return new (t || SxNgxFabricDialogClose)(ɵɵdirectiveInject(SxNgxFabricDialogRef)); };
    SxNgxFabricDialogClose.ɵdir = ɵɵdefineDirective({ type: SxNgxFabricDialogClose, selectors: [["button", "sx-ngx-fabric-dialog-close", ""], ["button", "sxNgxFabricDialogClose", ""]], hostAttrs: ["type", "button"], hostVars: 1, hostBindings: function SxNgxFabricDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function SxNgxFabricDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
        } if (rf & 2) {
            ɵɵattribute("aria-label", ctx.ariaLabel);
        } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], dialogResult: ["sx-ngx-fabric-dialog-close", "dialogResult"], dialogClose: ["sxNgxFabricDialogClose", "dialogClose"] }, exportAs: ["sxNgxFabricDialogClose"], features: [ɵɵNgOnChangesFeature] });
    return SxNgxFabricDialogClose;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricDialogClose, [{
        type: Directive,
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
            type: Input,
            args: ['aria-label']
        }], dialogResult: [{
            type: Input,
            args: ['sx-ngx-fabric-dialog-close']
        }], dialogClose: [{
            type: Input,
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
    SxNgxFabricDialogTitle.ɵfac = function SxNgxFabricDialogTitle_Factory(t) { return new (t || SxNgxFabricDialogTitle)(ɵɵdirectiveInject(SxNgxDialogContainerComponent, 8)); };
    SxNgxFabricDialogTitle.ɵdir = ɵɵdefineDirective({ type: SxNgxFabricDialogTitle, selectors: [["", "sx-ngx-fabric-dialog-title", ""], ["", "sxNgxFabricDialogTitle", ""]], hostAttrs: [1, "ms-Dialog-title"], hostVars: 1, hostBindings: function SxNgxFabricDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵhostProperty("id", ctx.id);
        } }, inputs: { id: "id" }, exportAs: ["sxNgxFabricDialogTitle"] });
    return SxNgxFabricDialogTitle;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricDialogTitle, [{
        type: Directive,
        args: [{
                selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
                exportAs: 'sxNgxFabricDialogTitle',
                host: {
                    'class': 'ms-Dialog-title',
                    '[id]': 'id',
                },
            }]
    }], function () { return [{ type: SxNgxDialogContainerComponent, decorators: [{
                type: Optional
            }] }]; }, { id: [{
            type: Input
        }] }); })();
/**
 * Scrollable content container of a dialog.
 */
var SxNgxFabricDialogContent = /** @class */ (function () {
    function SxNgxFabricDialogContent() {
    }
    SxNgxFabricDialogContent.ɵfac = function SxNgxFabricDialogContent_Factory(t) { return new (t || SxNgxFabricDialogContent)(); };
    SxNgxFabricDialogContent.ɵdir = ɵɵdefineDirective({ type: SxNgxFabricDialogContent, selectors: [["", "sx-ngx-fabric-dialog-content", ""], ["sx-ngx-fabric-dialog-content"], ["", "sxNgxFabricDialogContent", ""]], hostAttrs: [1, "ms-Dialog-content"] });
    return SxNgxFabricDialogContent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricDialogContent, [{
        type: Directive,
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
    SxNgxFabricDialogActions.ɵdir = ɵɵdefineDirective({ type: SxNgxFabricDialogActions, selectors: [["", "sx-ngx-fabric-dialog-actions", ""], ["sx-ngx-fabric-dialog-actions"], ["", "sxNgxFabricDialogActions", ""]], hostAttrs: [1, "ms-Dialog-actions"] });
    return SxNgxFabricDialogActions;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricDialogActions, [{
        type: Directive,
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
    DialogModule.ɵmod = ɵɵdefineNgModule({ type: DialogModule });
    DialogModule.ɵinj = ɵɵdefineInjector({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, providers: [SxNgxFabricDialogService], imports: [[CommonModule, OverlayModule, PortalModule]] });
    return DialogModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DialogModule, { declarations: [SxNgxDialogContainerComponent,
        SxNgxFabricDialogClose,
        SxNgxFabricDialogTitle,
        SxNgxFabricDialogContent,
        SxNgxFabricDialogActions], imports: [CommonModule, OverlayModule, PortalModule], exports: [SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent, SxNgxFabricDialogActions] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule],
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
    ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    ToggleComponent.ɵcmp = ɵɵdefineComponent({ type: ToggleComponent, selectors: [["sx-ngx-fabric-toggle"]], hostAttrs: [1, "ms-Toggle"], hostVars: 4, hostBindings: function ToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("is-disabled", ctx.classIsDisabled)("ms-Toggle--textLeft", ctx.classTextLeft);
        } }, inputs: { checked: "checked", disabled: "disabled", offText: "offText", onText: "onText", textLeft: "textLeft" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ToggleComponent; }),
                    multi: true
                }])], ngContentSelectors: _c0$3, decls: 8, vars: 8, consts: [[1, "ms-Toggle-description"], ["type", "checkbox", 1, "ms-Toggle-input", 3, "checked", "disabled", "click"], [1, "ms-Toggle-field"], [1, "ms-Label", "ms-Label--off"], [1, "ms-Label", "ms-Label--on"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "input", 1);
            ɵɵlistener("click", function ToggleComponent_Template_input_click_2_listener($event) { return ctx.onInputClick($event); });
            ɵɵelementEnd();
            ɵɵelementStart(3, "label", 2);
            ɵɵelementStart(4, "span", 3);
            ɵɵtext(5);
            ɵɵelementEnd();
            ɵɵelementStart(6, "span", 4);
            ɵɵtext(7);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
            ɵɵattribute("id", ctx.inputId);
            ɵɵadvance(1);
            ɵɵclassProp("is-selected", ctx.checked);
            ɵɵattribute("for", ctx.inputId);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.offText);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.onText);
        } }, styles: [".ms-Toggle[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;position:relative;display:block}.ms-Toggle-description[_ngcontent-%COMP%]{color:#333;box-sizing:border-box;box-shadow:none;display:block;word-wrap:break-word;overflow-wrap:break-word;margin:0;padding:5px 0}.ms-Toggle-input[_ngcontent-%COMP%]{display:none}.ms-Toggle-field[_ngcontent-%COMP%]{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:1px solid #a6a6a6;border-radius:20px;cursor:pointer;-webkit-transition:.1s;transition:.1s;outline:0}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{position:absolute;top:4px;width:10px;height:10px;border-radius:10px;content:'';left:4px;background-color:#333;outline:transparent solid 1px;-webkit-transition:.1s;transition:.1s}.ms-Toggle[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{position:relative;padding:0 0 0 50px}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#0078d4;border-color:#0078d4}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:focus, .ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:hover{background-color:#106ebe;border-color:#106ebe}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:before{background-color:#fff;left:28px}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#c8c8c8}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{background-color:#fff}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#a6a6a6}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{margin-right:24px}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-description[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}"], changeDetection: 0 });
    return ToggleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToggleComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-toggle',
                templateUrl: './toggle.component.html',
                styleUrls: ['./toggle.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return ToggleComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'ms-Toggle'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], offText: [{
            type: Input
        }], onText: [{
            type: Input
        }], textLeft: [{
            type: Input
        }], classIsDisabled: [{
            type: HostBinding,
            args: ['class.is-disabled']
        }], classTextLeft: [{
            type: HostBinding,
            args: ['class.ms-Toggle--textLeft']
        }] }); })();

var ToggleModule = /** @class */ (function () {
    function ToggleModule() {
    }
    ToggleModule.ɵmod = ɵɵdefineNgModule({ type: ToggleModule });
    ToggleModule.ɵinj = ɵɵdefineInjector({ factory: function ToggleModule_Factory(t) { return new (t || ToggleModule)(); }, imports: [[
                CommonModule
            ]] });
    return ToggleModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ToggleModule, { declarations: [ToggleComponent], imports: [CommonModule], exports: [ToggleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToggleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "div", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵelementStart(3, "div", 3);
    ɵɵelementStart(4, "div", 4);
    ɵɵelementStart(5, "p", 5);
    ɵɵprojection(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 6);
    ɵɵelementStart(8, "div", 7);
    ɵɵelementStart(9, "p", 8);
    ɵɵprojection(10, 1);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 9);
    ɵɵprojection(12, 2);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵprojection(13, 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(14, "div", 10, 11);
    ɵɵelementEnd();
} }
var _c1$1 = [[["", "sxNgxFabricCalloutHeader", ""]], [["", "sxNgxFabricCalloutContent", ""]], [["", "sxNgxFabricCalloutActions", ""]], "*"];
var _c2 = ["[sxNgxFabricCalloutHeader]", "[sxNgxFabricCalloutContent]", "[sxNgxFabricCalloutActions]", "*"];
var CalloutComponent = /** @class */ (function () {
    function CalloutComponent(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
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
    CalloutComponent.ɵfac = function CalloutComponent_Factory(t) { return new (t || CalloutComponent)(ɵɵdirectiveInject(ElementRef)); };
    CalloutComponent.ɵcmp = ɵɵdefineComponent({ type: CalloutComponent, selectors: [["sx-ngx-fabric-callout"]], viewQuery: function CalloutComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(TemplateRef, true);
            ɵɵviewQuery(_c0$4, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.beak = _t.first);
        } }, inputs: { xPosition: "xPosition", yPosition: "yPosition" }, outputs: { closed: "closed" }, ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ms-ContextualHost", "is-positioned", "ms-ContextualHost--arrowLeft"], [1, "ms-ContextualHost-main"], [1, "ms-Callout"], [1, "ms-Callout-main"], [1, "ms-Callout-header"], [1, "ms-Callout-title"], [1, "ms-Callout-inner"], [1, "ms-Callout-content"], [1, "ms-Callout-subText"], [1, "ms-Callout-actions"], [1, "ms-ContextualHost-beak"], ["beak", ""]], template: function CalloutComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1$1);
            ɵɵtemplate(0, CalloutComponent_ng_template_0_Template, 16, 0, "ng-template");
        } }, styles: [".ms-ContextualHost[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main[_ngcontent-%COMP%]{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header[_ngcontent-%COMP%]{z-index:105;padding:24px 28px 12px}.ms-Callout-title[_ngcontent-%COMP%]{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner[_ngcontent-%COMP%]{height:100%;padding:0 28px 12px}.ms-Callout-subText[_ngcontent-%COMP%]{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions[_ngcontent-%COMP%]{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak[_ngcontent-%COMP%]{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"] });
    return CalloutComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalloutComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-callout',
                templateUrl: './callout.component.html',
                styleUrls: ['./callout.component.scss']
            }]
    }], function () { return [{ type: ElementRef }]; }, { xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], beak: [{
            type: ViewChild,
            args: ['beak']
        }], closed: [{
            type: Output
        }] }); })();

var CalloutTriggerDirective = /** @class */ (function () {
    function CalloutTriggerDirective(_overlay, _element, _viewContainerRef) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._overlayRef = null;
        this._calloutOpen = false;
        this._closeSubscription = Subscription.EMPTY;
        this._positionSubscription = Subscription.EMPTY;
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
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
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
        return new OverlayConfig({
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
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, function (x) { return x.connectionPair; })).subscribe(function (pos) {
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
    CalloutTriggerDirective.ɵfac = function CalloutTriggerDirective_Factory(t) { return new (t || CalloutTriggerDirective)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef)); };
    CalloutTriggerDirective.ɵdir = ɵɵdefineDirective({ type: CalloutTriggerDirective, selectors: [["", "sxNgxFabricCalloutTrigger", ""]], hostAttrs: ["aria-haspopup", "true"], hostBindings: function CalloutTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function CalloutTriggerDirective_click_HostBindingHandler($event) { return ctx._handleClick($event); });
        } }, inputs: { sxNgxFabricCalloutTrigger: "sxNgxFabricCalloutTrigger" }, exportAs: ["sxNgxFabricCalloutTrigger"] });
    return CalloutTriggerDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalloutTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[sxNgxFabricCalloutTrigger]',
                host: {
                    'aria-haspopup': 'true',
                    '(click)': '_handleClick($event)'
                },
                exportAs: 'sxNgxFabricCalloutTrigger'
            }]
    }], function () { return [{ type: Overlay }, { type: ElementRef }, { type: ViewContainerRef }]; }, { sxNgxFabricCalloutTrigger: [{
            type: Input
        }] }); })();

var CalloutModule = /** @class */ (function () {
    function CalloutModule() {
    }
    CalloutModule.ɵmod = ɵɵdefineNgModule({ type: CalloutModule });
    CalloutModule.ɵinj = ɵɵdefineInjector({ factory: function CalloutModule_Factory(t) { return new (t || CalloutModule)(); }, imports: [[
                CommonModule
            ]] });
    return CalloutModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CalloutModule, { declarations: [CalloutComponent,
        CalloutTriggerDirective], imports: [CommonModule], exports: [CalloutComponent,
        CalloutTriggerDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalloutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    NavComponent.ɵcmp = ɵɵdefineComponent({ type: NavComponent, selectors: [["sx-ngx-fabric-nav"]], decls: 30, vars: 0, consts: [[1, "ms-Nav-group", "group", "is-expanded", "groupIsExpanded"], [1, "ms-Nav-groupContent", "groupContent"], ["role", "list", 1, "navItems"], ["role", "listitem", 1, "navItem"], ["name", "Home", 1, "ms-Nav-compositeLink", "compositeLink", "is-expanded", "compositeLinkIsExpanded"], ["aria-expanded", "true", "tabindex", "0", 1, "ms-Nav-chevronButton", "ms-Nav-chevronButton--link", "chevronButton", "chevronButtonLink"], ["role", "presentation", "aria-hidden", "true", "data-icon-name", "ChevronDown", 1, "ms-Icon", "ms-Nav-chevron", "chevronIcon"], ["href", "http://example.com", "title", "Home", "tabindex", "-1", 1, "ms-Nav-linkButton", "link", "isOnExpanded", "ms-Button", "ms-Button--action", "ms-Button--command"], [1, "ms-Button-flexContainer"], ["role", "presentation", "aria-hidden", "true", 1, "ms-Icon", "ms-Icon-placeHolder", "ms-Button-icon"], [1, "ms-Button-textContainer"], [1, "ms-Nav-linkText", "linkText"], ["name", "Activity", 1, "ms-Nav-compositeLink", "compositeLink"], ["href", "http://msn.com", "title", "Activity", "data-is-focusable", "true", "tabindex", "-1", 1, "ms-Nav-linkButton", "link", "isOnExpanded", "ms-Button", "ms-Button--action", "ms-Button--command"], ["name", "Documents", 1, "ms-Nav-compositeLink", "compositeLink", "is-expanded", "is-selected", "compositeLinkIsExpanded", "compositeLinkIsSelected"], ["href", "http://example.com", "title", "Documents", "data-is-focusable", "true", "tabindex", "-1", 1, "ms-Nav-linkButton", "link", "isOnExpanded", "ms-Button", "ms-Button--action", "ms-Button--command"], [1, "ms-Nav-linkText"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "ul", 2);
            ɵɵelementStart(3, "li", 3);
            ɵɵelementStart(4, "div", 4);
            ɵɵelementStart(5, "button", 5);
            ɵɵelement(6, "i", 6);
            ɵɵelementEnd();
            ɵɵelementStart(7, "a", 7);
            ɵɵelementStart(8, "div", 8);
            ɵɵelement(9, "i", 9);
            ɵɵelement(10, "div", 10);
            ɵɵelementStart(11, "div", 11);
            ɵɵtext(12, "Home");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(13, "ul", 2);
            ɵɵelementStart(14, "li", 3);
            ɵɵelementStart(15, "div", 12);
            ɵɵelementStart(16, "a", 13);
            ɵɵelementStart(17, "div", 8);
            ɵɵelement(18, "i", 9);
            ɵɵelement(19, "div", 10);
            ɵɵelementStart(20, "div", 11);
            ɵɵtext(21, "Activity");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "li", 3);
            ɵɵelementStart(23, "div", 14);
            ɵɵelementStart(24, "a", 15);
            ɵɵelementStart(25, "div", 8);
            ɵɵelement(26, "i", 9);
            ɵɵelement(27, "div", 10);
            ɵɵelementStart(28, "div", 16);
            ɵɵtext(29, "Documents");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, styles: [""] });
    return NavComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, null); })();

var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule.ɵmod = ɵɵdefineNgModule({ type: NavModule });
    NavModule.ɵinj = ɵɵdefineInjector({ factory: function NavModule_Factory(t) { return new (t || NavModule)(); }, imports: [[
                CommonModule
            ]] });
    return NavModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NavModule, { declarations: [NavComponent], imports: [CommonModule], exports: [NavComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    SxNgxFabricModule.ɵmod = ɵɵdefineNgModule({ type: SxNgxFabricModule });
    SxNgxFabricModule.ɵinj = ɵɵdefineInjector({ factory: function SxNgxFabricModule_Factory(t) { return new (t || SxNgxFabricModule)(); }, imports: [[
                CommonModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SxNgxFabricModule, { declarations: [SxNgxFabricComponent], imports: [CommonModule,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(SxNgxFabricModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
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

/*
 * Public API Surface of sx-ngx-fabric
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, BreadcrumbModule, ButtonComponent, ButtonModule, CalloutComponent, CalloutModule, CalloutTriggerDirective, CheckboxComponent, CheckboxModule, DialogModule, NavComponent, NavModule, SX_NGX_FABRIC_DIALOG_DATA, SxNgxFabricComponent, SxNgxFabricDialogActions, SxNgxFabricDialogClose, SxNgxFabricDialogContent, SxNgxFabricDialogRef, SxNgxFabricDialogService, SxNgxFabricDialogTitle, SxNgxFabricModule, SxNgxFabricService, TextFieldComponent, TextFieldModule, ToggleComponent, ToggleModule };
//# sourceMappingURL=sx-ngx-fabric.js.map
