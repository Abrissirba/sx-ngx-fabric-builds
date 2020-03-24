/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this._onChange = function (_) { };
        this._onTouched = function () { };
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
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ToggleComponent.prototype.setDisabledState = /**
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
                            useExisting: forwardRef(function () { return ToggleComponent; }),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUE2Q2pELHlCQUNVO1FBQUEsc0JBQWlCLEdBQWpCLGlCQUFpQjt3QkEzQlIsS0FBSzt3QkFZSixLQUFLO3VCQUVOLEtBQUs7c0JBRU4sSUFBSTt3QkFFRixLQUFLO3VCQU1mLElBQUksQ0FBQyxRQUFRLEVBQUU7eUJBc0JMLFVBQUMsQ0FBTSxLQUFROzBCQUNkLGVBQVM7S0FuQnpCO0lBM0JMLHNCQUFhLG9DQUFPOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQUVELFVBQVksT0FBZ0I7WUFDMUIsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QztTQUNGOzs7T0FQQTtJQWlCRCxzQkFBc0MsNENBQWU7Ozs7UUFBckQsY0FBMEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7OztPQUFBO0lBRWpGLHNCQUE4QywwQ0FBYTs7OztRQUEzRCxjQUFnRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTs7O09BQUE7Ozs7O0lBUXZGLHNDQUFZOzs7O0lBQVosVUFBYSxHQUFlO1FBQzFCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0lBRUQsc0NBQXNDOzs7OztJQUN0QywwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3ZDOzs7OztJQUtNLG9DQUFVOzs7O2NBQUMsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7O0lBR2QsMENBQWdCOzs7O2NBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFDbkUsMkNBQWlCOzs7O2NBQUMsRUFBYyxJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztnQkF2RXZFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3ZEFBc0M7b0JBRXRDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7b0JBQ0YsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsV0FBVztxQkFDckI7O2lCQUNGOzs7O2dCQWxCa0MsaUJBQWlCOzs7MEJBc0JqRCxLQUFLOzJCQVdMLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUVMLEtBQUs7a0NBRUwsV0FBVyxTQUFDLG1CQUFtQjtnQ0FFL0IsV0FBVyxTQUFDLDJCQUEyQjs7MEJBM0MxQzs7U0FtQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vdXRpbHMvZ3VpZCc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeC1uZ3gtZmFicmljLXRvZ2dsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9nZ2xlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUb2dnbGVDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnbXMtVG9nZ2xlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbXBvbmVudCB7XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBnZXQgY2hlY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGNoZWNrZWQgIT09IHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG9mZlRleHQgPSAnT2ZmJztcclxuXHJcbiAgQElucHV0KCkgb25UZXh0ID0gJ09uJztcclxuXHJcbiAgQElucHV0KCkgdGV4dExlZnQgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1kaXNhYmxlZCcpIGdldCBjbGFzc0lzRGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXMtVG9nZ2xlLS10ZXh0TGVmdCcpIGdldCBjbGFzc1RleHRMZWZ0KCkgeyByZXR1cm4gdGhpcy50ZXh0TGVmdDsgfVxyXG5cclxuICBpbnB1dElkID0gR3VpZC51bmlxdWVpZCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgb25JbnB1dENsaWNrKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25Ub3VjaGVkID0gZm47IH1cclxuXHJcbn1cclxuIl19