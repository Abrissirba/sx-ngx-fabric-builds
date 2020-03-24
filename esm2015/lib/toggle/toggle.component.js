import { Component, Input, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Guid } from '../utils/guid';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ToggleComponent {
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
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        if (checked !== this.checked) {
            this._checked = checked;
            this.changeDetectorRef.markForCheck();
        }
    }
    get classIsDisabled() { return this.disabled; }
    get classTextLeft() { return this.textLeft; }
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
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ToggleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToggleComponent, selectors: [["sx-ngx-fabric-toggle"]], hostAttrs: [1, "ms-Toggle"], hostVars: 4, hostBindings: function ToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("is-disabled", ctx.classIsDisabled)("ms-Toggle--textLeft", ctx.classTextLeft);
    } }, inputs: { checked: "checked", disabled: "disabled", offText: "offText", onText: "onText", textLeft: "textLeft" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ToggleComponent),
                multi: true
            }])], ngContentSelectors: _c0, decls: 8, vars: 8, consts: [[1, "ms-Toggle-description"], ["type", "checkbox", 1, "ms-Toggle-input", 3, "checked", "disabled", "click"], [1, "ms-Toggle-field"], [1, "ms-Label", "ms-Label--off"], [1, "ms-Label", "ms-Label--on"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "input", 1);
        i0.ɵɵlistener("click", function ToggleComponent_Template_input_click_2_listener($event) { return ctx.onInputClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label", 2);
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span", 4);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        i0.ɵɵattribute("id", ctx.inputId);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-selected", ctx.checked);
        i0.ɵɵattribute("for", ctx.inputId);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.offText);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.onText);
    } }, styles: [".ms-Toggle[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;position:relative;display:block}.ms-Toggle-description[_ngcontent-%COMP%]{color:#333;box-sizing:border-box;box-shadow:none;display:block;word-wrap:break-word;overflow-wrap:break-word;margin:0;padding:5px 0}.ms-Toggle-input[_ngcontent-%COMP%]{display:none}.ms-Toggle-field[_ngcontent-%COMP%]{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:1px solid #a6a6a6;border-radius:20px;cursor:pointer;-webkit-transition:.1s;transition:.1s;outline:0}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{position:absolute;top:4px;width:10px;height:10px;border-radius:10px;content:'';left:4px;background-color:#333;outline:transparent solid 1px;-webkit-transition:.1s;transition:.1s}.ms-Toggle[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{position:relative;padding:0 0 0 50px}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#0078d4;border-color:#0078d4}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:focus, .ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:hover{background-color:#106ebe;border-color:#106ebe}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:before{background-color:#fff;left:28px}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#c8c8c8}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{background-color:#fff}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#a6a6a6}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{margin-right:24px}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-description[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToggleComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-toggle',
                templateUrl: './toggle.component.html',
                styleUrls: ['./toggle.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ToggleComponent),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'ms-Toggle'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], offText: [{
            type: Input
        }], onText: [{
            type: Input
        }], textLeft: [{
            type: Input
        }], classIsDisabled: [{
            type: HostBinding,
            args: ['class.is-disabled']
        }], classTextLeft: [{
            type: HostBinding,
            args: ['class.ms-Toggle--textLeft']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiLCJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWlCbkQsTUFBTSxPQUFPLGVBQWU7SUE0QjFCLFlBQ1UsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUEzQnRDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFZaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBTTFCLFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFzQmxCLGNBQVMsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFuQjNCLENBQUM7SUEzQkwsSUFBYSxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBVUQsSUFBc0MsZUFBZSxLQUFLLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakYsSUFBOEMsYUFBYSxLQUFLLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFRdkYsWUFBWSxDQUFDLEdBQWU7UUFDMUIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFLTSxVQUFVLENBQUMsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsaUJBQWlCLENBQUMsRUFBYyxJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7OEVBeEQ3RCxlQUFlO29EQUFmLGVBQWU7OzRKQVhmLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQzs7UUNaSiwrQkFBb0M7UUFBQSxrQkFBWTtRQUFhLGlCQUFPO1FBQ3BFLGdDQUNBO1FBRCtELGlHQUFTLHdCQUFvQixJQUFDO1FBQTdGLGlCQUNBO1FBQUEsZ0NBQ0U7UUFBQSwrQkFBcUM7UUFBQSxZQUFhO1FBQUEsaUJBQU87UUFDekQsK0JBQW9DO1FBQUEsWUFBWTtRQUFBLGlCQUFPO1FBQ3pELGlCQUFROztRQUptQyxlQUFtQjtRQUFuQixxQ0FBbUIsMEJBQUE7UUFBdkMsaUNBQW1CO1FBQ1UsZUFBNkI7UUFBN0IsMENBQTZCO1FBQTFFLGtDQUFvQjtRQUNZLGVBQWE7UUFBYixpQ0FBYTtRQUNkLGVBQVk7UUFBWixnQ0FBWTs7a0REZXJDLGVBQWU7Y0FmM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDOUMsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQztnQkFDRixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxXQUFXO2lCQUNyQjthQUNGOztrQkFJRSxLQUFLOztrQkFXTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxXQUFXO21CQUFDLG1CQUFtQjs7a0JBRS9CLFdBQVc7bUJBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi91dGlscy9ndWlkJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N4LW5neC1mYWJyaWMtdG9nZ2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRvZ2dsZUNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtcy1Ub2dnbGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGdldCBjaGVja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgY2hlY2tlZChjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoY2hlY2tlZCAhPT0gdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgb2ZmVGV4dCA9ICdPZmYnO1xyXG5cclxuICBASW5wdXQoKSBvblRleHQgPSAnT24nO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0TGVmdCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWRpc2FibGVkJykgZ2V0IGNsYXNzSXNEaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1Ub2dnbGUtLXRleHRMZWZ0JykgZ2V0IGNsYXNzVGV4dExlZnQoKSB7IHJldHVybiB0aGlzLnRleHRMZWZ0OyB9XHJcblxyXG4gIGlucHV0SWQgPSBHdWlkLnVuaXF1ZWlkKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBvbklucHV0Q2xpY2soZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vblRvdWNoZWQgPSBmbjsgfVxyXG5cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cIm1zLVRvZ2dsZS1kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XHJcbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIChjbGljayk9XCJvbklucHV0Q2xpY2soJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIGNsYXNzPVwibXMtVG9nZ2xlLWlucHV0XCIgLz5cclxuPGxhYmVsIFthdHRyLmZvcl09XCJpbnB1dElkXCIgY2xhc3M9XCJtcy1Ub2dnbGUtZmllbGRcIiBbY2xhc3MuaXMtc2VsZWN0ZWRdPVwiY2hlY2tlZFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwibXMtTGFiZWwgbXMtTGFiZWwtLW9mZlwiPnt7IG9mZlRleHQgfX08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcy1MYWJlbCBtcy1MYWJlbC0tb25cIj57eyBvblRleHQgfX08L3NwYW4+XHJcbjwvbGFiZWw+Il19