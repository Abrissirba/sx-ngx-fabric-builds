import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["beak"];
function CalloutComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵelementStart(5, "p", 5);
    i0.ɵɵprojection(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "p", 8);
    i0.ɵɵprojection(10, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 9);
    i0.ɵɵprojection(12, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(13, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "div", 10, 11);
    i0.ɵɵelementEnd();
} }
const _c1 = [[["", "sxNgxFabricCalloutHeader", ""]], [["", "sxNgxFabricCalloutContent", ""]], [["", "sxNgxFabricCalloutActions", ""]], "*"];
const _c2 = ["[sxNgxFabricCalloutHeader]", "[sxNgxFabricCalloutContent]", "[sxNgxFabricCalloutActions]", "*"];
export class CalloutComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
    }
    get beakPosition() { return this._beakPosition; }
    set beakPosition(val) {
        this._beakPosition = val;
        this.updateBeakPosition();
    }
    updateBeakPosition() {
        if (this.beakPosition) {
            this.beak.nativeElement.style.top = this.beakPosition.top;
            this.beak.nativeElement.style.left = this.beakPosition.left;
            this.beak.nativeElement.style.right = this.beakPosition.right;
            this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
        }
    }
}
CalloutComponent.ɵfac = function CalloutComponent_Factory(t) { return new (t || CalloutComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
CalloutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalloutComponent, selectors: [["sx-ngx-fabric-callout"]], viewQuery: function CalloutComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(TemplateRef, true);
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.beak = _t.first);
    } }, inputs: { xPosition: "xPosition", yPosition: "yPosition" }, outputs: { closed: "closed" }, ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ms-ContextualHost", "is-positioned", "ms-ContextualHost--arrowLeft"], [1, "ms-ContextualHost-main"], [1, "ms-Callout"], [1, "ms-Callout-main"], [1, "ms-Callout-header"], [1, "ms-Callout-title"], [1, "ms-Callout-inner"], [1, "ms-Callout-content"], [1, "ms-Callout-subText"], [1, "ms-Callout-actions"], [1, "ms-ContextualHost-beak"], ["beak", ""]], template: function CalloutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, CalloutComponent_ng_template_0_Template, 16, 0, "ng-template");
    } }, styles: [".ms-ContextualHost[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost-main[_ngcontent-%COMP%]{position:relative;background-color:#fff;box-sizing:border-box;outline:transparent solid 1px;z-index:5;min-height:10px}.ms-Callout[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout-header[_ngcontent-%COMP%]{z-index:105;padding:24px 28px 12px}.ms-Callout-title[_ngcontent-%COMP%]{margin:0;font-weight:300;font-size:21px}.ms-Callout-inner[_ngcontent-%COMP%]{height:100%;padding:0 28px 12px}.ms-Callout-subText[_ngcontent-%COMP%]{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-actions[_ngcontent-%COMP%]{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-ContextualHost-beak[_ngcontent-%COMP%]{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:0;outline:transparent solid 1px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalloutComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-callout',
                templateUrl: './callout.component.html',
                styleUrls: ['./callout.component.scss']
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], beak: [{
            type: ViewChild,
            args: ['beak']
        }], closed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiLCJsaWIvY2FsbG91dC9jYWxsb3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0lDQ3BJLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0QkFDRTtJQUFBLGtCQUFnRDtJQUNsRCxpQkFBSTtJQUNOLGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDRCQUNFO0lBQUEsc0JBQWlEO0lBQ25ELGlCQUFJO0lBQ04saUJBQU07SUFDTiwrQkFDRTtJQUFBLHNCQUFpRDtJQUNuRCxpQkFBTTtJQUNSLGlCQUFNO0lBQ04sc0JBQVk7SUFDZCxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDTiwrQkFBZ0Q7SUFDbEQsaUJBQU07Ozs7QURqQlIsTUFBTSxPQUFPLGdCQUFnQjtJQW1CM0IsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBVnRCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQztJQVc5RCxDQUFDO0lBUkwsSUFBSSxZQUFZLEtBQUssT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqRCxJQUFJLFlBQVksQ0FBQyxHQUFHO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFNRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDakU7SUFDSCxDQUFDOztnRkE5QlUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7NkJBTWhCLFdBQVc7Ozs7Ozs7O1FDZHhCLCtFQUNFOztrRERPVyxnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDOztrQkFHRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUV2QyxTQUFTO21CQUFDLE1BQU07O2tCQUVoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVydGljYWxDb25uZWN0aW9uUG9zLCBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1jYWxsb3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FsbG91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FsbG91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxsb3V0Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgeFBvc2l0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHlQb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmVhaycpIGJlYWs6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQgfCAnY2xpY2snIHwgJ2tleWRvd24nPigpO1xyXG5cclxuICBwcml2YXRlIF9iZWFrUG9zaXRpb247XHJcbiAgZ2V0IGJlYWtQb3NpdGlvbigpIHsgcmV0dXJuIHRoaXMuX2JlYWtQb3NpdGlvbjsgfVxyXG4gIHNldCBiZWFrUG9zaXRpb24odmFsKSB7XHJcbiAgICB0aGlzLl9iZWFrUG9zaXRpb24gPSB2YWw7XHJcbiAgICB0aGlzLnVwZGF0ZUJlYWtQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgdXBkYXRlQmVha1Bvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuYmVha1Bvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMuYmVha1Bvc2l0aW9uLnRvcDtcclxuICAgICAgdGhpcy5iZWFrLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMuYmVha1Bvc2l0aW9uLmxlZnQ7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5iZWFrUG9zaXRpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLmJvdHRvbSA9IHRoaXMuYmVha1Bvc2l0aW9uLmJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibXMtQ29udGV4dHVhbEhvc3QgaXMtcG9zaXRpb25lZCBtcy1Db250ZXh0dWFsSG9zdC0tYXJyb3dMZWZ0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXMtQ29udGV4dHVhbEhvc3QtbWFpblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibXMtQ2FsbG91dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcy1DYWxsb3V0LW1haW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcy1DYWxsb3V0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1zLUNhbGxvdXQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3hOZ3hGYWJyaWNDYWxsb3V0SGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtQ2FsbG91dC1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtQ2FsbG91dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtcy1DYWxsb3V0LXN1YlRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzeE5neEZhYnJpY0NhbGxvdXRDb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtQ2FsbG91dC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3N4Tmd4RmFicmljQ2FsbG91dEFjdGlvbnNdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAjYmVhayBjbGFzcz1cIm1zLUNvbnRleHR1YWxIb3N0LWJlYWtcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=