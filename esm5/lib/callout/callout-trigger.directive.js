/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            setTimeout(function () {
                _this.callout.updateBeakPosition();
            });
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
     * @return {?}
     */
    CalloutTriggerDirective.prototype._createOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            /** @type {?} */
            var config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe(function (_) {
                _this._overlayRef.detach();
            });
        }
        return this._overlayRef;
    };
    /**
     * @return {?}
     */
    CalloutTriggerDirective.prototype._getOverlayConfig = /**
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
     * @return {?}
     */
    CalloutTriggerDirective.prototype._getPosition = /**
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
     * @param {?} position
     * @return {?}
     */
    CalloutTriggerDirective.prototype._subscribeToPositions = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, function (x) { return x.connectionPair; })).subscribe(function (pos) {
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
        });
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
    /** @type {?} */
    CalloutTriggerDirective.prototype._portal;
    /** @type {?} */
    CalloutTriggerDirective.prototype._overlayRef;
    /** @type {?} */
    CalloutTriggerDirective.prototype._calloutOpen;
    /** @type {?} */
    CalloutTriggerDirective.prototype._closeSubscription;
    /** @type {?} */
    CalloutTriggerDirective.prototype._positionSubscription;
    /** @type {?} */
    CalloutTriggerDirective.prototype.callout;
    /** @type {?} */
    CalloutTriggerDirective.prototype._overlay;
    /** @type {?} */
    CalloutTriggerDirective.prototype._element;
    /** @type {?} */
    CalloutTriggerDirective.prototype._viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUdMLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBNEJyRCxpQ0FBb0IsUUFBaUIsRUFBVSxRQUFvQixFQUFVLGlCQUFtQztRQUE1RixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7MkJBUHZFLElBQUk7NEJBQ3RCLEtBQUs7a0NBQ0MsWUFBWSxDQUFDLEtBQUs7cUNBQ2YsWUFBWSxDQUFDLEtBQUs7S0FJa0U7SUFqQnBILHNCQUNJLDhEQUF5Qjs7OztRQUQ3QjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFFRCxVQUE4QixHQUFxQjtZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNwQjs7O09BSkE7Ozs7SUFnQkQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVB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Q0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDcEUsQ0FBQztTQUNILENBQUMsQ0FBQzs7O2dCQWhITixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsSUFBSSxFQUFFO3dCQUNKLGVBQWUsRUFBRSxNQUFNO3dCQUN2QixTQUFTLEVBQUUsc0JBQXNCO3FCQUNsQztvQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkFuQkMsT0FBTztnQkFNVyxVQUFVO2dCQUFTLGdCQUFnQjs7OzRDQWVwRCxLQUFLOztrQ0F4QlI7O1NBdUJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDYWxsb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxsb3V0LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyXScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXHJcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcclxuICB9LFxyXG4gIGV4cG9ydEFzOiAnc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGxvdXRUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCBzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyKCk6IENhbGxvdXRDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbG91dDtcclxuICB9XHJcblxyXG4gIHNldCBzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyKHZhbDogQ2FsbG91dENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5jYWxsb3V0ID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xyXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9jYWxsb3V0T3BlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Nsb3NlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBjYWxsb3V0OiBDYWxsb3V0Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhbGxvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NhbGxvdXRPcGVuKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZU92ZXJsYXkoKS5hdHRhY2godGhpcy5fcG9ydGFsKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsb3V0LnVwZGF0ZUJlYWtQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbG91dC5jbG9zZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5vcGVuQ2FsbG91dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcclxuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5jYWxsb3V0LnRlbXBsYXRlUmVmLCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZ2V0T3ZlcmxheUNvbmZpZygpO1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nZXRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5fc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb24pO1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHBvc2l0aW9uLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQb3NpdGlvbigpOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5GYWxsYmFja1hdOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5jYWxsb3V0LnhQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbJ2VuZCcsICdzdGFydCddIDogWydzdGFydCcsICdlbmQnXTtcclxuXHJcbiAgICBjb25zdCBbb3ZlcmxheVksIG92ZXJsYXlGYWxsYmFja1ldOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NbXSA9XHJcbiAgICAgIHRoaXMuY2FsbG91dC55UG9zaXRpb24gPT09ICdhYm92ZScgPyBbJ2JvdHRvbScsICd0b3AnXSA6IFsndG9wJywgJ2JvdHRvbSddO1xyXG5cclxuICAgIGxldCBbb3JpZ2luWSwgb3JpZ2luRmFsbGJhY2tZXSA9IFtvdmVybGF5WSwgb3ZlcmxheUZhbGxiYWNrWV07XHJcbiAgICBjb25zdCBbb3ZlcmxheVgsIG92ZXJsYXlGYWxsYmFja1hdID0gW29yaWdpblgsIG9yaWdpbkZhbGxiYWNrWF07XHJcbiAgICBjb25zdCBvZmZzZXRZID0gMDtcclxuXHJcbiAgICBvcmlnaW5ZID0gb3ZlcmxheVkgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIG9yaWdpbkZhbGxiYWNrWSA9IG92ZXJsYXlGYWxsYmFja1kgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5fZWxlbWVudCwgeyBvcmlnaW5YLCBvcmlnaW5ZIH0sIHsgb3ZlcmxheVgsIG92ZXJsYXlZIH0pXHJcbiAgICAgIC53aXRoT2Zmc2V0WShvZmZzZXRZKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblkgfSwgeyBvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVkgfSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZIH0sIHsgb3ZlcmxheVgsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZIH0sIHVuZGVmaW5lZCwgLW9mZnNldFkpXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcclxuICAgICAgICB7IG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZIH0sXHJcbiAgICAgICAgeyBvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1kgfSxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgLW9mZnNldFlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLm9uUG9zaXRpb25DaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZChudWxsLCB4ID0+IHguY29ubmVjdGlvblBhaXIpKS5zdWJzY3JpYmUocG9zID0+IHtcclxuICAgICAgY29uc3QgaXNDYWxsb3V0VW5kZXJUcmlnZ2VyID0gcG9zLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAndG9wJztcclxuICAgICAgY29uc3QgaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPSBwb3MuY29ubmVjdGlvblBhaXIub3ZlcmxheVggPT09ICdzdGFydCc7XHJcbiAgICAgIGNvbnN0IHRyaWdnZXJNaWRkbGUgPSB0aGlzLl9wb3J0YWwudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLyAyIC0gMTQ7XHJcblxyXG4gICAgICB0aGlzLmNhbGxvdXQuYmVha1Bvc2l0aW9uID0ge1xyXG4gICAgICAgIHRvcDogaXNDYWxsb3V0VW5kZXJUcmlnZ2VyID8gJy02cHgnIDogbnVsbCxcclxuICAgICAgICBib3R0b206ICFpc0NhbGxvdXRVbmRlclRyaWdnZXIgPyAnLTZweCcgOiBudWxsLFxyXG4gICAgICAgIGxlZnQ6IGlzQ2FsbG91dExlZnRBbGlnbmVkVG9UcmlnZ2VyID8gdHJpZ2dlck1pZGRsZSArICdweCcgOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0OiAhaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPyB0cmlnZ2VyTWlkZGxlICsgJ3B4JyA6IG51bGxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=