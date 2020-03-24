import { Component, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { Guid } from '../utils/guid';
import { ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
var _c0 = ["*"];
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
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onInputClick = function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    CheckboxComponent.prototype.toggle = function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    // ControlValueAccessor implementation
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    CheckboxComponent.prototype.writeValue = function (val) {
        this.checked = val;
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    CheckboxComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["sx-ngx-fabric-checkbox"]], inputs: { checked: "checked", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return CheckboxComponent; }),
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
    return CheckboxComponent;
}());
export { CheckboxComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CheckboxComponent; }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXpFO0lBOEJFLDJCQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBakJ0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBWWhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQXNCbEIsY0FBUyxHQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQztRQUM1QixlQUFVLEdBQUcsY0FBUSxDQUFDLENBQUM7SUFuQjNCLENBQUM7SUFqQkwsc0JBQWEsc0NBQU87YUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVksT0FBZ0I7WUFDMUIsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QztRQUNILENBQUM7OztPQVBBO0lBaUJELHdDQUFZLEdBQVosVUFBYSxHQUFlO1FBQzFCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLDRDQUFnQixHQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUtNLHNDQUFVLEdBQWpCLFVBQWtCLEdBQVE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVNLDRDQUFnQixHQUF2QixVQUF3QixFQUFvQixJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSw2Q0FBaUIsR0FBeEIsVUFBeUIsRUFBYyxJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztzRkE5QzdELGlCQUFpQjswREFBakIsaUJBQWlCLGtJQVJqQixDQUFDO29CQUNWLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO29CQUNoRCxLQUFLLEVBQUUsSUFBSTtpQkFDWixDQUFDOztZQ2JKLGdDQUNBO1lBRCtELG1HQUFTLHdCQUFvQixJQUFDO1lBQTdGLGlCQUNBO1lBQUEsZ0NBQ0U7WUFBQSwrQkFBdUI7WUFBQSxrQkFBWTtZQUFhLGlCQUFPO1lBQ3pELGlCQUFROztZQUhtQyxxQ0FBbUIsMEJBQUE7WUFBdkMsaUNBQW1CO1lBQ0UsZUFBNEI7WUFBNUIseUNBQTRCLDBCQUFBO1lBQWpELGtDQUFvQjs7NEJERDNDO0NBZ0VDLEFBM0RELElBMkRDO1NBL0NZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBWjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7Z0JBQ0YsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUlFLEtBQUs7O2tCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi91dGlscy9ndWlkJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeC1uZ3gtZmFicmljLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBnZXQgY2hlY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGNoZWNrZWQgIT09IHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIGlucHV0SWQgPSBHdWlkLnVuaXF1ZWlkKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBvbklucHV0Q2xpY2soZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vblRvdWNoZWQgPSBmbjsgfVxyXG59XHJcbiIsIjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIChjbGljayk9XCJvbklucHV0Q2xpY2soJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiLz5cclxuPGxhYmVsIHJvbGU9XCJjaGVja2JveFwiIFthdHRyLmZvcl09XCJpbnB1dElkXCIgW2NsYXNzLmlzLWNoZWNrZWRdPVwiY2hlY2tlZFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwibXMtbGFiZWxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG48L2xhYmVsPiJdfQ==