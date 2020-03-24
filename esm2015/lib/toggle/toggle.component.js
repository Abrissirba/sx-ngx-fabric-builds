/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Guid } from '../utils/guid';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class ToggleComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.offText = 'Off';
        this.onText = 'On';
        this.textLeft = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    set checked(checked) {
        if (checked !== this.checked) {
            this._checked = checked;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    get classIsDisabled() { return this.disabled; }
    /**
     * @return {?}
     */
    get classTextLeft() { return this.textLeft; }
    /**
     * @param {?} evt
     * @return {?}
     */
    onInputClick(evt) {
        evt.stopPropagation();
        this.toggle();
    }
    /**
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.checked = val;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
}
ToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sx-ngx-fabric-toggle',
                template: "<span class=\"ms-Toggle-description\"><ng-content></ng-content></span>\r\n<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\" class=\"ms-Toggle-input\" />\r\n<label [attr.for]=\"inputId\" class=\"ms-Toggle-field\" [class.is-selected]=\"checked\">\r\n  <span class=\"ms-Label ms-Label--off\">{{ offText }}</span>\r\n  <span class=\"ms-Label ms-Label--on\">{{ onText }}</span>\r\n</label>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ToggleComponent),
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
ToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ToggleComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    offText: [{ type: Input }],
    onText: [{ type: Input }],
    textLeft: [{ type: Input }],
    classIsDisabled: [{ type: HostBinding, args: ['class.is-disabled',] }],
    classTextLeft: [{ type: HostBinding, args: ['class.ms-Toggle--textLeft',] }]
};
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    ToggleComponent.prototype._onChange;
    /** @type {?} */
    ToggleComponent.prototype._onTouched;
    /** @type {?} */
    ToggleComponent.prototype.changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWlCbkQsTUFBTTs7OztJQTRCSixZQUNVO1FBQUEsc0JBQWlCLEdBQWpCLGlCQUFpQjt3QkEzQlIsS0FBSzt3QkFZSixLQUFLO3VCQUVOLEtBQUs7c0JBRU4sSUFBSTt3QkFFRixLQUFLO3VCQU1mLElBQUksQ0FBQyxRQUFRLEVBQUU7eUJBc0JMLENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBSTswQkFDZCxHQUFHLEVBQUUsSUFBSTtLQW5CekI7Ozs7SUEzQkwsSUFBYSxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFnQjtRQUMxQixJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztLQUNGOzs7O0lBVUQsSUFBc0MsZUFBZSxLQUFLLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzs7O0lBRWpGLElBQThDLGFBQWEsS0FBSyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTs7Ozs7SUFRdkYsWUFBWSxDQUFDLEdBQWU7UUFDMUIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUdELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN2Qzs7Ozs7SUFLTSxVQUFVLENBQUMsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7O0lBR2QsZ0JBQWdCLENBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFDbkUsaUJBQWlCLENBQUMsRUFBYyxJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzs7WUF2RXZFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx3ZEFBc0M7Z0JBRXRDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2dCQUNGLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLFdBQVc7aUJBQ3JCOzthQUNGOzs7O1lBbEJrQyxpQkFBaUI7OztzQkFzQmpELEtBQUs7dUJBV0wsS0FBSztzQkFFTCxLQUFLO3FCQUVMLEtBQUs7dUJBRUwsS0FBSzs4QkFFTCxXQUFXLFNBQUMsbUJBQW1COzRCQUUvQixXQUFXLFNBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi91dGlscy9ndWlkJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtdG9nZ2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRvZ2dsZUNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtcy1Ub2dnbGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGdldCBjaGVja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgY2hlY2tlZChjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoY2hlY2tlZCAhPT0gdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgb2ZmVGV4dCA9ICdPZmYnO1xyXG5cclxuICBASW5wdXQoKSBvblRleHQgPSAnT24nO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0TGVmdCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWRpc2FibGVkJykgZ2V0IGNsYXNzSXNEaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1Ub2dnbGUtLXRleHRMZWZ0JykgZ2V0IGNsYXNzVGV4dExlZnQoKSB7IHJldHVybiB0aGlzLnRleHRMZWZ0OyB9XHJcblxyXG4gIGlucHV0SWQgPSBHdWlkLnVuaXF1ZWlkKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBvbklucHV0Q2xpY2soZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vblRvdWNoZWQgPSBmbjsgfVxyXG5cclxufVxyXG4iXX0=