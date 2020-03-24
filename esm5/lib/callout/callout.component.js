import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["beak"];
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
var _c1 = [[["", "sxNgxFabricCalloutHeader", ""]], [["", "sxNgxFabricCalloutContent", ""]], [["", "sxNgxFabricCalloutActions", ""]], "*"];
var _c2 = ["[sxNgxFabricCalloutHeader]", "[sxNgxFabricCalloutContent]", "[sxNgxFabricCalloutActions]", "*"];
var CalloutComponent = /** @class */ (function () {
    function CalloutComponent(elementRef) {
        this.elementRef = elementRef;
        this.closed = new EventEmitter();
    }
    Object.defineProperty(CalloutComponent.prototype, "beakPosition", {
        get: function () { return this._beakPosition; },
        set: function (val) {
            this._beakPosition = val;
            this.updateBeakPosition();
        },
        enumerable: true,
        configurable: true
    });
    CalloutComponent.prototype.updateBeakPosition = function () {
        if (this.beakPosition) {
            this.beak.nativeElement.style.top = this.beakPosition.top;
            this.beak.nativeElement.style.left = this.beakPosition.left;
            this.beak.nativeElement.style.right = this.beakPosition.right;
            this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
        }
    };
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
    return CalloutComponent;
}());
export { CalloutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiLCJsaWIvY2FsbG91dC9jYWxsb3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0lDQ3BJLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0QkFDRTtJQUFBLGtCQUFnRDtJQUNsRCxpQkFBSTtJQUNOLGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDRCQUNFO0lBQUEsc0JBQWlEO0lBQ25ELGlCQUFJO0lBQ04saUJBQU07SUFDTiwrQkFDRTtJQUFBLHNCQUFpRDtJQUNuRCxpQkFBTTtJQUNSLGlCQUFNO0lBQ04sc0JBQVk7SUFDZCxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDTiwrQkFBZ0Q7SUFDbEQsaUJBQU07Ozs7QUR0QlI7SUF3QkUsMEJBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVZ0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUFXOUQsQ0FBQztJQVJMLHNCQUFJLDBDQUFZO2FBQWhCLGNBQXFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDakQsVUFBaUIsR0FBRztZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FKZ0Q7SUFVakQsNkNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDakU7SUFDSCxDQUFDO29GQTlCVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtpQ0FNaEIsV0FBVzs7Ozs7Ozs7WUNkeEIsK0VBQ0U7OzJCRERGO0NBd0NDLEFBckNELElBcUNDO1NBaENZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4Qzs7a0JBR0UsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFdkMsU0FBUzttQkFBQyxNQUFNOztrQkFFaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnRpY2FsQ29ubmVjdGlvblBvcywgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtY2FsbG91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGxvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGxvdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsbG91dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB5UG9zaXRpb246IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JlYWsnKSBiZWFrOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkIHwgJ2NsaWNrJyB8ICdrZXlkb3duJz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfYmVha1Bvc2l0aW9uO1xyXG4gIGdldCBiZWFrUG9zaXRpb24oKSB7IHJldHVybiB0aGlzLl9iZWFrUG9zaXRpb247IH1cclxuICBzZXQgYmVha1Bvc2l0aW9uKHZhbCkge1xyXG4gICAgdGhpcy5fYmVha1Bvc2l0aW9uID0gdmFsO1xyXG4gICAgdGhpcy51cGRhdGVCZWFrUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIHVwZGF0ZUJlYWtQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmJlYWtQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmJlYWtQb3NpdGlvbi50b3A7XHJcbiAgICAgIHRoaXMuYmVhay5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLmJlYWtQb3NpdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5yaWdodCA9IHRoaXMuYmVha1Bvc2l0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLmJlYWsubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLmJlYWtQb3NpdGlvbi5ib3R0b207XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1zLUNvbnRleHR1YWxIb3N0IGlzLXBvc2l0aW9uZWQgbXMtQ29udGV4dHVhbEhvc3QtLWFycm93TGVmdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1zLUNvbnRleHR1YWxIb3N0LW1haW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1zLUNhbGxvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXMtQ2FsbG91dC1tYWluXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtQ2FsbG91dC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtcy1DYWxsb3V0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3N4Tmd4RmFicmljQ2FsbG91dEhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1zLUNhbGxvdXQtaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1zLUNhbGxvdXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibXMtQ2FsbG91dC1zdWJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3hOZ3hGYWJyaWNDYWxsb3V0Q29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1zLUNhbGxvdXQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzeE5neEZhYnJpY0NhbGxvdXRBY3Rpb25zXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgI2JlYWsgY2xhc3M9XCJtcy1Db250ZXh0dWFsSG9zdC1iZWFrXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+Il19