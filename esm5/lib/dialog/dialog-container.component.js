/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
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
        _portalOutlet: [{ type: ViewChild, args: ['portalOutlet', { static: true },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFtQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQixVQUFVLEVBQW1CLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JJO0lBSW1ELHlEQUFnQjtJQU1qRSx1Q0FDVSxXQUF1QixFQUV2QixrQkFBcUMsRUFDUCxTQUFjO1FBSnRELFlBTUUsaUJBQU8sU0FDUjtRQU5TLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRXZCLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDUCxlQUFTLEdBQVQsU0FBUyxDQUFLOztJQUd0RCxDQUFDOzs7Ozs7SUFFRCw2REFBcUI7Ozs7O0lBQXJCLFVBQXlCLE1BQTBCO1FBQ2pELDBDQUEwQztRQUMxQyw0Q0FBNEM7UUFDNUMsSUFBSTtRQUVKLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFDRCw0REFBb0I7Ozs7O0lBQXBCLFVBQXdCLE1BQXlCO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLDBGQUFnRDtpQkFDakQ7Ozs7Z0JBTm9ELFVBQVU7Z0JBQXRELGlCQUFpQjtnREFpQnJCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O2dDQVI3QixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF1QjdDLG9DQUFDO0NBQUEsQUE3QkQsQ0FJbUQsZ0JBQWdCLEdBeUJsRTtTQXpCWSw2QkFBNkI7Ozs7OztJQUV4QyxzREFBNEU7O0lBRTVFLGdEQUFpQzs7Ozs7SUFHL0Isb0RBQStCOzs7OztJQUUvQiwyREFBNkM7Ozs7O0lBQzdDLGtEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQb3J0YWxPdXRsZXQsIENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3QsIE9wdGlvbmFsLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeC1uZ3gtZmFicmljLWRpYWxvZy1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IHtcclxuICAvKiogVGhlIHBvcnRhbCBvdXRsZXQgaW5zaWRlIG9mIHRoaXMgY29udGFpbmVyIGludG8gd2hpY2ggdGhlIGRpYWxvZyBjb250ZW50IHdpbGwgYmUgbG9hZGVkLiAqL1xyXG4gIEBWaWV3Q2hpbGQoJ3BvcnRhbE91dGxldCcsIHsgc3RhdGljOiB0cnVlIH0pIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcclxuXHJcbiAgX2NvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIC8vIHByaXZhdGUgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIC8vIGlmICh0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBhbHJlYWR5IGF0dGFjaGVkJylcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xyXG4gIH1cclxuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICB9XHJcbn1cclxuIl19