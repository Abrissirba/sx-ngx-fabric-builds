import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef } from '@angular/core';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogRef } from './dialog-ref';
import { SX_NGX_FABRIC_DIALOG_DATA } from './dialog-tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
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
    constructor(injector, overlay) {
        this.injector = injector;
        this.overlay = overlay;
    }
    open(component, config = {}) {
        // Override default configuration
        const dialogConfig = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        // Returns an OverlayRef which is a PortalHost
        const overlayRef = this.createOverlay(dialogConfig);
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        // Instantiate remote control
        const dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);
        overlayRef.backdropClick().subscribe(_ => dialogRef.close());
        return dialogRef;
    }
    createOverlay(config) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    getOverlayConfig(config) {
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
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
    attachDialogContainer(component, overlayRef, config, dialogRef) {
        const injector = this.createInjector(config, dialogRef);
        const containerPortal = new ComponentPortal(component, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    _attachDialogContainer(overlay, config) {
        const containerPortal = new ComponentPortal(SxNgxDialogContainerComponent, null);
        const containerRef = overlay.attach(containerPortal);
        containerRef.instance._config = config;
        return containerRef.instance;
    }
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
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
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, { $implicit: config.data, dialogRef }));
        }
        else {
            const injector = this.createInjector(config, dialogRef);
            const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        // dialogRef
        //   .updateSize(config.width, config.height)
        //   .updatePosition(config.position);
        return dialogRef;
    }
    createInjector(config, dialogRef) {
        const injectionTokens = new WeakMap();
        injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
        injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);
        return new PortalInjector(this.injector, injectionTokens);
    }
}
SxNgxFabricDialogService.ɵfac = function SxNgxFabricDialogService_Factory(t) { return new (t || SxNgxFabricDialogService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.Overlay)); };
SxNgxFabricDialogService.ɵprov = i0.ɵɵdefineInjectable({ token: SxNgxFabricDialogService, factory: SxNgxFabricDialogService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogService, [{
        type: Injectable
    }], function () { return [{ type: i0.Injector }, { type: i1.Overlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQWlCLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRyxPQUFPLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRTVELE1BQU0sY0FBYyxHQUE0QjtJQUM5QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsUUFBUSxFQUFFLE9BQU87SUFDakIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsU0FBUyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztBQUdGLE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsWUFBb0IsUUFBa0IsRUFBVSxPQUFnQjtRQUE1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFHLENBQUM7SUFFcEUsSUFBSSxDQUFJLFNBQTJCLEVBQUUsU0FBa0MsRUFBRTtRQUN2RSxpQ0FBaUM7UUFDakMsTUFBTSxZQUFZLG1DQUFRLGNBQWMsR0FBSyxNQUFNLENBQUUsQ0FBQztRQUV0RCw4Q0FBOEM7UUFDOUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FB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dmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XHJcbmltcG9ydCB7IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcclxuaW1wb3J0IHsgU1hfTkdYX0ZBQlJJQ19ESUFMT0dfREFUQSB9IGZyb20gJy4vZGlhbG9nLXRva2Vucyc7XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTkZJRzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgPSB7XHJcbiAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgYmFja2Ryb3BDbGFzczogJ21zLU92ZXJsYXktLWRhcmsnLFxyXG4gIHBhbmVsQ2xhc3M6ICd0bS1maWxlLXByZXZpZXctZGlhbG9nLXBhbmVsJyxcclxuICBtaW5XaWR0aDogJzI1MHB4JyxcclxuICBtYXhXaWR0aDogJzgwdncnLFxyXG4gIG1pbkhlaWdodDogJzEwMHB4JyxcclxuICBtYXhIZWlnaHQ6ICc4MHZoJ1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxyXG5cclxuICBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyA9IHt9KTogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4ge1xyXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXHJcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcclxuXHJcbiAgICAvLyBSZXR1cm5zIGFuIE92ZXJsYXlSZWYgd2hpY2ggaXMgYSBQb3J0YWxIb3N0XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KGRpYWxvZ0NvbmZpZyk7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gdGhpcy5fYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXlSZWYsIGNvbmZpZyk7XHJcblxyXG4gICAgLy8gSW5zdGFudGlhdGUgcmVtb3RlIGNvbnRyb2xcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX2F0dGFjaERpYWxvZ0NvbnRlbnQoY29tcG9uZW50LCBkaWFsb2dDb250YWluZXIsIG92ZXJsYXlSZWYsIGNvbmZpZyk7XHJcblxyXG4gICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4gZGlhbG9nUmVmLmNsb3NlKCkpO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZykge1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyhjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZ2xvYmFsKClcclxuICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXHJcbiAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcclxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogcG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgbWluV2lkdGg6IGNvbmZpZy5taW5XaWR0aCxcclxuICAgICAgbWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcclxuICAgICAgbWluSGVpZ2h0OiBjb25maWcubWluSGVpZ2h0LFxyXG4gICAgICBtYXhIZWlnaHQ6IGNvbmZpZy5tYXhIZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hEaWFsb2dDb250YWluZXI8VD4oXHJcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sXHJcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxyXG4gICAgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyxcclxuICAgIGRpYWxvZ1JlZjogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD5cclxuICApIHtcclxuICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3Rvcihjb25maWcsIGRpYWxvZ1JlZik7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPFQ+ID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXk6IE92ZXJsYXlSZWYsIGNvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcpOiBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50LCBudWxsKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50PiA9IG92ZXJsYXkuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XHJcbiAgICBjb250YWluZXJSZWYuaW5zdGFuY2UuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXR0YWNoRGlhbG9nQ29udGVudDxUPihcclxuICAgIGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPixcclxuICAgIGRpYWxvZ0NvbnRhaW5lcjogU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxyXG4gICAgY29uZmlnOiBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZ1xyXG4gICk6IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+IHtcclxuICAgIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nIHdlJ3JlIGNyZWF0aW5nIGluIG9yZGVyIHRvIGdpdmUgdGhlIHVzZXIgYSBoYW5kbGVcclxuICAgIC8vIHRvIG1vZGlmeSBhbmQgY2xvc2UgaXQuXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSBuZXcgU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4ob3ZlcmxheVJlZik7XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgZGlhbG9nIGJhY2tkcm9wIGlzIGNsaWNrZWQsIHdlIHdhbnQgdG8gY2xvc2UgaXQuXHJcbiAgICBpZiAoY29uZmlnLmhhc0JhY2tkcm9wKSB7XHJcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKCFkaWFsb2dSZWYuZGlzYWJsZUNsb3NlKSB7XHJcbiAgICAgICAgZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbG9zZSB3aGVuIGVzY2FwZSBrZXlkb3duIGV2ZW50IG9jY3Vyc1xyXG4gICAgLy8gb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShcclxuICAgIC8vICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhZGlhbG9nUmVmLmRpc2FibGVDbG9zZSlcclxuICAgIC8vICkuc3Vic2NyaWJlKCgpID0+IGRpYWxvZ1JlZi5jbG9zZSgpKTtcclxuXHJcbiAgICBpZiAoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIGRpYWxvZ0NvbnRhaW5lci5hdHRhY2hUZW1wbGF0ZVBvcnRhbChcclxuICAgICAgICBuZXcgVGVtcGxhdGVQb3J0YWw8VD4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgbnVsbCwgPGFueT57ICRpbXBsaWNpdDogY29uZmlnLmRhdGEsIGRpYWxvZ1JlZiB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yPFQ+KGNvbmZpZywgZGlhbG9nUmVmKTtcclxuICAgICAgY29uc3QgY29udGVudFJlZiA9IGRpYWxvZ0NvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWw8VD4obmV3IENvbXBvbmVudFBvcnRhbCg8YW55PmNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwgaW5qZWN0b3IpKTtcclxuICAgICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaWFsb2dSZWZcclxuICAgIC8vICAgLnVwZGF0ZVNpemUoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxyXG4gICAgLy8gICAudXBkYXRlUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvcjxUPihjb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnLCBkaWFsb2dSZWY6IFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+KTogUG9ydGFsSW5qZWN0b3Ige1xyXG4gICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFN4Tmd4RmFicmljRGlhbG9nUmVmLCBkaWFsb2dSZWYpO1xyXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChTWF9OR1hfRkFCUklDX0RJQUxPR19EQVRBLCBjb25maWcuZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3Rpb25Ub2tlbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=