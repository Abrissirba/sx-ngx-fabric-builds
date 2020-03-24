import { DOCUMENT } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { BasePortalOutlet, ComponentPortal, PortalInjector, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Component, Input, HostBinding, ViewChild, TemplateRef, Output, EventEmitter, ElementRef, Optional, Inject, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, InjectionToken, Directive, ViewContainerRef, defineInjectable, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SxNgxFabricService {
    constructor() { }
}
SxNgxFabricService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SxNgxFabricService.ctorParameters = () => [];
/** @nocollapse */ SxNgxFabricService.ngInjectableDef = defineInjectable({ factory: function SxNgxFabricService_Factory() { return new SxNgxFabricService(); }, token: SxNgxFabricService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SxNgxFabricComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SxNgxFabricComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-sx-ngx-fabric',
                template: `
    <p>
      sx-ngx-fabric works!
    </p>
  `
            }] }
];
/** @nocollapse */
SxNgxFabricComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                selector: "sx-ngx-fabric-breadcrumb",
                template: "<div class=\"ms-Breadcrumb\">\r\n  <div class=\"ms-Breadcrumb-overflow\">\r\n    <div\r\n      class=\"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis\"\r\n      tabindex=\"1\"\r\n    ></div>\r\n    <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    <div class=\"ms-Breadcrumb-overflowMenu\">\r\n      <ul class=\"ms-ContextualMenu is-open\"></ul>\r\n    </div>\r\n  </div>\r\n  <ul class=\"ms-Breadcrumb-list\">\r\n    <li class=\"ms-Breadcrumb-listItem\" *ngFor=\"let item of items\">\r\n      <a\r\n        class=\"ms-Breadcrumb-itemLink\"\r\n        tabindex=\"2\"\r\n        (click)=\"onClick(item)\"\r\n        [attr.title]=\"item.text\"\r\n        >{{ item.text }}</a\r\n      >\r\n      <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                styles: [".ms-Breadcrumb{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow{display:none;position:relative}.ms-Breadcrumb-list{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list .ms-Breadcrumb-listItem{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron{font-size:12px;color:#666}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:#f8f8f8;cursor:pointer}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    items: [{ type: Input }],
    itemClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Guid {
    /**
     * @return {?}
     */
    static uniqueid() {
        /** @type {?} */
        let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            /** @type {?} */
            const ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                // exclude all chars between : (58) and @ (64)
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);
        return (idstr);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                template: "<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\"/>\r\n<label role=\"checkbox\" [attr.for]=\"inputId\" [class.is-checked]=\"checked\" [class.disabled]=\"disabled\">\r\n  <span class=\"ms-label\"><ng-content></ng-content></span>\r\n</label>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}input{position:absolute;opacity:0}label{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}label:hover{color:#000}label:before{content:'';display:inline-block;border:1px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}label:hover:before{border:1px solid #333}label.disabled{color:#c8c8c8}label.disabled:before,label.disabled:hover:before{border:1px solid #c8c8c8}label.is-checked:before{border:10px solid #0078d4;background-color:#0078d4}label.is-checked:hover:before{border:10px solid #106ebe;background-color:#106ebe}label.disabled.is-checked:before,label.disabled.is-checked:hover:before{border:10px solid #c8c8c8;background-color:#c8c8c8}label:after{content:'\\E73E';font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}label.is-checked:after{display:block}.ms-label{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CheckboxComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.primary = false;
        this.classes = true;
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
                template: "<div class=\"ms-Button-label\"><ng-content></ng-content></div>",
                styles: [":host:hover{background-color:#eaeaea;border:1px solid #eaeaea}:host,:host:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label{color:#333;font-weight:600;font-size:14px}:host.ms-Button--primary:hover{background-color:#005a9e;border-color:#005a9e}:host.ms-Button--primary,:host.ms-Button--primary:active{background-color:#0078d4;border-color:#0078d4}:host.ms-Button--primary .ms-Button-label{color:#fff}:host[disabled],:host[disabled]:active,:host[disabled]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}:host[disabled] .ms-Button-label{color:#a6a6a6}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    primary: [{ type: Input }],
    classes: [{ type: HostBinding, args: ['class.ms-Button',] }],
    classPrimary: [{ type: HostBinding, args: ['class.ms-Button--primary',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.changeDetectorRef.markForCheck();
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
                template: "<label class=\"ms-Label\" [class.is-required]=\"required\">{{label}}</label>\r\n<input class=\"ms-TextField-field\"\r\n  *ngIf=\"!multiline\"\r\n  [attr.type]=\"type\" \r\n  [attr.placeholder]=\"placeholder\" \r\n  [value]=\"value\" \r\n  [disabled]=\"disabled\" \r\n  (blur)=\"onTouched($event)\"\r\n  (change)=\"onChange($event)\" \r\n  (keyup)=\"onChange($event)\"\r\n/>\r\n\r\n<textarea class=\"ms-TextField-field\"\r\n*ngIf=\"multiline\"\r\n[attr.type]=\"type\" \r\n[attr.placeholder]=\"placeholder\" \r\n[value]=\"value\" \r\n[disabled]=\"disabled\"\r\n[attr.rows]=\"rows\"\r\n(blur)=\"onTouched($event)\"\r\n(change)=\"onChange($event)\" \r\n(keyup)=\"onChange($event)\"\r\n></textarea>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextFieldComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host.ms-TextField{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;width:100%}.ms-Label{font-size:14px;font-weight:600}.ms-TextField-field{box-sizing:border-box;margin:0;padding:6px 12px 7px;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}:host.ms-TextField.ms-TextField--multiline .ms-TextField-field{color:#333;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}:host.ms-TextField.is-disabled .ms-TextField-field{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field:hover{border-color:#333}.ms-TextField-field:active,.ms-TextField-field:focus{border-color:#0078d4}:host.ms-TextField.ng-invalid.ng-touched .ms-TextField-field{border-color:#a80000}"]
            }] }
];
/** @nocollapse */
TextFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    attachComponentPortal(portal) {
        // if (this._portalOutlet.hasAttached()) {
        //   throw new Error('Has already attached')
        // }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal) {
        throw new Error('Method not implemented.');
    }
}
SxNgxDialogContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-dialog-container',
                template: "<ng-template #portalOutlet=\"cdkPortalOutlet\" cdkPortalOutlet ></ng-template>"
            }] }
];
/** @nocollapse */
SxNgxDialogContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
SxNgxDialogContainerComponent.propDecorators = {
    _portalOutlet: [{ type: ViewChild, args: ['portalOutlet',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SxNgxFabricDialogRef {
    /**
     * @param {?} overlayRef
     */
    constructor(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject();
        this._afterClosed = new Subject();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const SX_NGX_FABRIC_DIALOG_DATA = new InjectionToken('SX_NGX_FABRIC_DIALOG_DATA');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
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
    constructor(injector, overlay) {
        this.injector = injector;
        this.overlay = overlay;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    open(component, config = {}) {
        /** @type {?} */
        const dialogConfig = Object.assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        const overlayRef = this.createOverlay(dialogConfig);
        /** @type {?} */
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        /** @type {?} */
        const dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
        overlayRef.backdropClick().subscribe(_ => dialogRef.close());
        return dialogRef;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    getOverlayConfig(config) {
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
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
        /** @type {?} */
        const injector = this.createInjector(config, dialogRef);
        /** @type {?} */
        const containerPortal = new ComponentPortal(component, null, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    _attachDialogContainer(overlay, config) {
        /** @type {?} */
        const containerPortal = new ComponentPortal(SxNgxDialogContainerComponent, null);
        /** @type {?} */
        const containerRef = overlay.attach(containerPortal);
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
        /** @type {?} */
        const dialogRef = new SxNgxFabricDialogRef(overlayRef);
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
            /** @type {?} */
            const injector = this.createInjector(config, dialogRef);
            /** @type {?} */
            const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(/** @type {?} */ (componentOrTemplateRef), undefined, injector));
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
        /** @type {?} */
        const injectionTokens = new WeakMap();
        injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
        injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);
        return new PortalInjector(this.injector, injectionTokens);
    }
}
SxNgxFabricDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SxNgxFabricDialogService.ctorParameters = () => [
    { type: Injector },
    { type: Overlay }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Counter used to generate unique IDs for dialog elements.
  @type {?} */
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
        /** @type {?} */
        const proxiedChange = changes["_sxNgxFabricDialogClose"] || changes["_sxNgxFabricDialogCloseResult"];
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
            },] }
];
/** @nocollapse */
SxNgxFabricDialogClose.ctorParameters = () => [
    { type: SxNgxFabricDialogRef }
];
SxNgxFabricDialogClose.propDecorators = {
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    dialogResult: [{ type: Input, args: ['sx-ngx-fabric-dialog-close',] }],
    dialogClose: [{ type: Input, args: ['sxNgxFabricDialogClose',] }]
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
            },] }
];
/** @nocollapse */
SxNgxFabricDialogTitle.ctorParameters = () => [
    { type: SxNgxDialogContainerComponent, decorators: [{ type: Optional }] }
];
SxNgxFabricDialogTitle.propDecorators = {
    id: [{ type: Input }]
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
            },] }
];
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToggleComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.offText = 'Off';
        this.onText = 'On';
        this.textLeft = false;
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
     * @return {?}
     */
    get classIsDisabled() { return this.disabled; }
    /**
     * @return {?}
     */
    get classTextLeft() { return this.textLeft; }
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
ToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-toggle',
                template: "<span class=\"ms-Toggle-description\"><ng-content></ng-content></span>\r\n<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\" class=\"ms-Toggle-input\" />\r\n<label [attr.for]=\"inputId\" class=\"ms-Toggle-field\" [class.is-selected]=\"checked\">\r\n  <span class=\"ms-Label ms-Label--off\">{{ offText }}</span>\r\n  <span class=\"ms-Label ms-Label--on\">{{ onText }}</span>\r\n</label>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ToggleComponent),
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
ToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ToggleComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    offText: [{ type: Input }],
    onText: [{ type: Input }],
    textLeft: [{ type: Input }],
    classIsDisabled: [{ type: HostBinding, args: ['class.is-disabled',] }],
    classTextLeft: [{ type: HostBinding, args: ['class.ms-Toggle--textLeft',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalloutComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get beakPosition() { return this._beakPosition; }
    /**
     * @param {?} val
     * @return {?}
     */
    set beakPosition(val) {
        this._beakPosition = val;
        this.updateBeakPosition();
    }
    /**
     * @return {?}
     */
    updateBeakPosition() {
        if (this.beakPosition) {
            this.beak.nativeElement.style.top = this.beakPosition.top;
            this.beak.nativeElement.style.left = this.beakPosition.left;
            this.beak.nativeElement.style.right = this.beakPosition.right;
            this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
        }
    }
}
CalloutComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-callout',
                template: "<ng-template>\r\n  <div class=\"ms-ContextualHost is-positioned ms-ContextualHost--arrowLeft\">\r\n    <div class=\"ms-ContextualHost-main\">\r\n      <div class=\"ms-Callout\">\r\n        <div class=\"ms-Callout-main\">\r\n          <div class=\"ms-Callout-header\">\r\n            <p class=\"ms-Callout-title\">\r\n              <ng-content select=\"[sxNgxFabricCalloutHeader]\"></ng-content>\r\n            </p>\r\n          </div>\r\n          <div class=\"ms-Callout-inner\">\r\n            <div class=\"ms-Callout-content\">\r\n              <p class=\"ms-Callout-subText\">\r\n                <ng-content select=\"[sxNgxFabricCalloutContent]\"></ng-content>\r\n              </p>\r\n            </div>\r\n            <div class=\"ms-Callout-actions\">\r\n              <ng-content select=\"[sxNgxFabricCalloutActions]\"></ng-content>\r\n            </div>\r\n          </div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div #beak class=\"ms-ContextualHost-beak\"></div>\r\n  </div>\r\n</ng-template>",
                styles: [".ms-ContextualHost{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header{z-index:105;padding:24px 28px 12px}.ms-Callout-title{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner{height:100%;padding:0 28px 12px}.ms-Callout-subText{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"]
            }] }
];
/** @nocollapse */
CalloutComponent.ctorParameters = () => [
    { type: ElementRef }
];
CalloutComponent.propDecorators = {
    xPosition: [{ type: Input }],
    yPosition: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    beak: [{ type: ViewChild, args: ['beak',] }],
    closed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalloutTriggerDirective {
    /**
     * @param {?} _overlay
     * @param {?} _element
     * @param {?} _viewContainerRef
     */
    constructor(_overlay, _element, _viewContainerRef) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._overlayRef = null;
        this._calloutOpen = false;
        this._closeSubscription = Subscription.EMPTY;
        this._positionSubscription = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get sxNgxFabricCalloutTrigger() {
        return this.callout;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set sxNgxFabricCalloutTrigger(val) {
        this.callout = val;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    openCallout() {
        if (!this._calloutOpen) {
            this._createOverlay().attach(this._portal);
            setTimeout(() => {
                this.callout.updateBeakPosition();
            });
        }
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.callout.closed.emit();
    }
    /**
     * @return {?}
     */
    _handleClick() {
        this.openCallout();
    }
    /**
     * @return {?}
     */
    _createOverlay() {
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            /** @type {?} */
            const config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe(_ => {
                this._overlayRef.detach();
            });
        }
        return this._overlayRef;
    }
    /**
     * @return {?}
     */
    _getOverlayConfig() {
        /** @type {?} */
        const position = this._getPosition();
        this._subscribeToPositions(position);
        return new OverlayConfig({
            hasBackdrop: true,
            positionStrategy: position,
            scrollStrategy: this._overlay.scrollStrategies.reposition()
        });
    }
    /**
     * @return {?}
     */
    _getPosition() {
        const [originX, originFallbackX] = this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        const [overlayY, overlayFallbackY] = this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        const [overlayX, overlayFallbackX] = [originX, originFallbackX];
        /** @type {?} */
        const offsetY = 0;
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        return this._overlay
            .position()
            .connectedTo(this._element, { originX, originY }, { overlayX, overlayY })
            .withOffsetY(offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY }, { overlayX: overlayFallbackX, overlayY })
            .withFallbackPosition({ originX, originY: originFallbackY }, { overlayX, overlayY: overlayFallbackY }, undefined, -offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY: originFallbackY }, { overlayX: overlayFallbackX, overlayY: overlayFallbackY }, undefined, -offsetY);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    _subscribeToPositions(position) {
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, x => x.connectionPair)).subscribe(pos => {
            /** @type {?} */
            const isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
            /** @type {?} */
            const isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
            /** @type {?} */
            const triggerMiddle = this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;
            this.callout.beakPosition = {
                top: isCalloutUnderTrigger ? '-6px' : null,
                bottom: !isCalloutUnderTrigger ? '-6px' : null,
                left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
                right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
            };
        });
    }
}
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
CalloutTriggerDirective.ctorParameters = () => [
    { type: Overlay },
    { type: ElementRef },
    { type: ViewContainerRef }
];
CalloutTriggerDirective.propDecorators = {
    sxNgxFabricCalloutTrigger: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalloutModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-nav',
                template: "<div class=\"ms-Nav-group group is-expanded groupIsExpanded\">\r\n  <div class=\"ms-Nav-groupContent groupContent\">\r\n    <ul role=\"list\" class=\"navItems\">\r\n      <li role=\"listitem\" class=\"navItem\">\r\n        <div name=\"Home\" class=\"ms-Nav-compositeLink compositeLink is-expanded compositeLinkIsExpanded\">\r\n          <button class=\"ms-Nav-chevronButton ms-Nav-chevronButton--link chevronButton chevronButtonLink\"\r\n            aria-expanded=\"true\" tabindex=\"0\">\r\n            <i role=\"presentation\" aria-hidden=\"true\" data-icon-name=\"ChevronDown\" class=\"ms-Icon ms-Nav-chevron chevronIcon\"></i>\r\n          </button>\r\n          <a class=\"ms-Nav-linkButton link isOnExpanded ms-Button ms-Button--action ms-Button--command\" href=\"http://example.com\"\r\n            title=\"Home\" tabindex=\"-1\">\r\n            <div class=\"ms-Button-flexContainer\">\r\n              <i role=\"presentation\" aria-hidden=\"true\" class=\"ms-Icon ms-Icon-placeHolder ms-Button-icon\"></i>\r\n              <div class=\"ms-Button-textContainer\"></div>\r\n              <div class=\"ms-Nav-linkText linkText\">Home</div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <ul role=\"list\" class=\"navItems\">\r\n          <li role=\"listitem\" class=\"navItem\">\r\n            <div name=\"Activity\" class=\"ms-Nav-compositeLink compositeLink\">\r\n              <a class=\"ms-Nav-linkButton link isOnExpanded ms-Button ms-Button--action ms-Button--command\"\r\n                href=\"http://msn.com\" title=\"Activity\" data-is-focusable=\"true\" tabindex=\"-1\">\r\n                <div class=\"ms-Button-flexContainer\">\r\n                  <i role=\"presentation\" aria-hidden=\"true\" class=\"ms-Icon ms-Icon-placeHolder ms-Button-icon\"></i>\r\n                  <div class=\"ms-Button-textContainer\"></div>\r\n                  <div class=\"ms-Nav-linkText linkText\">Activity</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li role=\"listitem\" class=\"navItem\" >\r\n        <div name=\"Documents\" class=\"ms-Nav-compositeLink compositeLink is-expanded is-selected compositeLinkIsExpanded compositeLinkIsSelected\">\r\n          <a class=\"ms-Nav-linkButton link isOnExpanded ms-Button ms-Button--action ms-Button--command\" href=\"http://example.com\"\r\n            title=\"Documents\" data-is-focusable=\"true\"tabindex=\"-1\">\r\n            <div class=\"ms-Button-flexContainer\">\r\n              <i role=\"presentation\" aria-hidden=\"true\" class=\"ms-Icon ms-Icon-placeHolder ms-Button-icon\"></i>\r\n              <div class=\"ms-Button-textContainer\"></div>\r\n              <div class=\"ms-Nav-linkText\">Documents</div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
NavComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SxNgxFabricService, SxNgxFabricComponent, SxNgxFabricModule, BreadcrumbModule, BreadcrumbComponent, SxNgxFabricDialogRef, SX_NGX_FABRIC_DIALOG_DATA, SxNgxFabricDialogService, ButtonComponent as ɵd, ButtonModule as ɵc, CalloutTriggerDirective as ɵq, CalloutComponent as ɵp, CalloutModule as ɵo, CheckboxComponent as ɵb, CheckboxModule as ɵa, SxNgxDialogContainerComponent as ɵh, SxNgxFabricDialogActions as ɵl, SxNgxFabricDialogClose as ɵi, SxNgxFabricDialogContent as ɵk, SxNgxFabricDialogTitle as ɵj, DialogModule as ɵg, NavComponent as ɵs, NavModule as ɵr, TextFieldComponent as ɵf, TextFieldModule as ɵe, ToggleComponent as ɵn, ToggleModule as ɵm };

//# sourceMappingURL=sx-ngx-fabric.js.map