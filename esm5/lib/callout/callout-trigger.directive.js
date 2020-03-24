import { __read } from "tslib";
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CalloutComponent } from './callout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
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
        get: function () {
            return this.callout;
        },
        set: function (val) {
            this.callout = val;
        },
        enumerable: true,
        configurable: true
    });
    CalloutTriggerDirective.prototype.ngOnDestroy = function () {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
    };
    CalloutTriggerDirective.prototype.openCallout = function () {
        var _this = this;
        if (!this._calloutOpen) {
            this._createOverlay().attach(this._portal);
            setTimeout(function () {
                _this.callout.updateBeakPosition();
            });
        }
    };
    CalloutTriggerDirective.prototype.closeMenu = function () {
        this.callout.closed.emit();
    };
    CalloutTriggerDirective.prototype._handleClick = function () {
        this.openCallout();
    };
    CalloutTriggerDirective.prototype._createOverlay = function () {
        var _this = this;
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
            var config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
            this._closeSubscription = this._overlayRef.backdropClick().subscribe(function (_) {
                _this._overlayRef.detach();
            });
        }
        return this._overlayRef;
    };
    CalloutTriggerDirective.prototype._getOverlayConfig = function () {
        var position = this._getPosition();
        this._subscribeToPositions(position);
        return new OverlayConfig({
            hasBackdrop: true,
            positionStrategy: position,
            scrollStrategy: this._overlay.scrollStrategies.reposition()
        });
    };
    CalloutTriggerDirective.prototype._getPosition = function () {
        var _a = __read(this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], originFallbackX = _a[1];
        var _b = __read(this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], 2), overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = __read([overlayY, overlayFallbackY], 2), originY = _c[0], originFallbackY = _c[1];
        var _d = __read([originX, originFallbackX], 2), overlayX = _d[0], overlayFallbackX = _d[1];
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
    CalloutTriggerDirective.prototype._subscribeToPositions = function (position) {
        var _this = this;
        this._positionSubscription = position.onPositionChange.pipe(distinctUntilChanged(null, function (x) { return x.connectionPair; })).subscribe(function (pos) {
            var isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
            var isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
            var triggerMiddle = _this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;
            _this.callout.beakPosition = {
                top: isCalloutUnderTrigger ? '-6px' : null,
                bottom: !isCalloutUnderTrigger ? '-6px' : null,
                left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
                right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
            };
        });
    };
    CalloutTriggerDirective.ɵfac = function CalloutTriggerDirective_Factory(t) { return new (t || CalloutTriggerDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    CalloutTriggerDirective.ɵdir = i0.ɵɵdefineDirective({ type: CalloutTriggerDirective, selectors: [["", "sxNgxFabricCalloutTrigger", ""]], hostAttrs: ["aria-haspopup", "true"], hostBindings: function CalloutTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CalloutTriggerDirective_click_HostBindingHandler($event) { return ctx._handleClick($event); });
        } }, inputs: { sxNgxFabricCalloutTrigger: "sxNgxFabricCalloutTrigger" }, exportAs: ["sxNgxFabricCalloutTrigger"] });
    return CalloutTriggerDirective;
}());
export { CalloutTriggerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY2FsbG91dC9jYWxsb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBR0wsT0FBTyxFQUNQLGFBQWEsRUFHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZEO0lBMEJFLGlDQUFvQixRQUFpQixFQUFVLFFBQW9CLEVBQVUsaUJBQW1DO1FBQTVGLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVB4RyxnQkFBVyxHQUFzQixJQUFJLENBQUM7UUFDdEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN4QywwQkFBcUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBSWdFLENBQUM7SUFqQnBILHNCQUNJLDhEQUF5QjthQUQ3QjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBOEIsR0FBcUI7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFnQkQsNkNBQVcsR0FBWDtRQUNFLElB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QUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUM5QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2pFLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ3BFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7a0dBekdVLHVCQUF1QjtnRUFBdkIsdUJBQXVCOzs7a0NBdEJwQztDQWdJQyxBQWxIRCxJQWtIQztTQTFHWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixTQUFTLEVBQUUsc0JBQXNCO2lCQUNsQztnQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ2FsbG91dENvbXBvbmVudCB9IGZyb20gJy4vY2FsbG91dC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcl0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxyXG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXHJcbiAgfSxcclxuICBleHBvcnRBczogJ3N4Tmd4RmFicmljQ2FsbG91dFRyaWdnZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxsb3V0VHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBnZXQgc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcigpOiBDYWxsb3V0Q29tcG9uZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNhbGxvdXQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc3hOZ3hGYWJyaWNDYWxsb3V0VHJpZ2dlcih2YWw6IENhbGxvdXRDb21wb25lbnQpIHtcclxuICAgIHRoaXMuY2FsbG91dCA9IHZhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcclxuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FsbG91dE9wZW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9jbG9zZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIF9wb3NpdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgY2FsbG91dDogQ2FsbG91dENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fcG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG9wZW5DYWxsb3V0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jYWxsb3V0T3Blbikge1xyXG4gICAgICB0aGlzLl9jcmVhdGVPdmVybGF5KCkuYXR0YWNoKHRoaXMuX3BvcnRhbCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsbG91dC51cGRhdGVCZWFrUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxvdXQuY2xvc2VkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVDbGljaygpIHtcclxuICAgIHRoaXMub3BlbkNhbGxvdXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XHJcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5fcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuY2FsbG91dC50ZW1wbGF0ZVJlZiwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2dldE92ZXJsYXlDb25maWcoKTtcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuX3N1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uKTtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiBwb3NpdGlvbixcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb24oKTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3NbXSA9IHRoaXMuY2FsbG91dC54UG9zaXRpb24gPT09ICdiZWZvcmUnID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XHJcblxyXG4gICAgY29uc3QgW292ZXJsYXlZLCBvdmVybGF5RmFsbGJhY2tZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPVxyXG4gICAgICB0aGlzLmNhbGxvdXQueVBvc2l0aW9uID09PSAnYWJvdmUnID8gWydib3R0b20nLCAndG9wJ10gOiBbJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgICBsZXQgW29yaWdpblksIG9yaWdpbkZhbGxiYWNrWV0gPSBbb3ZlcmxheVksIG92ZXJsYXlGYWxsYmFja1ldO1xyXG4gICAgY29uc3QgW292ZXJsYXlYLCBvdmVybGF5RmFsbGJhY2tYXSA9IFtvcmlnaW5YLCBvcmlnaW5GYWxsYmFja1hdO1xyXG4gICAgY29uc3Qgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgb3JpZ2luWSA9IG92ZXJsYXlZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICBvcmlnaW5GYWxsYmFja1kgPSBvdmVybGF5RmFsbGJhY2tZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuX2VsZW1lbnQsIHsgb3JpZ2luWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYLCBvdmVybGF5WSB9KVxyXG4gICAgICAud2l0aE9mZnNldFkob2Zmc2V0WSlcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZIH0sIHsgb3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZIH0pXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSB9LCB7IG92ZXJsYXlYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSB9LCB1bmRlZmluZWQsIC1vZmZzZXRZKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAgeyBvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZIH0sXHJcbiAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgIC1vZmZzZXRZXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSkge1xyXG4gICAgdGhpcy5fcG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5vblBvc2l0aW9uQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQobnVsbCwgeCA9PiB4LmNvbm5lY3Rpb25QYWlyKSkuc3Vic2NyaWJlKHBvcyA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ2FsbG91dFVuZGVyVHJpZ2dlciA9IHBvcy5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ3RvcCc7XHJcbiAgICAgIGNvbnN0IGlzQ2FsbG91dExlZnRBbGlnbmVkVG9UcmlnZ2VyID0gcG9zLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYID09PSAnc3RhcnQnO1xyXG4gICAgICBjb25zdCB0cmlnZ2VyTWlkZGxlID0gdGhpcy5fcG9ydGFsLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMiAtIDE0O1xyXG5cclxuICAgICAgdGhpcy5jYWxsb3V0LmJlYWtQb3NpdGlvbiA9IHtcclxuICAgICAgICB0b3A6IGlzQ2FsbG91dFVuZGVyVHJpZ2dlciA/ICctNnB4JyA6IG51bGwsXHJcbiAgICAgICAgYm90dG9tOiAhaXNDYWxsb3V0VW5kZXJUcmlnZ2VyID8gJy02cHgnIDogbnVsbCxcclxuICAgICAgICBsZWZ0OiBpc0NhbGxvdXRMZWZ0QWxpZ25lZFRvVHJpZ2dlciA/IHRyaWdnZXJNaWRkbGUgKyAncHgnIDogbnVsbCxcclxuICAgICAgICByaWdodDogIWlzQ2FsbG91dExlZnRBbGlnbmVkVG9UcmlnZ2VyID8gdHJpZ2dlck1pZGRsZSArICdweCcgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19