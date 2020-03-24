import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BreadcrumbComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r3); const item_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick(item_r1); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("title", item_r1.text);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1.text);
} }
export class BreadcrumbComponent {
    constructor() {
        this.itemClick = new EventEmitter();
    }
    onClick(item) {
        this.itemClick.next(item);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJsaWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDWW5FLDZCQUNFO0lBQUEsNEJBS0c7SUFGRCxvTkFBdUI7SUFFdEIsWUFBZTtJQUFBLGlCQUNqQjtJQUNELHVCQUFtRTtJQUNyRSxpQkFBSzs7O0lBSkQsZUFBd0I7SUFBeEIscUNBQXdCO0lBQ3ZCLGVBQWU7SUFBZixrQ0FBZTs7QURWeEIsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUZVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQUUzQyxDQUFDO0lBRWhCLE9BQU8sQ0FBQyxJQUFxQjtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztzRkFUVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1JoQyw4QkFDRTtRQUFBLDhCQUNFO1FBQUEseUJBR087UUFDUCx1QkFBbUU7UUFDbkUsOEJBQ0U7UUFBQSx3QkFBMkM7UUFDN0MsaUJBQU07UUFDUixpQkFBTTtRQUNOLDZCQUNFO1FBQUEsa0VBQ0U7UUFTSixpQkFBSztRQUNQLGlCQUFNOztRQVhpQyxlQUEwQjtRQUExQixtQ0FBMEI7O2tEREpwRCxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztrQkFFRSxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJQnJlYWRjcnVtYkl0ZW0gfSBmcm9tIFwiLi9pLWJyZWFkY3J1bWItaXRlbVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwic3gtbmd4LWZhYnJpYy1icmVhZGNydW1iXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxJQnJlYWRjcnVtYkl0ZW0+O1xyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJQnJlYWRjcnVtYkl0ZW0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25DbGljayhpdGVtOiBJQnJlYWRjcnVtYkl0ZW0pIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrLm5leHQoaXRlbSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcy1CcmVhZGNydW1iXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1zLUJyZWFkY3J1bWItb3ZlcmZsb3dcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJtcy1CcmVhZGNydW1iLW92ZXJmbG93QnV0dG9uIG1zLUljb24gbXMtSWNvbi0tZWxsaXBzaXNcIlxyXG4gICAgICB0YWJpbmRleD1cIjFcIlxyXG4gICAgPjwvZGl2PlxyXG4gICAgPGkgY2xhc3M9XCJtcy1CcmVhZGNydW1iLWNoZXZyb24gbXMtSWNvbiBtcy1JY29uLS1DaGV2cm9uUmlnaHRcIj48L2k+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXMtQnJlYWRjcnVtYi1vdmVyZmxvd01lbnVcIj5cclxuICAgICAgPHVsIGNsYXNzPVwibXMtQ29udGV4dHVhbE1lbnUgaXMtb3BlblwiPjwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8dWwgY2xhc3M9XCJtcy1CcmVhZGNydW1iLWxpc3RcIj5cclxuICAgIDxsaSBjbGFzcz1cIm1zLUJyZWFkY3J1bWItbGlzdEl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwibXMtQnJlYWRjcnVtYi1pdGVtTGlua1wiXHJcbiAgICAgICAgdGFiaW5kZXg9XCIyXCJcclxuICAgICAgICAoY2xpY2spPVwib25DbGljayhpdGVtKVwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwiaXRlbS50ZXh0XCJcclxuICAgICAgICA+e3sgaXRlbS50ZXh0IH19PC9hXHJcbiAgICAgID5cclxuICAgICAgPGkgY2xhc3M9XCJtcy1CcmVhZGNydW1iLWNoZXZyb24gbXMtSWNvbiBtcy1JY29uLS1DaGV2cm9uUmlnaHRcIj48L2k+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG4iXX0=