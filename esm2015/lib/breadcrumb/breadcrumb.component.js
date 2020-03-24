/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
export class BreadcrumbComponent {
    constructor() {
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.itemClick.next(item);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: "sx-ngx-fabric-breadcrumb",
                template: "<div class=\"ms-Breadcrumb\">\r\n  <div class=\"ms-Breadcrumb-overflow\">\r\n    <div\r\n      class=\"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis\"\r\n      tabindex=\"1\"\r\n    ></div>\r\n    <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    <div class=\"ms-Breadcrumb-overflowMenu\">\r\n      <ul class=\"ms-ContextualMenu is-open\"></ul>\r\n    </div>\r\n  </div>\r\n  <ul class=\"ms-Breadcrumb-list\">\r\n    <li class=\"ms-Breadcrumb-listItem\" *ngFor=\"let item of items\">\r\n      <a\r\n        class=\"ms-Breadcrumb-itemLink\"\r\n        tabindex=\"2\"\r\n        (click)=\"onClick(item)\"\r\n        [attr.title]=\"item.text\"\r\n        >{{ item.text }}</a\r\n      >\r\n      <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                styles: [".ms-Breadcrumb{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-overflow{display:none;position:relative}.ms-Breadcrumb-list{white-space:nowrap;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.ms-Breadcrumb-list .ms-Breadcrumb-listItem{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.ms-Breadcrumb-itemLink{font-size:21px;font-weight:100;color:#333;padding:0 8px 3px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-chevron{font-size:12px;color:#666}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:#f8f8f8;cursor:pointer}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    items: [{ type: Input }],
    itemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.items;
    /** @type {?} */
    BreadcrumbComponent.prototype.itemClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdkUsTUFBTTtJQUtKO3lCQUZzQixJQUFJLFlBQVksRUFBbUI7S0FFekM7Ozs7O0lBRWhCLE9BQU8sQ0FBQyxJQUFxQjtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLCswQkFBMEM7O2FBRTNDOzs7OztvQkFFRSxLQUFLO3dCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IElCcmVhZGNydW1iSXRlbSB9IGZyb20gXCIuL2ktYnJlYWRjcnVtYi1pdGVtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJzeC1uZ3gtZmFicmljLWJyZWFkY3J1bWJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbXM6IEFycmF5PElCcmVhZGNydW1iSXRlbT47XHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPElCcmVhZGNydW1iSXRlbT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkNsaWNrKGl0ZW06IElCcmVhZGNydW1iSXRlbSkge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2submV4dChpdGVtKTtcclxuICB9XHJcbn1cclxuIl19