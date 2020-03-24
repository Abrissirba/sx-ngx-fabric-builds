/**
 * @fileoverview added by tsickle
 * Generated from: lib/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    BreadcrumbComponent.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemClick.next(item);
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: "sx-ngx-fabric-breadcrumb",
                    template: "<div class=\"ms-Breadcrumb\">\r\n  <div class=\"ms-Breadcrumb-overflow\">\r\n    <div\r\n      class=\"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis\"\r\n      tabindex=\"1\"\r\n    ></div>\r\n    <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    <div class=\"ms-Breadcrumb-overflowMenu\">\r\n      <ul class=\"ms-ContextualMenu is-open\"></ul>\r\n    </div>\r\n  </div>\r\n  <ul class=\"ms-Breadcrumb-list\">\r\n    <li class=\"ms-Breadcrumb-listItem\" *ngFor=\"let item of items\">\r\n      <a\r\n        class=\"ms-Breadcrumb-itemLink\"\r\n        tabindex=\"2\"\r\n        (click)=\"onClick(item)\"\r\n        [attr.title]=\"item.text\"\r\n        >{{ item.text }}</a\r\n      >\r\n      <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                    styles: [".ms-Breadcrumb{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow{display:none;position:relative}.ms-Breadcrumb-list{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list .ms-Breadcrumb-listItem{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron{font-size:12px;color:#666}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:#f8f8f8;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        items: [{ type: Input }],
        itemClick: [{ type: Output }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.items;
    /** @type {?} */
    BreadcrumbComponent.prototype.itemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFO0lBVUU7UUFGVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFFM0MsQ0FBQzs7Ozs7SUFFaEIscUNBQU87Ozs7SUFBUCxVQUFRLElBQXFCO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQywrMEJBQTBDOztpQkFFM0M7Ozs7O3dCQUVFLEtBQUs7NEJBRUwsTUFBTTs7SUFPVCwwQkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLG1CQUFtQjs7O0lBQzlCLG9DQUF1Qzs7SUFFdkMsd0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJQnJlYWRjcnVtYkl0ZW0gfSBmcm9tIFwiLi9pLWJyZWFkY3J1bWItaXRlbVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwic3gtbmd4LWZhYnJpYy1icmVhZGNydW1iXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxJQnJlYWRjcnVtYkl0ZW0+O1xyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJQnJlYWRjcnVtYkl0ZW0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25DbGljayhpdGVtOiBJQnJlYWRjcnVtYkl0ZW0pIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrLm5leHQoaXRlbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==