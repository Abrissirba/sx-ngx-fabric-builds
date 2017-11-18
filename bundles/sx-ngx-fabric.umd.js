(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('@angular/cdk/overlay'), require('rxjs/Subject'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/take')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/cdk/portal', '@angular/platform-browser', '@angular/cdk/overlay', 'rxjs/Subject', 'rxjs/add/operator/filter', 'rxjs/add/operator/take'], factory) :
	(factory((global['sx-ngx-fabric'] = {}),global.ng.core,global.ng.common,global.ng.forms,global.ng.cdk.portal,global.ng.platformBrowser,global.ng.cdk.overlay,global.Rx));
}(this, (function (exports,core,common,forms,portal,platformBrowser,overlay,Subject) { 'use strict';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        this.itemClick = new core.EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    BreadcrumbComponent.prototype.onClick = function (item) {
        this.itemClick.next(item);
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sx-ngx-fabric-breadcrumb',
                template: "\n    <div class=\"ms-Breadcrumb\">\n        <div class=\"ms-Breadcrumb-overflow\">\n          <div class=\"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis\" tabindex=\"1\"></div>\n          <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\n          <div class=\"ms-Breadcrumb-overflowMenu\">\n            <ul class=\"ms-ContextualMenu is-open\"></ul>\n          </div>\n        </div>\n        <ul class=\"ms-Breadcrumb-list\">\n          <li class=\"ms-Breadcrumb-listItem\" *ngFor='let item of items'>\n              <a class=\"ms-Breadcrumb-itemLink\" tabindex=\"2\" (click)=\"onClick(item)\" [attr.title]=\"item.text\">{{item.text}}</a>\n              <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\n          </li>\n        </ul>\n      </div>\n  ",
                styles: ["\n    .ms-Breadcrumb {\n      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;\n      -webkit-font-smoothing: antialiased;\n      margin: 23px 0 1px; }\n\n    .ms-Breadcrumb-overflow {\n      display: none;\n      position: relative; }\n\n    .ms-Breadcrumb-list {\n      white-space: nowrap;\n      padding: 0;\n      margin: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n      align-items: stretch; }\n\n    .ms-Breadcrumb-list .ms-Breadcrumb-listItem {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center; }\n\n    .ms-Breadcrumb-itemLink {\n      font-size: 21px;\n      font-weight: 100;\n      color: #333333;\n      padding: 0 8px;\n      max-width: 160px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      padding-bottom: 3px; }\n\n    .ms-Breadcrumb-itemLink, .ms-Breadcrumb-overflowButton {\n      text-decoration: none;\n      outline: transparent; }\n\n    .ms-Breadcrumb-chevron {\n      font-size: 12px;\n      color: #666666; }\n\n    .ms-Icon--ChevronRight:before {\n      content: '\\E76C'; }\n\n    .ms-Breadcrumb-itemLink:hover, .ms-Breadcrumb-overflowButton:hover {\n      background-color: #f8f8f8;\n      cursor: pointer; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbComponent.ctorParameters = function () { return []; };
BreadcrumbComponent.propDecorators = {
    'items': [{ type: core.Input },],
    'itemClick': [{ type: core.Output },],
};
var BreadcrumbModule = (function () {
    function BreadcrumbModule() {
    }
    return BreadcrumbModule;
}());
BreadcrumbModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    BreadcrumbComponent
                ],
                exports: [
                    BreadcrumbComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbModule.ctorParameters = function () { return []; };
var Guid = (function () {
    function Guid() {
    }
    /**
     * @return {?}
     */
    Guid.uniqueid = function () {
        // always start with a letter (for DOM friendlyness)
        var /** @type {?} */ idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            var /** @type {?} */ ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                // exclude all chars between : (58) and @ (64)
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);
        return (idstr);
    };
    return Guid;
}());
var ToggleComponent = (function () {
    /**
     * @param {?} changeDetectorRef
     */
    function ToggleComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._selected = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(ToggleComponent.prototype, "selected", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selected;
        },
        /**
         * @param {?} selected
         * @return {?}
         */
        set: function (selected) {
            if (selected !== this.selected) {
                this._selected = selected;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classIsDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    ToggleComponent.prototype.onInputClick = function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    /**
     * @return {?}
     */
    ToggleComponent.prototype.toggle = function () {
        this.selected = !this.selected;
        this._onChange(this.selected);
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ToggleComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ToggleComponent.prototype.writeValue = function (val) {
        this.selected = val;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    return ToggleComponent;
}());
ToggleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sx-ngx-fabric-toggle',
                template: "\n    <span class=\"ms-Toggle-description\"><ng-content></ng-content></span>\n    <input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\" class=\"ms-Toggle-input\" />\n    <label [attr.for]=\"inputId\" class=\"ms-Toggle-field\" [class.is-selected]=\"selected\">\n      <span class=\"ms-Label ms-Label--off\">Off</span>\n      <span class=\"ms-Label ms-Label--on\">On</span>\n    </label>\n  ",
                styles: ["\n    :host.ms-Toggle {\n      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;\n      -webkit-font-smoothing: antialiased;\n      font-size: 14px;\n      font-weight: 400;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      position: relative;\n      display: block;\n      margin-bottom: 26px; }\n\n    .ms-Toggle-description {\n      color: #333333;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      margin-top: 0px;\n      margin-right: 0px;\n      margin-bottom: 0px;\n      margin-left: 0px;\n      display: block;\n      padding-top: 5px;\n      padding-right: 0px;\n      padding-bottom: 5px;\n      padding-left: 0px;\n      word-wrap: break-word;\n      overflow-wrap: break-word; }\n\n    .ms-Toggle-input {\n      display: none; }\n\n    .ms-Toggle-field {\n      position: relative;\n      display: inline-block;\n      width: 45px;\n      height: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: 1px solid #a6a6a6;\n      border-radius: 20px;\n      cursor: pointer;\n      -webkit-transition: all 0.1s ease;\n      transition: all 0.1s ease;\n      outline: 0; }\n\n    :host.ms-Toggle .ms-Toggle-field:before {\n      position: absolute;\n      top: 4px;\n      width: 10px;\n      height: 10px;\n      border-radius: 10px;\n      content: '';\n      left: 4px;\n      background-color: #333333;\n      outline: 1px solid transparent;\n      -webkit-transition: all 0.1s ease;\n      transition: all 0.1s ease; }\n\n    :host.ms-Toggle .ms-Label {\n      position: relative;\n      padding: 0 0 0 50px; }\n\n    :host.ms-Toggle .ms-Toggle-field .ms-Label {\n      color: #000;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n\n    :host.ms-Toggle .ms-Toggle-field .ms-Label--off {\n      display: block; }\n\n    :host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off {\n      display: none; }\n\n    :host.ms-Toggle .ms-Toggle-field .ms-Label--on {\n      display: none; }\n\n    :host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on {\n      display: block; }\n\n    :host.ms-Toggle .ms-Toggle-field.is-selected {\n      background-color: #0078d7;\n      border-color: #0078d7; }\n\n    :host.ms-Toggle .ms-Toggle-field.is-selected:focus, :host.ms-Toggle .ms-Toggle-field.is-selected:hover {\n      background-color: #106ebe;\n      border-color: #106ebe; }\n\n    :host.ms-Toggle .ms-Toggle-field.is-selected:before {\n      background-color: #fff;\n      left: 28px; }\n\n    :host.ms-Toggle.is-disabled .ms-Toggle-field {\n      background-color: #fff;\n      border-color: #c8c8c8;\n      pointer-events: none;\n      cursor: default; }\n\n    :host.ms-Toggle.is-disabled .ms-Toggle-field.is-selected {\n      background-color: #c8c8c8; }\n\n    :host.ms-Toggle.is-disabled .ms-Toggle-field:before {\n      background-color: #fff; }\n\n    :host.ms-Toggle.is-disabled .ms-Label {\n      color: #a6a6a6; }\n  "],
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
            },] },
];
/**
 * @nocollapse
 */
ToggleComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
ToggleComponent.propDecorators = {
    'selected': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'classIsDisabled': [{ type: core.HostBinding, args: ['class.is-disabled',] },],
};
var ToggleModule = (function () {
    function ToggleModule() {
    }
    return ToggleModule;
}());
ToggleModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    ToggleComponent
                ],
                exports: [
                    ToggleComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ToggleModule.ctorParameters = function () { return []; };
var TextFieldComponent = (function () {
    /**
     * @param {?} changeDetectorRef
     */
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
        /**
         * @return {?}
         */
        get: function () { return this.multiline; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldComponent.prototype, "classIsDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    TextFieldComponent.prototype.onChange = function (evt) {
        evt.stopPropagation();
        this.value = evt.target.value;
        this._onChange(this.value);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    TextFieldComponent.prototype.onTouched = function (evt) {
        this._onTouched();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TextFieldComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextFieldComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextFieldComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    return TextFieldComponent;
}());
TextFieldComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sx-ngx-fabric-text-field',
                template: "\n    <label class=\"ms-Label\" [class.is-required]=\"required\">{{label}}</label>\n    <input class=\"ms-TextField-field\"\n      *ngIf=\"!multiline\"\n      [attr.type]=\"type\" \n      [attr.placeholder]=\"placeholder\" \n      [value]=\"value\" \n      [disabled]=\"disabled\" \n      (blur)=\"onTouched($event)\"\n      (change)=\"onChange($event)\" \n      (keyup)=\"onChange($event)\"\n    />\n\n    <textarea class=\"ms-TextField-field\"\n    *ngIf=\"multiline\"\n    [attr.type]=\"type\" \n    [attr.placeholder]=\"placeholder\" \n    [value]=\"value\" \n    [disabled]=\"disabled\"\n    [attr.rows]=\"rows\"\n    (blur)=\"onTouched($event)\"\n    (change)=\"onChange($event)\" \n    (keyup)=\"onChange($event)\"\n    ></textarea>\n  ",
                styles: ["\n    :host.ms-TextField {\n      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      color: #333333;\n      font-size: 14px;\n      font-weight: 400;\n      margin-bottom: 8px; }\n\n    .ms-Label {\n      font-size: 14px;\n      font-weight: 600; }\n\n    .ms-TextField-field {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border: 1px solid #c8c8c8;\n      border-radius: 0;\n      font-weight: 300;\n      font-size: 14px;\n      color: #333333;\n      height: 32px;\n      padding: 6px 12px 7px;\n      width: 100%;\n      min-width: 180px;\n      outline: 0;\n      text-overflow: ellipsis; }\n\n    :host.ms-TextField.ms-TextField--multiline .ms-TextField-field {\n      color: #333333;\n      font-size: 14px;\n      line-height: 17px;\n      min-height: 60px;\n      min-width: 260px;\n      padding-top: 6px;\n      overflow: auto; }\n\n    :host.ms-TextField.is-disabled .ms-TextField-field {\n      background-color: #f4f4f4;\n      border-color: #f4f4f4;\n      pointer-events: none;\n      cursor: default; }\n\n    .ms-TextField-field:hover {\n      border-color: #333333; }\n\n    .ms-TextField-field:active, .ms-TextField-field:focus {\n      border-color: #0078d7; }\n\n    :host.ms-TextField.ng-invalid.ng-touched .ms-TextField-field {\n      border-color: #a80000; }\n  "],
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TextFieldComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
TextFieldComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TextFieldComponent.propDecorators = {
    'label': [{ type: core.Input },],
    'multiline': [{ type: core.Input },],
    'rows': [{ type: core.Input },],
    'type': [{ type: core.Input },],
    'placeholder': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'required': [{ type: core.Input },],
    'classes': [{ type: core.HostBinding, args: ['class',] },],
    'classMultiline': [{ type: core.HostBinding, args: ['class.ms-TextField--multiline',] },],
    'classIsDisabled': [{ type: core.HostBinding, args: ['class.is-disabled',] },],
};
var TextFieldModule = (function () {
    function TextFieldModule() {
    }
    return TextFieldModule;
}());
TextFieldModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    TextFieldComponent
                ],
                exports: [
                    TextFieldComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TextFieldModule.ctorParameters = function () { return []; };
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.primary = false;
        this.classes = 'ms-Button';
    }
    Object.defineProperty(ButtonComponent.prototype, "classPrimary", {
        /**
         * @return {?}
         */
        get: function () { return this.primary; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = function () {
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                styles: ["\n    :host:hover {\n      background-color: #eaeaea;\n      border: 1px solid #eaeaea; }\n\n    :host, :host:active {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;\n      -webkit-font-smoothing: antialiased;\n      color: #333;\n      font-size: 14px;\n      font-weight: 400;\n      background-color: #f4f4f4;\n      border: 1px solid #f4f4f4;\n      cursor: pointer;\n      display: inline-block;\n      height: 32px;\n      min-width: 80px;\n      padding: 4px 20px 6px;\n      outline: none;\n      text-align: center; }\n\n    .ms-Button-label {\n      color: #333;\n      font-weight: 600;\n      font-size: 14px; }\n\n    :host.ms-Button--primary:hover {\n      background-color: #005a9e;\n      border-color: #005a9e; }\n\n    :host.ms-Button--primary, :host.ms-Button--primary:active {\n      background-color: #0078d7;\n      border-color: #0078d7; }\n\n    :host.ms-Button--primary .ms-Button-label {\n      color: #fff; }\n\n    :host[disabled], :host[disabled]:hover, :host[disabled]:active {\n      cursor: default;\n      background-color: #f4f4f4;\n      border-color: #f4f4f4; }\n\n    :host[disabled] .ms-Button-label {\n      color: #a6a6a6; }\n  "],
                template: "\n    <div class=\"ms-Button-label\"><ng-content></ng-content></div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = function () { return []; };
ButtonComponent.propDecorators = {
    'primary': [{ type: core.Input },],
    'classes': [{ type: core.HostBinding, args: ['class',] },],
    'classPrimary': [{ type: core.HostBinding, args: ['class.ms-Button--primary',] },],
};
var ButtonModule = (function () {
    function ButtonModule() {
    }
    return ButtonModule;
}());
ButtonModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    ButtonComponent
                ],
                exports: [
                    ButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonModule.ctorParameters = function () { return []; };
var CheckboxComponent = (function () {
    /**
     * @param {?} changeDetectorRef
     */
    function CheckboxComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(CheckboxComponent.prototype, "checked", {
        /**
         * @return {?}
         */
        get: function () {
            return this._checked;
        },
        /**
         * @param {?} checked
         * @return {?}
         */
        set: function (checked) {
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
    CheckboxComponent.prototype.onInputClick = function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = function (val) {
        this.checked = val;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    return CheckboxComponent;
}());
CheckboxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sx-ngx-fabric-checkbox',
                template: "\n    <input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\"/>\n    <label role=\"checkbox\" [attr.for]=\"inputId\" [class.is-checked]=\"checked\" [class.disabled]=\"disabled\">\n      <span class=\"ms-label\"><ng-content></ng-content></span>\n    </label>\n  ",
                styles: ["\n    :host {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      color: #333333;\n      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      min-height: 36px;\n      position: relative; }\n\n    input {\n      position: absolute;\n      opacity: 0; }\n\n    label {\n      display: inline-block;\n      cursor: pointer;\n      margin-top: 8px;\n      position: relative;\n      outline: 0;\n      vertical-align: top; }\n\n    label:hover {\n      color: #000000; }\n\n    label:before {\n      content: '';\n      display: inline-block;\n      border: 1px solid #a6a6a6;\n      width: 20px;\n      height: 20px;\n      cursor: pointer;\n      font-weight: 400;\n      position: absolute;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition-property: background, border, border-color;\n      transition-property: background, border, border-color;\n      -webkit-transition-duration: 200ms;\n              transition-duration: 200ms;\n      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);\n              transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); }\n\n    label:hover:before {\n      border: 1px solid #333333; }\n\n    label.disabled {\n      color: #c8c8c8; }\n\n    label.disabled:before, label.disabled:hover:before {\n      border: 1px solid #c8c8c8; }\n\n    label.is-checked:before {\n      border: 10px solid #0078d7;\n      background-color: #0078d7; }\n\n    label.is-checked:hover:before {\n      border: 10px solid #106ebe;\n      background-color: #106ebe; }\n\n    label.disabled.is-checked:before, label.disabled.is-checked:hover:before {\n      border: 10px solid #c8c8c8;\n      background-color: #c8c8c8; }\n\n    label:after {\n      content: '\\E73E';\n      font-family: FabricMDL2Icons;\n      display: none;\n      position: absolute;\n      font-weight: 900;\n      background-color: transparent;\n      font-size: 13px;\n      top: 0;\n      color: #fff;\n      line-height: 20px;\n      width: 20px;\n      text-align: center; }\n\n    label.is-checked:after {\n      display: block; }\n\n    .ms-label {\n      font-size: 14px;\n      padding: 0 0 0 26px;\n      cursor: pointer;\n      display: inline-block; }\n  "],
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
CheckboxComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
CheckboxComponent.propDecorators = {
    'checked': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
};
var CheckboxModule = (function () {
    function CheckboxModule() {
    }
    return CheckboxModule;
}());
CheckboxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    CheckboxComponent
                ],
                exports: [
                    CheckboxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
CheckboxModule.ctorParameters = function () { return []; };
var SxNgxDialogContainerComponent = (function (_super) {
    __extends(SxNgxDialogContainerComponent, _super);
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} _document
     */
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
    SxNgxDialogContainerComponent.prototype.attachComponentPortal = function (portal$$1) {
        // if (this._portalOutlet.hasAttached()) {
        //   throw new Error('Has already attached')
        // }
        return this._portalOutlet.attachComponentPortal(portal$$1);
    };
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    SxNgxDialogContainerComponent.prototype.attachTemplatePortal = function (portal$$1) {
        throw new Error('Method not implemented.');
    };
    return SxNgxDialogContainerComponent;
}(portal.BasePortalOutlet));
SxNgxDialogContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sx-ngx-fabric-dialog-container',
                template: "\n    <ng-template #portalOutlet=\"cdkPortalOutlet\" cdkPortalOutlet ></ng-template>\n  "
            },] },
];
/**
 * @nocollapse
 */
SxNgxDialogContainerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
]; };
SxNgxDialogContainerComponent.propDecorators = {
    '_portalOutlet': [{ type: core.ViewChild, args: ['portalOutlet',] },],
};
var SxNgxFabricDialogRef = (function () {
    /**
     * @param {?} overlayRef
     */
    function SxNgxFabricDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject.Subject();
        this._afterClosed = new Subject.Subject();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
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
var SxNgxFabricDialogService = (function () {
    /**
     * @param {?} injector
     * @param {?} overlay
     */
    function SxNgxFabricDialogService(injector, overlay$$1) {
        this.injector = injector;
        this.overlay = overlay$$1;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.open = function (component, config) {
        if (config === void 0) { config = {}; }
        // Override default configuration
        var /** @type {?} */ dialogConfig = Object.assign({}, DEFAULT_CONFIG, config);
        // Returns an OverlayRef which is a PortalHost
        var /** @type {?} */ overlayRef = this.createOverlay(dialogConfig);
        var /** @type {?} */ dialogContainer = this._attachDialogContainer(overlayRef, config);
        // Instantiate remote control
        var /** @type {?} */ dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
        overlayRef.backdropClick().subscribe(function (_) { return dialogRef.close(); });
        return dialogRef;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.createOverlay = function (config) {
        var /** @type {?} */ overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.getOverlayConfig = function (config) {
        var /** @type {?} */ positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        var /** @type {?} */ overlayConfig = new overlay.OverlayConfig({
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
     * @template T
     * @param {?} component
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.attachDialogContainer = function (component, overlayRef, config, dialogRef) {
        var /** @type {?} */ injector = this.createInjector(config, dialogRef);
        var /** @type {?} */ containerPortal = new portal.ComponentPortal(component, null, injector);
        var /** @type {?} */ containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype._attachDialogContainer = function (overlay$$1, config) {
        var /** @type {?} */ containerPortal = new portal.ComponentPortal(SxNgxDialogContainerComponent, null);
        var /** @type {?} */ containerRef = overlay$$1.attach(containerPortal);
        containerRef.instance._config = config;
        return containerRef.instance;
    };
    /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype._attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var /** @type {?} */ dialogRef = new SxNgxFabricDialogRef(overlayRef);
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
            dialogContainer.attachTemplatePortal(new portal.TemplatePortal(componentOrTemplateRef, null, /** @type {?} */ ({ $implicit: config.data, dialogRef: dialogRef })));
        }
        else {
            var /** @type {?} */ injector = this.createInjector(config, dialogRef);
            var /** @type {?} */ contentRef = dialogContainer.attachComponentPortal(new portal.ComponentPortal(/** @type {?} */ (componentOrTemplateRef), undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        // dialogRef
        //   .updateSize(config.width, config.height)
        //   .updatePosition(config.position);
        return dialogRef;
    };
    /**
     * @template T
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.createInjector = function (config, dialogRef) {
        var /** @type {?} */ injectionTokens = new WeakMap();
        injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
        injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);
        return new portal.PortalInjector(this.injector, injectionTokens);
    };
    return SxNgxFabricDialogService;
}());
SxNgxFabricDialogService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogService.ctorParameters = function () { return [
    { type: core.Injector, },
    { type: overlay.Overlay, },
]; };
/**
 * Counter used to generate unique IDs for dialog elements.
 */
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var SxNgxFabricDialogClose = (function () {
    /**
     * @param {?} dialogRef
     */
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
    SxNgxFabricDialogClose.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    return SxNgxFabricDialogClose;
}());
SxNgxFabricDialogClose.decorators = [
    { type: core.Directive, args: [{
                selector: "button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]",
                exportAs: 'sxNgxFabricDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel',
                    'type': 'button',
                }
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogClose.ctorParameters = function () { return [
    { type: SxNgxFabricDialogRef, },
]; };
SxNgxFabricDialogClose.propDecorators = {
    'ariaLabel': [{ type: core.Input, args: ['aria-label',] },],
    'dialogResult': [{ type: core.Input, args: ['sx-ngx-fabric-dialog-close',] },],
    'dialogClose': [{ type: core.Input, args: ['sxNgxFabricDialogClose',] },],
};
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var SxNgxFabricDialogTitle = (function () {
    /**
     * @param {?} _container
     */
    function SxNgxFabricDialogTitle(_container) {
        this._container = _container;
        this.id = "sx-ngx-fabric-dialog-title-" + dialogElementUid++;
    }
    return SxNgxFabricDialogTitle;
}());
SxNgxFabricDialogTitle.decorators = [
    { type: core.Directive, args: [{
                selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
                exportAs: 'sxNgxFabricDialogTitle',
                host: {
                    'class': 'ms-Dialog-title',
                    '[id]': 'id',
                },
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogTitle.ctorParameters = function () { return [
    { type: SxNgxDialogContainerComponent, decorators: [{ type: core.Optional },] },
]; };
SxNgxFabricDialogTitle.propDecorators = {
    'id': [{ type: core.Input },],
};
/**
 * Scrollable content container of a dialog.
 */
var SxNgxFabricDialogContent = (function () {
    function SxNgxFabricDialogContent() {
    }
    return SxNgxFabricDialogContent;
}());
SxNgxFabricDialogContent.decorators = [
    { type: core.Directive, args: [{
                selector: "[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]",
                host: { 'class': 'ms-Dialog-content' }
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogContent.ctorParameters = function () { return []; };
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var SxNgxFabricDialogActions = (function () {
    function SxNgxFabricDialogActions() {
    }
    return SxNgxFabricDialogActions;
}());
SxNgxFabricDialogActions.decorators = [
    { type: core.Directive, args: [{
                selector: "[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]",
                host: { 'class': 'ms-Dialog-actions' }
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogActions.ctorParameters = function () { return []; };
var DialogModule = (function () {
    function DialogModule() {
    }
    /**
     * @return {?}
     */
    DialogModule.forRoot = function () {
        return {
            ngModule: DialogModule,
            providers: [SxNgxFabricDialogService]
        };
    };
    return DialogModule;
}());
DialogModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    overlay.OverlayModule,
                    portal.PortalModule
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
            },] },
];
/**
 * @nocollapse
 */
DialogModule.ctorParameters = function () { return []; };
var SxNgxFabricModule = (function () {
    function SxNgxFabricModule() {
    }
    return SxNgxFabricModule;
}());
SxNgxFabricModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    CheckboxModule,
                    ButtonModule,
                    TextFieldModule,
                    DialogModule.forRoot(),
                    ToggleModule,
                    BreadcrumbModule
                ],
                exports: [
                    CheckboxModule,
                    ButtonModule,
                    TextFieldModule,
                    DialogModule,
                    ToggleModule,
                    BreadcrumbModule
                ]
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricModule.ctorParameters = function () { return []; };

exports.SxNgxFabricModule = SxNgxFabricModule;
exports.ɵr = BreadcrumbComponent;
exports.ɵq = BreadcrumbModule;
exports.ɵd = ButtonComponent;
exports.ɵc = ButtonModule;
exports.ɵb = CheckboxComponent;
exports.ɵa = CheckboxModule;
exports.ɵh = SxNgxDialogContainerComponent;
exports.ɵl = SxNgxFabricDialogActions;
exports.ɵi = SxNgxFabricDialogClose;
exports.ɵk = SxNgxFabricDialogContent;
exports.ɵj = SxNgxFabricDialogTitle;
exports.ɵm = SxNgxFabricDialogRef;
exports.ɵg = DialogModule;
exports.ɵn = SxNgxFabricDialogService;
exports.ɵf = TextFieldComponent;
exports.ɵe = TextFieldModule;
exports.ɵp = ToggleComponent;
exports.ɵo = ToggleModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sx-ngx-fabric.umd.js.map
