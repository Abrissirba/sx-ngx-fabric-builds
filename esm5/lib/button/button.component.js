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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBZ0IxQzt1QkFObUIsS0FBSzt1QkFFa0IsSUFBSTtLQUk3QjtJQUZqQixzQkFBNkMseUNBQVk7Ozs7UUFBekQsY0FBOEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7OztPQUFBOzs7O0lBSXBGLGtDQUFROzs7SUFBUjtLQUNDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1REFBdUQ7b0JBRWpFLDBFQUFzQzs7aUJBRXZDOzs7OzswQkFHRSxLQUFLOzBCQUVMLFdBQVcsU0FBQyxpQkFBaUI7K0JBRTdCLFdBQVcsU0FBQywwQkFBMEI7OzBCQWZ6Qzs7U0FTYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2J1dHRvbltzeC1uZ3gtZmFicmljLWJ1dHRvbl0sIGFbc3gtbmd4LWZhYnJpYy1idXR0b25dJyxcclxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICAvLyBob3N0OiB7J2NsYXNzJzogJ21hdC1idXR0b24nfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHJpbWFyeSA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1zLUJ1dHRvbicpIGNsYXNzZXMgPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1zLUJ1dHRvbi0tcHJpbWFyeScpIGdldCBjbGFzc1ByaW1hcnkoKSB7IHJldHVybiB0aGlzLnByaW1hcnk7IH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=