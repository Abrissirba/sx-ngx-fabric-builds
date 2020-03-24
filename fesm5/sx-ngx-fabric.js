import { Injectable, ɵɵdefineInjectable, Component, EventEmitter, Input, Output, NgModule, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, ElementRef, Optional, Inject, ViewChild, InjectionToken, TemplateRef, Injector, Directive, ViewContainerRef } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasePortalOutlet, ComponentPortal, TemplatePortal, PortalInjector, PortalModule } from '@angular/cdk/portal';
import { __extends, __assign, __read } from 'tslib';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sx-ngx-fabric.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SxNgxFabricService = /** @class */ (function () {
    function SxNgxFabricService() {
    }
    SxNgxFabricService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SxNgxFabricService.ctorParameters = function () { return []; };
    /** @nocollapse */ SxNgxFabricService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SxNgxFabricService_Factory() { return new SxNgxFabricService(); }, token: SxNgxFabricService, providedIn: "root" });
    return SxNgxFabricService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sx-ngx-fabric.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SxNgxFabricComponent = /** @class */ (function () {
    function SxNgxFabricComponent() {
    }
    /**
     * @return {?}
     */
    SxNgxFabricComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SxNgxFabricComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-sx-ngx-fabric',
                    template: "\n    <p>\n      sx-ngx-fabric works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SxNgxFabricComponent.ctorParameters = function () { return []; };
    return SxNgxFabricComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    BreadcrumbComponent.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemClick.next(item);
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: "sx-ngx-fabric-breadcrumb",
                    template: "<div class=\"ms-Breadcrumb\">\r\n  <div class=\"ms-Breadcrumb-overflow\">\r\n    <div\r\n      class=\"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis\"\r\n      tabindex=\"1\"\r\n    ></div>\r\n    <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    <div class=\"ms-Breadcrumb-overflowMenu\">\r\n      <ul class=\"ms-ContextualMenu is-open\"></ul>\r\n    </div>\r\n  </div>\r\n  <ul class=\"ms-Breadcrumb-list\">\r\n    <li class=\"ms-Breadcrumb-listItem\" *ngFor=\"let item of items\">\r\n      <a\r\n        class=\"ms-Breadcrumb-itemLink\"\r\n        tabindex=\"2\"\r\n        (click)=\"onClick(item)\"\r\n        [attr.title]=\"item.text\"\r\n        >{{ item.text }}</a\r\n      >\r\n      <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                    styles: [".ms-Breadcrumb{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow{display:none;position:relative}.ms-Breadcrumb-list{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list .ms-Breadcrumb-listItem{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron{font-size:12px;color:#666}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:#f8f8f8;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        items: [{ type: Input }],
        itemClick: [{ type: Output }]
    };
    return BreadcrumbComponent;
}());
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.items;
    /** @type {?} */
    BreadcrumbComponent.prototype.itemClick;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/breadcrumb/breadcrumb.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        BreadcrumbComponent
                    ],
                    exports: [
                        BreadcrumbComponent
                    ]
                },] }
    ];
    return BreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/guid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Guid = /** @class */ (function () {
    function Guid() {
    }
    /**
     * @return {?}
     */
    Guid.uniqueid = /**
     * @return {?}
     */
    function () {
        // always start with a letter (for DOM friendlyness)
        /** @type {?} */
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            /** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(CheckboxComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    CheckboxComponent.prototype.onInputClick = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    // ControlValueAccessor implementation
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = 
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.checked = val;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-checkbox',
                    template: "<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\"/>\r\n<label role=\"checkbox\" [attr.for]=\"inputId\" [class.is-checked]=\"checked\" [class.disabled]=\"disabled\">\r\n  <span class=\"ms-label\"><ng-content></ng-content></span>\r\n</label>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CheckboxComponent; })),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}input{position:absolute;opacity:0}label{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}label:hover{color:#000}label:before{content:'';display:inline-block;border:1px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}label:hover:before{border:1px solid #333}label.disabled{color:#c8c8c8}label.disabled:before,label.disabled:hover:before{border:1px solid #c8c8c8}label.is-checked:before{border:10px solid #0078d4;background-color:#0078d4}label.is-checked:hover:before{border:10px solid #106ebe;background-color:#106ebe}label.disabled.is-checked:before,label.disabled.is-checked:hover:before{border:10px solid #c8c8c8;background-color:#c8c8c8}label:after{content:'\\E73E';font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}label.is-checked:after{display:block}.ms-label{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    CheckboxComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CheckboxComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype._checked;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.inputId;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/checkbox/checkbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CheckboxComponent
                    ],
                    exports: [
                        CheckboxComponent
                    ]
                },] }
    ];
    return CheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.primary = false;
        this.classes = true;
    }
    Object.defineProperty(ButtonComponent.prototype, "classPrimary", {
        get: /**
         * @return {?}
         */
        function () { return this.primary; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                    template: "<div class=\"ms-Button-label\"><ng-content></ng-content></div>",
                    styles: [":host:hover{background-color:#eaeaea;border:1px solid #eaeaea}:host,:host:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label{color:#333;font-weight:600;font-size:14px}:host.ms-Button--primary:hover{background-color:#005a9e;border-color:#005a9e}:host.ms-Button--primary,:host.ms-Button--primary:active{background-color:#0078d4;border-color:#0078d4}:host.ms-Button--primary .ms-Button-label{color:#fff}:host[disabled],:host[disabled]:active,:host[disabled]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}:host[disabled] .ms-Button-label{color:#a6a6a6}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        primary: [{ type: Input }],
        classes: [{ type: HostBinding, args: ['class.ms-Button',] }],
        classPrimary: [{ type: HostBinding, args: ['class.ms-Button--primary',] }]
    };
    return ButtonComponent;
}());
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.primary;
    /** @type {?} */
    ButtonComponent.prototype.classes;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/button/button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ButtonComponent
                    ],
                    exports: [
                        ButtonComponent
                    ]
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/text-field/text-field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(TextFieldComponent.prototype, "classMultiline", {
        get: /**
         * @return {?}
         */
        function () { return this.multiline; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldComponent.prototype, "classIsDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    TextFieldComponent.prototype.onChange = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
        this.value = evt.target.value;
        this._onChange(this.value);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    TextFieldComponent.prototype.onTouched = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this._onTouched();
    };
    // ControlValueAccessor implementation
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TextFieldComponent.prototype.setDisabledState = 
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TextFieldComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.value = val;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextFieldComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextFieldComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    TextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-text-field',
                    template: "<label class=\"ms-Label\" [class.is-required]=\"required\">{{label}}</label>\r\n<input class=\"ms-TextField-field\"\r\n  *ngIf=\"!multiline\"\r\n  [attr.type]=\"type\" \r\n  [attr.placeholder]=\"placeholder\" \r\n  [value]=\"value\" \r\n  [disabled]=\"disabled\" \r\n  (blur)=\"onTouched($event)\"\r\n  (change)=\"onChange($event)\" \r\n  (keyup)=\"onChange($event)\"\r\n/>\r\n\r\n<textarea class=\"ms-TextField-field\"\r\n*ngIf=\"multiline\"\r\n[attr.type]=\"type\" \r\n[attr.placeholder]=\"placeholder\" \r\n[value]=\"value\" \r\n[disabled]=\"disabled\"\r\n[attr.rows]=\"rows\"\r\n(blur)=\"onTouched($event)\"\r\n(change)=\"onChange($event)\" \r\n(keyup)=\"onChange($event)\"\r\n></textarea>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TextFieldComponent; })),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host.ms-TextField{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;width:100%}.ms-Label{font-size:14px;font-weight:600}.ms-TextField-field{box-sizing:border-box;margin:0;padding:6px 12px 7px;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}:host.ms-TextField.ms-TextField--multiline .ms-TextField-field{color:#333;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}:host.ms-TextField.is-disabled .ms-TextField-field{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field:hover{border-color:#333}.ms-TextField-field:active,.ms-TextField-field:focus{border-color:#0078d4}:host.ms-TextField.ng-invalid.ng-touched .ms-TextField-field{border-color:#a80000}"]
                }] }
    ];
    /** @nocollapse */
    TextFieldComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TextFieldComponent.propDecorators = {
        label: [{ type: Input }],
        multiline: [{ type: Input }],
        rows: [{ type: Input }],
        type: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        classes: [{ type: HostBinding, args: ['class',] }],
        classMultiline: [{ type: HostBinding, args: ['class.ms-TextField--multiline',] }],
        classIsDisabled: [{ type: HostBinding, args: ['class.is-disabled',] }]
    };
    return TextFieldComponent;
}());
if (false) {
    /** @type {?} */
    TextFieldComponent.prototype.label;
    /** @type {?} */
    TextFieldComponent.prototype.multiline;
    /** @type {?} */
    TextFieldComponent.prototype.rows;
    /** @type {?} */
    TextFieldComponent.prototype.type;
    /** @type {?} */
    TextFieldComponent.prototype.placeholder;
    /** @type {?} */
    TextFieldComponent.prototype.disabled;
    /** @type {?} */
    TextFieldComponent.prototype.required;
    /** @type {?} */
    TextFieldComponent.prototype.value;
    /** @type {?} */
    TextFieldComponent.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    TextFieldComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    TextFieldComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    TextFieldComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/text-field/text-field.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextFieldModule = /** @class */ (function () {
    function TextFieldModule() {
    }
    TextFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        TextFieldComponent
                    ],
                    exports: [
                        TextFieldComponent
                    ]
                },] }
    ];
    return TextFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SxNgxDialogContainerComponent = /** @class */ (function (_super) {
    __extends(SxNgxDialogContainerComponent, _super);
    function SxNgxDialogContainerComponent(_elementRef, _changeDetectorRef, _document) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        return _this;
    }
    /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    SxNgxDialogContainerComponent.prototype.attachComponentPortal = /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        // if (this._portalOutlet.hasAttached()) {
        //   throw new Error('Has already attached')
        // }
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    SxNgxDialogContainerComponent.prototype.attachTemplatePortal = /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        throw new Error('Method not implemented.');
    };
    SxNgxDialogContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-dialog-container',
                    template: "<ng-template #portalOutlet=\"cdkPortalOutlet\" cdkPortalOutlet ></ng-template>"
                }] }
    ];
    /** @nocollapse */
    SxNgxDialogContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    SxNgxDialogContainerComponent.propDecorators = {
        _portalOutlet: [{ type: ViewChild, args: ['portalOutlet', { static: true },] }]
    };
    return SxNgxDialogContainerComponent;
}(BasePortalOutlet));
if (false) {
    /**
     * The portal outlet inside of this container into which the dialog content will be loaded.
     * @type {?}
     */
    SxNgxDialogContainerComponent.prototype._portalOutlet;
    /** @type {?} */
    SxNgxDialogContainerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    SxNgxDialogContainerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    SxNgxDialogContainerComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    SxNgxDialogContainerComponent.prototype._document;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
SxNgxFabricDialogRef = /** @class */ (function () {
    function SxNgxFabricDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject();
        this._afterClosed = new Subject();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.close = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
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
    /**
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.afterClosed = /**
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.beforeClose = /**
     * @return {?}
     */
    function () {
        return this._beforeClose.asObservable();
    };
    return SxNgxFabricDialogRef;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogRef.prototype._beforeClose;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogRef.prototype._afterClosed;
    /** @type {?} */
    SxNgxFabricDialogRef.prototype.componentInstance;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogRef.prototype.overlayRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SX_NGX_FABRIC_DIALOG_DATA = new InjectionToken('SX_NGX_FABRIC_DIALOG_DATA');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
    /**
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.open = /**
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (component, config) {
        if (config === void 0) { config = {}; }
        // Override default configuration
        /** @type {?} */
        var dialogConfig = __assign({}, DEFAULT_CONFIG, config);
        // Returns an OverlayRef which is a PortalHost
        /** @type {?} */
        var overlayRef = this.createOverlay(dialogConfig);
        /** @type {?} */
        var dialogContainer = this._attachDialogContainer(overlayRef, config);
        // Instantiate remote control
        /** @type {?} */
        var dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
        overlayRef.backdropClick().subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return dialogRef.close(); }));
        return dialogRef;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.createOverlay = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        /** @type {?} */
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
    /**
     * @private
     * @template T
     * @param {?} component
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.attachDialogContainer = /**
     * @private
     * @template T
     * @param {?} component
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    function (component, overlayRef, config, dialogRef) {
        /** @type {?} */
        var injector = this.createInjector(config, dialogRef);
        /** @type {?} */
        var containerPortal = new ComponentPortal(component, null, injector);
        /** @type {?} */
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * @private
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype._attachDialogContainer = /**
     * @private
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    function (overlay, config) {
        /** @type {?} */
        var containerPortal = new ComponentPortal(SxNgxDialogContainerComponent, null);
        /** @type {?} */
        var containerRef = overlay.attach(containerPortal);
        containerRef.instance._config = config;
        return containerRef.instance;
    };
    /**
     * @private
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype._attachDialogContent = /**
     * @private
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        /** @type {?} */
        var dialogRef = new SxNgxFabricDialogRef(overlayRef);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe((/**
             * @return {?}
             */
            function () {
                // if (!dialogRef.disableClose) {
                dialogRef.close();
                // }
            }));
        }
        // Close when escape keydown event occurs
        // overlayRef.keydownEvents().pipe(
        //   filter(event => event.keyCode === ESCAPE && !dialogRef.disableClose)
        // ).subscribe(() => dialogRef.close());
        if (componentOrTemplateRef instanceof TemplateRef) {
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, (/** @type {?} */ ({ $implicit: config.data, dialogRef: dialogRef }))));
        }
        else {
            /** @type {?} */
            var injector = this.createInjector(config, dialogRef);
            /** @type {?} */
            var contentRef = dialogContainer.attachComponentPortal(new ComponentPortal((/** @type {?} */ (componentOrTemplateRef)), undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        // dialogRef
        //   .updateSize(config.width, config.height)
        //   .updatePosition(config.position);
        return dialogRef;
    };
    /**
     * @private
     * @template T
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.createInjector = /**
     * @private
     * @template T
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    function (config, dialogRef) {
        /** @type {?} */
        var injectionTokens = new WeakMap();
        injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
        injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);
        return new PortalInjector(this.injector, injectionTokens);
    };
    SxNgxFabricDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SxNgxFabricDialogService.ctorParameters = function () { return [
        { type: Injector },
        { type: Overlay }
    ]; };
    return SxNgxFabricDialogService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogService.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-content.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique IDs for dialog elements.
 * @type {?}
 */
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var SxNgxFabricDialogClose = /** @class */ (function () {
    function SxNgxFabricDialogClose(dialogRef) {
        this.dialogRef = dialogRef;
        /**
         * Screenreader label for the button.
         */
        this.ariaLabel = 'Close dialog';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    SxNgxFabricDialogClose.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    SxNgxFabricDialogClose.decorators = [
        { type: Directive, args: [{
                    selector: "button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]",
                    exportAs: 'sxNgxFabricDialogClose',
                    host: {
                        '(click)': 'dialogRef.close(dialogResult)',
                        '[attr.aria-label]': 'ariaLabel',
                        'type': 'button',
                    }
                },] }
    ];
    /** @nocollapse */
    SxNgxFabricDialogClose.ctorParameters = function () { return [
        { type: SxNgxFabricDialogRef }
    ]; };
    SxNgxFabricDialogClose.propDecorators = {
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        dialogResult: [{ type: Input, args: ['sx-ngx-fabric-dialog-close',] }],
        dialogClose: [{ type: Input, args: ['sxNgxFabricDialogClose',] }]
    };
    return SxNgxFabricDialogClose;
}());
if (false) {
    /**
     * Screenreader label for the button.
     * @type {?}
     */
    SxNgxFabricDialogClose.prototype.ariaLabel;
    /**
     * Dialog close input.
     * @type {?}
     */
    SxNgxFabricDialogClose.prototype.dialogResult;
    /** @type {?} */
    SxNgxFabricDialogClose.prototype.dialogClose;
    /** @type {?} */
    SxNgxFabricDialogClose.prototype.dialogRef;
}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var SxNgxFabricDialogTitle = /** @class */ (function () {
    function SxNgxFabricDialogTitle(_container) {
        this._container = _container;
        this.id = "sx-ngx-fabric-dialog-title-" + dialogElementUid++;
    }
    SxNgxFabricDialogTitle.decorators = [
        { type: Directive, args: [{
                    selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
                    exportAs: 'sxNgxFabricDialogTitle',
                    host: {
                        'class': 'ms-Dialog-title',
                        '[id]': 'id',
                    },
                },] }
    ];
    /** @nocollapse */
    SxNgxFabricDialogTitle.ctorParameters = function () { return [
        { type: SxNgxDialogContainerComponent, decorators: [{ type: Optional }] }
    ]; };
    SxNgxFabricDialogTitle.propDecorators = {
        id: [{ type: Input }]
    };
    return SxNgxFabricDialogTitle;
}());
if (false) {
    /** @type {?} */
    SxNgxFabricDialogTitle.prototype.id;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogTitle.prototype._container;
}
/**
 * Scrollable content container of a dialog.
 */
var SxNgxFabricDialogContent = /** @class */ (function () {
    function SxNgxFabricDialogContent() {
    }
    SxNgxFabricDialogContent.decorators = [
        { type: Directive, args: [{
                    selector: "[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]",
                    host: { 'class': 'ms-Dialog-content' }
                },] }
    ];
    return SxNgxFabricDialogContent;
}());
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var SxNgxFabricDialogActions = /** @class */ (function () {
    function SxNgxFabricDialogActions() {
    }
    SxNgxFabricDialogActions.decorators = [
        { type: Directive, args: [{
                    selector: "[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]",
                    host: { 'class': 'ms-Dialog-actions' }
                },] }
    ];
    return SxNgxFabricDialogActions;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    /**
     * @return {?}
     */
    DialogModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DialogModule,
            providers: [SxNgxFabricDialogService]
        };
    };
    DialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        PortalModule
                    ],
                    declarations: [
                        SxNgxDialogContainerComponent,
                        SxNgxFabricDialogClose,
                        SxNgxFabricDialogTitle,
                        SxNgxFabricDialogContent,
                        SxNgxFabricDialogActions
                    ],
                    entryComponents: [
                        SxNgxDialogContainerComponent
                    ],
                    exports: [
                        SxNgxFabricDialogClose,
                        SxNgxFabricDialogTitle,
                        SxNgxFabricDialogContent,
                        SxNgxFabricDialogActions
                    ],
                    providers: [
                        SxNgxFabricDialogService
                    ]
                },] }
    ];
    return DialogModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toggle/toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.offText = 'Off';
        this.onText = 'On';
        this.textLeft = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(ToggleComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classIsDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classTextLeft", {
        get: /**
         * @return {?}
         */
        function () { return this.textLeft; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    ToggleComponent.prototype.onInputClick = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    /**
     * @return {?}
     */
    ToggleComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    // ControlValueAccessor implementation
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ToggleComponent.prototype.setDisabledState = 
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ToggleComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.checked = val;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    ToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-toggle',
                    template: "<span class=\"ms-Toggle-description\"><ng-content></ng-content></span>\r\n<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\" class=\"ms-Toggle-input\" />\r\n<label [attr.for]=\"inputId\" class=\"ms-Toggle-field\" [class.is-selected]=\"checked\">\r\n  <span class=\"ms-Label ms-Label--off\">{{ offText }}</span>\r\n  <span class=\"ms-Label ms-Label--on\">{{ onText }}</span>\r\n</label>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ToggleComponent; })),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'ms-Toggle'
                    },
                    styles: [":host.ms-Toggle{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;position:relative;display:block}.ms-Toggle-description{color:#333;box-sizing:border-box;box-shadow:none;display:block;word-wrap:break-word;overflow-wrap:break-word;margin:0;padding:5px 0}.ms-Toggle-input{display:none}.ms-Toggle-field{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:1px solid #a6a6a6;border-radius:20px;cursor:pointer;-webkit-transition:.1s;transition:.1s;outline:0}:host.ms-Toggle .ms-Toggle-field:before{position:absolute;top:4px;width:10px;height:10px;border-radius:10px;content:'';left:4px;background-color:#333;outline:transparent solid 1px;-webkit-transition:.1s;transition:.1s}:host.ms-Toggle .ms-Label{position:relative;padding:0 0 0 50px}:host.ms-Toggle .ms-Toggle-field .ms-Label{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.ms-Toggle .ms-Toggle-field .ms-Label--off{display:block}:host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off{display:none}:host.ms-Toggle .ms-Toggle-field .ms-Label--on{display:none}:host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on{display:block}:host.ms-Toggle .ms-Toggle-field.is-selected{background-color:#0078d4;border-color:#0078d4}:host.ms-Toggle .ms-Toggle-field.is-selected:focus,:host.ms-Toggle .ms-Toggle-field.is-selected:hover{background-color:#106ebe;border-color:#106ebe}:host.ms-Toggle .ms-Toggle-field.is-selected:before{background-color:#fff;left:28px}:host.ms-Toggle.is-disabled .ms-Toggle-field{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}:host.ms-Toggle.is-disabled .ms-Toggle-field.is-selected{background-color:#c8c8c8}:host.ms-Toggle.is-disabled .ms-Toggle-field:before{background-color:#fff}:host.ms-Toggle.is-disabled .ms-Label{color:#a6a6a6}:host.ms-Toggle.ms-Toggle--textLeft{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host.ms-Toggle.ms-Toggle--textLeft .ms-Toggle-field{margin-right:24px}:host.ms-Toggle.ms-Toggle--textLeft .ms-Toggle-description{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}"]
                }] }
    ];
    /** @nocollapse */
    ToggleComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    ToggleComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        offText: [{ type: Input }],
        onText: [{ type: Input }],
        textLeft: [{ type: Input }],
        classIsDisabled: [{ type: HostBinding, args: ['class.is-disabled',] }],
        classTextLeft: [{ type: HostBinding, args: ['class.ms-Toggle--textLeft',] }]
    };
    return ToggleComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype._checked;
    /** @type {?} */
    ToggleComponent.prototype.disabled;
    /** @type {?} */
    ToggleComponent.prototype.offText;
    /** @type {?} */
    ToggleComponent.prototype.onText;
    /** @type {?} */
    ToggleComponent.prototype.textLeft;
    /** @type {?} */
    ToggleComponent.prototype.inputId;
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toggle/toggle.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleModule = /** @class */ (function () {
    function ToggleModule() {
    }
    ToggleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ToggleComponent
                    ],
                    exports: [
                        ToggleComponent
                    ]
                },] }
    ];
    return ToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/callout/callout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalloutComponent = /** @class */ (function () {
    function CalloutComponent(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
    }
    Object.defineProperty(CalloutComponent.prototype, "beakPosition", {
        get: /**
         * @return {?}
         */
        function () { return this._beakPosition; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._beakPosition = val;
            this.updateBeakPosition();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalloutComponent.prototype.updateBeakPosition = /**
     * @return {?}
     */
    function () {
        if (this.beakPosition) {
            this.beak.nativeElement.style.top = this.beakPosition.top;
            this.beak.nativeElement.style.left = this.beakPosition.left;
            this.beak.nativeElement.style.right = this.beakPosition.right;
            this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
        }
    };
    CalloutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-callout',
                    template: "<ng-template>\r\n  <div class=\"ms-ContextualHost is-positioned ms-ContextualHost--arrowLeft\">\r\n    <div class=\"ms-ContextualHost-main\">\r\n      <div class=\"ms-Callout\">\r\n        <div class=\"ms-Callout-main\">\r\n          <div class=\"ms-Callout-header\">\r\n            <p class=\"ms-Callout-title\">\r\n              <ng-content select=\"[sxNgxFabricCalloutHeader]\"></ng-content>\r\n            </p>\r\n          </div>\r\n          <div class=\"ms-Callout-inner\">\r\n            <div class=\"ms-Callout-content\">\r\n              <p class=\"ms-Callout-subText\">\r\n                <ng-content select=\"[sxNgxFabricCalloutContent]\"></ng-content>\r\n              </p>\r\n            </div>\r\n            <div class=\"ms-Callout-actions\">\r\n              <ng-content select=\"[sxNgxFabricCalloutActions]\"></ng-content>\r\n            </div>\r\n          </div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div #beak class=\"ms-ContextualHost-beak\"></div>\r\n  </div>\r\n</ng-template>",
                    styles: [".ms-ContextualHost{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header{z-index:105;padding:24px 28px 12px}.ms-Callout-title{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner{height:100%;padding:0 28px 12px}.ms-Callout-subText{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"]
                }] }
    ];
    /** @nocollapse */
    CalloutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CalloutComponent.propDecorators = {
        xPosition: [{ type: Input }],
        yPosition: [{ type: Input }],
        templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        beak: [{ type: ViewChild, args: ['beak', { static: false },] }],
        closed: [{ type: Output }]
    };
    return CalloutComponent;
}());
if (false) {
    /** @type {?} */
    CalloutComponent.prototype.xPosition;
    /** @type {?} */
    CalloutComponent.prototype.yPosition;
    /** @type {?} */
    CalloutComponent.prototype.templateRef;
    /** @type {?} */
    CalloutComponent.prototype.beak;
    /** @type {?} */
    CalloutComponent.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    CalloutComponent.prototype._beakPosition;
    /**
     * @type {?}
     * @private
     */
    CalloutComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/callout/callout-trigger.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        get: /**
         * @return {?}
         */
        function () {
            return this.callout;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.callout = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype.openCallout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calloutOpen) {
            this._createOverlay().attach(this._portal);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.callout.updateBeakPosition();
            }));
        }
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.callout.closed.emit();
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype._handleClick = /**
     * @return {?}
     */
    function () {
        this.openCallout();
    };
    /**
     * @private
     * @return {?}
     */
    CalloutTriggerDirective.prototype._createOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            /** @type {?} */
            var config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this._overlayRef.detach();
            }));
        }
        return this._overlayRef;
    };
    /**
     * @private
     * @return {?}
     */
    CalloutTriggerDirective.prototype._getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this._getPosition();
        this._subscribeToPositions(position);
        return new OverlayConfig({
            hasBackdrop: true,
            positionStrategy: position,
            scrollStrategy: this._overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @private
     * @return {?}
     */
    CalloutTriggerDirective.prototype._getPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = __read(this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], originFallbackX = _a[1];
        var _b = __read(this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], 2), overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = __read([overlayY, overlayFallbackY], 2), originY = _c[0], originFallbackY = _c[1];
        var _d = __read([originX, originFallbackX], 2), overlayX = _d[0], overlayFallbackX = _d[1];
        /** @type {?} */
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
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    CalloutTriggerDirective.prototype._subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.connectionPair; }))).subscribe((/**
         * @param {?} pos
         * @return {?}
         */
        function (pos) {
            /** @type {?} */
            var isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
            /** @type {?} */
            var isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
            /** @type {?} */
            var triggerMiddle = _this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;
            _this.callout.beakPosition = {
                top: isCalloutUnderTrigger ? '-6px' : null,
                bottom: !isCalloutUnderTrigger ? '-6px' : null,
                left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
                right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
            };
        }));
    };
    CalloutTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[sxNgxFabricCalloutTrigger]',
                    host: {
                        'aria-haspopup': 'true',
                        '(click)': '_handleClick($event)'
                    },
                    exportAs: 'sxNgxFabricCalloutTrigger'
                },] }
    ];
    /** @nocollapse */
    CalloutTriggerDirective.ctorParameters = function () { return [
        { type: Overlay },
        { type: ElementRef },
        { type: ViewContainerRef }
    ]; };
    CalloutTriggerDirective.propDecorators = {
        sxNgxFabricCalloutTrigger: [{ type: Input }]
    };
    return CalloutTriggerDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._portal;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._calloutOpen;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._closeSubscription;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._positionSubscription;
    /** @type {?} */
    CalloutTriggerDirective.prototype.callout;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._element;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/callout/callout.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalloutModule = /** @class */ (function () {
    function CalloutModule() {
    }
    CalloutModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return CalloutModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/nav/nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    /**
     * @return {?}
     */
    NavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-nav',
                    template: "<div class=\"ms-Nav-group group is-expanded groupIsExpanded\">\r\n  <div class=\"ms-Nav-groupContent groupContent\">\r\n    <ul role=\"list\" class=\"navItems\">\r\n      <li role=\"listitem\" class=\"navItem\">\r\n        <div name=\"Home\" class=\"ms-Nav-compositeLink compositeLink is-expanded compositeLinkIsExpanded\">\r\n          <button class=\"ms-Nav-chevronButton ms-Nav-chevronButton--link chevronButton chevronButtonLink\"\r\n            aria-expanded=\"true\" tabindex=\"0\">\r\n            <i role=\"presentation\" aria-hidden=\"true\" data-icon-name=\"ChevronDown\" class=\"ms-Icon ms-Nav-chevron chevronIcon\"></i>\r\n          </button>\r\n          <a class=\"ms-Nav-linkButton link isOnExpanded ms-Button ms-Button--action ms-Button--command\" href=\"http://example.com\"\r\n            title=\"Home\" tabindex=\"-1\">\r\n            <div class=\"ms-Button-flexContainer\">\r\n              <i role=\"presentation\" aria-hidden=\"true\" class=\"ms-Icon ms-Icon-placeHolder ms-Button-icon\"></i>\r\n              <div class=\"ms-Button-textContainer\"></div>\r\n              <div class=\"ms-Nav-linkText linkText\">Home</div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <ul role=\"list\" class=\"navItems\">\r\n          <li role=\"listitem\" class=\"navItem\">\r\n            <div name=\"Activity\" class=\"ms-Nav-compositeLink compositeLink\">\r\n              <a class=\"ms-Nav-linkButton link isOnExpanded ms-Button ms-Button--action ms-Button--command\"\r\n                href=\"http://msn.com\" title=\"Activity\" data-is-focusable=\"true\" tabindex=\"-1\">\r\n                <div class=\"ms-Button-flexContainer\">\r\n                  <i role=\"presentation\" aria-hidden=\"true\" class=\"ms-Icon ms-Icon-placeHolder ms-Button-icon\"></i>\r\n                  <div class=\"ms-Button-textContainer\"></div>\r\n                  <div class=\"ms-Nav-linkText linkText\">Activity</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li role=\"listitem\" class=\"navItem\" >\r\n        <div name=\"Documents\" class=\"ms-Nav-compositeLink compositeLink is-expanded is-selected compositeLinkIsExpanded compositeLinkIsSelected\">\r\n          <a class=\"ms-Nav-linkButton link isOnExpanded ms-Button ms-Button--action ms-Button--command\" href=\"http://example.com\"\r\n            title=\"Documents\" data-is-focusable=\"true\"tabindex=\"-1\">\r\n            <div class=\"ms-Button-flexContainer\">\r\n              <i role=\"presentation\" aria-hidden=\"true\" class=\"ms-Icon ms-Icon-placeHolder ms-Button-icon\"></i>\r\n              <div class=\"ms-Button-textContainer\"></div>\r\n              <div class=\"ms-Nav-linkText\">Documents</div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NavComponent.ctorParameters = function () { return []; };
    return NavComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/nav/nav.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        NavComponent
                    ],
                    exports: [
                        NavComponent
                    ]
                },] }
    ];
    return NavModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sx-ngx-fabric.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SxNgxFabricModule = /** @class */ (function () {
    function SxNgxFabricModule() {
    }
    SxNgxFabricModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return SxNgxFabricModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/breadcrumb/i-breadcrumb-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IBreadcrumbItem() { }
if (false) {
    /** @type {?} */
    IBreadcrumbItem.prototype.text;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.key;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.href;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.isCurrentItem;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SxNgxFabricDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.panelClass;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.hasBackdrop;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.backdropClass;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.minWidth;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.minHeight;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.maxWidth;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.maxHeight;
    /** @type {?|undefined} */
    SxNgxFabricDialogConfig.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sx-ngx-fabric.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BreadcrumbComponent, BreadcrumbModule, SX_NGX_FABRIC_DIALOG_DATA, SxNgxFabricComponent, SxNgxFabricDialogRef, SxNgxFabricDialogService, SxNgxFabricModule, SxNgxFabricService, CheckboxModule as ɵa, CheckboxComponent as ɵb, ButtonModule as ɵc, ButtonComponent as ɵd, TextFieldModule as ɵe, TextFieldComponent as ɵf, DialogModule as ɵg, SxNgxDialogContainerComponent as ɵh, SxNgxFabricDialogClose as ɵi, SxNgxFabricDialogTitle as ɵj, SxNgxFabricDialogContent as ɵk, SxNgxFabricDialogActions as ɵl, ToggleModule as ɵm, ToggleComponent as ɵn, CalloutModule as ɵo, CalloutComponent as ɵp, CalloutTriggerDirective as ɵq, NavModule as ɵr, NavComponent as ɵs };
//# sourceMappingURL=sx-ngx-fabric.js.map
