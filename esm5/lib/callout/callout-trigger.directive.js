/**
 * @fileoverview added by tsickle
 * Generated from: lib/callout/callout-trigger.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CalloutComponent } from './callout.component';
var CalloutTriggerDirective = /** @class */ (function () {
    function CalloutTriggerDirective(_overlay, _element, _viewContainerRef) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._overlayRef = null;
        this._calloutOpen = false;
        this._closeSubscription = Subscription.EMPTY;
        this._positionSubscription = Subscription.EMPTY;
    }
    Object.defineProperty(CalloutTriggerDirective.prototype, "sxNgxFabricCalloutTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.callout;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.callout = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype.openCallout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calloutOpen) {
            this._createOverlay().attach(this._portal);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.callout.updateBeakPosition();
            }));
        }
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.callout.closed.emit();
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype._handleClick = /**
     * @return {?}
     */
    function () {
        this.openCallout();
    };
    /**
     * @private
     * @return {?}
     */
    CalloutTriggerDirective.prototype._createOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            /** @type {?} */
            var config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this._overlayRef.detach();
            }));
        }
        return this._overlayRef;
    };
    /**
     * @private
     * @return {?}
     */
    CalloutTriggerDirective.prototype._getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this._getPosition();
        this._subscribeToPositions(position);
        return new OverlayConfig({
            hasBackdrop: true,
            positionStrategy: position,
            scrollStrategy: this._overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @private
     * @return {?}
     */
    CalloutTriggerDirective.prototype._getPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = tslib_1.__read(this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], originFallbackX = _a[1];
        var _b = tslib_1.__read(this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], 2), overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = tslib_1.__read([overlayY, overlayFallbackY], 2), originY = _c[0], originFallbackY = _c[1];
        var _d = tslib_1.__read([originX, originFallbackX], 2), overlayX = _d[0], overlayFallbackX = _d[1];
        /** @type {?} */
        var offsetY = 0;
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        return this._overlay
            .position()
            .connectedTo(this._element, { originX: originX, originY: originY }, { overlayX: overlayX, overlayY: overlayY })
            .withOffsetY(offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY: originY }, { overlayX: overlayFallbackX, overlayY: overlayY })
            .withFallbackPosition({ originX: originX, originY: originFallbackY }, { overlayX: overlayX, overlayY: overlayFallbackY }, undefined, -offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY: originFallbackY }, { overlayX: overlayFallbackX, overlayY: overlayFallbackY }, undefined, -offsetY);
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    CalloutTriggerDirective.prototype._subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.connectionPair; }))).subscribe((/**
         * @param {?} pos
         * @return {?}
         */
        function (pos) {
            /** @type {?} */
            var isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
            /** @type {?} */
            var isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
            /** @type {?} */
            var triggerMiddle = _this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;
            _this.callout.beakPosition = {
                top: isCalloutUnderTrigger ? '-6px' : null,
                bottom: !isCalloutUnderTrigger ? '-6px' : null,
                left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
                right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
            };
        }));
    };
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
    CalloutTriggerDirective.ctorParameters = function () { return [
        { type: Overlay },
        { type: ElementRef },
        { type: ViewContainerRef }
    ]; };
    CalloutTriggerDirective.propDecorators = {
        sxNgxFabricCalloutTrigger: [{ type: Input }]
    };
    return CalloutTriggerDirective;
}());
export { CalloutTriggerDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._portal;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._calloutOpen;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._closeSubscription;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._positionSubscription;
    /** @type {?} */
    CalloutTriggerDirective.prototype.callout;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._element;
    /**
     * @type {?}
     * @private
     */
    CalloutTriggerDirective.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFHTCxPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBMEJFLGlDQUFvQixRQUFpQixFQUFVLFFBQW9CLEVBQVUsaUJBQW1DO1FBQTVGLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVB4RyxnQkFBVyxHQUFzQixJQUFJLENBQUM7UUFDdEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN4QywwQkFBcUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBSWdFLENBQUM7SUFqQnBILHNCQUNJLDhEQUF5Qjs7OztRQUQ3QjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUVELFVBQThCLEdBQXFCO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7OztPQUpBOzs7O0lBZ0JELDZDQUFX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TUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDOUMsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNqRSxLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNwRSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLElBQUksRUFBRTt3QkFDSixlQUFlLEVBQUUsTUFBTTt3QkFDdkIsU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7b0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBbEJDLE9BQU87Z0JBTVcsVUFBVTtnQkFBUyxnQkFBZ0I7Ozs0Q0FjcEQsS0FBSzs7SUF5R1IsOEJBQUM7Q0FBQSxBQWxIRCxJQWtIQztTQTFHWSx1QkFBdUI7Ozs7OztJQVVsQywwQ0FBcUM7Ozs7O0lBQ3JDLDhDQUE4Qzs7Ozs7SUFDOUMsK0NBQTZCOzs7OztJQUM3QixxREFBZ0Q7Ozs7O0lBQ2hELHdEQUFtRDs7SUFFbkQsMENBQTBCOzs7OztJQUVkLDJDQUF5Qjs7Ozs7SUFBRSwyQ0FBNEI7Ozs7O0lBQUUsb0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ2FsbG91dENvbXBvbmVudCB9IGZyb20gJy4vY2FsbG91dC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcl0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxyXG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXHJcbiAgfSxcclxuICBleHBvcnRBczogJ3N4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxsb3V0VHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBnZXQgc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcigpOiBDYWxsb3V0Q29tcG9uZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNhbGxvdXQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcih2YWw6IENhbGxvdXRDb21wb25lbnQpIHtcclxuICAgIHRoaXMuY2FsbG91dCA9IHZhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcclxuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FsbG91dE9wZW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9jbG9zZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIF9wb3NpdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgY2FsbG91dDogQ2FsbG91dENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fcG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG9wZW5DYWxsb3V0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jYWxsb3V0T3Blbikge1xyXG4gICAgICB0aGlzLl9jcmVhdGVPdmVybGF5KCkuYXR0YWNoKHRoaXMuX3BvcnRhbCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsbG91dC51cGRhdGVCZWFrUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxvdXQuY2xvc2VkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVDbGljaygpIHtcclxuICAgIHRoaXMub3BlbkNhbGxvdXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XHJcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5fcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuY2FsbG91dC50ZW1wbGF0ZVJlZiwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2dldE92ZXJsYXlDb25maWcoKTtcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuX3N1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uKTtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiBwb3NpdGlvbixcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb24oKTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3NbXSA9IHRoaXMuY2FsbG91dC54UG9zaXRpb24gPT09ICdiZWZvcmUnID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XHJcblxyXG4gICAgY29uc3QgW292ZXJsYXlZLCBvdmVybGF5RmFsbGJhY2tZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPVxyXG4gICAgICB0aGlzLmNhbGxvdXQueVBvc2l0aW9uID09PSAnYWJvdmUnID8gWydib3R0b20nLCAndG9wJ10gOiBbJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgICBsZXQgW29yaWdpblksIG9yaWdpbkZhbGxiYWNrWV0gPSBbb3ZlcmxheVksIG92ZXJsYXlGYWxsYmFja1ldO1xyXG4gICAgY29uc3QgW292ZXJsYXlYLCBvdmVybGF5RmFsbGJhY2tYXSA9IFtvcmlnaW5YLCBvcmlnaW5GYWxsYmFja1hdO1xyXG4gICAgY29uc3Qgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgb3JpZ2luWSA9IG92ZXJsYXlZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICBvcmlnaW5GYWxsYmFja1kgPSBvdmVybGF5RmFsbGJhY2tZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuX2VsZW1lbnQsIHsgb3JpZ2luWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYLCBvdmVybGF5WSB9KVxyXG4gICAgICAud2l0aE9mZnNldFkob2Zmc2V0WSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZIH0sIHsgb3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZIH0pXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSB9LCB7IG92ZXJsYXlYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSB9LCB1bmRlZmluZWQsIC1vZmZzZXRZKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAgeyBvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZIH0sXHJcbiAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgIC1vZmZzZXRZXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSkge1xyXG4gICAgdGhpcy5fcG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5vblBvc2l0aW9uQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQobnVsbCwgeCA9PiB4LmNvbm5lY3Rpb25QYWlyKSkuc3Vic2NyaWJlKHBvcyA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ2FsbG91dFVuZGVyVHJpZ2dlciA9IHBvcy5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ3RvcCc7XHJcbiAgICAgIGNvbnN0IGlzQ2FsbG91dExlZnRBbGlnbmVkVG9UcmlnZ2VyID0gcG9zLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYID09PSAnc3RhcnQnO1xyXG4gICAgICBjb25zdCB0cmlnZ2VyTWlkZGxlID0gdGhpcy5fcG9ydGFsLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMiAtIDE0O1xyXG5cclxuICAgICAgdGhpcy5jYWxsb3V0LmJlYWtQb3NpdGlvbiA9IHtcclxuICAgICAgICB0b3A6IGlzQ2FsbG91dFVuZGVyVHJpZ2dlciA/ICctNnB4JyA6IG51bGwsXHJcbiAgICAgICAgYm90dG9tOiAhaXNDYWxsb3V0VW5kZXJUcmlnZ2VyID8gJy02cHgnIDogbnVsbCxcclxuICAgICAgICBsZWZ0OiBpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA/IHRyaWdnZXJNaWRkbGUgKyAncHgnIDogbnVsbCxcclxuICAgICAgICByaWdodDogIWlzQ2FsbG91dExlZnRBbGlnbmVkVG9UcmlnZ2VyID8gdHJpZ2dlck1pZGRsZSArICdweCcgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19