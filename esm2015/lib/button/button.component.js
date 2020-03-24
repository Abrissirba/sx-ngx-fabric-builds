/**
 * @fileoverview added by tsickle
 * Generated from: lib/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HostBinding } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.primary = false;
        this.classes = true;
    }
    /**
     * @return {?}
     */
    get classPrimary() { return this.primary; }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                template: "<div class=\"ms-Button-label\"><ng-content></ng-content></div>",
                styles: [":host:hover{background-color:#eaeaea;border:1px solid #eaeaea}:host,:host:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label{color:#333;font-weight:600;font-size:14px}:host.ms-Button--primary:hover{background-color:#005a9e;border-color:#005a9e}:host.ms-Button--primary,:host.ms-Button--primary:active{background-color:#0078d4;border-color:#0078d4}:host.ms-Button--primary .ms-Button-label{color:#fff}:host[disabled],:host[disabled]:active,:host[disabled]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}:host[disabled] .ms-Button-label{color:#a6a6a6}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    primary: [{ type: Input }],
    classes: [{ type: HostBinding, args: ['class.ms-Button',] }],
    classPrimary: [{ type: HostBinding, args: ['class.ms-Button--primary',] }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.primary;
    /** @type {?} */
    ButtonComponent.prototype.classes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVDLE1BQU0sT0FBTyxlQUFlO0lBUTFCO1FBTlMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVPLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFJL0IsQ0FBQzs7OztJQUZqQixJQUE2QyxZQUFZLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7OztJQUlwRixRQUFRO0lBQ1IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdURBQXVEO2dCQUVqRSwwRUFBc0M7O2FBRXZDOzs7OztzQkFHRSxLQUFLO3NCQUVMLFdBQVcsU0FBQyxpQkFBaUI7MkJBRTdCLFdBQVcsU0FBQywwQkFBMEI7Ozs7SUFKdkMsa0NBQXlCOztJQUV6QixrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3N4LW5neC1mYWJyaWMtYnV0dG9uXSwgYVtzeC1uZ3gtZmFicmljLWJ1dHRvbl0nLFxyXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWJ1dHRvbid9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwcmltYXJ5ID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXMtQnV0dG9uJykgY2xhc3NlcyA9IHRydWU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXMtQnV0dG9uLS1wcmltYXJ5JykgZ2V0IGNsYXNzUHJpbWFyeSgpIHsgcmV0dXJuIHRoaXMucHJpbWFyeTsgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==