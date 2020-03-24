/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var dialogConfig = tslib_1.__assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        var overlayRef = this.createOverlay(dialogConfig);
        /** @type {?} */
        var dialogContainer = this._attachDialogContainer(overlayRef, config);
        /** @type {?} */
        var dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
        overlayRef.backdropClick().subscribe(function (_) { return dialogRef.close(); });
        return dialogRef;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.createOverlay = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.getOverlayConfig = /**
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
     * @template T
     * @param {?} component
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @return {?}
     */
    SxNgxFabricDialogService.prototype.attachDialogContainer = /**
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
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype._attachDialogContainer = /**
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
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    SxNgxFabricDialogService.prototype._attachDialogContent = /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        /** @type {?} */
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
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, /** @type {?} */ ({ $implicit: config.data, dialogRef: dialogRef })));
        }
        else {
            /** @type {?} */
            var injector = this.createInjector(config, dialogRef);
            /** @type {?} */
            var contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(/** @type {?} */ (componentOrTemplateRef), undefined, injector));
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
    SxNgxFabricDialogService.prototype.createInjector = /**
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
    /** @type {?} */
    SxNgxFabricDialogService.prototype.injector;
    /** @type {?} */
    SxNgxFabricDialogService.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBaUIsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JHLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUU1RCxJQUFNLGNBQWMsR0FBNEI7SUFDOUMsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxVQUFVLEVBQUUsOEJBQThCO0lBQzFDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFNBQVMsRUFBRSxNQUFNO0NBQ2xCLENBQUM7O0lBSUEsa0NBQW9CLFFBQWtCLEVBQVUsT0FBZ0I7UUFBNUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7S0FBSTs7Ozs7OztJQUVwRSx1Q0FBSTs7Ozs7O0lBQUosVUFBUSxTQUEyQixFQUFFLE1BQW9DO1FBQXBDLHVCQUFBLEVBQUEsV0FBb0M7O1FBRXZFLElBQU0sWUFBWSx3QkFBUSxjQUFjLEVBQUssTUFBTSxFQUFHOztRQUd0RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFD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QWUsQ0FBQyxvQkFBb0IsQ0FDbEMsSUFBSSxjQUFjLENBQUksc0JBQXNCLEVBQUUsSUFBSSxvQkFBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsV0FBQSxFQUFFLEVBQUMsQ0FDaEcsQ0FBQztTQUNIO2FBQU07O1lBQ0wsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBSSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7O1lBQzNELElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBSSxJQUFJLGVBQWUsbUJBQU0sc0JBQXNCLEdBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkksU0FBUyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkQ7Ozs7UUFNRCxPQUFPLFNBQVMsQ0FBQzs7Ozs7Ozs7SUFHWCxpREFBYzs7Ozs7O2NBQUksTUFBK0IsRUFBRSxTQUFrQzs7UUFDM0YsSUFBTSxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV0QyxlQUFlLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELGVBQWUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVELE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQzs7O2dCQXJIN0QsVUFBVTs7OztnQkFoQndCLFFBQVE7Z0JBRmxDLE9BQU87O21DQUFoQjs7U0FtQmEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBDb21wb25lbnRUeXBlLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xyXG5pbXBvcnQgeyBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XHJcbmltcG9ydCB7IFNYX05HWF9GQUJSSUNfRElBTE9HX0RBVEEgfSBmcm9tICcuL2RpYWxvZy10b2tlbnMnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT05GSUc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnID0ge1xyXG4gIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gIGJhY2tkcm9wQ2xhc3M6ICdtcy1PdmVybGF5LS1kYXJrJyxcclxuICBwYW5lbENsYXNzOiAndG0tZmlsZS1wcmV2aWV3LWRpYWxvZy1wYW5lbCcsXHJcbiAgbWluV2lkdGg6ICcyNTBweCcsXHJcbiAgbWF4V2lkdGg6ICc4MHZ3JyxcclxuICBtaW5IZWlnaHQ6ICcxMDBweCcsXHJcbiAgbWF4SGVpZ2h0OiAnODB2aCdcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RmFicmljRGlhbG9nU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgb3BlbjxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgPSB7fSk6IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+IHtcclxuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcblxyXG4gICAgLy8gUmV0dXJucyBhbiBPdmVybGF5UmVmIHdoaWNoIGlzIGEgUG9ydGFsSG9zdFxyXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShkaWFsb2dDb25maWcpO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IHRoaXMuX2F0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5UmVmLCBjb25maWcpO1xyXG5cclxuICAgIC8vIEluc3RhbnRpYXRlIHJlbW90ZSBjb250cm9sXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLl9hdHRhY2hEaWFsb2dDb250ZW50KGNvbXBvbmVudCwgZGlhbG9nQ29udGFpbmVyLCBvdmVybGF5UmVmLCBjb25maWcpO1xyXG5cclxuICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IGRpYWxvZ1JlZi5jbG9zZSgpKTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcpIHtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoY29uZmlnKTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmdsb2JhbCgpXHJcbiAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxyXG4gICAgICAuY2VudGVyVmVydGljYWxseSgpO1xyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IGNvbmZpZy5iYWNrZHJvcENsYXNzLFxyXG4gICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgIG1pbldpZHRoOiBjb25maWcubWluV2lkdGgsXHJcbiAgICAgIG1heFdpZHRoOiBjb25maWcubWF4V2lkdGgsXHJcbiAgICAgIG1pbkhlaWdodDogY29uZmlnLm1pbkhlaWdodCxcclxuICAgICAgbWF4SGVpZ2h0OiBjb25maWcubWF4SGVpZ2h0XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoRGlhbG9nQ29udGFpbmVyPFQ+KFxyXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LFxyXG4gICAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZixcclxuICAgIGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcsXHJcbiAgICBkaWFsb2dSZWY6IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+XHJcbiAgKSB7XHJcbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3IoY29uZmlnLCBkaWFsb2dSZWYpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XHJcbiAgICBjb25zdCBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxUPiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2F0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5OiBPdmVybGF5UmVmLCBjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnKTogU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQge1xyXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICBjb25zdCBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudD4gPSBvdmVybGF5LmF0dGFjaChjb250YWluZXJQb3J0YWwpO1xyXG4gICAgY29udGFpbmVyUmVmLmluc3RhbmNlLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2F0dGFjaERpYWxvZ0NvbnRlbnQ8VD4oXHJcbiAgICBjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb21wb25lbnRUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8VD4sXHJcbiAgICBkaWFsb2dDb250YWluZXI6IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZixcclxuICAgIGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWdcclxuICApOiBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPiB7XHJcbiAgICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZyB3ZSdyZSBjcmVhdGluZyBpbiBvcmRlciB0byBnaXZlIHRoZSB1c2VyIGEgaGFuZGxlXHJcbiAgICAvLyB0byBtb2RpZnkgYW5kIGNsb3NlIGl0LlxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+KG92ZXJsYXlSZWYpO1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIGRpYWxvZyBiYWNrZHJvcCBpcyBjbGlja2VkLCB3ZSB3YW50IHRvIGNsb3NlIGl0LlxyXG4gICAgaWYgKGNvbmZpZy5oYXNCYWNrZHJvcCkge1xyXG4gICAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmICghZGlhbG9nUmVmLmRpc2FibGVDbG9zZSkge1xyXG4gICAgICAgIGRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvc2Ugd2hlbiBlc2NhcGUga2V5ZG93biBldmVudCBvY2N1cnNcclxuICAgIC8vIG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoXHJcbiAgICAvLyAgIGZpbHRlcihldmVudCA9PiBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UpXHJcbiAgICAvLyApLnN1YnNjcmliZSgoKSA9PiBkaWFsb2dSZWYuY2xvc2UoKSk7XHJcblxyXG4gICAgaWYgKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICBkaWFsb2dDb250YWluZXIuYXR0YWNoVGVtcGxhdGVQb3J0YWwoXHJcbiAgICAgICAgbmV3IFRlbXBsYXRlUG9ydGFsPFQ+KGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIG51bGwsIDxhbnk+eyAkaW1wbGljaXQ6IGNvbmZpZy5kYXRhLCBkaWFsb2dSZWYgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3RvcjxUPihjb25maWcsIGRpYWxvZ1JlZik7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRSZWYgPSBkaWFsb2dDb250YWluZXIuYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KG5ldyBDb21wb25lbnRQb3J0YWwoPGFueT5jb21wb25lbnRPclRlbXBsYXRlUmVmLCB1bmRlZmluZWQsIGluamVjdG9yKSk7XHJcbiAgICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZSA9IGNvbnRlbnRSZWYuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlhbG9nUmVmXHJcbiAgICAvLyAgIC51cGRhdGVTaXplKGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodClcclxuICAgIC8vICAgLnVwZGF0ZVBvc2l0aW9uKGNvbmZpZy5wb3NpdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5qZWN0b3I8VD4oY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZywgZGlhbG9nUmVmOiBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPik6IFBvcnRhbEluamVjdG9yIHtcclxuICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChTeE5neEZhYnJpY0RpYWxvZ1JlZiwgZGlhbG9nUmVmKTtcclxuICAgIGluamVjdGlvblRva2Vucy5zZXQoU1hfTkdYX0ZBQlJJQ19ESUFMT0dfREFUQSwgY29uZmlnLmRhdGEpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcclxuICB9XHJcbn1cclxuIl19