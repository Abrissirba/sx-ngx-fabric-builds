/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { Guid } from '../utils/guid';
import { ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(CheckboxComponent.prototype, "checked", {
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
    /**
     * @param {?} evt
     * @return {?}
     */
    CheckboxComponent.prototype.onInputClick = /**
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
    CheckboxComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = /**
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
    CheckboxComponent.prototype.writeValue = /**
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
    CheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-checkbox',
                    template: "<input type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (click)=\"onInputClick($event)\" [disabled]=\"disabled\"/>\r\n<label role=\"checkbox\" [attr.for]=\"inputId\" [class.is-checked]=\"checked\" [class.disabled]=\"disabled\">\r\n  <span class=\"ms-label\"><ng-content></ng-content></span>\r\n</label>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return CheckboxComponent; }),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}input{position:absolute;opacity:0}label{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}label:hover{color:#000}label:before{content:'';display:inline-block;border:1px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}label:hover:before{border:1px solid #333}label.disabled{color:#c8c8c8}label.disabled:before,label.disabled:hover:before{border:1px solid #c8c8c8}label.is-checked:before{border:10px solid #0078d4;background-color:#0078d4}label.is-checked:hover:before{border:10px solid #106ebe;background-color:#106ebe}label.disabled.is-checked:before,label.disabled.is-checked:hover:before{border:10px solid #c8c8c8;background-color:#c8c8c8}label:after{content:'\\E73E';font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}label.is-checked:after{display:block}.ms-label{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    CheckboxComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype._checked;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.inputId;
    /** @type {?} */
    CheckboxComponent.prototype._onChange;
    /** @type {?} */
    CheckboxComponent.prototype._onTouched;
    /** @type {?} */
    CheckboxComponent.prototype.changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBZ0N2RSwyQkFDVTtRQUFBLHNCQUFpQixHQUFqQixpQkFBaUI7d0JBakJSLEtBQUs7d0JBWUosS0FBSzt1QkFFZixJQUFJLENBQUMsUUFBUSxFQUFFO3lCQXNCTCxVQUFDLENBQU0sS0FBUTswQkFDZCxlQUFTO0tBbkJ6QjtJQWpCTCxzQkFBYSxzQ0FBTzs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFFRCxVQUFZLE9BQWdCO1lBQzFCLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkM7U0FDRjs7O09BUEE7Ozs7O0lBaUJELHdDQUFZOzs7O0lBQVosVUFBYSxHQUFlO1FBQzFCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7OztJQUVELGtDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0lBRUQsc0NBQXNDOzs7OztJQUN0Qyw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3ZDOzs7OztJQUtNLHNDQUFVOzs7O2NBQUMsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7O0lBR2QsNENBQWdCOzs7O2NBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFDbkUsNkNBQWlCOzs7O2NBQUMsRUFBYyxJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztnQkExRHZFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx1VUFBd0M7b0JBRXhDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDO29CQUNGLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBZFEsaUJBQWlCOzs7MEJBa0J2QixLQUFLOzJCQVdMLEtBQUs7OzRCQS9CUjs7U0FpQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vdXRpbHMvZ3VpZCc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQge1xyXG5cclxuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ2V0IGNoZWNrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBjaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChjaGVja2VkICE9PSB0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5fY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBpbnB1dElkID0gR3VpZC51bmlxdWVpZCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgb25JbnB1dENsaWNrKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25Ub3VjaGVkID0gZm47IH1cclxufVxyXG4iXX0=