/**
 * @fileoverview added by tsickle
 * Generated from: lib/toggle/toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Guid } from '../utils/guid';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.offText = 'Off';
        this.onText = 'On';
        this.textLeft = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(ToggleComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classIsDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classTextLeft", {
        get: /**
         * @return {?}
         */
        function () { return this.textLeft; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    ToggleComponent.prototype.onInputClick = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    /**
     * @return {?}
     */
    ToggleComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    // ControlValueAccessor implementation
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ToggleComponent.prototype.setDisabledState = 
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ToggleComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.checked = val;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    ToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-toggle',
                    template: "<span class=\"ms-Toggle-description\"><ng-content></ng-content></span>\r\n<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\" class=\"ms-Toggle-input\" />\r\n<label [attr.for]=\"inputId\" class=\"ms-Toggle-field\" [class.is-selected]=\"checked\">\r\n  <span class=\"ms-Label ms-Label--off\">{{ offText }}</span>\r\n  <span class=\"ms-Label ms-Label--on\">{{ onText }}</span>\r\n</label>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ToggleComponent; })),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'ms-Toggle'
                    },
                    styles: [":host.ms-Toggle{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;position:relative;display:block}.ms-Toggle-description{color:#333;box-sizing:border-box;box-shadow:none;display:block;word-wrap:break-word;overflow-wrap:break-word;margin:0;padding:5px 0}.ms-Toggle-input{display:none}.ms-Toggle-field{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:1px solid #a6a6a6;border-radius:20px;cursor:pointer;-webkit-transition:.1s;transition:.1s;outline:0}:host.ms-Toggle .ms-Toggle-field:before{position:absolute;top:4px;width:10px;height:10px;border-radius:10px;content:'';left:4px;background-color:#333;outline:transparent solid 1px;-webkit-transition:.1s;transition:.1s}:host.ms-Toggle .ms-Label{position:relative;padding:0 0 0 50px}:host.ms-Toggle .ms-Toggle-field .ms-Label{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.ms-Toggle .ms-Toggle-field .ms-Label--off{display:block}:host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off{display:none}:host.ms-Toggle .ms-Toggle-field .ms-Label--on{display:none}:host.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on{display:block}:host.ms-Toggle .ms-Toggle-field.is-selected{background-color:#0078d4;border-color:#0078d4}:host.ms-Toggle .ms-Toggle-field.is-selected:focus,:host.ms-Toggle .ms-Toggle-field.is-selected:hover{background-color:#106ebe;border-color:#106ebe}:host.ms-Toggle .ms-Toggle-field.is-selected:before{background-color:#fff;left:28px}:host.ms-Toggle.is-disabled .ms-Toggle-field{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}:host.ms-Toggle.is-disabled .ms-Toggle-field.is-selected{background-color:#c8c8c8}:host.ms-Toggle.is-disabled .ms-Toggle-field:before{background-color:#fff}:host.ms-Toggle.is-disabled .ms-Label{color:#a6a6a6}:host.ms-Toggle.ms-Toggle--textLeft{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host.ms-Toggle.ms-Toggle--textLeft .ms-Toggle-field{margin-right:24px}:host.ms-Toggle.ms-Toggle--textLeft .ms-Toggle-description{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}"]
                }] }
    ];
    /** @nocollapse */
    ToggleComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    ToggleComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        offText: [{ type: Input }],
        onText: [{ type: Input }],
        textLeft: [{ type: Input }],
        classIsDisabled: [{ type: HostBinding, args: ['class.is-disabled',] }],
        classTextLeft: [{ type: HostBinding, args: ['class.ms-Toggle--textLeft',] }]
    };
    return ToggleComponent;
}());
export { ToggleComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype._checked;
    /** @type {?} */
    ToggleComponent.prototype.disabled;
    /** @type {?} */
    ToggleComponent.prototype.offText;
    /** @type {?} */
    ToggleComponent.prototype.onText;
    /** @type {?} */
    ToggleComponent.prototype.textLeft;
    /** @type {?} */
    ToggleComponent.prototype.inputId;
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    ToggleComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQ7SUEyQ0UseUJBQ1UsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUEzQnRDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFZaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBTTFCLFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFzQmxCLGNBQVM7Ozs7UUFBRyxVQUFDLENBQU0sSUFBTyxDQUFDLEVBQUM7UUFDNUIsZUFBVTs7O1FBQUcsY0FBUSxDQUFDLEVBQUM7SUFuQjNCLENBQUM7SUEzQkwsc0JBQWEsb0NBQU87Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFZLE9BQWdCO1lBQzFCLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkM7UUFDSCxDQUFDOzs7T0FQQTtJQWlCRCxzQkFBc0MsNENBQWU7Ozs7UUFBckQsY0FBMEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFakYsc0JBQThDLDBDQUFhOzs7O1FBQTNELGNBQWdFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7OztJQVF2RixzQ0FBWTs7OztJQUFaLFVBQWEsR0FBZTtRQUMxQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQXNDOzs7Ozs7SUFDdEMsMENBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBS00sb0NBQVU7Ozs7SUFBakIsVUFBa0IsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLDBDQUFnQjs7OztJQUF2QixVQUF3QixFQUFvQixJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDckUsMkNBQWlCOzs7O0lBQXhCLFVBQXlCLEVBQWMsSUFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQXZFekUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHdkQUFzQztvQkFFdEMsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsRUFBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQztvQkFDRixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxXQUFXO3FCQUNyQjs7aUJBQ0Y7Ozs7Z0JBbEJrQyxpQkFBaUI7OzswQkFzQmpELEtBQUs7MkJBV0wsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSztrQ0FFTCxXQUFXLFNBQUMsbUJBQW1CO2dDQUUvQixXQUFXLFNBQUMsMkJBQTJCOztJQWtDMUMsc0JBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQTFEWSxlQUFlOzs7Ozs7SUFFMUIsbUNBQXlCOztJQVl6QixtQ0FBMEI7O0lBRTFCLGtDQUF5Qjs7SUFFekIsaUNBQXVCOztJQUV2QixtQ0FBMEI7O0lBTTFCLGtDQUEwQjs7Ozs7SUFzQjFCLG9DQUFvQzs7Ozs7SUFDcEMscUNBQStCOzs7OztJQXBCN0IsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi91dGlscy9ndWlkJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtdG9nZ2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRvZ2dsZUNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtcy1Ub2dnbGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGdldCBjaGVja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgY2hlY2tlZChjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoY2hlY2tlZCAhPT0gdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgb2ZmVGV4dCA9ICdPZmYnO1xyXG5cclxuICBASW5wdXQoKSBvblRleHQgPSAnT24nO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0TGVmdCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWRpc2FibGVkJykgZ2V0IGNsYXNzSXNEaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1Ub2dnbGUtLXRleHRMZWZ0JykgZ2V0IGNsYXNzVGV4dExlZnQoKSB7IHJldHVybiB0aGlzLnRleHRMZWZ0OyB9XHJcblxyXG4gIGlucHV0SWQgPSBHdWlkLnVuaXF1ZWlkKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBvbklucHV0Q2xpY2soZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vblRvdWNoZWQgPSBmbjsgfVxyXG5cclxufVxyXG4iXX0=