/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Optional, Inject, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CdkPortalOutlet, BasePortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/platform-browser';
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
    _portalOutlet: [{ type: ViewChild, args: ['portalOutlet',] }]
};
if (false) {
    /**
     * The portal outlet inside of this container into which the dialog content will be loaded.
     * @type {?}
     */
    SxNgxDialogContainerComponent.prototype._portalOutlet;
    /** @type {?} */
    SxNgxDialogContainerComponent.prototype._config;
    /** @type {?} */
    SxNgxDialogContainerComponent.prototype._elementRef;
    /** @type {?} */
    SxNgxDialogContainerComponent.prototype._changeDetectorRef;
    /** @type {?} */
    SxNgxDialogContainerComponent.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsU0FBUyxFQUFpQyxRQUFRLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSyxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUE2QixNQUFNLHFCQUFxQixDQUFDO0FBR25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU1yRCxNQUFNLG9DQUFxQyxTQUFRLGdCQUFnQjs7Ozs7O0lBT2pFLFlBQ1UsYUFFQSxvQkFDOEIsU0FBYztRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUxBLGdCQUFXLEdBQVgsV0FBVztRQUVYLHVCQUFrQixHQUFsQixrQkFBa0I7UUFDWSxjQUFTLEdBQVQsU0FBUyxDQUFLO0tBR3JEOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBSSxNQUEwQjs7OztRQUtqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekQ7Ozs7OztJQUNELG9CQUFvQixDQUFJLE1BQXlCO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUM1Qzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQywwRkFBZ0Q7YUFDakQ7Ozs7WUFUNkgsVUFBVTtZQUE3QixpQkFBaUI7NENBcUJ2SCxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7Ozs0QkFSN0IsU0FBUyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9wdGlvbmFsLCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgQmFzZVBvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWwsIENka1BvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeC1uZ3gtZmFicmljLWRpYWxvZy1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IHtcclxuXHJcbiAgLyoqIFRoZSBwb3J0YWwgb3V0bGV0IGluc2lkZSBvZiB0aGlzIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBkaWFsb2cgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cclxuICBAVmlld0NoaWxkKCdwb3J0YWxPdXRsZXQnKSBfcG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XHJcblxyXG4gIF9jb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAvLyBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICAvLyBpZiAodGhpcy5fcG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdIYXMgYWxyZWFkeSBhdHRhY2hlZCcpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcclxuICB9XHJcbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxDPik6IEVtYmVkZGVkVmlld1JlZjxDPiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=