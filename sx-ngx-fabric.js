import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, HostBinding, Inject, Injectable, InjectionToken, Injector, Input, NgModule, Optional, Output, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasePortalOutlet, ComponentPortal, PortalInjector, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/platform-browser';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { Subject as Subject$1 } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

class BreadcrumbComponent {
    constructor() {
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.itemClick.next(item);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-breadcrumb',
                template: `
    <div class="ms-Breadcrumb">
        <div class="ms-Breadcrumb-overflow">
          <div class="ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis" tabindex="1"></div>
          <i class="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"></i>
          <div class="ms-Breadcrumb-overflowMenu">
            <ul class="ms-ContextualMenu is-open"></ul>
          </div>
        </div>
        <ul class="ms-Breadcrumb-list">
          <li class="ms-Breadcrumb-listItem" *ngFor='let item of items'>
              <a class="ms-Breadcrumb-itemLink" tabindex="2" (click)="onClick(item)" [attr.title]="item.text">{{item.text}}</a>
              <i class="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"></i>
          </li>
        </ul>
      </div>
  `,
                styles: [`
    .ms-Breadcrumb {
      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
      -webkit-font-smoothing: antialiased;
      margin: 23px 0 1px; }

    .ms-Breadcrumb-overflow {
      display: none;
      position: relative; }

    .ms-Breadcrumb-list {
      white-space: nowrap;
      padding: 0;
      margin: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch; }

    .ms-Breadcrumb-list .ms-Breadcrumb-listItem {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; }

    .ms-Breadcrumb-itemLink {
      font-size: 21px;
      font-weight: 100;
      color: #333333;
      padding: 0 8px;
      max-width: 160px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-bottom: 3px; }

    .ms-Breadcrumb-itemLink, .ms-Breadcrumb-overflowButton {
      text-decoration: none;
      outline: transparent; }

    .ms-Breadcrumb-chevron {
      font-size: 12px;
      color: #666666; }

    .ms-Icon--ChevronRight:before {
      content: '\\E76C'; }

    .ms-Breadcrumb-itemLink:hover, .ms-Breadcrumb-overflowButton:hover {
      background-color: #f8f8f8;
      cursor: pointer; }
  `]
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    'items': [{ type: Input },],
    'itemClick': [{ type: Output },],
};

class BreadcrumbModule {
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
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbModule.ctorParameters = () => [];

class Guid {
    /**
     * @return {?}
     */
    static uniqueid() {
        // always start with a letter (for DOM friendlyness)
        let /** @type {?} */ idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            const /** @type {?} */ ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                // exclude all chars between : (58) and @ (64)
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);
        return (idstr);
    }
}

class ToggleComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._selected = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (selected !== this.selected) {
            this._selected = selected;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    get classIsDisabled() { return this.disabled; }
    /**
     * @param {?} evt
     * @return {?}
     */
    onInputClick(evt) {
        evt.stopPropagation();
        this.toggle();
    }
    /**
     * @return {?}
     */
    toggle() {
        this.selected = !this.selected;
        this._onChange(this.selected);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.selected = val;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
}
ToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-toggle',
                template: `
    <span class="ms-Toggle-description"><ng-content></ng-content></span>
    <input type="checkbox" [attr.id]="inputId" [checked]="checked" (click)="onInputClick($event)" [disabled]="disabled" class="ms-Toggle-input" />
    <label [attr.for]="inputId" class="ms-Toggle-field" [class.is-selected]="selected">
      <span class="ms-Label ms-Label--off">Off</span>
      <span class="ms-Label ms-Label--on">On</span>
    </label>
  `,
                styles: [`
    :host.ms-Toggle {
      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      font-weight: 400;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-box-shadow: none;
              box-shadow: none;
      position: relative;
      display: block;
      margin-bottom: 26px; }

    .ms-Toggle-description {
      color: #333333;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -webkit-box-shadow: none;
              box-shadow: none;
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
      display: block;
      padding-top: 5px;
      padding-right: 0px;
      padding-bottom: 5px;
      padding-left: 0px;
      word-wrap: break-word;
      overflow-wrap: break-word; }

    .ms-Toggle-input {
      display: none; }

    .ms-Toggle-field {
      position: relative;
      display: inline-block;
      width: 45px;
      height: 20px;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      border: 1px solid #a6a6a6;
      border-radius: 20px;
      cursor: pointer;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;
      outline: 0; }

    :host.ms-Toggle .ms-Toggle-field:before {
      position: absolute;
      top: 4px;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      content: '';
      left: 4px;
      background-color: #333333;
      outline: 1px solid transparent;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease; }

    :host.ms-Toggle .ms-Label {
      position: relative;
      padding: 0 0 0 50px; }

    :host.ms-Toggle .ms-Toggle-field .ms-Label {
      color: #000;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }

    :host.ms-Toggle .ms-Toggle-field .ms-Label--off {
      display: block; }

    :host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off {
      display: none; }

    :host.ms-Toggle .ms-Toggle-field .ms-Label--on {
      display: none; }

    :host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on {
      display: block; }

    :host.ms-Toggle .ms-Toggle-field.is-selected {
      background-color: #0078d7;
      border-color: #0078d7; }

    :host.ms-Toggle .ms-Toggle-field.is-selected:focus, :host.ms-Toggle .ms-Toggle-field.is-selected:hover {
      background-color: #106ebe;
      border-color: #106ebe; }

    :host.ms-Toggle .ms-Toggle-field.is-selected:before {
      background-color: #fff;
      left: 28px; }

    :host.ms-Toggle.is-disabled .ms-Toggle-field {
      background-color: #fff;
      border-color: #c8c8c8;
      pointer-events: none;
      cursor: default; }

    :host.ms-Toggle.is-disabled .ms-Toggle-field.is-selected {
      background-color: #c8c8c8; }

    :host.ms-Toggle.is-disabled .ms-Toggle-field:before {
      background-color: #fff; }

    :host.ms-Toggle.is-disabled .ms-Label {
      color: #a6a6a6; }
  `],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ToggleComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'ms-Toggle'
                }
            },] },
];
/**
 * @nocollapse
 */
ToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
ToggleComponent.propDecorators = {
    'selected': [{ type: Input },],
    'disabled': [{ type: Input },],
    'classIsDisabled': [{ type: HostBinding, args: ['class.is-disabled',] },],
};

class ToggleModule {
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
            },] },
];
/**
 * @nocollapse
 */
ToggleModule.ctorParameters = () => [];

class TextFieldComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.multiline = false;
        this.rows = 3;
        this.type = 'text';
        this.disabled = false;
        this.required = false;
        this.value = null;
        this.classes = 'ms-TextField';
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get classMultiline() { return this.multiline; }
    /**
     * @return {?}
     */
    get classIsDisabled() { return this.disabled; }
    /**
     * @param {?} evt
     * @return {?}
     */
    onChange(evt) {
        evt.stopPropagation();
        this.value = evt.target.value;
        this._onChange(this.value);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onTouched(evt) {
        this._onTouched();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.value = val;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
}
TextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-text-field',
                template: `
    <label class="ms-Label" [class.is-required]="required">{{label}}</label>
    <input class="ms-TextField-field"
      *ngIf="!multiline"
      [attr.type]="type" 
      [attr.placeholder]="placeholder" 
      [value]="value" 
      [disabled]="disabled" 
      (blur)="onTouched($event)"
      (change)="onChange($event)" 
      (keyup)="onChange($event)"
    />

    <textarea class="ms-TextField-field"
    *ngIf="multiline"
    [attr.type]="type" 
    [attr.placeholder]="placeholder" 
    [value]="value" 
    [disabled]="disabled"
    [attr.rows]="rows"
    (blur)="onTouched($event)"
    (change)="onChange($event)" 
    (keyup)="onChange($event)"
    ></textarea>
  `,
                styles: [`
    :host.ms-TextField {
      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-box-shadow: none;
              box-shadow: none;
      color: #333333;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 8px; }

    .ms-Label {
      font-size: 14px;
      font-weight: 600; }

    .ms-TextField-field {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-box-shadow: none;
              box-shadow: none;
      border: 1px solid #c8c8c8;
      border-radius: 0;
      font-weight: 300;
      font-size: 14px;
      color: #333333;
      height: 32px;
      padding: 6px 12px 7px;
      width: 100%;
      min-width: 180px;
      outline: 0;
      text-overflow: ellipsis; }

    :host.ms-TextField.ms-TextField--multiline .ms-TextField-field {
      color: #333333;
      font-size: 14px;
      line-height: 17px;
      min-height: 60px;
      min-width: 260px;
      padding-top: 6px;
      overflow: auto; }

    :host.ms-TextField.is-disabled .ms-TextField-field {
      background-color: #f4f4f4;
      border-color: #f4f4f4;
      pointer-events: none;
      cursor: default; }

    .ms-TextField-field:hover {
      border-color: #333333; }

    .ms-TextField-field:active, .ms-TextField-field:focus {
      border-color: #0078d7; }

    :host.ms-TextField.ng-invalid.ng-touched .ms-TextField-field {
      border-color: #a80000; }
  `],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextFieldComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
TextFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
TextFieldComponent.propDecorators = {
    'label': [{ type: Input },],
    'multiline': [{ type: Input },],
    'rows': [{ type: Input },],
    'type': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'disabled': [{ type: Input },],
    'required': [{ type: Input },],
    'classes': [{ type: HostBinding, args: ['class',] },],
    'classMultiline': [{ type: HostBinding, args: ['class.ms-TextField--multiline',] },],
    'classIsDisabled': [{ type: HostBinding, args: ['class.is-disabled',] },],
};

class TextFieldModule {
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
            },] },
];
/**
 * @nocollapse
 */
