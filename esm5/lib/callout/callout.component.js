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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztJQTJCcEksMEJBQ1U7UUFBQSxlQUFVLEdBQVYsVUFBVTtRQVZwQixjQUFtQixJQUFJLFlBQVksRUFBOEIsQ0FBQztLQVc3RDtJQVJMLHNCQUFJLDBDQUFZOzs7O1FBQWhCLGNBQXFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzs7OztRQUNqRCxVQUFpQixHQUFHO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCOzs7T0FKZ0Q7Ozs7SUFVakQsNkNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUNqRTtLQUNGOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZpQ0FBdUM7O2lCQUV4Qzs7OztnQkFQZ0YsVUFBVTs7OzRCQVV4RixLQUFLOzRCQUVMLEtBQUs7OEJBRUwsU0FBUyxTQUFDLFdBQVc7dUJBRXJCLFNBQVMsU0FBQyxNQUFNO3lCQUVoQixNQUFNOzsyQkFsQlQ7O1NBUWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVydGljYWxDb25uZWN0aW9uUG9zLCBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1jYWxsb3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FsbG91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FsbG91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxsb3V0Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgeFBvc2l0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHlQb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmVhaycpIGJlYWs6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQgfCAnY2xpY2snIHwgJ2tleWRvd24nPigpO1xyXG5cclxuICBwcml2YXRlIF9iZWFrUG9zaXRpb247XHJcbiAgZ2V0IGJlYWtQb3NpdGlvbigpIHsgcmV0dXJuIHRoaXMuX2JlYWtQb3NpdGlvbjsgfVxyXG4gIHNldCBiZWFrUG9zaXRpb24odmFsKSB7XHJcbiAgICB0aGlzLl9iZWFrUG9zaXRpb24gPSB2YWw7XHJcbiAgICB0aGlzLnVwZGF0ZUJlYWtQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgdXBkYXRlQmVha1Bvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuYmVha1Bvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMuYmVha1Bvc2l0aW9uLnRvcDtcclxuICAgICAgdGhpcy5iZWFrLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMuYmVha1Bvc2l0aW9uLmxlZnQ7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5iZWFrUG9zaXRpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLmJvdHRvbSA9IHRoaXMuYmVha1Bvc2l0aW9uLmJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==