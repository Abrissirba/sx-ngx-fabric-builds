/**
 * @fileoverview added by tsickle
 * Generated from: lib/callout/callout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        beak: [{ type: ViewChild, args: ['beak', { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUd0STtJQXdCRSwwQkFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBVnRCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQztJQVc5RCxDQUFDO0lBUkwsc0JBQUksMENBQVk7Ozs7UUFBaEIsY0FBcUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDakQsVUFBaUIsR0FBRztZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FKZ0Q7Ozs7SUFVakQsNkNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUNqRTtJQUNILENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsNmlDQUF1Qzs7aUJBRXhDOzs7O2dCQVBnRixVQUFVOzs7NEJBVXhGLEtBQUs7NEJBRUwsS0FBSzs4QkFFTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFFdkMsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBRW5DLE1BQU07O0lBc0JULHVCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksZ0JBQWdCOzs7SUFFM0IscUNBQTJCOztJQUUzQixxQ0FBMkI7O0lBRTNCLHVDQUF3RTs7SUFFeEUsZ0NBQXVEOztJQUV2RCxrQ0FBa0U7Ozs7O0lBRWxFLHlDQUFzQjs7Ozs7SUFRcEIsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVydGljYWxDb25uZWN0aW9uUG9zLCBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1jYWxsb3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FsbG91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FsbG91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxsb3V0Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgeFBvc2l0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHlQb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmVhaycsIHsgc3RhdGljOiBmYWxzZSB9KSBiZWFrOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkIHwgJ2NsaWNrJyB8ICdrZXlkb3duJz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfYmVha1Bvc2l0aW9uO1xyXG4gIGdldCBiZWFrUG9zaXRpb24oKSB7IHJldHVybiB0aGlzLl9iZWFrUG9zaXRpb247IH1cclxuICBzZXQgYmVha1Bvc2l0aW9uKHZhbCkge1xyXG4gICAgdGhpcy5fYmVha1Bvc2l0aW9uID0gdmFsO1xyXG4gICAgdGhpcy51cGRhdGVCZWFrUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIHVwZGF0ZUJlYWtQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmJlYWtQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmJlYWtQb3NpdGlvbi50b3A7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLmJlYWtQb3NpdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5yaWdodCA9IHRoaXMuYmVha1Bvc2l0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLmJlYWtQb3NpdGlvbi5ib3R0b207XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=