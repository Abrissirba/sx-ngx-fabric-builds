import { Component, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { Guid } from '../utils/guid';
import { ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class CheckboxComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.inputId = Guid.uniqueid();
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        if (checked !== this.checked) {
            this._checked = checked;
            this.changeDetectorRef.markForCheck();
        }
    }
    onInputClick(evt) {
        evt.stopPropagation();
        this.toggle();
    }
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    // ControlValueAccessor implementation
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }
    writeValue(val) {
        this.checked = val;
    }
    registerOnChange(fn) { this._onChange = fn; }
    registerOnTouched(fn) { this._onTouched = fn; }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["sx-ngx-fabric-checkbox"]], inputs: { checked: "checked", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxComponent),
                multi: true
            }])], ngContentSelectors: _c0, decls: 4, vars: 8, consts: [["type", "checkbox", 3, "checked", "disabled", "click"], ["role", "checkbox"], [1, "ms-label"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("click", function CheckboxComponent_Template_input_click_0_listener($event) { return ctx.onInputClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        i0.ɵɵattribute("id", ctx.inputId);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-checked", ctx.checked)("disabled", ctx.disabled);
        i0.ɵɵattribute("for", ctx.inputId);
    } }, styles: ["[_nghost-%COMP%]{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}input[_ngcontent-%COMP%]{position:absolute;opacity:0}label[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}label[_ngcontent-%COMP%]:hover{color:#000}label[_ngcontent-%COMP%]:before{content:'';display:inline-block;border:1px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}label[_ngcontent-%COMP%]:hover:before{border:1px solid #333}label.disabled[_ngcontent-%COMP%]{color:#c8c8c8}label.disabled[_ngcontent-%COMP%]:before, label.disabled[_ngcontent-%COMP%]:hover:before{border:1px solid #c8c8c8}label.is-checked[_ngcontent-%COMP%]:before{border:10px solid #0078d4;background-color:#0078d4}label.is-checked[_ngcontent-%COMP%]:hover:before{border:10px solid #106ebe;background-color:#106ebe}label.disabled.is-checked[_ngcontent-%COMP%]:before, label.disabled.is-checked[_ngcontent-%COMP%]:hover:before{border:10px solid #c8c8c8;background-color:#c8c8c8}label[_ngcontent-%COMP%]:after{content:'\\E73E';font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}label.is-checked[_ngcontent-%COMP%]:after{display:block}.ms-label[_ngcontent-%COMP%]{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBY3pFLE1BQU0sT0FBTyxpQkFBaUI7SUFrQjVCLFlBQ1UsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFqQnRDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFZaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQixZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBc0JsQixjQUFTLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixlQUFVLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBbkIzQixDQUFDO0lBakJMLElBQWEsT0FBTztRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLE9BQWdCO1FBQzFCLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQVVELFlBQVksQ0FBQyxHQUFlO1FBQzFCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBS00sVUFBVSxDQUFDLEdBQVE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQW9CLElBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLGlCQUFpQixDQUFDLEVBQWMsSUFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2tGQTlDN0QsaUJBQWlCO3NEQUFqQixpQkFBaUIsa0lBUmpCLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEQsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDOztRQ2JKLGdDQUNBO1FBRCtELG1HQUFTLHdCQUFvQixJQUFDO1FBQTdGLGlCQUNBO1FBQUEsZ0NBQ0U7UUFBQSwrQkFBdUI7UUFBQSxrQkFBWTtRQUFhLGlCQUFPO1FBQ3pELGlCQUFROztRQUhtQyxxQ0FBbUIsMEJBQUE7UUFBdkMsaUNBQW1CO1FBQ0UsZUFBNEI7UUFBNUIseUNBQTRCLDBCQUFBO1FBQWpELGtDQUFvQjs7a0REZ0I5QixpQkFBaUI7Y0FaN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2dCQUNGLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFJRSxLQUFLOztrQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vdXRpbHMvZ3VpZCc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQge1xyXG5cclxuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ2V0IGNoZWNrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBjaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChjaGVja2VkICE9PSB0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5fY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBpbnB1dElkID0gR3VpZC51bmlxdWVpZCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgb25JbnB1dENsaWNrKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25Ub3VjaGVkID0gZm47IH1cclxufVxyXG4iLCI8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoY2xpY2spPVwib25JbnB1dENsaWNrKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIi8+XHJcbjxsYWJlbCByb2xlPVwiY2hlY2tib3hcIiBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiIFtjbGFzcy5pcy1jaGVja2VkXT1cImNoZWNrZWRcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICA8c3BhbiBjbGFzcz1cIm1zLWxhYmVsXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuPC9sYWJlbD4iXX0=