TextFieldModule.ctorParameters = () => [];

class ButtonComponent {
    constructor() {
        this.primary = false;
        this.classes = 'ms-Button';
    }
    /**
     * @return {?}
     */
    get classPrimary() { return this.primary; }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                styles: [`
    :host:hover {
      background-color: #eaeaea;
      border: 1px solid #eaeaea; }

    :host, :host:active {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -webkit-box-shadow: none;
              box-shadow: none;
      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
      -webkit-font-smoothing: antialiased;
      color: #333;
      font-size: 14px;
      font-weight: 400;
      background-color: #f4f4f4;
      border: 1px solid #f4f4f4;
      cursor: pointer;
      display: inline-block;
      height: 32px;
      min-width: 80px;
      padding: 4px 20px 6px;
      outline: none;
      text-align: center; }

    .ms-Button-label {
      color: #333;
      font-weight: 600;
      font-size: 14px; }

    :host.ms-Button--primary:hover {
      background-color: #005a9e;
      border-color: #005a9e; }

    :host.ms-Button--primary, :host.ms-Button--primary:active {
      background-color: #0078d7;
      border-color: #0078d7; }

    :host.ms-Button--primary .ms-Button-label {
      color: #fff; }

    :host[disabled], :host[disabled]:hover, :host[disabled]:active {
      cursor: default;
      background-color: #f4f4f4;
      border-color: #f4f4f4; }

    :host[disabled] .ms-Button-label {
      color: #a6a6a6; }
  `],
                template: `
    <div class="ms-Button-label"><ng-content></ng-content></div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    'primary': [{ type: Input },],
    'classes': [{ type: HostBinding, args: ['class',] },],
    'classPrimary': [{ type: HostBinding, args: ['class.ms-Button--primary',] },],
};

class ButtonModule {
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
            },] },
];
/**
 * @nocollapse
 */
ButtonModule.ctorParameters = () => [];

class CheckboxComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    set checked(checked) {
        if (checked !== this.checked) {
            this._checked = checked;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onInputClick(evt) {
        evt.stopPropagation();
        this.toggle();
    }
    /**
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.checked = val;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-checkbox',
                template: `
    <input type="checkbox" [attr.id]="inputId" [checked]="checked" (click)="onInputClick($event)" [disabled]="disabled"/>
    <label role="checkbox" [attr.for]="inputId" [class.is-checked]="checked" [class.disabled]="disabled">
      <span class="ms-label"><ng-content></ng-content></span>
    </label>
  `,
                styles: [`
    :host {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      color: #333333;
      font-family: Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
      font-size: 14px;
      font-weight: 400;
      min-height: 36px;
      position: relative; }

    input {
      position: absolute;
      opacity: 0; }

    label {
      display: inline-block;
      cursor: pointer;
      margin-top: 8px;
      position: relative;
      outline: 0;
      vertical-align: top; }

    label:hover {
      color: #000000; }

    label:before {
      content: '';
      display: inline-block;
      border: 1px solid #a6a6a6;
      width: 20px;
      height: 20px;
      cursor: pointer;
      font-weight: 400;
      position: absolute;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -webkit-transition-property: background, border, border-color;
      transition-property: background, border, border-color;
      -webkit-transition-duration: 200ms;
              transition-duration: 200ms;
      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
              transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); }

