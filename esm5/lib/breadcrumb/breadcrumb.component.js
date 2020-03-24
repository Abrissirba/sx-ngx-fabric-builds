import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BreadcrumbComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21); var item_r19 = ctx.$implicit; var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onClick(item_r19); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("title", item_r19.text);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r19.text);
} }
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.itemClick = new EventEmitter();
    }
    BreadcrumbComponent.prototype.onClick = function (item) {
        this.itemClick.next(item);
    };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
    BreadcrumbComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["sx-ngx-fabric-breadcrumb"]], inputs: { items: "items" }, outputs: { itemClick: "itemClick" }, decls: 8, vars: 1, consts: [[1, "ms-Breadcrumb"], [1, "ms-Breadcrumb-overflow"], ["tabindex", "1", 1, "ms-Breadcrumb-overflowButton", "ms-Icon", "ms-Icon--ellipsis"], [1, "ms-Breadcrumb-chevron", "ms-Icon", "ms-Icon--ChevronRight"], [1, "ms-Breadcrumb-overflowMenu"], [1, "ms-ContextualMenu", "is-open"], [1, "ms-Breadcrumb-list"], ["class", "ms-Breadcrumb-listItem", 4, "ngFor", "ngForOf"], [1, "ms-Breadcrumb-listItem"], ["tabindex", "2", 1, "ms-Breadcrumb-itemLink", 3, "click"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "ul", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ul", 6);
            i0.ɵɵtemplate(7, BreadcrumbComponent_li_7_Template, 4, 2, "li", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [i1.NgForOf], styles: [".ms-Breadcrumb[_ngcontent-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow[_ngcontent-%COMP%]{display:none;position:relative}.ms-Breadcrumb-list[_ngcontent-%COMP%]{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list[_ngcontent-%COMP%]   .ms-Breadcrumb-listItem[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%]{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%], .ms-Breadcrumb-overflowButton[_ngcontent-%COMP%]{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron[_ngcontent-%COMP%]{font-size:12px;color:#666}.ms-Icon--ChevronRight[_ngcontent-%COMP%]:before{content:'\\E76C'}.ms-Breadcrumb-itemLink[_ngcontent-%COMP%]:hover, .ms-Breadcrumb-overflowButton[_ngcontent-%COMP%]:hover{background-color:#f8f8f8;cursor:pointer}"] });
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                selector: "sx-ngx-fabric-breadcrumb",
                templateUrl: "./breadcrumb.component.html",
                styleUrls: ["./breadcrumb.component.scss"]
            }]
    }], function () { return []; }, { items: [{
            type: Input
        }], itemClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJsaWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDWW5FLDZCQUNFO0lBQUEsNEJBS0c7SUFGRCxxTkFBdUI7SUFFdEIsWUFBZTtJQUFBLGlCQUNqQjtJQUNELHVCQUFtRTtJQUNyRSxpQkFBSzs7O0lBSkQsZUFBd0I7SUFBeEIsc0NBQXdCO0lBQ3ZCLGVBQWU7SUFBZixtQ0FBZTs7QURmeEI7SUFVRTtRQUZVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQUUzQyxDQUFDO0lBRWhCLHFDQUFPLEdBQVAsVUFBUSxJQUFxQjtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzBGQVRVLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDUmhDLDhCQUNFO1lBQUEsOEJBQ0U7WUFBQSx5QkFHTztZQUNQLHVCQUFtRTtZQUNuRSw4QkFDRTtZQUFBLHdCQUEyQztZQUM3QyxpQkFBTTtZQUNSLGlCQUFNO1lBQ04sNkJBQ0U7WUFBQSxrRUFDRTtZQVNKLGlCQUFLO1lBQ1AsaUJBQU07O1lBWGlDLGVBQTBCO1lBQTFCLG1DQUEwQjs7OEJEWmpFO0NBa0JDLEFBZkQsSUFlQztTQVZZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7a0JBRUUsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSUJyZWFkY3J1bWJJdGVtIH0gZnJvbSBcIi4vaS1icmVhZGNydW1iLWl0ZW1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInN4LW5neC1mYWJyaWMtYnJlYWRjcnVtYlwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpdGVtczogQXJyYXk8SUJyZWFkY3J1bWJJdGVtPjtcclxuXHJcbiAgQE91dHB1dCgpIGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8SUJyZWFkY3J1bWJJdGVtPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG9uQ2xpY2soaXRlbTogSUJyZWFkY3J1bWJJdGVtKSB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5uZXh0KGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXMtQnJlYWRjcnVtYlwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcy1CcmVhZGNydW1iLW92ZXJmbG93XCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwibXMtQnJlYWRjcnVtYi1vdmVyZmxvd0J1dHRvbiBtcy1JY29uIG1zLUljb24tLWVsbGlwc2lzXCJcclxuICAgICAgdGFiaW5kZXg9XCIxXCJcclxuICAgID48L2Rpdj5cclxuICAgIDxpIGNsYXNzPVwibXMtQnJlYWRjcnVtYi1jaGV2cm9uIG1zLUljb24gbXMtSWNvbi0tQ2hldnJvblJpZ2h0XCI+PC9pPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1zLUJyZWFkY3J1bWItb3ZlcmZsb3dNZW51XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm1zLUNvbnRleHR1YWxNZW51IGlzLW9wZW5cIj48L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPHVsIGNsYXNzPVwibXMtQnJlYWRjcnVtYi1saXN0XCI+XHJcbiAgICA8bGkgY2xhc3M9XCJtcy1CcmVhZGNydW1iLWxpc3RJdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzcz1cIm1zLUJyZWFkY3J1bWItaXRlbUxpbmtcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiMlwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaXRlbSlcIlxyXG4gICAgICAgIFthdHRyLnRpdGxlXT1cIml0ZW0udGV4dFwiXHJcbiAgICAgICAgPnt7IGl0ZW0udGV4dCB9fTwvYVxyXG4gICAgICA+XHJcbiAgICAgIDxpIGNsYXNzPVwibXMtQnJlYWRjcnVtYi1jaGV2cm9uIG1zLUljb24gbXMtSWNvbi0tQ2hldnJvblJpZ2h0XCI+PC9pPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L2Rpdj5cclxuIl19