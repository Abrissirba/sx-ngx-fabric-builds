/**
 * @fileoverview added by tsickle
 * Generated from: lib/callout/callout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
export class CalloutComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get beakPosition() { return this._beakPosition; }
    /**
     * @param {?} val
     * @return {?}
     */
    set beakPosition(val) {
        this._beakPosition = val;
        this.updateBeakPosition();
    }
    /**
     * @return {?}
     */
    updateBeakPosition() {
        if (this.beakPosition) {
            this.beak.nativeElement.style.top = this.beakPosition.top;
            this.beak.nativeElement.style.left = this.beakPosition.left;
            this.beak.nativeElement.style.right = this.beakPosition.right;
            this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
        }
    }
}
CalloutComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-callout',
                template: "<ng-template>\r\n  <div class=\"ms-ContextualHost is-positioned ms-ContextualHost--arrowLeft\">\r\n    <div class=\"ms-ContextualHost-main\">\r\n      <div class=\"ms-Callout\">\r\n        <div class=\"ms-Callout-main\">\r\n          <div class=\"ms-Callout-header\">\r\n            <p class=\"ms-Callout-title\">\r\n              <ng-content select=\"[sxNgxFabricCalloutHeader]\"></ng-content>\r\n            </p>\r\n          </div>\r\n          <div class=\"ms-Callout-inner\">\r\n            <div class=\"ms-Callout-content\">\r\n              <p class=\"ms-Callout-subText\">\r\n                <ng-content select=\"[sxNgxFabricCalloutContent]\"></ng-content>\r\n              </p>\r\n            </div>\r\n            <div class=\"ms-Callout-actions\">\r\n              <ng-content select=\"[sxNgxFabricCalloutActions]\"></ng-content>\r\n            </div>\r\n          </div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div #beak class=\"ms-ContextualHost-beak\"></div>\r\n  </div>\r\n</ng-template>",
                styles: [".ms-ContextualHost{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header{z-index:105;padding:24px 28px 12px}.ms-Callout-title{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner{height:100%;padding:0 28px 12px}.ms-Callout-subText{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"]
            }] }
];
/** @nocollapse */
CalloutComponent.ctorParameters = () => [
    { type: ElementRef }
];
CalloutComponent.propDecorators = {
    xPosition: [{ type: Input }],
    yPosition: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    beak: [{ type: ViewChild, args: ['beak', { static: false },] }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalloutComponent.prototype.xPosition;
    /** @type {?} */
    CalloutComponent.prototype.yPosition;
    /** @type {?} */
    CalloutComponent.prototype.templateRef;
    /** @type {?} */
    CalloutComponent.prototype.beak;
    /** @type {?} */
    CalloutComponent.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    CalloutComponent.prototype._beakPosition;
    /**
     * @type {?}
     * @private
     */
    CalloutComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQVF0SSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBbUIzQixZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFWdEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUE4QixDQUFDO0lBVzlELENBQUM7Ozs7SUFSTCxJQUFJLFlBQVksS0FBSyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7OztJQUNqRCxJQUFJLFlBQVksQ0FBQyxHQUFHO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFNRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDZpQ0FBdUM7O2FBRXhDOzs7O1lBUGdGLFVBQVU7Ozt3QkFVeEYsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQUV2QyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtxQkFFbkMsTUFBTTs7OztJQVJQLHFDQUEyQjs7SUFFM0IscUNBQTJCOztJQUUzQix1Q0FBd0U7O0lBRXhFLGdDQUF1RDs7SUFFdkQsa0NBQWtFOzs7OztJQUVsRSx5Q0FBc0I7Ozs7O0lBUXBCLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnRpY2FsQ29ubmVjdGlvblBvcywgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtY2FsbG91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGxvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGxvdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsbG91dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB5UG9zaXRpb246IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JlYWsnLCB7IHN0YXRpYzogZmFsc2UgfSkgYmVhazogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZCB8ICdjbGljaycgfCAna2V5ZG93bic+KCk7XHJcblxyXG4gIHByaXZhdGUgX2JlYWtQb3NpdGlvbjtcclxuICBnZXQgYmVha1Bvc2l0aW9uKCkgeyByZXR1cm4gdGhpcy5fYmVha1Bvc2l0aW9uOyB9XHJcbiAgc2V0IGJlYWtQb3NpdGlvbih2YWwpIHtcclxuICAgIHRoaXMuX2JlYWtQb3NpdGlvbiA9IHZhbDtcclxuICAgIHRoaXMudXBkYXRlQmVha1Bvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICApIHsgfVxyXG5cclxuICB1cGRhdGVCZWFrUG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5iZWFrUG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5iZWFrLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5iZWFrUG9zaXRpb24udG9wO1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy5iZWFrUG9zaXRpb24ubGVmdDtcclxuICAgICAgdGhpcy5iZWFrLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmlnaHQgPSB0aGlzLmJlYWtQb3NpdGlvbi5yaWdodDtcclxuICAgICAgdGhpcy5iZWFrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5iZWFrUG9zaXRpb24uYm90dG9tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19