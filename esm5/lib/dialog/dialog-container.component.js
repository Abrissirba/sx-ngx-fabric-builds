/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Optional, Inject, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CdkPortalOutlet, BasePortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/platform-browser';
var SxNgxDialogContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SxNgxDialogContainerComponent, _super);
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
        _portalOutlet: [{ type: ViewChild, args: ['portalOutlet',] }]
    };
    return SxNgxDialogContainerComponent;
}(BasePortalOutlet));
export { SxNgxDialogContainerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTZCLFNBQVMsRUFBaUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEssT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBNkIsTUFBTSxxQkFBcUIsQ0FBQztBQUduRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBTUYseURBQWdCO0lBT2pFLHVDQUNVLGFBRUEsb0JBQzhCLFNBQWM7UUFKdEQsWUFNRSxpQkFBTyxTQUNSO1FBTlMsaUJBQVcsR0FBWCxXQUFXO1FBRVgsd0JBQWtCLEdBQWxCLGtCQUFrQjtRQUNZLGVBQVMsR0FBVCxTQUFTLENBQUs7O0tBR3JEOzs7Ozs7SUFFRCw2REFBcUI7Ozs7O0lBQXJCLFVBQXlCLE1BQTBCOzs7O1FBS2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6RDs7Ozs7O0lBQ0QsNERBQW9COzs7OztJQUFwQixVQUF3QixNQUF5QjtRQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDNUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsMEZBQWdEO2lCQUNqRDs7OztnQkFUNkgsVUFBVTtnQkFBN0IsaUJBQWlCO2dEQXFCdkgsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7Z0NBUjdCLFNBQVMsU0FBQyxjQUFjOzt3Q0FiM0I7RUFVbUQsZ0JBQWdCO1NBQXRELDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgT3B0aW9uYWwsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBCYXNlUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCwgQ2RrUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtZGlhbG9nLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXQge1xyXG5cclxuICAvKiogVGhlIHBvcnRhbCBvdXRsZXQgaW5zaWRlIG9mIHRoaXMgY29udGFpbmVyIGludG8gd2hpY2ggdGhlIGRpYWxvZyBjb250ZW50IHdpbGwgYmUgbG9hZGVkLiAqL1xyXG4gIEBWaWV3Q2hpbGQoJ3BvcnRhbE91dGxldCcpIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcclxuXHJcbiAgX2NvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIC8vIHByaXZhdGUgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIC8vIGlmICh0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBhbHJlYWR5IGF0dGFjaGVkJylcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xyXG4gIH1cclxuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==