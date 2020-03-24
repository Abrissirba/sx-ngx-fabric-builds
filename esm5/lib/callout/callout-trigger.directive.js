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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUdMLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBNEJyRCxpQ0FBb0IsUUFBaUIsRUFBVSxRQUFvQixFQUFVLGlCQUFtQztRQUE1RixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7MkJBUHZFLElBQUk7NEJBQ3RCLEtBQUs7a0NBQ0MsWUFBWSxDQUFDLEtBQUs7cUNBQ2YsWUFBWSxDQUFDLEtBQUs7S0FJa0U7SUFqQnBILHNCQUNJLDhEQUF5Qjs7OztRQUQ3QjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFFRCxVQUE4QixHQUFxQjtZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNwQjs7O09BSkE7Ozs7SUFnQkQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVB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QUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNwRSxDQUFDO1NBQ0gsQ0FBQyxDQUFDOzs7Z0JBaEhOLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLE1BQU07d0JBQ3ZCLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDO29CQUNELFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQW5CQyxPQUFPO2dCQU1XLFVBQVU7Z0JBQVMsZ0JBQWdCOzs7NENBZXBELEtBQUs7O2tDQXhCUjs7U0F1QmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhbGxvdXRDb21wb25lbnQgfSBmcm9tICcuL2NhbGxvdXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3N4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXJdJyxcclxuICBob3N0OiB7XHJcbiAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcclxuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xyXG4gIH0sXHJcbiAgZXhwb3J0QXM6ICdzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsbG91dFRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXIoKTogQ2FsbG91dENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsb3V0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXIodmFsOiBDYWxsb3V0Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmNhbGxvdXQgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9wb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NhbGxvdXRPcGVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNhbGxvdXQ6IENhbGxvdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FsbG91dCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY2FsbG91dE9wZW4pIHtcclxuICAgICAgdGhpcy5fY3JlYXRlT3ZlcmxheSgpLmF0dGFjaCh0aGlzLl9wb3J0YWwpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNhbGxvdXQudXBkYXRlQmVha1Bvc2l0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VNZW51KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsb3V0LmNsb3NlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLm9wZW5DYWxsb3V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmNhbGxvdXQudGVtcGxhdGVSZWYsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9nZXRPdmVybGF5Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbik7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogcG9zaXRpb24sXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgW29yaWdpblgsIG9yaWdpbkZhbGxiYWNrWF06IEhvcml6b250YWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLmNhbGxvdXQueFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IFsnZW5kJywgJ3N0YXJ0J10gOiBbJ3N0YXJ0JywgJ2VuZCddO1xyXG5cclxuICAgIGNvbnN0IFtvdmVybGF5WSwgb3ZlcmxheUZhbGxiYWNrWV06IFZlcnRpY2FsQ29ubmVjdGlvblBvc1tdID1cclxuICAgICAgdGhpcy5jYWxsb3V0LnlQb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IFsnYm90dG9tJywgJ3RvcCddIDogWyd0b3AnLCAnYm90dG9tJ107XHJcblxyXG4gICAgbGV0IFtvcmlnaW5ZLCBvcmlnaW5GYWxsYmFja1ldID0gW292ZXJsYXlZLCBvdmVybGF5RmFsbGJhY2tZXTtcclxuICAgIGNvbnN0IFtvdmVybGF5WCwgb3ZlcmxheUZhbGxiYWNrWF0gPSBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTtcclxuICAgIGNvbnN0IG9mZnNldFkgPSAwO1xyXG5cclxuICAgIG9yaWdpblkgPSBvdmVybGF5WSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG4gICAgb3JpZ2luRmFsbGJhY2tZID0gb3ZlcmxheUZhbGxiYWNrWSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50LCB7IG9yaWdpblgsIG9yaWdpblkgfSwgeyBvdmVybGF5WCwgb3ZlcmxheVkgfSlcclxuICAgICAgLndpdGhPZmZzZXRZKG9mZnNldFkpXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WSB9KVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1kgfSwgeyBvdmVybGF5WCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1kgfSwgdW5kZWZpbmVkLCAtb2Zmc2V0WSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHsgb3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1kgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSB9LFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAtb2Zmc2V0WVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU3Vic2NyaXB0aW9uID0gcG9zaXRpb24ub25Qb3NpdGlvbkNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKG51bGwsIHggPT4geC5jb25uZWN0aW9uUGFpcikpLnN1YnNjcmliZShwb3MgPT4ge1xyXG4gICAgICBjb25zdCBpc0NhbGxvdXRVbmRlclRyaWdnZXIgPSBwb3MuY29ubmVjdGlvblBhaXIub3ZlcmxheVkgPT09ICd0b3AnO1xyXG4gICAgICBjb25zdCBpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA9IHBvcy5jb25uZWN0aW9uUGFpci5vdmVybGF5WCA9PT0gJ3N0YXJ0JztcclxuICAgICAgY29uc3QgdHJpZ2dlck1pZGRsZSA9IHRoaXMuX3BvcnRhbC52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDIgLSAxNDtcclxuXHJcbiAgICAgIHRoaXMuY2FsbG91dC5iZWFrUG9zaXRpb24gPSB7XHJcbiAgICAgICAgdG9wOiBpc0NhbGxvdXRVbmRlclRyaWdnZXIgPyAnLTZweCcgOiBudWxsLFxyXG4gICAgICAgIGJvdHRvbTogIWlzQ2FsbG91dFVuZGVyVHJpZ2dlciA/ICctNnB4JyA6IG51bGwsXHJcbiAgICAgICAgbGVmdDogaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPyB0cmlnZ2VyTWlkZGxlICsgJ3B4JyA6IG51bGwsXHJcbiAgICAgICAgcmlnaHQ6ICFpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA/IHRyaWdnZXJNaWRkbGUgKyAncHgnIDogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==