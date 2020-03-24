import { Component, HostBinding, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TextFieldComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 2);
    i0.ɵɵlistener("blur", function TextFieldComponent_input_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onTouched($event); })("change", function TextFieldComponent_input_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onChange($event); })("keyup", function TextFieldComponent_input_2_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r4.value)("disabled", ctx_r4.disabled);
    i0.ɵɵattribute("type", ctx_r4.type)("placeholder", ctx_r4.placeholder);
} }
function TextFieldComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 2);
    i0.ɵɵlistener("blur", function TextFieldComponent_textarea_3_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onTouched($event); })("change", function TextFieldComponent_textarea_3_Template_textarea_change_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onChange($event); })("keyup", function TextFieldComponent_textarea_3_Template_textarea_keyup_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r5.value)("disabled", ctx_r5.disabled);
    i0.ɵɵattribute("type", ctx_r5.type)("placeholder", ctx_r5.placeholder)("rows", ctx_r5.rows);
} }
export class TextFieldComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.multiline = false;
        this.rows = 3;
        this.type = 'text';
        this.disabled = false;
        this.required = false;
        this.value = null;
        this.classes = 'ms-TextField';
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    get classMultiline() { return this.multiline; }
    get classIsDisabled() { return this.disabled; }
    onChange(evt) {
        evt.stopPropagation();
        this.value = evt.target.value;
        this._onChange(this.value);
    }
    onTouched(evt) {
        this._onTouched();
    }
    // ControlValueAccessor implementation
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }
    writeValue(val) {
        this.value = val;
        this.changeDetectorRef.markForCheck();
    }
    registerOnChange(fn) { this._onChange = fn; }
    registerOnTouched(fn) { this._onTouched = fn; }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TextFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldComponent, selectors: [["sx-ngx-fabric-text-field"]], hostVars: 6, hostBindings: function TextFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.classes);
        i0.ɵɵclassProp("ms-TextField--multiline", ctx.classMultiline)("is-disabled", ctx.classIsDisabled);
    } }, inputs: { label: "label", multiline: "multiline", rows: "rows", type: "type", placeholder: "placeholder", disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextFieldComponent),
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-text-field',
                templateUrl: './text-field.component.html',
                styleUrls: ['./text-field.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextFieldComponent),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiLCJsaWIvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0lDQWhFLGdDQVdBO0lBTEUsZ01BQTBCLHNMQUFBLG9MQUFBO0lBTjVCLGlCQVdBOzs7SUFQRSxvQ0FBZSw2QkFBQTtJQUZmLG1DQUFrQixtQ0FBQTs7OztJQVNwQixtQ0FVWTtJQUhaLHlNQUEwQiwrTEFBQSw2TEFBQTtJQUd6QixpQkFBVzs7O0lBTlosb0NBQWUsNkJBQUE7SUFGZixtQ0FBa0IsbUNBQUEscUJBQUE7O0FEQ2xCLE1BQU0sT0FBTyxrQkFBa0I7SUEwQjdCLFlBQ1UsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF2QnJDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBRyxNQUFNLENBQUM7UUFJZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUVTLFlBQU8sR0FBRyxjQUFjLENBQUM7UUE0QnZDLGNBQVMsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFuQjNCLENBQUM7SUFSTCxJQUFrRCxjQUFjLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUU3RixJQUFzQyxlQUFlLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQVFqRixRQUFRLENBQUMsR0FBRztRQUNWLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBRztRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBS00sVUFBVSxDQUFDLEdBQVE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxFQUFvQixJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxpQkFBaUIsQ0FBQyxFQUFjLElBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztvRkF2RDdELGtCQUFrQjt1REFBbEIsa0JBQWtCOzs7a01BUmxCLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDakQsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO1FDWEosZ0NBQXVEO1FBQUEsWUFBUztRQUFBLGlCQUFRO1FBQ3hFLHVFQVdBO1FBQUEsNkVBVUM7O1FBdEJ1QiwyQ0FBOEI7UUFBQyxlQUFTO1FBQVQsK0JBQVM7UUFFOUQsZUFBa0I7UUFBbEIscUNBQWtCO1FBV3BCLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0RERUosa0JBQWtCO2NBWjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDMUMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQztnQkFDRixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBR0UsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBSUwsV0FBVzttQkFBQyxPQUFPOztrQkFFbkIsV0FBVzttQkFBQywrQkFBK0I7O2tCQUUzQyxXQUFXO21CQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZywgSW5wdXQsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeC1uZ3gtZmFicmljLXRleHQtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZXh0RmllbGRDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgbGFiZWw7XHJcblxyXG4gIEBJbnB1dCgpIG11bHRpbGluZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSByb3dzID0gMztcclxuXHJcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gIHZhbHVlID0gbnVsbDtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzZXMgPSAnbXMtVGV4dEZpZWxkJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1UZXh0RmllbGQtLW11bHRpbGluZScpIGdldCBjbGFzc011bHRpbGluZSgpIHsgcmV0dXJuIHRoaXMubXVsdGlsaW5lOyB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtZGlzYWJsZWQnKSBnZXQgY2xhc3NJc0Rpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBvbkNoYW5nZShldnQpIHtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMudmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoZWQoZXZ0KSB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuICBwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25Ub3VjaGVkID0gZm47IH1cclxuXHJcbn1cclxuIiwiPGxhYmVsIGNsYXNzPVwibXMtTGFiZWxcIiBbY2xhc3MuaXMtcmVxdWlyZWRdPVwicmVxdWlyZWRcIj57e2xhYmVsfX08L2xhYmVsPlxyXG48aW5wdXQgY2xhc3M9XCJtcy1UZXh0RmllbGQtZmllbGRcIlxyXG4gICpuZ0lmPVwiIW11bHRpbGluZVwiXHJcbiAgW2F0dHIudHlwZV09XCJ0eXBlXCIgXHJcbiAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcclxuICBbdmFsdWVdPVwidmFsdWVcIiBcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBcclxuICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXHJcbiAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgXHJcbiAgKGtleXVwKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4vPlxyXG5cclxuPHRleHRhcmVhIGNsYXNzPVwibXMtVGV4dEZpZWxkLWZpZWxkXCJcclxuKm5nSWY9XCJtdWx0aWxpbmVcIlxyXG5bYXR0ci50eXBlXT1cInR5cGVcIiBcclxuW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcclxuW3ZhbHVlXT1cInZhbHVlXCIgXHJcbltkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcblthdHRyLnJvd3NdPVwicm93c1wiXHJcbihibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcclxuKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgXHJcbihrZXl1cCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuPjwvdGV4dGFyZWE+Il19