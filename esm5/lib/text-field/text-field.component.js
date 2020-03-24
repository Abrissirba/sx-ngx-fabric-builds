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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7O0lBd0M5RCw0QkFDVTtRQUFBLHNCQUFpQixHQUFqQixpQkFBaUI7UUF2QjNCLGlCQUFxQixLQUFLLENBQUM7UUFFM0IsWUFBZ0IsQ0FBQyxDQUFDO1FBRWxCLFlBQWdCLE1BQU0sQ0FBQztRQUl2QixnQkFBb0IsS0FBSyxDQUFDO1FBRTFCLGdCQUFvQixLQUFLLENBQUM7UUFFMUIsYUFBUSxJQUFJLENBQUM7UUFFYixlQUFnQyxjQUFjLENBQUM7eUJBNEIzQixVQUFDLENBQU0sS0FBUTswQkFDZCxlQUFTO0tBbkJ6QjtJQVJMLHNCQUFrRCw4Q0FBYzs7OztRQUFoRSxjQUFxRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7O09BQUE7SUFFN0Ysc0JBQXNDLCtDQUFlOzs7O1FBQXJELGNBQTBELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzs7T0FBQTs7Ozs7SUFRakYscUNBQVE7Ozs7SUFBUixVQUFTLEdBQUc7UUFDVixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxzQ0FBUzs7OztJQUFULFVBQVUsR0FBRztRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjtJQUVELHNDQUFzQzs7Ozs7SUFDdEMsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN2Qzs7Ozs7SUFLTSx1Q0FBVTs7OztjQUFDLEdBQVE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDOzs7Ozs7SUFHakMsNkNBQWdCOzs7O2NBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFDbkUsOENBQWlCOzs7O2NBQUMsRUFBYyxJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztnQkFuRXZFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxpc0JBQTBDO29CQUUxQyxTQUFTLEVBQUUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQzs0QkFDakQsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQztvQkFDRixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWRvRixpQkFBaUI7Ozt3QkFpQm5HLEtBQUs7NEJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7OEJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7MEJBSUwsV0FBVyxTQUFDLE9BQU87aUNBRW5CLFdBQVcsU0FBQywrQkFBK0I7a0NBRTNDLFdBQVcsU0FBQyxtQkFBbUI7OzZCQXJDbEM7O1NBZWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtdGV4dC1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRGaWVsZENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBsYWJlbDtcclxuXHJcbiAgQElucHV0KCkgbXVsdGlsaW5lID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHJvd3MgPSAzO1xyXG5cclxuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFsdWUgPSBudWxsO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3NlcyA9ICdtcy1UZXh0RmllbGQnO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1zLVRleHRGaWVsZC0tbXVsdGlsaW5lJykgZ2V0IGNsYXNzTXVsdGlsaW5lKCkgeyByZXR1cm4gdGhpcy5tdWx0aWxpbmU7IH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1kaXNhYmxlZCcpIGdldCBjbGFzc0lzRGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9XHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2dCkge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy52YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hlZChldnQpIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vblRvdWNoZWQgPSBmbjsgfVxyXG5cclxufVxyXG4iXX0=