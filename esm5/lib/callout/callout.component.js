/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
var CalloutComponent = /** @class */ (function () {
    function CalloutComponent(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
    }
    Object.defineProperty(CalloutComponent.prototype, "beakPosition", {
        get: /**
         * @return {?}
         */
        function () { return this._beakPosition; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._beakPosition = val;
            this.updateBeakPosition();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalloutComponent.prototype.updateBeakPosition = /**
     * @return {?}
     */
    function () {
        if (this.beakPosition) {
            this.beak.nativeElement.style.top = this.beakPosition.top;
            this.beak.nativeElement.style.left = this.beakPosition.left;
            this.beak.nativeElement.style.right = this.beakPosition.right;
            this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
        }
    };
    CalloutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-callout',
                    template: "<ng-template>\r\n  <div class=\"ms-ContextualHost is-positioned ms-ContextualHost--arrowLeft\">\r\n    <div class=\"ms-ContextualHost-main\">\r\n      <div class=\"ms-Callout\">\r\n        <div class=\"ms-Callout-main\">\r\n          <div class=\"ms-Callout-header\">\r\n            <p class=\"ms-Callout-title\">\r\n              <ng-content select=\"[sxNgxFabricCalloutHeader]\"></ng-content>\r\n            </p>\r\n          </div>\r\n          <div class=\"ms-Callout-inner\">\r\n            <div class=\"ms-Callout-content\">\r\n              <p class=\"ms-Callout-subText\">\r\n                <ng-content select=\"[sxNgxFabricCalloutContent]\"></ng-content>\r\n              </p>\r\n            </div>\r\n            <div class=\"ms-Callout-actions\">\r\n              <ng-content select=\"[sxNgxFabricCalloutActions]\"></ng-content>\r\n            </div>\r\n          </div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div #beak class=\"ms-ContextualHost-beak\"></div>\r\n  </div>\r\n</ng-template>",
                    styles: [".ms-ContextualHost{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header{z-index:105;padding:24px 28px 12px}.ms-Callout-title{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner{height:100%;padding:0 28px 12px}.ms-Callout-subText{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"]
                }] }
    ];
    /** @nocollapse */
    CalloutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CalloutComponent.propDecorators = {
        xPosition: [{ type: Input }],
        yPosition: [{ type: Input }],
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
        beak: [{ type: ViewChild, args: ['beak',] }],
        closed: [{ type: Output }]
    };
    return CalloutComponent;
}());
export { CalloutComponent };
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
    /** @type {?} */
    CalloutComponent.prototype._beakPosition;
    /** @type {?} */
    CalloutComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztJQTJCcEksMEJBQ1U7UUFBQSxlQUFVLEdBQVYsVUFBVTtzQkFWRCxJQUFJLFlBQVksRUFBOEI7S0FXNUQ7SUFSTCxzQkFBSSwwQ0FBWTs7OztRQUFoQixjQUFxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTs7Ozs7UUFDakQsVUFBaUIsR0FBRztZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjs7O09BSmdEOzs7O0lBVWpELDZDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDakU7S0FDRjs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyw2aUNBQXVDOztpQkFFeEM7Ozs7Z0JBUGdGLFVBQVU7Ozs0QkFVeEYsS0FBSzs0QkFFTCxLQUFLOzhCQUVMLFNBQVMsU0FBQyxXQUFXO3VCQUVyQixTQUFTLFNBQUMsTUFBTTt5QkFFaEIsTUFBTTs7MkJBbEJUOztTQVFhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnRpY2FsQ29ubmVjdGlvblBvcywgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtY2FsbG91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGxvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGxvdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsbG91dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB5UG9zaXRpb246IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JlYWsnKSBiZWFrOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkIHwgJ2NsaWNrJyB8ICdrZXlkb3duJz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfYmVha1Bvc2l0aW9uO1xyXG4gIGdldCBiZWFrUG9zaXRpb24oKSB7IHJldHVybiB0aGlzLl9iZWFrUG9zaXRpb247IH1cclxuICBzZXQgYmVha1Bvc2l0aW9uKHZhbCkge1xyXG4gICAgdGhpcy5fYmVha1Bvc2l0aW9uID0gdmFsO1xyXG4gICAgdGhpcy51cGRhdGVCZWFrUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIHVwZGF0ZUJlYWtQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmJlYWtQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmJlYWtQb3NpdGlvbi50b3A7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLmJlYWtQb3NpdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5yaWdodCA9IHRoaXMuYmVha1Bvc2l0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLmJlYWtQb3NpdGlvbi5ib3R0b207XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=