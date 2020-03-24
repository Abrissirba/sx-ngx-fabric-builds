/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HostBinding } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.primary = false;
        this.classes = true;
    }
    Object.defineProperty(ButtonComponent.prototype, "classPrimary", {
        get: /**
         * @return {?}
         */
        function () { return this.primary; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                    template: "<div class=\"ms-Button-label\"><ng-content></ng-content></div>",
                    styles: [":host:hover{background-color:#eaeaea;border:1px solid #eaeaea}:host,:host:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label{color:#333;font-weight:600;font-size:14px}:host.ms-Button--primary:hover{background-color:#005a9e;border-color:#005a9e}:host.ms-Button--primary,:host.ms-Button--primary:active{background-color:#0078d4;border-color:#0078d4}:host.ms-Button--primary .ms-Button-label{color:#fff}:host[disabled],:host[disabled]:active,:host[disabled]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}:host[disabled] .ms-Button-label{color:#a6a6a6}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        primary: [{ type: Input }],
        classes: [{ type: HostBinding, args: ['class.ms-Button',] }],
        classPrimary: [{ type: HostBinding, args: ['class.ms-Button--primary',] }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.primary;
    /** @type {?} */
    ButtonComponent.prototype.classes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBZ0IxQztRQU5BLGVBQW1CLEtBQUssQ0FBQztRQUV6QixlQUEwQyxJQUFJLENBQUM7S0FJOUI7SUFGakIsc0JBQTZDLHlDQUFZOzs7O1FBQXpELGNBQThELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzs7T0FBQTs7OztJQUlwRixrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdURBQXVEO29CQUVqRSwwRUFBc0M7O2lCQUV2Qzs7Ozs7MEJBR0UsS0FBSzswQkFFTCxXQUFXLFNBQUMsaUJBQWlCOytCQUU3QixXQUFXLFNBQUMsMEJBQTBCOzswQkFmekM7O1NBU2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc3gtbmd4LWZhYnJpYy1idXR0b25dLCBhW3N4LW5neC1mYWJyaWMtYnV0dG9uXScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gaG9zdDogeydjbGFzcyc6ICdtYXQtYnV0dG9uJ31cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHByaW1hcnkgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1CdXR0b24nKSBjbGFzc2VzID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1CdXR0b24tLXByaW1hcnknKSBnZXQgY2xhc3NQcmltYXJ5KCkgeyByZXR1cm4gdGhpcy5wcmltYXJ5OyB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19