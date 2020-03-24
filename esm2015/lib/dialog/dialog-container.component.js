/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
export class SxNgxDialogContainerComponent extends BasePortalOutlet {
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
    _portalOutlet: [{ type: ViewChild, args: ['portalOutlet', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQW1DLE1BQU0scUJBQXFCLENBQUM7QUFDekcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWdCLFVBQVUsRUFBbUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPckksTUFBTSxPQUFPLDZCQUE4QixTQUFRLGdCQUFnQjs7Ozs7O0lBTWpFLFlBQ1UsV0FBdUIsRUFFdkIsa0JBQXFDLEVBQ1AsU0FBYztRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUxBLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRXZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDUCxjQUFTLEdBQVQsU0FBUyxDQUFLO0lBR3RELENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUFJLE1BQTBCO1FBQ2pELDBDQUEwQztRQUMxQyw0Q0FBNEM7UUFDNUMsSUFBSTtRQUVKLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFDRCxvQkFBb0IsQ0FBSSxNQUF5QjtRQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQywwRkFBZ0Q7YUFDakQ7Ozs7WUFOb0QsVUFBVTtZQUF0RCxpQkFBaUI7NENBaUJyQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7Ozs0QkFSN0IsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFBM0Msc0RBQTRFOztJQUU1RSxnREFBaUM7Ozs7O0lBRy9CLG9EQUErQjs7Ozs7SUFFL0IsMkRBQTZDOzs7OztJQUM3QyxrREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUG9ydGFsT3V0bGV0LCBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBPcHRpb25hbCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1kaWFsb2ctY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBvcnRhbE91dGxldCB7XHJcbiAgLyoqIFRoZSBwb3J0YWwgb3V0bGV0IGluc2lkZSBvZiB0aGlzIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBkaWFsb2cgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cclxuICBAVmlld0NoaWxkKCdwb3J0YWxPdXRsZXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfcG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XHJcblxyXG4gIF9jb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAvLyBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICAvLyBpZiAodGhpcy5fcG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdIYXMgYWxyZWFkeSBhdHRhY2hlZCcpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcclxuICB9XHJcbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxDPik6IEVtYmVkZGVkVmlld1JlZjxDPiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==