    label:hover:before {
      border: 1px solid #333333; }

    label.disabled {
      color: #c8c8c8; }

    label.disabled:before, label.disabled:hover:before {
      border: 1px solid #c8c8c8; }

    label.is-checked:before {
      border: 10px solid #0078d7;
      background-color: #0078d7; }

    label.is-checked:hover:before {
      border: 10px solid #106ebe;
      background-color: #106ebe; }

    label.disabled.is-checked:before, label.disabled.is-checked:hover:before {
      border: 10px solid #c8c8c8;
      background-color: #c8c8c8; }

    label:after {
      content: '\\E73E';
      font-family: FabricMDL2Icons;
      display: none;
      position: absolute;
      font-weight: 900;
      background-color: transparent;
      font-size: 13px;
      top: 0;
      color: #fff;
      line-height: 20px;
      width: 20px;
      text-align: center; }

    label.is-checked:after {
      display: block; }

    .ms-label {
      font-size: 14px;
      padding: 0 0 0 26px;
      cursor: pointer;
      display: inline-block; }
  `],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
CheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
CheckboxComponent.propDecorators = {
    'checked': [{ type: Input },],
    'disabled': [{ type: Input },],
};

class CheckboxModule {
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
            },] },
];
/**
 * @nocollapse
 */
CheckboxModule.ctorParameters = () => [];

class SxNgxDialogContainerComponent extends BasePortalOutlet {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} _document
     */
    constructor(_elementRef, _changeDetectorRef, _document) {
        super();
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._document = _document;
    }
    /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal$$1) {
        // if (this._portalOutlet.hasAttached()) {
        //   throw new Error('Has already attached')
        // }
        return this._portalOutlet.attachComponentPortal(portal$$1);
    }
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal$$1) {
        throw new Error('Method not implemented.');
    }
}
SxNgxDialogContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-dialog-container',
                template: `
    <ng-template #portalOutlet="cdkPortalOutlet" cdkPortalOutlet ></ng-template>
  `
            },] },
];
/**
 * @nocollapse
 */
SxNgxDialogContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] },] },
];
SxNgxDialogContainerComponent.propDecorators = {
    '_portalOutlet': [{ type: ViewChild, args: ['portalOutlet',] },],
};

class SxNgxFabricDialogRef {
    /**
     * @param {?} overlayRef
     */
    constructor(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject$1();
        this._afterClosed = new Subject$1();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    close(value) {
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
    }
    /**
     * @return {?}
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * @return {?}
     */
    beforeClose() {
        return this._beforeClose.asObservable();
    }
}

const SX_NGX_FABRIC_DIALOG_DATA = new InjectionToken('SX_NGX_FABRIC_DIALOG_DATA');

const DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'ms-Overlay--dark',
    panelClass: 'tm-file-preview-dialog-panel',
    minWidth: '250px',
    maxWidth: '80vw',
    minHeight: '100px',
    maxHeight: '80vh'
};
class SxNgxFabricDialogService {
    /**
     * @param {?} injector
     * @param {?} overlay
     */
    constructor(injector, overlay$$1) {
        this.injector = injector;
        this.overlay = overlay$$1;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    open(component, config = {}) {
        // Override default configuration
        const /** @type {?} */ dialogConfig = Object.assign({}, DEFAULT_CONFIG, config);
        // Returns an OverlayRef which is a PortalHost
        const /** @type {?} */ overlayRef = this.createOverlay(dialogConfig);
        const /** @type {?} */ dialogContainer = this._attachDialogContainer(overlayRef, config);
        // Instantiate remote control
        const /** @type {?} */ dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
        overlayRef.backdropClick().subscribe(_ => dialogRef.close());
        return dialogRef;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        const /** @type {?} */ overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    getOverlayConfig(config) {
        const /** @type {?} */ positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const /** @type {?} */ overlayConfig = new OverlayConfig({
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
    }
    /**
     * @template T
     * @param {?} component
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    attachDialogContainer(component, overlayRef, config, dialogRef) {
        const /** @type {?} */ injector = this.createInjector(config, dialogRef);
        const /** @type {?} */ containerPortal = new ComponentPortal(component, null, injector);
        const /** @type {?} */ containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    _attachDialogContainer(overlay$$1, config) {
        const /** @type {?} */ containerPortal = new ComponentPortal(SxNgxDialogContainerComponent, null);
        const /** @type {?} */ containerRef = overlay$$1.attach(containerPortal);
        containerRef.instance._config = config;
        return containerRef.instance;
    }
    /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        const /** @type {?} */ dialogRef = new SxNgxFabricDialogRef(overlayRef);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(() => {
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
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, /** @type {?} */ ({ $implicit: config.data, dialogRef })));
        }
        else {
            const /** @type {?} */ injector = this.createInjector(config, dialogRef);
            const /** @type {?} */ contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(/** @type {?} */ (componentOrTemplateRef), undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        // dialogRef
        //   .updateSize(config.width, config.height)
        //   .updatePosition(config.position);
        return dialogRef;
    }
    /**
     * @template T
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    createInjector(config, dialogRef) {
        const /** @type {?} */ injectionTokens = new WeakMap();
        injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
        injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);
        return new PortalInjector(this.injector, injectionTokens);
    }
}
SxNgxFabricDialogService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogService.ctorParameters = () => [
    { type: Injector, },
    { type: Overlay, },
];

/**
 * Counter used to generate unique IDs for dialog elements.
 */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class SxNgxFabricDialogClose {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
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
    ngOnChanges(changes) {
        const /** @type {?} */ proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
}
SxNgxFabricDialogClose.decorators = [
    { type: Directive, args: [{
                selector: `button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]`,
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
SxNgxFabricDialogClose.ctorParameters = () => [
    { type: SxNgxFabricDialogRef, },
];
SxNgxFabricDialogClose.propDecorators = {
    'ariaLabel': [{ type: Input, args: ['aria-label',] },],
    'dialogResult': [{ type: Input, args: ['sx-ngx-fabric-dialog-close',] },],
    'dialogClose': [{ type: Input, args: ['sxNgxFabricDialogClose',] },],
};
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class SxNgxFabricDialogTitle {
    /**
     * @param {?} _container
     */
    constructor(_container) {
        this._container = _container;
        this.id = `sx-ngx-fabric-dialog-title-${dialogElementUid++}`;
    }
}
SxNgxFabricDialogTitle.decorators = [
    { type: Directive, args: [{
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
SxNgxFabricDialogTitle.ctorParameters = () => [
    { type: SxNgxDialogContainerComponent, decorators: [{ type: Optional },] },
];
SxNgxFabricDialogTitle.propDecorators = {
    'id': [{ type: Input },],
};
/**
 * Scrollable content container of a dialog.
 */
class SxNgxFabricDialogContent {
}
SxNgxFabricDialogContent.decorators = [
    { type: Directive, args: [{
                selector: `[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]`,
                host: { 'class': 'ms-Dialog-content' }
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogContent.ctorParameters = () => [];
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class SxNgxFabricDialogActions {
}
SxNgxFabricDialogActions.decorators = [
    { type: Directive, args: [{
                selector: `[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]`,
                host: { 'class': 'ms-Dialog-actions' }
            },] },
];
/**
 * @nocollapse
 */
SxNgxFabricDialogActions.ctorParameters = () => [];

class DialogModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DialogModule,
            providers: [SxNgxFabricDialogService]
        };
    }
}
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
            },] },
];
/**
 * @nocollapse
 */
DialogModule.ctorParameters = () => [];

class SxNgxFabricModule {
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
SxNgxFabricModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { SxNgxFabricModule, BreadcrumbComponent as ɵr, BreadcrumbModule as ɵq, ButtonComponent as ɵd, ButtonModule as ɵc, CheckboxComponent as ɵb, CheckboxModule as ɵa, SxNgxDialogContainerComponent as ɵh, SxNgxFabricDialogActions as ɵl, SxNgxFabricDialogClose as ɵi, SxNgxFabricDialogContent as ɵk, SxNgxFabricDialogTitle as ɵj, SxNgxFabricDialogRef as ɵm, DialogModule as ɵg, SxNgxFabricDialogService as ɵn, TextFieldComponent as ɵf, TextFieldModule as ɵe, ToggleComponent as ɵp, ToggleModule as ɵo };
//# sourceMappingURL=sx-ngx-fabric.js.map
