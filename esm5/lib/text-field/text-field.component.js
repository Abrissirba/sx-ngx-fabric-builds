/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var TextFieldComponent = /** @class */ (function () {
    function TextFieldComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.multiline = false;
        this.rows = 3;
        this.type = 'text';
        this.disabled = false;
        this.required = false;
        this.value = null;
        this.classes = 'ms-TextField';
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(TextFieldComponent.prototype, "classMultiline", {
        get: /**
         * @return {?}
         */
        function () { return this.multiline; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldComponent.prototype, "classIsDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    TextFieldComponent.prototype.onChange = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
        this.value = evt.target.value;
        this._onChange(this.value);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    TextFieldComponent.prototype.onTouched = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this._onTouched();
    };
    // ControlValueAccessor implementation
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TextFieldComponent.prototype.setDisabledState = /**
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
    TextFieldComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.value = val;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextFieldComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextFieldComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouched = fn; };
    TextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sx-ngx-fabric-text-field',
                    template: "<label class=\"ms-Label\" [class.is-required]=\"required\">{{label}}</label>\r\n<input class=\"ms-TextField-field\"\r\n  *ngIf=\"!multiline\"\r\n  [attr.type]=\"type\" \r\n  [attr.placeholder]=\"placeholder\" \r\n  [value]=\"value\" \r\n  [disabled]=\"disabled\" \r\n  (blur)=\"onTouched($event)\"\r\n  (change)=\"onChange($event)\" \r\n  (keyup)=\"onChange($event)\"\r\n/>\r\n\r\n<textarea class=\"ms-TextField-field\"\r\n*ngIf=\"multiline\"\r\n[attr.type]=\"type\" \r\n[attr.placeholder]=\"placeholder\" \r\n[value]=\"value\" \r\n[disabled]=\"disabled\"\r\n[attr.rows]=\"rows\"\r\n(blur)=\"onTouched($event)\"\r\n(change)=\"onChange($event)\" \r\n(keyup)=\"onChange($event)\"\r\n></textarea>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TextFieldComponent; }),
                            multi: true
                        }],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host.ms-TextField{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;width:100%}.ms-Label{font-size:14px;font-weight:600}.ms-TextField-field{box-sizing:border-box;margin:0;padding:6px 12px 7px;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}:host.ms-TextField.ms-TextField--multiline .ms-TextField-field{color:#333;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}:host.ms-TextField.is-disabled .ms-TextField-field{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field:hover{border-color:#333}.ms-TextField-field:active,.ms-TextField-field:focus{border-color:#0078d4}:host.ms-TextField.ng-invalid.ng-touched .ms-TextField-field{border-color:#a80000}"]
                }] }
    ];
    /** @nocollapse */
    TextFieldComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TextFieldComponent.propDecorators = {
        label: [{ type: Input }],
        multiline: [{ type: Input }],
        rows: [{ type: Input }],
        type: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        classes: [{ type: HostBinding, args: ['class',] }],
        classMultiline: [{ type: HostBinding, args: ['class.ms-TextField--multiline',] }],
        classIsDisabled: [{ type: HostBinding, args: ['class.is-disabled',] }]
    };
    return TextFieldComponent;
}());
export { TextFieldComponent };
if (false) {
    /** @type {?} */
    TextFieldComponent.prototype.label;
    /** @type {?} */
    TextFieldComponent.prototype.multiline;
    /** @type {?} */
    TextFieldComponent.prototype.rows;
    /** @type {?} */
    TextFieldComponent.prototype.type;
    /** @type {?} */
    TextFieldComponent.prototype.placeholder;
    /** @type {?} */
    TextFieldComponent.prototype.disabled;
    /** @type {?} */
    TextFieldComponent.prototype.required;
    /** @type {?} */
    TextFieldComponent.prototype.value;
    /** @type {?} */
    TextFieldComponent.prototype.classes;
    /** @type {?} */
    TextFieldComponent.prototype._onChange;
    /** @type {?} */
    TextFieldComponent.prototype._onTouched;
    /** @type {?} */
    TextFieldComponent.prototype.changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7O0lBd0M5RCw0QkFDVTtRQUFBLHNCQUFpQixHQUFqQixpQkFBaUI7eUJBdkJOLEtBQUs7b0JBRVYsQ0FBQztvQkFFRCxNQUFNO3dCQUlGLEtBQUs7d0JBRUwsS0FBSztxQkFFakIsSUFBSTt1QkFFb0IsY0FBYzt5QkE0QjFCLFVBQUMsQ0FBTSxLQUFROzBCQUNkLGVBQVM7S0FuQnpCO0lBUkwsc0JBQWtELDhDQUFjOzs7O1FBQWhFLGNBQXFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7T0FBQTtJQUU3RixzQkFBc0MsK0NBQWU7Ozs7UUFBckQsY0FBMEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7OztPQUFBOzs7OztJQVFqRixxQ0FBUTs7OztJQUFSLFVBQVMsR0FBRztRQUNWLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxHQUFHO1FBQ1gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25CO0lBRUQsc0NBQXNDOzs7OztJQUN0Qyw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3ZDOzs7OztJQUtNLHVDQUFVOzs7O2NBQUMsR0FBUTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7OztJQUdqQyw2Q0FBZ0I7Ozs7Y0FBQyxFQUFvQixJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs7OztJQUNuRSw4Q0FBaUI7Ozs7Y0FBQyxFQUFjLElBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O2dCQW5FdkUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLGlzQkFBMEM7b0JBRTFDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDO29CQUNGLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBZG9GLGlCQUFpQjs7O3dCQWlCbkcsS0FBSzs0QkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSzs4QkFFTCxLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSzswQkFJTCxXQUFXLFNBQUMsT0FBTztpQ0FFbkIsV0FBVyxTQUFDLCtCQUErQjtrQ0FFM0MsV0FBVyxTQUFDLG1CQUFtQjs7NkJBckNsQzs7U0FlYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIElucHV0LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy10ZXh0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGV4dEZpZWxkQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsO1xyXG5cclxuICBASW5wdXQoKSBtdWx0aWxpbmUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcm93cyA9IDM7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICB2YWx1ZSA9IG51bGw7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBjbGFzc2VzID0gJ21zLVRleHRGaWVsZCc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXMtVGV4dEZpZWxkLS1tdWx0aWxpbmUnKSBnZXQgY2xhc3NNdWx0aWxpbmUoKSB7IHJldHVybiB0aGlzLm11bHRpbGluZTsgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWRpc2FibGVkJykgZ2V0IGNsYXNzSXNEaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH1cclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgb25DaGFuZ2UoZXZ0KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaGVkKGV2dCkge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uVG91Y2hlZCA9IGZuOyB9XHJcblxyXG59XHJcbiJdfQ==