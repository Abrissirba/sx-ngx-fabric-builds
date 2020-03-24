/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CalloutComponent } from './callout.component';
export class CalloutTriggerDirective {
    /**
     * @param {?} _overlay
     * @param {?} _element
     * @param {?} _viewContainerRef
     */
    constructor(_overlay, _element, _viewContainerRef) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._overlayRef = null;
        this._calloutOpen = false;
        this._closeSubscription = Subscription.EMPTY;
        this._positionSubscription = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get sxNgxFabricCalloutTrigger() {
        return this.callout;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set sxNgxFabricCalloutTrigger(val) {
        this.callout = val;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    openCallout() {
        if (!this._calloutOpen) {
            this._createOverlay().attach(this._portal);
            setTimeout(() => {
                this.callout.updateBeakPosition();
            });
        }
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.callout.closed.emit();
    }
    /**
     * @return {?}
     */
    _handleClick() {
        this.openCallout();
    }
    /**
     * @return {?}
     */
    _createOverlay() {
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            /** @type {?} */
            const config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe(_ => {
                this._overlayRef.detach();
            });
        }
        return this._overlayRef;
    }
    /**
     * @return {?}
     */
    _getOverlayConfig() {
        /** @type {?} */
        const position = this._getPosition();
        this._subscribeToPositions(position);
        return new OverlayConfig({
            hasBackdrop: true,
            positionStrategy: position,
            scrollStrategy: this._overlay.scrollStrategies.reposition()
        });
    }
    /**
     * @return {?}
     */
    _getPosition() {
        const [originX, originFallbackX] = this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        const [overlayY, overlayFallbackY] = this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        const [overlayX, overlayFallbackX] = [originX, originFallbackX];
        /** @type {?} */
        const offsetY = 0;
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        return this._overlay
            .position()
            .connectedTo(this._element, { originX, originY }, { overlayX, overlayY })
            .withOffsetY(offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY }, { overlayX: overlayFallbackX, overlayY })
            .withFallbackPosition({ originX, originY: originFallbackY }, { overlayX, overlayY: overlayFallbackY }, undefined, -offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY: originFallbackY }, { overlayX: overlayFallbackX, overlayY: overlayFallbackY }, undefined, -offsetY);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    _subscribeToPositions(position) {
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, x => x.connectionPair)).subscribe(pos => {
            /** @type {?} */
            const isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
            /** @type {?} */
            const isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
            /** @type {?} */
            const triggerMiddle = this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;
            this.callout.beakPosition = {
                top: isCalloutUnderTrigger ? '-6px' : null,
                bottom: !isCalloutUnderTrigger ? '-6px' : null,
                left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
                right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
            };
        });
    }
}
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
CalloutTriggerDirective.ctorParameters = () => [
    { type: Overlay },
    { type: ElementRef },
    { type: ViewContainerRef }
];
CalloutTriggerDirective.propDecorators = {
    sxNgxFabricCalloutTrigger: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsT0FBTyxFQUNQLGFBQWEsRUFHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVV2RCxNQUFNOzs7Ozs7SUFrQkosWUFBb0IsUUFBaUIsRUFBVSxRQUFvQixFQUFVLGlCQUFtQztRQUE1RixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7MkJBUHZFLElBQUk7NEJBQ3RCLEtBQUs7a0NBQ0MsWUFBWSxDQUFDLEtBQUs7cUNBQ2YsWUFBWSxDQUFDLEtBQUs7S0FJa0U7Ozs7SUFqQnBILElBQ0kseUJBQXlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFFRCxJQUFJLHlCQUF5QixDQUFDLEdBQXFCO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0tBQ3BCOzs7O0lBWUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxF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QUFZLEdBQUc7Z0JBQzFCLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUMxQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUM5QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2pFLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ3BFLENBQUM7U0FDSCxDQUFDLENBQUM7Ozs7WUFoSE4sU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtvQkFDdkIsU0FBUyxFQUFFLHNCQUFzQjtpQkFDbEM7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7OztZQW5CQyxPQUFPO1lBTVcsVUFBVTtZQUFTLGdCQUFnQjs7O3dDQWVwRCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhbGxvdXRDb21wb25lbnQgfSBmcm9tICcuL2NhbGxvdXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3N4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXJdJyxcclxuICBob3N0OiB7XHJcbiAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcclxuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xyXG4gIH0sXHJcbiAgZXhwb3J0QXM6ICdzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsbG91dFRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXIoKTogQ2FsbG91dENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsb3V0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXIodmFsOiBDYWxsb3V0Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmNhbGxvdXQgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9wb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NhbGxvdXRPcGVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNhbGxvdXQ6IENhbGxvdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FsbG91dCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY2FsbG91dE9wZW4pIHtcclxuICAgICAgdGhpcy5fY3JlYXRlT3ZlcmxheSgpLmF0dGFjaCh0aGlzLl9wb3J0YWwpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNhbGxvdXQudXBkYXRlQmVha1Bvc2l0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VNZW51KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsb3V0LmNsb3NlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLm9wZW5DYWxsb3V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmNhbGxvdXQudGVtcGxhdGVSZWYsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9nZXRPdmVybGF5Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbik7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogcG9zaXRpb24sXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgW29yaWdpblgsIG9yaWdpbkZhbGxiYWNrWF06IEhvcml6b250YWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLmNhbGxvdXQueFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IFsnZW5kJywgJ3N0YXJ0J10gOiBbJ3N0YXJ0JywgJ2VuZCddO1xyXG5cclxuICAgIGNvbnN0IFtvdmVybGF5WSwgb3ZlcmxheUZhbGxiYWNrWV06IFZlcnRpY2FsQ29ubmVjdGlvblBvc1tdID1cclxuICAgICAgdGhpcy5jYWxsb3V0LnlQb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IFsnYm90dG9tJywgJ3RvcCddIDogWyd0b3AnLCAnYm90dG9tJ107XHJcblxyXG4gICAgbGV0IFtvcmlnaW5ZLCBvcmlnaW5GYWxsYmFja1ldID0gW292ZXJsYXlZLCBvdmVybGF5RmFsbGJhY2tZXTtcclxuICAgIGNvbnN0IFtvdmVybGF5WCwgb3ZlcmxheUZhbGxiYWNrWF0gPSBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTtcclxuICAgIGNvbnN0IG9mZnNldFkgPSAwO1xyXG5cclxuICAgIG9yaWdpblkgPSBvdmVybGF5WSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG4gICAgb3JpZ2luRmFsbGJhY2tZID0gb3ZlcmxheUZhbGxiYWNrWSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50LCB7IG9yaWdpblgsIG9yaWdpblkgfSwgeyBvdmVybGF5WCwgb3ZlcmxheVkgfSlcclxuICAgICAgLndpdGhPZmZzZXRZKG9mZnNldFkpXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WSB9KVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1kgfSwgeyBvdmVybGF5WCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1kgfSwgdW5kZWZpbmVkLCAtb2Zmc2V0WSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHsgb3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1kgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSB9LFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAtb2Zmc2V0WVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU3Vic2NyaXB0aW9uID0gcG9zaXRpb24ub25Qb3NpdGlvbkNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKG51bGwsIHggPT4geC5jb25uZWN0aW9uUGFpcikpLnN1YnNjcmliZShwb3MgPT4ge1xyXG4gICAgICBjb25zdCBpc0NhbGxvdXRVbmRlclRyaWdnZXIgPSBwb3MuY29ubmVjdGlvblBhaXIub3ZlcmxheVkgPT09ICd0b3AnO1xyXG4gICAgICBjb25zdCBpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA9IHBvcy5jb25uZWN0aW9uUGFpci5vdmVybGF5WCA9PT0gJ3N0YXJ0JztcclxuICAgICAgY29uc3QgdHJpZ2dlck1pZGRsZSA9IHRoaXMuX3BvcnRhbC52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDIgLSAxNDtcclxuXHJcbiAgICAgIHRoaXMuY2FsbG91dC5iZWFrUG9zaXRpb24gPSB7XHJcbiAgICAgICAgdG9wOiBpc0NhbGxvdXRVbmRlclRyaWdnZXIgPyAnLTZweCcgOiBudWxsLFxyXG4gICAgICAgIGJvdHRvbTogIWlzQ2FsbG91dFVuZGVyVHJpZ2dlciA/ICctNnB4JyA6IG51bGwsXHJcbiAgICAgICAgbGVmdDogaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPyB0cmlnZ2VyTWlkZGxlICsgJ3B4JyA6IG51bGwsXHJcbiAgICAgICAgcmlnaHQ6ICFpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA/IHRyaWdnZXJNaWRkbGUgKyAncHgnIDogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==