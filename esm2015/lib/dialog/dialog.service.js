/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef } from '@angular/core';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogRef } from './dialog-ref';
import { SX_NGX_FABRIC_DIALOG_DATA } from './dialog-tokens';
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
export class SxNgxFabricDialogService {
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
if (false) {
    /** @type {?} */
    SxNgxFabricDialogService.prototype.injector;
    /** @type {?} */
    SxNgxFabricDialogService.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFpQixjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckcsT0FBTyxFQUFnQixVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTVELE1BQU0sY0FBYyxHQUE0QjtJQUM5QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsUUFBUSxFQUFFLE9BQU87SUFDakIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsU0FBUyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztBQUdGLE1BQU07Ozs7O0lBQ0osWUFBb0IsUUFBa0IsRUFBVSxPQUFnQjtRQUE1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztLQUFJOzs7Ozs7O0lBRXBFLElBQUksQ0FBSSxTQUEyQixFQUFFLFNBQWtDLEVBQUU7O1FBRXZFLE1BQU0sWUFBWSxxQkFBUSxjQUFjLEVBQUssTUFBTSxFQUFHOztRQUd0RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDOztRQUVwRCxNQUFNLGVBQWUs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QUUsSUFBSSxvQkFBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFDLENBQ2hHLENBQUM7U0FDSDthQUFNOztZQUNMLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUksTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztZQUMzRCxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMscUJBQXFCLENBQUksSUFBSSxlQUFlLG1CQUFNLHNCQUFzQixHQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25JLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ25EOzs7O1FBTUQsT0FBTyxTQUFTLENBQUM7Ozs7Ozs7O0lBR1gsY0FBYyxDQUFJLE1BQStCLEVBQUUsU0FBa0M7O1FBQzNGLE1BQU0sZUFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFdEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxlQUFlLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RCxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7Ozs7WUFySDdELFVBQVU7Ozs7WUFoQndCLFFBQVE7WUFGbEMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSwgUG9ydGFsSW5qZWN0b3IsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcclxuaW1wb3J0IHsgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xyXG5pbXBvcnQgeyBTWF9OR1hfRkFCUklDX0RJQUxPR19EQVRBIH0gZnJvbSAnLi9kaWFsb2ctdG9rZW5zJztcclxuXHJcbmNvbnN0IERFRkFVTFRfQ09ORklHOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyA9IHtcclxuICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICBiYWNrZHJvcENsYXNzOiAnbXMtT3ZlcmxheS0tZGFyaycsXHJcbiAgcGFuZWxDbGFzczogJ3RtLWZpbGUtcHJldmlldy1kaWFsb2ctcGFuZWwnLFxyXG4gIG1pbldpZHRoOiAnMjUwcHgnLFxyXG4gIG1heFdpZHRoOiAnODB2dycsXHJcbiAgbWluSGVpZ2h0OiAnMTAwcHgnLFxyXG4gIG1heEhlaWdodDogJzgwdmgnXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIG9wZW48VD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnID0ge30pOiBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPiB7XHJcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cclxuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xyXG5cclxuICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheVJlZiB3aGljaCBpcyBhIFBvcnRhbEhvc3RcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoZGlhbG9nQ29uZmlnKTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSB0aGlzLl9hdHRhY2hEaWFsb2dDb250YWluZXIob3ZlcmxheVJlZiwgY29uZmlnKTtcclxuXHJcbiAgICAvLyBJbnN0YW50aWF0ZSByZW1vdGUgY29udHJvbFxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5fYXR0YWNoRGlhbG9nQ29udGVudChjb21wb25lbnQsIGRpYWxvZ0NvbnRhaW5lciwgb3ZlcmxheVJlZiwgY29uZmlnKTtcclxuXHJcbiAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiBkaWFsb2dSZWYuY2xvc2UoKSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheShjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnKSB7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZyk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcclxuICAgICAgLmNlbnRlclZlcnRpY2FsbHkoKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyxcclxuICAgICAgcGFuZWxDbGFzczogY29uZmlnLnBhbmVsQ2xhc3MsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiBwb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgICBtaW5XaWR0aDogY29uZmlnLm1pbldpZHRoLFxyXG4gICAgICBtYXhXaWR0aDogY29uZmlnLm1heFdpZHRoLFxyXG4gICAgICBtaW5IZWlnaHQ6IGNvbmZpZy5taW5IZWlnaHQsXHJcbiAgICAgIG1heEhlaWdodDogY29uZmlnLm1heEhlaWdodFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaERpYWxvZ0NvbnRhaW5lcjxUPihcclxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPixcclxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXHJcbiAgICBjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnLFxyXG4gICAgZGlhbG9nUmVmOiBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPlxyXG4gICkge1xyXG4gICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGNvbmZpZywgZGlhbG9nUmVmKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8VD4gPSBvdmVybGF5UmVmLmF0dGFjaChjb250YWluZXJQb3J0YWwpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXJSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hdHRhY2hEaWFsb2dDb250YWluZXIob3ZlcmxheTogT3ZlcmxheVJlZiwgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyk6IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQsIG51bGwpO1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8U3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQ+ID0gb3ZlcmxheS5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcclxuICAgIGNvbnRhaW5lclJlZi5pbnN0YW5jZS5fY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXJSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hdHRhY2hEaWFsb2dDb250ZW50PFQ+KFxyXG4gICAgY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxyXG4gICAgZGlhbG9nQ29udGFpbmVyOiBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXHJcbiAgICBjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnXHJcbiAgKTogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4ge1xyXG4gICAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBkaWFsb2cgd2UncmUgY3JlYXRpbmcgaW4gb3JkZXIgdG8gZ2l2ZSB0aGUgdXNlciBhIGhhbmRsZVxyXG4gICAgLy8gdG8gbW9kaWZ5IGFuZCBjbG9zZSBpdC5cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG5ldyBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPihvdmVybGF5UmVmKTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSBkaWFsb2cgYmFja2Ryb3AgaXMgY2xpY2tlZCwgd2Ugd2FudCB0byBjbG9zZSBpdC5cclxuICAgIGlmIChjb25maWcuaGFzQmFja2Ryb3ApIHtcclxuICAgICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvLyBpZiAoIWRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UpIHtcclxuICAgICAgICBkaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsb3NlIHdoZW4gZXNjYXBlIGtleWRvd24gZXZlbnQgb2NjdXJzXHJcbiAgICAvLyBvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKFxyXG4gICAgLy8gICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmICFkaWFsb2dSZWYuZGlzYWJsZUNsb3NlKVxyXG4gICAgLy8gKS5zdWJzY3JpYmUoKCkgPT4gZGlhbG9nUmVmLmNsb3NlKCkpO1xyXG5cclxuICAgIGlmIChjb21wb25lbnRPclRlbXBsYXRlUmVmIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgZGlhbG9nQ29udGFpbmVyLmF0dGFjaFRlbXBsYXRlUG9ydGFsKFxyXG4gICAgICAgIG5ldyBUZW1wbGF0ZVBvcnRhbDxUPihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBudWxsLCA8YW55PnsgJGltcGxpY2l0OiBjb25maWcuZGF0YSwgZGlhbG9nUmVmIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3I8VD4oY29uZmlnLCBkaWFsb2dSZWYpO1xyXG4gICAgICBjb25zdCBjb250ZW50UmVmID0gZGlhbG9nQ29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihuZXcgQ29tcG9uZW50UG9ydGFsKDxhbnk+Y29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCBpbmplY3RvcikpO1xyXG4gICAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UgPSBjb250ZW50UmVmLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpYWxvZ1JlZlxyXG4gICAgLy8gICAudXBkYXRlU2l6ZShjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXHJcbiAgICAvLyAgIC51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yPFQ+KGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcsIGRpYWxvZ1JlZjogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4pOiBQb3J0YWxJbmplY3RvciB7XHJcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgIGluamVjdGlvblRva2Vucy5zZXQoU3hOZ3hGYWJyaWNEaWFsb2dSZWYsIGRpYWxvZ1JlZik7XHJcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFNYX05HWF9GQUJSSUNfRElBTE9HX0RBVEEsIGNvbmZpZy5kYXRhKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==