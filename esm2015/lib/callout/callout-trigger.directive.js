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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsT0FBTyxFQUNQLGFBQWEsRUFHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVV2RCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFrQmxDLFlBQW9CLFFBQWlCLEVBQVUsUUFBb0IsRUFBVSxpQkFBbUM7UUFBNUYsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCOzJCQVB2RSxJQUFJOzRCQUN0QixLQUFLO2tDQUNDLFlBQVksQ0FBQyxLQUFLO3FDQUNmLFlBQVksQ0FBQyxLQUFLO0tBSWtFOzs7O0lBakJwSCxJQUNJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFBSSx5QkFBeUIsQ0FBQyxHQUFxQjtRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztLQUNwQjs7OztJQVlELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHFCQUFx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QyxPQUFPLENBQUMsWUFBWSxHQUFHO2dCQUMxQixHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDMUMsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDOUMsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNqRSxLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNwRSxDQUFDO1NBQ0gsQ0FBQyxDQUFDOzs7O1lBaEhOLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLFNBQVMsRUFBRSxzQkFBc0I7aUJBQ2xDO2dCQUNELFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7WUFuQkMsT0FBTztZQU1XLFVBQVU7WUFBUyxnQkFBZ0I7Ozt3Q0FlcEQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDYWxsb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxsb3V0LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyXScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXHJcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcclxuICB9LFxyXG4gIGV4cG9ydEFzOiAnc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGxvdXRUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCBzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyKCk6IENhbGxvdXRDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbG91dDtcclxuICB9XHJcblxyXG4gIHNldCBzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyKHZhbDogQ2FsbG91dENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5jYWxsb3V0ID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xyXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9jYWxsb3V0T3BlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Nsb3NlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBjYWxsb3V0OiBDYWxsb3V0Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhbGxvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NhbGxvdXRPcGVuKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZU92ZXJsYXkoKS5hdHRhY2godGhpcy5fcG9ydGFsKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsb3V0LnVwZGF0ZUJlYWtQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbG91dC5jbG9zZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5vcGVuQ2FsbG91dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcclxuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5jYWxsb3V0LnRlbXBsYXRlUmVmLCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZ2V0T3ZlcmxheUNvbmZpZygpO1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nZXRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5fc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb24pO1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHBvc2l0aW9uLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQb3NpdGlvbigpOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5GYWxsYmFja1hdOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5jYWxsb3V0LnhQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbJ2VuZCcsICdzdGFydCddIDogWydzdGFydCcsICdlbmQnXTtcclxuXHJcbiAgICBjb25zdCBbb3ZlcmxheVksIG92ZXJsYXlGYWxsYmFja1ldOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NbXSA9XHJcbiAgICAgIHRoaXMuY2FsbG91dC55UG9zaXRpb24gPT09ICdhYm92ZScgPyBbJ2JvdHRvbScsICd0b3AnXSA6IFsndG9wJywgJ2JvdHRvbSddO1xyXG5cclxuICAgIGxldCBbb3JpZ2luWSwgb3JpZ2luRmFsbGJhY2tZXSA9IFtvdmVybGF5WSwgb3ZlcmxheUZhbGxiYWNrWV07XHJcbiAgICBjb25zdCBbb3ZlcmxheVgsIG92ZXJsYXlGYWxsYmFja1hdID0gW29yaWdpblgsIG9yaWdpbkZhbGxiYWNrWF07XHJcbiAgICBjb25zdCBvZmZzZXRZID0gMDtcclxuXHJcbiAgICBvcmlnaW5ZID0gb3ZlcmxheVkgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIG9yaWdpbkZhbGxiYWNrWSA9IG92ZXJsYXlGYWxsYmFja1kgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5fZWxlbWVudCwgeyBvcmlnaW5YLCBvcmlnaW5ZIH0sIHsgb3ZlcmxheVgsIG92ZXJsYXlZIH0pXHJcbiAgICAgIC53aXRoT2Zmc2V0WShvZmZzZXRZKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblkgfSwgeyBvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVkgfSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZIH0sIHsgb3ZlcmxheVgsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZIH0sIHVuZGVmaW5lZCwgLW9mZnNldFkpXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcclxuICAgICAgICB7IG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZIH0sXHJcbiAgICAgICAgeyBvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1kgfSxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgLW9mZnNldFlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLm9uUG9zaXRpb25DaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZChudWxsLCB4ID0+IHguY29ubmVjdGlvblBhaXIpKS5zdWJzY3JpYmUocG9zID0+IHtcclxuICAgICAgY29uc3QgaXNDYWxsb3V0VW5kZXJUcmlnZ2VyID0gcG9zLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAndG9wJztcclxuICAgICAgY29uc3QgaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPSBwb3MuY29ubmVjdGlvblBhaXIub3ZlcmxheVggPT09ICdzdGFydCc7XHJcbiAgICAgIGNvbnN0IHRyaWdnZXJNaWRkbGUgPSB0aGlzLl9wb3J0YWwudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLyAyIC0gMTQ7XHJcblxyXG4gICAgICB0aGlzLmNhbGxvdXQuYmVha1Bvc2l0aW9uID0ge1xyXG4gICAgICAgIHRvcDogaXNDYWxsb3V0VW5kZXJUcmlnZ2VyID8gJy02cHgnIDogbnVsbCxcclxuICAgICAgICBib3R0b206ICFpc0NhbGxvdXRVbmRlclRyaWdnZXIgPyAnLTZweCcgOiBudWxsLFxyXG4gICAgICAgIGxlZnQ6IGlzQ2FsbG91dExlZnRBbGlnbmVkVG9UcmlnZ2VyID8gdHJpZ2dlck1pZGRsZSArICdweCcgOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0OiAhaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPyB0cmlnZ2VyTWlkZGxlICsgJ3B4JyA6IG51bGxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=