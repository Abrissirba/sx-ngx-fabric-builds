import { Component, HostBinding, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TextFieldComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 2);
    i0.ɵɵlistener("blur", function TextFieldComponent_input_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r25); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onTouched($event); })("change", function TextFieldComponent_input_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r25); var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onChange($event); })("keyup", function TextFieldComponent_input_2_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r25); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r22.value)("disabled", ctx_r22.disabled);
    i0.ɵɵattribute("type", ctx_r22.type)("placeholder", ctx_r22.placeholder);
} }
function TextFieldComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 2);
    i0.ɵɵlistener("blur", function TextFieldComponent_textarea_3_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onTouched($event); })("change", function TextFieldComponent_textarea_3_Template_textarea_change_0_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.onChange($event); })("keyup", function TextFieldComponent_textarea_3_Template_textarea_keyup_0_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.onChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r23.value)("disabled", ctx_r23.disabled);
    i0.ɵɵattribute("type", ctx_r23.type)("placeholder", ctx_r23.placeholder)("rows", ctx_r23.rows);
} }
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
        get: function () { return this.multiline; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldComponent.prototype, "classIsDisabled", {
        get: function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    TextFieldComponent.prototype.onChange = function (evt) {
        evt.stopPropagation();
        this.value = evt.target.value;
        this._onChange(this.value);
    };
    TextFieldComponent.prototype.onTouched = function (evt) {
        this._onTouched();
    };
    // ControlValueAccessor implementation
    TextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    TextFieldComponent.prototype.writeValue = function (val) {
        this.value = val;
        this.changeDetectorRef.markForCheck();
    };
    TextFieldComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    TextFieldComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    TextFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldComponent, selectors: [["sx-ngx-fabric-text-field"]], hostVars: 6, hostBindings: function TextFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.classes);
            i0.ɵɵclassProp("ms-TextField--multiline", ctx.classMultiline)("is-disabled", ctx.classIsDisabled);
        } }, inputs: { label: "label", multiline: "multiline", rows: "rows", type: "type", placeholder: "placeholder", disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TextFieldComponent; }),
                    multi: true
                }])], decls: 4, vars: 5, consts: [[1, "ms-Label"], ["class", "ms-TextField-field", 3, "value", "disabled", "blur", "change", "keyup", 4, "ngIf"], [1, "ms-TextField-field", 3, "value", "disabled", "blur", "change", "keyup"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, TextFieldComponent_input_2_Template, 1, 4, "input", 1);
            i0.ɵɵtemplate(3, TextFieldComponent_textarea_3_Template, 1, 5, "textarea", 1);
        } if (rf & 2) {
            i0.ɵɵclassProp("is-required", ctx.required);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.multiline);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.multiline);
        } }, directives: [i1.NgIf], styles: [".ms-TextField[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;width:100%}.ms-Label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.ms-TextField-field[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:6px 12px 7px;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}.ms-TextField.ms-TextField--multiline[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{color:#333;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}.ms-TextField.is-disabled[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field[_ngcontent-%COMP%]:hover{border-color:#333}.ms-TextField-field[_ngcontent-%COMP%]:active, .ms-TextField-field[_ngcontent-%COMP%]:focus{border-color:#0078d4}.ms-TextField.ng-invalid.ng-touched[_nghost-%COMP%]   .ms-TextField-field[_ngcontent-%COMP%]{border-color:#a80000}"], changeDetection: 0 });
    return TextFieldComponent;
}());
export { TextFieldComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-text-field',
                templateUrl: './text-field.component.html',
                styleUrls: ['./text-field.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TextFieldComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { label: [{
            type: Input
        }], multiline: [{
            type: Input
        }], rows: [{
            type: Input
        }], type: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], classes: [{
            type: HostBinding,
            args: ['class']
        }], classMultiline: [{
            type: HostBinding,
            args: ['class.ms-TextField--multiline']
        }], classIsDisabled: [{
            type: HostBinding,
            args: ['class.is-disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiLCJsaWIvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0lDQWhFLGdDQVdBO0lBTEUsaU1BQTBCLHVMQUFBLHFMQUFBO0lBTjVCLGlCQVdBOzs7SUFQRSxxQ0FBZSw4QkFBQTtJQUZmLG9DQUFrQixvQ0FBQTs7OztJQVNwQixtQ0FVWTtJQUhaLHVNQUEwQiw2TEFBQSwyTEFBQTtJQUd6QixpQkFBVzs7O0lBTloscUNBQWUsOEJBQUE7SUFGZixvQ0FBa0Isb0NBQUEsc0JBQUE7O0FEWGxCO0lBc0NFLDRCQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBdkJyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFFVCxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBSWQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFFUyxZQUFPLEdBQUcsY0FBYyxDQUFDO1FBNEJ2QyxjQUFTLEdBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxjQUFRLENBQUMsQ0FBQztJQW5CM0IsQ0FBQztJQVJMLHNCQUFrRCw4Q0FBYzthQUFoRSxjQUFxRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUU3RixzQkFBc0MsK0NBQWU7YUFBckQsY0FBMEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFRakYscUNBQVEsR0FBUixVQUFTLEdBQUc7UUFDVixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEdBQUc7UUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFzQztJQUN0Qyw2Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFLTSx1Q0FBVSxHQUFqQixVQUFrQixHQUFRO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sNkNBQWdCLEdBQXZCLFVBQXdCLEVBQW9CLElBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLDhDQUFpQixHQUF4QixVQUF5QixFQUFjLElBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dGQXZEN0Qsa0JBQWtCOzJEQUFsQixrQkFBa0I7OztzTUFSbEIsQ0FBQztvQkFDVixPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQztvQkFDakQsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQztZQ1hKLGdDQUF1RDtZQUFBLFlBQVM7WUFBQSxpQkFBUTtZQUN4RSx1RUFXQTtZQUFBLDZFQVVDOztZQXRCdUIsMkNBQThCO1lBQUMsZUFBUztZQUFULCtCQUFTO1lBRTlELGVBQWtCO1lBQWxCLHFDQUFrQjtZQVdwQixlQUFpQjtZQUFqQixvQ0FBaUI7OzZCRGJqQjtDQXdFQyxBQXJFRCxJQXFFQztTQXpEWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQVo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO3dCQUNqRCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2dCQUNGLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFHRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxXQUFXO21CQUFDLE9BQU87O2tCQUVuQixXQUFXO21CQUFDLCtCQUErQjs7a0JBRTNDLFdBQVc7bUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtdGV4dC1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRGaWVsZENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBsYWJlbDtcclxuXHJcbiAgQElucHV0KCkgbXVsdGlsaW5lID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHJvd3MgPSAzO1xyXG5cclxuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFsdWUgPSBudWxsO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3NlcyA9ICdtcy1UZXh0RmllbGQnO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1zLVRleHRGaWVsZC0tbXVsdGlsaW5lJykgZ2V0IGNsYXNzTXVsdGlsaW5lKCkgeyByZXR1cm4gdGhpcy5tdWx0aWxpbmU7IH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1kaXNhYmxlZCcpIGdldCBjbGFzc0lzRGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9XHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2dCkge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy52YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hlZChldnQpIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vblRvdWNoZWQgPSBmbjsgfVxyXG5cclxufVxyXG4iLCI8bGFiZWwgY2xhc3M9XCJtcy1MYWJlbFwiIFtjbGFzcy5pcy1yZXF1aXJlZF09XCJyZXF1aXJlZFwiPnt7bGFiZWx9fTwvbGFiZWw+XHJcbjxpbnB1dCBjbGFzcz1cIm1zLVRleHRGaWVsZC1maWVsZFwiXHJcbiAgKm5nSWY9XCIhbXVsdGlsaW5lXCJcclxuICBbYXR0ci50eXBlXT1cInR5cGVcIiBcclxuICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiIFxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFxyXG4gIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcclxuICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBcclxuICAoa2V5dXApPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbi8+XHJcblxyXG48dGV4dGFyZWEgY2xhc3M9XCJtcy1UZXh0RmllbGQtZmllbGRcIlxyXG4qbmdJZj1cIm11bHRpbGluZVwiXHJcblthdHRyLnR5cGVdPVwidHlwZVwiIFxyXG5bYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFxyXG5bdmFsdWVdPVwidmFsdWVcIiBcclxuW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuW2F0dHIucm93c109XCJyb3dzXCJcclxuKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxyXG4oY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBcclxuKGtleXVwKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4+PC90ZXh0YXJlYT4iXX0=