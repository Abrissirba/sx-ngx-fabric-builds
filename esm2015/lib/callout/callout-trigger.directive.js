import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CalloutComponent } from './callout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class CalloutTriggerDirective {
    constructor(_overlay, _element, _viewContainerRef) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._overlayRef = null;
        this._calloutOpen = false;
        this._closeSubscription = Subscription.EMPTY;
        this._positionSubscription = Subscription.EMPTY;
    }
    get sxNgxFabricCalloutTrigger() {
        return this.callout;
    }
    set sxNgxFabricCalloutTrigger(val) {
        this.callout = val;
    }
    ngOnDestroy() {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
    }
    openCallout() {
        if (!this._calloutOpen) {
            this._createOverlay().attach(this._portal);
            setTimeout(() => {
                this.callout.updateBeakPosition();
            });
        }
    }
    closeMenu() {
        this.callout.closed.emit();
    }
    _handleClick() {
        this.openCallout();
    }
    _createOverlay() {
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            const config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe(_ => {
                this._overlayRef.detach();
            });
        }
        return this._overlayRef;
    }
    _getOverlayConfig() {
        const position = this._getPosition();
        this._subscribeToPositions(position);
        return new OverlayConfig({
            hasBackdrop: true,
            positionStrategy: position,
            scrollStrategy: this._overlay.scrollStrategies.reposition()
        });
    }
    _getPosition() {
        const [originX, originFallbackX] = this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        const [overlayY, overlayFallbackY] = this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        const [overlayX, overlayFallbackX] = [originX, originFallbackX];
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
    _subscribeToPositions(position) {
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, x => x.connectionPair)).subscribe(pos => {
            const isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
            const isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
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
CalloutTriggerDirective.ɵfac = function CalloutTriggerDirective_Factory(t) { return new (t || CalloutTriggerDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
CalloutTriggerDirective.ɵdir = i0.ɵɵdefineDirective({ type: CalloutTriggerDirective, selectors: [["", "sxNgxFabricCalloutTrigger", ""]], hostAttrs: ["aria-haspopup", "true"], hostBindings: function CalloutTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CalloutTriggerDirective_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } }, inputs: { sxNgxFabricCalloutTrigger: "sxNgxFabricCalloutTrigger" }, exportAs: ["sxNgxFabricCalloutTrigger"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalloutTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[sxNgxFabricCalloutTrigger]',
                host: {
                    'aria-haspopup': 'true',
                    '(click)': '_handleClick($event)'
                },
                exportAs: 'sxNgxFabricCalloutTrigger'
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }]; }, { sxNgxFabricCalloutTrigger: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFVdkQsTUFBTSxPQUFPLHVCQUF1QjtJQWtCbEMsWUFBb0IsUUFBaUIsRUFBVSxRQUFvQixFQUFVLGlCQUFtQztRQUE1RixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFQeEcsZ0JBQVcsR0FBc0IsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHVCQUFrQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDeEMsMEJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUlnRSxDQUFDO0lBakJwSCxJQUNJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUkseUJBQXlCLENBQUMsR0FBcUI7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQVlELFdBQVc7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LENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFL0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUc7Z0JBQzFCLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUMxQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUM5QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2pFLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ3BFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhGQXpHVSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7O2tEQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtvQkFDdkIsU0FBUyxFQUFFLHNCQUFzQjtpQkFDbEM7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhbGxvdXRDb21wb25lbnQgfSBmcm9tICcuL2NhbGxvdXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3N4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXJdJyxcclxuICBob3N0OiB7XHJcbiAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcclxuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xyXG4gIH0sXHJcbiAgZXhwb3J0QXM6ICdzeE5neEZhYnJpY0NhbGxvdXRUcmlnZ2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsbG91dFRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXIoKTogQ2FsbG91dENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsb3V0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXIodmFsOiBDYWxsb3V0Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmNhbGxvdXQgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9wb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NhbGxvdXRPcGVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNhbGxvdXQ6IENhbGxvdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FsbG91dCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY2FsbG91dE9wZW4pIHtcclxuICAgICAgdGhpcy5fY3JlYXRlT3ZlcmxheSgpLmF0dGFjaCh0aGlzLl9wb3J0YWwpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNhbGxvdXQudXBkYXRlQmVha1Bvc2l0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VNZW51KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsb3V0LmNsb3NlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLm9wZW5DYWxsb3V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmNhbGxvdXQudGVtcGxhdGVSZWYsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9nZXRPdmVybGF5Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbik7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogcG9zaXRpb24sXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgW29yaWdpblgsIG9yaWdpbkZhbGxiYWNrWF06IEhvcml6b250YWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLmNhbGxvdXQueFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IFsnZW5kJywgJ3N0YXJ0J10gOiBbJ3N0YXJ0JywgJ2VuZCddO1xyXG5cclxuICAgIGNvbnN0IFtvdmVybGF5WSwgb3ZlcmxheUZhbGxiYWNrWV06IFZlcnRpY2FsQ29ubmVjdGlvblBvc1tdID1cclxuICAgICAgdGhpcy5jYWxsb3V0LnlQb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IFsnYm90dG9tJywgJ3RvcCddIDogWyd0b3AnLCAnYm90dG9tJ107XHJcblxyXG4gICAgbGV0IFtvcmlnaW5ZLCBvcmlnaW5GYWxsYmFja1ldID0gW292ZXJsYXlZLCBvdmVybGF5RmFsbGJhY2tZXTtcclxuICAgIGNvbnN0IFtvdmVybGF5WCwgb3ZlcmxheUZhbGxiYWNrWF0gPSBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTtcclxuICAgIGNvbnN0IG9mZnNldFkgPSAwO1xyXG5cclxuICAgIG9yaWdpblkgPSBvdmVybGF5WSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG4gICAgb3JpZ2luRmFsbGJhY2tZID0gb3ZlcmxheUZhbGxiYWNrWSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50LCB7IG9yaWdpblgsIG9yaWdpblkgfSwgeyBvdmVybGF5WCwgb3ZlcmxheVkgfSlcclxuICAgICAgLndpdGhPZmZzZXRZKG9mZnNldFkpXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WSB9KVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1kgfSwgeyBvdmVybGF5WCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1kgfSwgdW5kZWZpbmVkLCAtb2Zmc2V0WSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHsgb3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1kgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSB9LFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAtb2Zmc2V0WVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU3Vic2NyaXB0aW9uID0gcG9zaXRpb24ub25Qb3NpdGlvbkNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKG51bGwsIHggPT4geC5jb25uZWN0aW9uUGFpcikpLnN1YnNjcmliZShwb3MgPT4ge1xyXG4gICAgICBjb25zdCBpc0NhbGxvdXRVbmRlclRyaWdnZXIgPSBwb3MuY29ubmVjdGlvblBhaXIub3ZlcmxheVkgPT09ICd0b3AnO1xyXG4gICAgICBjb25zdCBpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA9IHBvcy5jb25uZWN0aW9uUGFpci5vdmVybGF5WCA9PT0gJ3N0YXJ0JztcclxuICAgICAgY29uc3QgdHJpZ2dlck1pZGRsZSA9IHRoaXMuX3BvcnRhbC52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDIgLSAxNDtcclxuXHJcbiAgICAgIHRoaXMuY2FsbG91dC5iZWFrUG9zaXRpb24gPSB7XHJcbiAgICAgICAgdG9wOiBpc0NhbGxvdXRVbmRlclRyaWdnZXIgPyAnLTZweCcgOiBudWxsLFxyXG4gICAgICAgIGJvdHRvbTogIWlzQ2FsbG91dFVuZGVyVHJpZ2dlciA/ICctNnB4JyA6IG51bGwsXHJcbiAgICAgICAgbGVmdDogaXNDYWxsb3V0TGVmdEFsaWduZWRUb1RyaWdnZXIgPyB0cmlnZ2VyTWlkZGxlICsgJ3B4JyA6IG51bGwsXHJcbiAgICAgICAgcmlnaHQ6ICFpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA/IHRyaWdnZXJNaWRkbGUgKyAncHgnIDogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==