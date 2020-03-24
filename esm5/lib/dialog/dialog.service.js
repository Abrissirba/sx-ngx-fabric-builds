/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef } from '@angular/core';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogRef } from './dialog-ref';
import { SX_NGX_FABRIC_DIALOG_DATA } from './dialog-tokens';
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
        var dialogConfig = tslib_1.__assign({}, DEFAULT_CONFIG, config);
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
export { SxNgxFabricDialogService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQWlCLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRyxPQUFPLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFdEQsY0FBYyxHQUE0QjtJQUM5QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsUUFBUSxFQUFFLE9BQU87SUFDakIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsU0FBUyxFQUFFLE1BQU07Q0FDbEI7QUFFRDtJQUVFLGtDQUFvQixRQUFrQixFQUFVLE9BQWdCO1FBQTVDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQzs7Ozs7OztJQUVwRSx1Q0FBSTs7Ozs7O0lBQUosVUFBUSxTQUEyQixFQUFFLE1BQW9DO1FBQXBDLHVCQUFBLEVBQUEsV0FBb0M7OztZQUVqRSxZQUFZLHdCQUFRLGNBQWMsRUFBSyxNQUFNLENBQUU7OztZQUcvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7O1lBRTdDLGVBQWUs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eyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XHJcbmltcG9ydCB7IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcclxuaW1wb3J0IHsgU1hfTkdYX0ZBQlJJQ19ESUFMT0dfREFUQSB9IGZyb20gJy4vZGlhbG9nLXRva2Vucyc7XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTkZJRzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgPSB7XHJcbiAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgYmFja2Ryb3BDbGFzczogJ21zLU92ZXJsYXktLWRhcmsnLFxyXG4gIHBhbmVsQ2xhc3M6ICd0bS1maWxlLXByZXZpZXctZGlhbG9nLXBhbmVsJyxcclxuICBtaW5XaWR0aDogJzI1MHB4JyxcclxuICBtYXhXaWR0aDogJzgwdncnLFxyXG4gIG1pbkhlaWdodDogJzEwMHB4JyxcclxuICBtYXhIZWlnaHQ6ICc4MHZoJ1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxyXG5cclxuICBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyA9IHt9KTogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4ge1xyXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXHJcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcclxuXHJcbiAgICAvLyBSZXR1cm5zIGFuIE92ZXJsYXlSZWYgd2hpY2ggaXMgYSBQb3J0YWxIb3N0XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KGRpYWxvZ0NvbmZpZyk7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gdGhpcy5fYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXlSZWYsIGNvbmZpZyk7XHJcblxyXG4gICAgLy8gSW5zdGFudGlhdGUgcmVtb3RlIGNvbnRyb2xcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX2F0dGFjaERpYWxvZ0NvbnRlbnQoY29tcG9uZW50LCBkaWFsb2dDb250YWluZXIsIG92ZXJsYXlSZWYsIGNvbmZpZyk7XHJcblxyXG4gICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4gZGlhbG9nUmVmLmNsb3NlKCkpO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZykge1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyhjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZ2xvYmFsKClcclxuICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXHJcbiAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcclxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogcG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgbWluV2lkdGg6IGNvbmZpZy5taW5XaWR0aCxcclxuICAgICAgbWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcclxuICAgICAgbWluSGVpZ2h0OiBjb25maWcubWluSGVpZ2h0LFxyXG4gICAgICBtYXhIZWlnaHQ6IGNvbmZpZy5tYXhIZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hEaWFsb2dDb250YWluZXI8VD4oXHJcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sXHJcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxyXG4gICAgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyxcclxuICAgIGRpYWxvZ1JlZjogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD5cclxuICApIHtcclxuICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3Rvcihjb25maWcsIGRpYWxvZ1JlZik7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPFQ+ID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXk6IE92ZXJsYXlSZWYsIGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcpOiBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50LCBudWxsKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50PiA9IG92ZXJsYXkuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XHJcbiAgICBjb250YWluZXJSZWYuaW5zdGFuY2UuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXR0YWNoRGlhbG9nQ29udGVudDxUPihcclxuICAgIGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPixcclxuICAgIGRpYWxvZ0NvbnRhaW5lcjogU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxyXG4gICAgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZ1xyXG4gICk6IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+IHtcclxuICAgIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nIHdlJ3JlIGNyZWF0aW5nIGluIG9yZGVyIHRvIGdpdmUgdGhlIHVzZXIgYSBoYW5kbGVcclxuICAgIC8vIHRvIG1vZGlmeSBhbmQgY2xvc2UgaXQuXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSBuZXcgU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4ob3ZlcmxheVJlZik7XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgZGlhbG9nIGJhY2tkcm9wIGlzIGNsaWNrZWQsIHdlIHdhbnQgdG8gY2xvc2UgaXQuXHJcbiAgICBpZiAoY29uZmlnLmhhc0JhY2tkcm9wKSB7XHJcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKCFkaWFsb2dSZWYuZGlzYWJsZUNsb3NlKSB7XHJcbiAgICAgICAgZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbG9zZSB3aGVuIGVzY2FwZSBrZXlkb3duIGV2ZW50IG9jY3Vyc1xyXG4gICAgLy8gb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShcclxuICAgIC8vICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhZGlhbG9nUmVmLmRpc2FibGVDbG9zZSlcclxuICAgIC8vICkuc3Vic2NyaWJlKCgpID0+IGRpYWxvZ1JlZi5jbG9zZSgpKTtcclxuXHJcbiAgICBpZiAoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIGRpYWxvZ0NvbnRhaW5lci5hdHRhY2hUZW1wbGF0ZVBvcnRhbChcclxuICAgICAgICBuZXcgVGVtcGxhdGVQb3J0YWw8VD4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgbnVsbCwgPGFueT57ICRpbXBsaWNpdDogY29uZmlnLmRhdGEsIGRpYWxvZ1JlZiB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yPFQ+KGNvbmZpZywgZGlhbG9nUmVmKTtcclxuICAgICAgY29uc3QgY29udGVudFJlZiA9IGRpYWxvZ0NvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWw8VD4obmV3IENvbXBvbmVudFBvcnRhbCg8YW55PmNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwgaW5qZWN0b3IpKTtcclxuICAgICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaWFsb2dSZWZcclxuICAgIC8vICAgLnVwZGF0ZVNpemUoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxyXG4gICAgLy8gICAudXBkYXRlUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvcjxUPihjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnLCBkaWFsb2dSZWY6IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+KTogUG9ydGFsSW5qZWN0b3Ige1xyXG4gICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFN4Tmd4RmFicmljRGlhbG9nUmVmLCBkaWFsb2dSZWYpO1xyXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChTWF9OR1hfRkFCUklDX0RJQUxPR19EQVRBLCBjb25maWcuZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3Rpb25Ub2tlbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=